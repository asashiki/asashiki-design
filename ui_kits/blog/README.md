# UI Kit · 博客 Blog

浅仪式博客（`asashiki.com`，Astro）的**长文阅读页**，编辑式衬线排版 —— 系统里「随笔 / 动画观后感」气质的样板。

**对应产品**：<https://github.com/asashiki/asashiki>（Astro 博客，"a quiet blog"）。

## 重点
- **衬线 prose**：正文走 `--d-prose`（Newsreader 19px/1.78），大标题 `--d-hero`，引用 `--d-quote` 斜体 —— 这是 v2「惊艳/文学」的集中体现。
- 墨白为底，樱粉只在分类徽章、`<code>`、引用左边线、进度条、−12° 季节标签。
- 封面用 `--glow-wash` 柔光 + logo 透明版，不放撞色渐变。
- 文末「本季追番进度」用 `Card glow` + `Progress`（单色实填）。

## 结构
单文件 `index.html`：`Nav` · 文章头（分类 `Badge` / 衬线标题 / 作者 `Avatar` / 阅读时长 / 季节 `Tag`）· `cover` · `.prose` 正文（h2 + 引用 + 代码块）· 文末标签 · 追番卡 · 上/下篇 · `Footer`。

## 用法
浏览器直接打开；右上角切换明暗。正文示例为原创随笔，可整段替换为真实文章。
