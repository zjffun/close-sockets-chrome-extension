# close-sockets-chrome-extension

English | [简体中文](./README.zh-CN.md)

Close idle sockets &amp; Flush socket pools

## Install

**Note**: This extension needs to execute script in `chrome://net-internals/#sockets`. **Please make sure `Extensions on chrome:// URLs` enabled as step 5 to 6** to make this extension work.

1. `git clone https://github.com/zjffun/close-sockets-chrome-extension.git`;
2. Open `chrome://extensions/`;
3. Click `Load unpacked`;
4. Select `your-git-clone-path/close-sockets-chrome-extension`;
5. Open `chrome://flags/#extensions-on-chrome-urls`;
6. Select `Enabled`.

## Usage

Click the extension icon <img src="./images/icon128.png" height="30"> , then this extension can help you:

1. Open `chrome://net-internals/#sockets`;
2. Click `Close idle sockets` button;
3. Click `Flush socket pools` button;
4. Close tab opened in step 1.
