import "antd/dist/antd.css"
import "../styles/globals.scss"
import {ConfigProvider} from "antd"
import moment from "moment"
import "moment/locale/zh-cn"
import zhCN from "antd/lib/locale/zh_CN"
import Link from "next/link"
moment.locale("zh-cn")

function MyApp({Component, pageProps, router, res}) {
  // const {pathname} = router.state
  return (
    <ConfigProvider locale={zhCN}>
      <ul>
        <li>
          <Link href="/front">front</Link>
        </li>
        <li>
          <Link href="/closure">closure</Link>
        </li>
        <li>
          <Link href="/test">test</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
