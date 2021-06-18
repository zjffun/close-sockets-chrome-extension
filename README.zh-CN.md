# close-sockets-chrome-extension

[English](./README.md) | 简体中文

Close idle sockets &amp; Flush socket pools

## 安装

**注意**: 此扩展程序需要在 [chrome://net-internals/#sockets](chrome://net-internals/#sockets) 中运行脚本。 **请确保按照步骤 5、6 启用了 `Extensions on chrome:// URLs`** 以确保此扩展程序正常使用。

1. `git clone https://github.com/zjffun/close-sockets-chrome-extension.git`；
2. 打开链接 [chrome://extensions/](chrome://extensions/)；
3. 点击 `Load unpacked`；
4. 选择 `your-git-clone-path/close-sockets-chrome-extension`；
5. 打开链接 [chrome://flags/#extensions-on-chrome-urls](chrome://flags/#extensions-on-chrome-urls)；
6. 选择 `enabled`。

## 使用

点击此扩展程序的图标 <img src="./images/icon128.png" height="30"> ，然后此扩展程序可以帮助您

1. 打开链接 [chrome://net-internals/#sockets](chrome://net-internals/#sockets)；
2. 点击 `Close idle sockets` 按钮；
3. 点击 `Flush socket pools` 按钮；
4. 关闭第一步打开的标签页。
