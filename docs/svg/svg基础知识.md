# svg基础知识

一个svg示例

@[code vue](../.vuepress/components/svg/BasicSvg.vue)

<svg-BasicSvg />


## viewBox
viewBox属性表示svg展示的区域，svg width和height指定的宽高固定，viewBox会将元素指定的区域等比例放大，如果宽或高之一已经到达100%，则不会继续放大

@[code vue](../.vuepress/components/svg/ViewBox.vue)

<svg-ViewBox />