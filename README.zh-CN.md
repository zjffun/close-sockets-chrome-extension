# close-sockets-chrome-extension

[English](./README.md) | 简体中文

仅通过一次点击关闭全部 socket。

[![](./images/video-zh-CN.webp)](https://player.bilibili.com/player.html?aid=853877448&bvid=BV1m54y1f7JB&cid=715265361&page=1)

## 安装

**注意**: 此扩展程序需要在 `chrome://net-internals/#sockets` 中运行脚本。 **请确保按照步骤 3、4 启用了 `Extensions on chrome:// URLs`** 以确保此扩展程序正常使用。

1. 打开链接 [Close Sockets - Chrome Web Store](https://chrome.google.com/webstore/detail/close-sockets/jmdakhnnimjejdbaahglbcpnlidckjff)；
2. 点击 `添加至 Chrome`；
3. 打开链接 `chrome://flags/#extensions-on-chrome-urls`；
4. 选择 `Enabled`。

## 使用

点击此扩展程序的图标 <img src="./images/icon128.png" height="30"> ，然后此扩展程序可以帮助您

1. 打开链接 `chrome://net-internals/#sockets`；
2. 点击 `Close idle sockets` （关闭空闲套接字）按钮；
3. 点击 `Flush socket pools` （刷新套接字池）按钮；
4. 关闭第一步打开的标签页。
