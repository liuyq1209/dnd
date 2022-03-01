//setting统一配置文件,所有的组件暂时使用这一套
export const panels = [
  {
    title: "组件别名",
    content: [
      {
        type: "input",
        field: "name",
        title: "组件别名",
        props: {
          placeholder: "请设置组件的锚点名称",
        },
      },
    ],
  },
  {
    title: "文案",
    content: [
      {
        type: "input",
        field: "text",
        title: "文案",
        props: {
          placeholder: "编辑选中按钮文字",
        },
      },
    ],
  },
  {
    title: "字体设置",
    content: [
      {
        type: "input-number",
        label: "字体大小",
        field: "font-size",
        defaultValue: "12",
      },
    ],
  },
  {
    title: "圆角设置",
    content: [
      {
        type: "input-number",
        label: "圆角",
        field: "border-radius",
        defaultValue: "4",
      },
    ],
  },
  {
    title: "阴影设置",
    content: [
      {
        type: "input-number",
        label: "X坐标",
        field: "shadow-x",
      },
      {
        type: "input-number",
        label: "Y坐标",
        field: "shadow-y",
      },
      {
        type: "input-number",
        label: "模糊",
        field: "shadow-blur",
      },
      {
        type: "input-number",
        label: "扩展",
        field: "shadow-spread",
      },
    ],
  },
  {
    title: "大小设置",
    content: [
      {
        type: "input-number",
        label: "宽",
        field: "width",
      },
      {
        type: "input-number",
        label: "高",
        field: "height",
      },
    ],
  },
  {
    title: "外边距设置",
    content: [
      {
        type: "input-number",
        label: "上",
        field: "margin-top",
      },
      {
        type: "input-number",
        label: "下",
        field: "margin-bottom",
      },
      {
        type: "input-number",
        label: "左",
        field: "margin-left",
      },
      {
        type: "input-number",
        label: "右",
        field: "margin-right",
      },
    ],
  },
  {
    title: "内边距设置",
    content: [
      {
        type: "input-number",
        label: "上",
        field: "padding-top",
      },
      {
        type: "input-number",
        label: "下",
        field: "padding-bottom",
      },
      {
        type: "input-number",
        label: "左",
        field: "padding-left",
      },
      {
        type: "input-number",
        label: "右",
        field: "padding-right",
      },
    ],
  },
]
