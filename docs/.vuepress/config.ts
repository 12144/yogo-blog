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
              children: ["/react/profiler"],
            },
          ],
        },
      ],
    },
  }),
});
