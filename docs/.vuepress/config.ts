import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "刘有果的博客",
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
            }
          ],
        },
      ],
    },
  }),
});
