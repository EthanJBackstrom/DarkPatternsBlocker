# Dark Pattern Blocker Extension

A browser Extension that Highlights or Deletes/Skips/Removes dark patterns from websites. 

## Features

- Detects Confirm Shaming on websites.
- Highlights trick questions on websites. 

## Installation

### Firefox
1. Open Firefox and go to `about:debugging`
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from this directory

### Chrome/Chromium
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select this directory

## Usage

1. After installation, you'll see the extension icon in your browser toolbar
2. Click the icon to open the popup with controls
3. The extension automatically scans pages for dark patterns
4. Use the "Reset" button to remove highlighting
5. Use "Block Confirmshaming" to re-scan the current page

## How it works

The extension scans for common phrases or looks for browser elements that are common for dark patterns. When detected, these elements are highlighted with red borders and background. Some false postives might show or break pages if this occurs report it as an issue and disable for the page you are using. 

