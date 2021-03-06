import ButtonHand from "../../blocks/ButtonHand/ButtonHand"
import ButtonPrimary from "../../blocks/ButtonPrimary/ButtonPrimary"

const menu = [
  {
    label: "PC组件",
    id: "pc",
    subMenu: [
      {
        label: "单击",
        id: "pc-click",
      },
      {
        label: "双击",
        id: "pc-doubleClick",
      },
    ],
  },
  {
    label: "移动组件",
    id: "mobile",
    subMenu: [
      {
        label: "单击",
        id: "mobile-touch",
      },
      {
        label: "双击",
        id: "mobile-doubleTouch",
      },
    ],
  },
  {
    label: "自定义组件",
    id: "custom",
    subMenu: [
      {
        label: "单击",
        id: "custom-click",
      },
      {
        label: "双击",
        id: "custom-doubleClick",
      },
    ],
  },
]
const blocksList = [
  {
    type: "pc-click",
    eventType: "click",
    linkType: "inner",
    name: "经典按钮",
    key: "btn-primary",
    styles: {
      position: "absolute",
      width: "220px",
      height: "58px",
      borderRadius: "14px",
    },
    props: {
      text: "选项A",
    },
    content: ButtonPrimary,
  },
  {
    type: "pc-click",
    eventType: "click",
    linkType: "inner",
    name: "圆形按钮",
    key: "btn-hand",
    styles: {
      position: "absolute",
      width: "100px",
      height: "100px",
    },
    content: ButtonHand,
  },
]
export {menu, blocksList}
