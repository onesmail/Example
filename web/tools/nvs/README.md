# NVS 是一个跨平台的 Node.js 的版本切换工具，并且 NVS 本身是用Node.js编写的

* Windows安装

```sh
scoop install nvs
```

* 下载最新版本的 Node.js

```sh
nvs add latest
```

* 下载 lts 版本的 Node.js

```sh
nvs add lts
```

* 选择 Node.js 的版本

```sh
nvs use lts
PATH += ~/.nvs/node/6.9.1/x64
```

* 添加默认的 Node.js 版本

```sh
nvs link lts
```

Home [https://github.com/jasongin/nvs](https://github.com/jasongin/nvs)

See [https://juejin.cn/post/6961679951925870623](https://juejin.cn/post/6961679951925870623)
