# SaverBot Browser Extension

Save articles, PDFs, and videos to Notion with AI-powered summaries. Works on Chrome and Comet Browser.

## Features

- **One-Click Saving**: Save any article, PDF, or video with a single click
- **AI Summaries**: Automatic Claude AI summaries for saved content
- **Smart Categorization**: Content is automatically categorized and saved to the right Notion database
- **Cross-Browser Support**: Works on both Chrome and Comet Browser
- **Notion Integration**: Direct integration with your Notion workspace

## Installation

### Prerequisites

Before installing the extension, ensure you have:
- Chrome or Comet Browser installed
- Your Notion API Key configured
- Backend URL: `https://saverbot-backend.vercel.app`

### For Chrome

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the `saverbot-extension` folder
6. The extension icon will appear in your toolbar

### For Comet Browser

1. Clone or download this repository
2. Open Comet Browser and navigate to `comet://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the `saverbot-extension` folder
6. The extension icon will appear in your toolbar

## Configuration

### Initial Setup

1. Click the SaverBot extension icon in your browser toolbar
2. The extension will use the pre-configured backend at `https://saverbot-backend.vercel.app`
3. Your Notion databases are automatically configured

## Usage

### Saving Content

1. When viewing an article, PDF, or video, click the SaverBot extension icon
2. A popup will appear showing the content details
3. Click **Save to Notion** to save the content
4. The content will be automatically summarized and saved to your Notion workspace

### Supported Content Types

- **Articles**: Web pages and blog posts
- **PDFs**: Direct PDF files
- **Videos**: YouTube and other video platforms

## Architecture

### Backend

The extension communicates with a Node.js backend deployed on Vercel:
- **Repository**: https://github.com/gunjan1982/saverbot-backend
- **Endpoint**: `https://saverbot-backend.vercel.app/api/save`
- **Features**: Content processing, AI summarization, Notion integration

### Frontend (Extension)

- **manifest.json**: Extension configuration (MV3)
- **popup.html/js**: UI for saving content
- **background.js**: Service worker for handling requests
- **content.js**: Content extraction from web pages

## Project Links

- **Extension Repository**: https://github.com/gunjan1982/saverbot-extension
- **Backend Repository**: https://github.com/gunjan1982/saverbot-backend
- **Backend API**: https://saverbot-backend.vercel.app

## License

MIT License
