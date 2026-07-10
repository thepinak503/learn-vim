# Chapter 55 — Git Integration

> *"Git inside Neovim — without leaving your editor."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

Neovim has excellent Git integration through plugins.

---

# vim-fugitive

The most popular Git plugin for Vim.

```lua
{
  "tpope/vim-fugitive",
  cmd = { "Git", "G" },
}
```

## Commands

| Command | Action |
| ------- | ------ |
| `:Git status` | Show git status |
| `:Git diff` | Show diff |
| `:Git log` | Show commit history |
| `:Git add %` | Stage current file |
| `:Git commit` | Commit staged changes |
| `:Git push` | Push to remote |

---

# gitsigns.nvim

Shows git decorations in the gutter.

```lua
{
  "lewis6991/gitsigns.nvim",
  config = function()
    require("gitsigns").setup()
  end,
}
```

## Features

- Shows added/modified/removed lines in the gutter
- Hunk navigation (`[c` / `]c`)
- Hunk preview
- Stage/reset hunks

---

# LazyGit (External)

For a graphical Git interface:

```lua
vim.keymap.set("n", "<leader>lg", function()
  vim.fn.termopen("lazygit", { dir = vim.fn.getcwd() })
end)
```

---

# Chapter Summary

- vim-fugitive provides Git commands inside Vim.
- gitsigns shows git status in the gutter.
- Use `:Git` for any Git command.
- LazyGit is a full Git TUI.

---

## Exercises

1. Install vim-fugitive.
2. Run `:Git status` and explore.
3. Install gitsigns and see git decorations.
4. Stage a file with `:Git add %`.

---

## Next Chapter

[**Chapter 56 — Terminal**](56-terminal.md)

Use the terminal inside Neovim.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
