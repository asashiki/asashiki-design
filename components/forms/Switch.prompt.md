开关。带 label 时左文右开关占满整行（适合设置项）。

```jsx
<Switch label="夜间免打扰" checked={on} onChange={e=>setOn(e.target.checked)} />
```