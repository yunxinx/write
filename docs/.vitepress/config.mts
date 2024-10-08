import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'

export default defineConfig({
  title: "Notes",
  description: "Some words",
  outDir: "dist",
  srcDir: "src",
  themeConfig: {
    nav,
    sidebar,
    
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },

    outline: {
      level: [2, 3],
      label: "本页导航"
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short"
      }
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式"
  }
})
