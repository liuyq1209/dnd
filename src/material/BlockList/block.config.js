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
const componentsList = [
  {
    type: "pc-click",
    name: "经典按钮",
    content: ButtonPrimary,
  },
  {
    type: "pc-click",
    name: "手型按钮",
    content: ButtonHand,
  },
]
export {menu, componentsList}