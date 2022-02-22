import "antd/dist/antd.css"
import "../styles/globals.scss"
import {ConfigProvider} from "antd"
import moment from "moment"
import "moment/locale/zh-cn"
import zhCN from "antd/lib/locale/zh_CN"
moment.locale("zh-cn")

function MyApp({Component, pageProps}) {
  return (
    <ConfigProvider locale={zhCN}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
