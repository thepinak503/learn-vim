import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Learn Vim & Neovim",
  description: "A comprehensive guide to Vim and Neovim — from absolute beginner to advanced user",
  base: '/learn-vim/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chapters', link: '/chapters/01-introduction' },
      { text: 'Practice', link: '/practice/' },
      { text: 'Cheat Sheet', link: '/cheat-sheet/' },
    ],
    sidebar: [
      {
        text: '📘 Part I — Foundations',
        collapsed: false,
        items: [
          { text: '01. Introduction', link: '/chapters/01-introduction' },
          { text: '02. Why Learn Vim?', link: '/chapters/02-why-learn-vim' },
          { text: '03. What Is Vim?', link: '/chapters/03-what-is-vim' },
          { text: '04. Vim vs Vi vs Neovim', link: '/chapters/04-vim-vs-vi-vs-neovim' },
          { text: '05. Installing Vim & Neovim', link: '/chapters/05-installing-vim' },
          { text: '06. Your First Launch', link: '/chapters/06-your-first-launch' },
          { text: '07. Understanding Modes', link: '/chapters/07-understanding-modes' },
          { text: '08. Opening, Saving & Quitting', link: '/chapters/08-opening-saving-quitting' },
        ]
      },
      {
        text: '🧭 Part II — Navigation',
        collapsed: true,
        items: [
          { text: '09. Cursor Movement', link: '/chapters/09-cursor-movement' },
          { text: '10. Motions', link: '/chapters/10-motions' },
          { text: '11. Word Motions', link: '/chapters/11-word-motions' },
          { text: '12. Line Motions', link: '/chapters/12-line-motions' },
          { text: '13. File Motions', link: '/chapters/13-file-motions' },
          { text: '14. Searching', link: '/chapters/14-searching' },
        ]
      },
      {
        text: '✏️ Part III — Editing',
        collapsed: true,
        items: [
          { text: '15. Insert Commands', link: '/chapters/15-insert-commands' },
          { text: '16. Delete Commands', link: '/chapters/16-delete-commands' },
          { text: '17. Change Commands', link: '/chapters/17-change-commands' },
          { text: '18. Copy & Paste', link: '/chapters/18-copy-paste' },
          { text: '19. Undo / Redo', link: '/chapters/19-undo-redo' },
          { text: '20. Replace', link: '/chapters/20-replace' },
          { text: '21. Repeat (.)', link: '/chapters/21-repeat' },
        ]
      },
      {
        text: '👁️ Part IV — Visual Mode',
        collapsed: true,
        items: [
          { text: '22. Character Selection', link: '/chapters/22-visual-mode-character' },
          { text: '23. Line Selection', link: '/chapters/23-visual-mode-line' },
          { text: '24. Block Selection', link: '/chapters/24-visual-mode-block' },
        ]
      },
      {
        text: '🔤 Part V — Text Objects',
        collapsed: true,
        items: [
          { text: '25. iw and aw', link: '/chapters/25-text-objects-iw-aw' },
          { text: '26. Parentheses', link: '/chapters/26-text-objects-parentheses' },
          { text: '27. Quotes', link: '/chapters/27-text-objects-quotes' },
          { text: '28. Brackets & Tags', link: '/chapters/28-text-objects-brackets-tags' },
          { text: '29. Advanced', link: '/chapters/29-text-objects-advanced' },
          { text: '30. Mastering Text Objects', link: '/chapters/30-advanced-text-objects' },
        ]
      },
      {
        text: '🔍 Part VI — Searching',
        collapsed: true,
        items: [
          { text: '31. Search Patterns', link: '/chapters/31-search-patterns' },
          { text: '32. Regex', link: '/chapters/32-regex' },
          { text: '33. Search History', link: '/chapters/33-search-history' },
          { text: '34. Advanced Replace', link: '/chapters/34-replace' },
        ]
      },
      {
        text: '⚡ Part VII — Advanced Vim',
        collapsed: true,
        items: [
          { text: '35. Registers', link: '/chapters/35-registers' },
          { text: '36. Marks', link: '/chapters/36-marks' },
          { text: '37. Macros', link: '/chapters/37-macros' },
          { text: '38. Buffers', link: '/chapters/38-buffers' },
          { text: '39. Windows', link: '/chapters/39-windows' },
          { text: '40. Tabs', link: '/chapters/40-tabs' },
          { text: '41. Jump List', link: '/chapters/41-jump-list' },
          { text: '42. Change List', link: '/chapters/42-change-list' },
        ]
      },
      {
        text: '⚙️ Part VIII — Configuration',
        collapsed: true,
        items: [
          { text: '43. vimrc', link: '/chapters/43-vimrc' },
          { text: '44. Settings', link: '/chapters/44-settings' },
          { text: '45. Keymaps', link: '/chapters/45-keymaps' },
          { text: '46. Plugins', link: '/chapters/46-plugins' },
          { text: '47. Colorschemes', link: '/chapters/47-colorschemes' },
        ]
      },
      {
        text: '🚀 Part IX — Neovim',
        collapsed: true,
        items: [
          { text: '48. Installing Neovim', link: '/chapters/48-installing-neovim' },
          { text: '49. lazy.nvim', link: '/chapters/49-lazy-nvim' },
          { text: '50. Treesitter', link: '/chapters/50-treesitter' },
          { text: '51. Mason', link: '/chapters/51-mason' },
          { text: '52. LSP', link: '/chapters/52-lsp' },
          { text: '53. Telescope', link: '/chapters/53-telescope' },
          { text: '54. nvim-cmp', link: '/chapters/54-nvim-cmp' },
          { text: '55. Git', link: '/chapters/55-git' },
          { text: '56. Terminal', link: '/chapters/56-terminal' },
          { text: '57. Debugger', link: '/chapters/57-debugger' },
          { text: '58. Which-key', link: '/chapters/58-which-key' },
        ]
      },
      {
        text: '💡 Part X — Daily Workflow',
        collapsed: true,
        items: [
          { text: '59. Editing Code', link: '/chapters/59-editing-code' },
          { text: '60. Refactoring', link: '/chapters/60-refactoring' },
          { text: '61. Navigation Tricks', link: '/chapters/61-navigation-tricks' },
          { text: '62. Productivity Tips', link: '/chapters/62-productivity-tips' },
          { text: '63. Common Mistakes', link: '/chapters/63-common-mistakes' },
          { text: '64. Practice Exercises', link: '/chapters/64-practice-exercises' },
          { text: '65. Cheat Sheet', link: '/chapters/65-cheat-sheet' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/thepinak503/learn-vim' }
    ],
    footer: {
      message: 'Learn Vim & Neovim — The Complete Handbook',
      copyright: 'Free and open source'
    },
    search: {
      provider: 'local'
    }
  }
})
