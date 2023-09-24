import { defineUserConfig, defaultTheme } from "vuepress";
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: "zh-CN",
  title: "刘有果的博客",
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    sidebar: {
      "/": [
        {
          text: "知识积累",
          children: [
            "/web/index.md",
            "/javascript/index.md",
            "/typescript/index.md",
            {
              text: "react",
              children: ["/react/profiler", "/react/ref使用技巧","/react/react18可以提高性能的新feature" , 
              {
                text: "状态管理",
                children: ["/react/状态管理/jotai"]
              }],
            },
            {
              text: "pnpm",
              children: ["/pnpm/管理pnpm的版本"]
            },
            {
              text: "vscode",
              children: ["/vscode/vscode提效技巧"]
            },
            {
              text: 'svg',
              children: ["/svg/svg基础知识"]
            },
            {
              text: '民生政策',
              children: ['/民生政策/租房公积金提取']
            }
          ],
        },
      ],
    },
  }),
});
