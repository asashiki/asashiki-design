主操作按钮；一屏只用一个 primary。其余操作用 secondary / ghost / quiet / danger。

```jsx
<Button icon={<Refresh/>}>同步数据</Button>
<Button variant="ghost">取消</Button>
<Button variant="danger" size="sm">删除</Button>
```

variant: primary(默认樱粉实心) / secondary / ghost / quiet / danger。size: sm / md / lg。block 占满整行。icon / iconRight 传 Lucide 元素。