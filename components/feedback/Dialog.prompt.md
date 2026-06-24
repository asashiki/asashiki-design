模态弹层。open 控制显隐，点遮罩 / Esc 关闭。footer 放操作按钮。

```jsx
<Dialog open={open} onClose={close} title="删除？"
  footer={<><Button variant="ghost" onClick={close}>取消</Button><Button variant="danger">删除</Button></>}>
  此操作不可撤销。
</Dialog>
```