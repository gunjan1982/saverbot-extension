// Service Worker for SaverBot Extension

chrome.runtime.onInstalled.addListener(() => {
    console.log('SaverBot extension installed');
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTabInfo') {
        sendResponse({
            url: sender.url,
            title: sender.tab.title
        });
    }
});

// Context menu for saving content
chrome.contextMenus.create({
    id: 'save-to-saverbot',
    title: 'Save to SaverBot',
    contexts: ['page', 'link', 'image']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'save-to-saverbot') {
        chrome.action.openPopup();
    }
});

// Icon click handler - opens popup
chrome.action.onClicked.addListener((tab) => {
    chrome.action.openPopup();
});

console.log('SaverBot background script loaded');
