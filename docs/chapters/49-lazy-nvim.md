# Chapter 49 — lazy.nvim

> *"The next generation plugin manager for Neovim."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 20 minutes

---

# Introduction

lazy.nvim is the most popular plugin manager for modern Neovim setups.

It provides:

- Lazy loading
- Automatic setup
- Performance optimization
- Clean configuration

---

# Installation

```lua
-- ~/.config/nvim/lua/config/lazy.lua

local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)
```

---

# Basic Configuration

```lua
-- ~/.config/nvim/init.lua

require("lazy").setup({
  -- Colorscheme
  { "catppuccin/nvim", name = "catppuccin", priority = 1000 },
  
  -- Essential plugins
  "tpope/vim-surround",
  "tpope/vim-commentary",
  
  -- Fuzzy finder
  {
    "nvim-telescope/telescope.nvim",
    dependencies = { "nvim-lua/plenary.nvim" }
  },
  
  -- LSP
  {
    "neovim/nvim-lspconfig",
    config = function()
      require("lspconfig").pyright.setup({})
    end
  },
})
```

---

# Lazy Loading

```lua
{
  "nvim-telescope/telescope.nvim",
  cmd = "Telescope",          -- Load on command
  keys = { "<leader>ff" },    -- Load on keypress
  dependencies = { "nvim-lua/plenary.nvim" },
}
```

---

# Chapter Summary

- lazy.nvim is the modern Neovim plugin manager.
- It supports lazy loading for performance.
- Plugins are configured in a Lua table.
- Use `cmd` and `keys` for lazy loading.
- Run `:Lazy` to manage plugins.

---

## Exercises

1. Install lazy.nvim.
2. Add a colorscheme plugin.
3. Add vim-surround.
4. Open `:Lazy` to see the plugin UI.

---

## Next Chapter

[**Chapter 50 — Treesitter**](50-treesitter.md)

Better syntax highlighting and code analysis.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
