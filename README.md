# close-sockets-chrome-extension

Close idle sockets &amp; Flush socket pools

## Install

**Note**: This plugin needs to execute script in [chrome://net-internals/#sockets](chrome://net-internals/#sockets). **Please make sure `Extensions on chrome:// URLs` enabled as step 5 to 6** to make this extension work.

1. `git clone https://github.com/zjffun/close-sockets-chrome-extension.git`;
2. Open [chrome://extensions/](chrome://extensions/);
3. Click `Load unpacked`;
4. Select `your-git-clone-path/close-sockets-chrome-extension`;
5. Open [chrome://flags/#extensions-on-chrome-urls](chrome://flags/#extensions-on-chrome-urls);
6. Select `enabled`.

## Usage

Click the extension icon <img src="./images/icon128.png" style="height: 1.5em"> , then this extension can help you:

1. Open [chrome://net-internals/#sockets](chrome://net-internals/#sockets);
2. Click `Close idle sockets` button;
3. Click `Flush socket pools` button;
4. Close tab opened in step 1.
