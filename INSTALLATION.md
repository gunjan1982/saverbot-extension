# SaverBot Extension - Installation Guide

This guide provides step-by-step instructions for installing the SaverBot extension on both Chrome and Comet Browser.

## Quick Links

- **Repository**: https://github.com/gunjan1982/saverbot-extension
- **Backend API**: https://saverbot-backend.vercel.app
- **Supported Browsers**: Chrome, Comet Browser

## Prerequisites

Before you begin:
1. Clone or download this repository
2. Ensure you have either Chrome or Comet Browser installed
3. Your browser should be up to date

## Installation Steps

### For Chrome Browser

1. **Download the Extension**
   - Clone the repository: `git clone https://github.com/gunjan1982/saverbot-extension.git`
   - Or download as ZIP and extract

2. **Open Chrome Extensions Page**
   - Open Chrome and navigate to `chrome://extensions/`
   - Or go to: Menu → More tools → Extensions

3. **Enable Developer Mode**
   - In the top-right corner, toggle the **Developer mode** switch ON

4. **Load the Extension**
   - Click **Load unpacked** button that appears
   - Navigate to and select the `saverbot-extension` folder
   - The extension will be installed and appear in your extensions list

5. **Pin the Extension** (Optional)
   - Click the extensions icon in the Chrome toolbar
   - Find "SaverBot"
   - Click the pin icon to keep it visible in your toolbar

### For Comet Browser

1. **Download the Extension**
   - Clone the repository: `git clone https://github.com/gunjan1982/saverbot-extension.git`
   - Or download as ZIP and extract

2. **Open Comet Extensions Page**
   - Open Comet Browser and navigate to `comet://extensions/`
   - Or go to: Menu → Extensions

3. **Enable Developer Mode**
   - In the top-right corner, toggle the **Developer mode** switch ON

4. **Load the Extension**
   - Click **Load unpacked** button
   - Navigate to and select the `saverbot-extension` folder
   - The extension will be installed and appear in your extensions list

5. **Pin the Extension** (Optional)
   - Click the extensions icon in the Comet toolbar
   - Find "SaverBot"
   - Click the pin icon to keep it visible in your toolbar

## Using the Extension

### Basic Usage

1. **Save Content**
   - Navigate to any article, PDF, or video page
   - Click the SaverBot extension icon in your toolbar
   - A popup will appear with the content details
   - Review or edit the information
   - Click "Save to Notion" to save

2. **View Saved Items**
   - Open your Notion workspace
   - Check the SaverBot database for your saved content
   - Each item includes the title, URL, AI summary, and content type

### Supported Content Types

- **Articles**: Blog posts, news articles, web pages
- **PDFs**: Direct PDF files and embedded PDFs
- **Videos**: YouTube, Vimeo, and other video platforms

## Troubleshooting

### Extension Won't Load

**Problem**: "Failed to load extension" error

**Solution**:
- Verify you selected the correct folder containing `manifest.json`
- Ensure you extracted all files if using ZIP
- Check that developer mode is enabled

### Saving Fails

**Problem**: "Error: Failed to save" message

**Solutions**:
1. Check your internet connection
2. Verify the backend is accessible: https://saverbot-backend.vercel.app
3. Ensure your Notion API key is configured correctly in the backend

### Content Not Appearing in Notion

**Problem**: Saved items don't appear in Notion database

**Solutions**:
1. Verify you're viewing the correct Notion database
2. Refresh your Notion page (F5)
3. Check the backend logs for API errors
4. Ensure your Notion workspace has proper permissions

### Extension Icon Not Showing

**Problem**: Can't find the SaverBot icon in toolbar

**Solutions**:
1. Pin the extension to your toolbar:
   - Click extension icon in toolbar
   - Find "SaverBot" in the list
   - Click the pin icon
2. Check if the extension is disabled:
   - Go to `chrome://extensions/` (or `comet://extensions/`)
   - Ensure SaverBot has a blue toggle (enabled)

## Configuration

### Backend URL

The extension is pre-configured to use:
```
https://saverbot-backend.vercel.app
```

To use a different backend:
1. Edit `src/popup/popup.js`
2. Change the `BACKEND_URL` constant
3. Reload the extension

### Notion Database

The extension saves to three Notion databases:
- **Articles**: Article content
- **Books**: PDF and document content  
- **Podcasts**: Video and audio content

These are configured on the backend. Contact your administrator to modify.

## Support

For issues or questions:
1. Check this troubleshooting guide
2. Review the README.md for feature details
3. Create an issue on GitHub: https://github.com/gunjan1982/saverbot-extension/issues

## Security

- The extension communicates only with your configured backend
- Content is processed through Claude AI for summarization
- All API keys are stored securely on the backend
- No data is stored locally in the extension

## Uninstalling

### Chrome

1. Go to `chrome://extensions/`
2. Find "SaverBot"
3. Click the trash/remove icon

### Comet

1. Go to `comet://extensions/`
2. Find "SaverBot"
3. Click the trash/remove icon

## Next Steps

1. Install the extension using the above steps
2. Test with a sample article or video
3. Check your Notion workspace for saved content
4. Customize as needed

Enjoy using SaverBot!
