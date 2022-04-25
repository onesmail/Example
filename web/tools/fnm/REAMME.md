# 快速简单的 Node.js 版本管理器，内置于 Rust

- Windows安装

```sh
scoop install fnm
```

- 查看fnm版本

```sh
fnm --version
```

- 打印当前node.js版本

```sh
fnm current
```

- 展示当前本地所以已经安装的node.js版本

```sh
fnm list
```

- 安装一个新的node.js版本

```sh
fnm install 12
```

- 删除一个node.js版本

```sh
fnm uninstall 12
```

- 切换node.js版本

```sh
fnm use 12
```

- 将12设置成node.js的默认版本

```sh
fnm default 12
```

- 打印并且设置fnm需要的环境变量

```sh
fnm env
```

- fnm current
See [https://github.com/Schniz/fnm](https://github.com/Schniz/fnm)
