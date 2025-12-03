const BACKEND_URL = 'https://saverbot-backend.vercel.app';

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('form');
    const loading = document.getElementById('loading');
    const saveBtn = document.getElementById('save-btn');
    const titleInput = document.getElementById('title');
    const urlInput = document.getElementById('url');
    const typeSelect = document.getElementById('type');
    const summaryInput = document.getElementById('summary');
    
    // Get current tab information
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    
    urlInput.value = tab.url;
    titleInput.value = tab.title || 'Untitled';
    
    // Show loading state
    loading.style.display = 'block';
    form.style.display = 'none';
    
    try {
        // Extract content from the current page
        const content = await extractContent(tab);
        
        // Determine content type
        const type = determineContentType(tab.url, content);
        typeSelect.value = type;
        
        // Hide loading, show form
        loading.style.display = 'none';
        form.style.display = 'block';
        
    } catch (error) {
        console.error('Error loading content:', error);
        loading.style.display = 'none';
        showMessage('Error loading content', 'error');
    }
    
    // Save button click handler
    saveBtn.addEventListener('click', async () => {
        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';
        
        try {
            const payload = {
                title: titleInput.value,
                url: urlInput.value,
                type: typeSelect.value,
                content: summaryInput.value || 'Content from ' + titleInput.value
            };
            
            const response = await fetch(`${BACKEND_URL}/api/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            if (response.ok) {
                const result = await response.json();
                showMessage('Successfully saved to Notion!', 'success');
                saveBtn.textContent = 'Saved ✓';
                setTimeout(() => window.close(), 1500);
            } else {
                const error = await response.json();
                showMessage('Error: ' + (error.message || 'Failed to save'), 'error');
                saveBtn.disabled = false;
                saveBtn.textContent = 'Save to Notion';
            }
        } catch (error) {
            console.error('Save error:', error);
            showMessage('Error: ' + error.message, 'error');
            saveBtn.disabled = false;
            saveBtn.textContent = 'Save to Notion';
        }
    });
});

function determineContentType(url, content) {
    if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')) {
        return 'video';
    }
    if (url.endsWith('.pdf') || url.includes('/pdf')) {
        return 'pdf';
    }
    return 'article';
}

async function extractContent(tab) {
    return new Promise((resolve) => {
        chrome.tabs.sendMessage(tab.id, {action: 'getContent'}, (response) => {
            if (response && response.content) {
                resolve(response.content);
            } else {
                resolve('Content extraction not available');
            }
        });
    });
}

function showMessage(text, type = 'info') {
    const form = document.getElementById('form');
    const message = document.getElementById('message');
    const messageText = document.getElementById('message-text');
    
    messageText.textContent = text;
    message.className = 'message ' + type;
    message.style.display = 'block';
    form.style.display = 'none';
}
