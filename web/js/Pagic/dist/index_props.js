import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "安装",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装</h1>\n<p><strong>安装异常：配置文件不应该包含双引号</strong></p>\n<pre class="language-autoit"><code class="language-autoit">export <span class="token keyword">default</span> {}<span class="token comment">;</span>\n</code></pre>\n<h2 id="%E8%BF%90%E8%A1%8C%E5%91%BD%E4%BB%A4">运行命令<a class="anchor" href="#%E8%BF%90%E8%A1%8C%E5%91%BD%E4%BB%A4">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve <span class="token operator">-</span><span class="token operator">-</span>port <span class="token number">9090</span>\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B89\u88C5"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><strong>安装异常：配置文件不应该包含双引号</strong></p>\n<pre class="language-autoit"><code class="language-autoit">export <span class="token keyword">default</span> {}<span class="token comment">;</span>\n</code></pre>\n<h2 id="%E8%BF%90%E8%A1%8C%E5%91%BD%E4%BB%A4">运行命令<a class="anchor" href="#%E8%BF%90%E8%A1%8C%E5%91%BD%E4%BB%A4">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve <span class="token operator">-</span><span class="token operator">-</span>port <span class="token number">9090</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%BF%90%E8%A1%8C%E5%91%BD%E4%BB%A4" }, "\u8FD0\u884C\u547D\u4EE4")))),
    'author': undefined,
    'contributors': [],
    'date': "2022-04-24T02:20:49.791Z",
    'updated': null,
    'excerpt': "安装异常：配置文件不应该包含双引号 export default {}; 运行命令 pagic build --watch --serve --port 9090 ",
    'cover': undefined
};
