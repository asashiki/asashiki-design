文本输入框，可独立使用或带 label / hint / error / 前置图标。

```jsx
<Input label="记忆检索" icon={<Search/>} placeholder="输入关键词…" />
<Input label="邮箱" error="格式不正确" required />
```

有 error 时自动标红并显示在 hint 位。无 label/hint/error 时退化为裸 input。