// Content script for extracting page content

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getContent') {
        const content = extractPageContent();
        sendResponse({content: content});
    }
});

function extractPageContent() {
    // Try to extract main content from the page
    let content = '';
    
    // Try common content containers
    const selectors = [
        'article',
        'main',
        '[role="main"]',
        '.post-content',
        '.entry-content',
        '.content',
        '#content',
        'body'
    ];
    
    for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
            content = element.innerText;
            if (content && content.length > 100) {
                break;
            }
        }
    }
    
    // Fallback to page title and meta description
    if (!content || content.length < 100) {
        const title = document.title;
        const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
        content = `${title}. ${metaDescription}`;
    }
    
    return content.substring(0, 5000); // Limit to 5000 characters
}

console.log('SaverBot content script loaded');
