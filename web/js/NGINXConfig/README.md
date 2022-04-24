# 部署

- 拉取代码
  
``` bash
git clone https://github.com/digitalocean/nginxconfig.io.git
```

- 安装依赖

``` bash
npm ci
```

- 运行

``` bash
npm run dev
```

- 打包
  
``` bash
npm run build
```

## 如果出现如下错误，需要取消ssl验证

> npm ERR! request to <https://codeload.github.com/do-community/do-vue/tar.gz/266dd0b57e5cf869da7fc8f221c8dff69d15d112> failed, reason: unable to verify the first certificate
