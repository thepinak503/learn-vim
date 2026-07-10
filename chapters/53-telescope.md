# Chapter 53 — Telescope

> *"Fuzzy find everything in your project with lightning speed."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 20 minutes

---

# Introduction

Telescope is a fuzzy finder for Neovim.

It can search:

- Files
- Text (grep)
- Buffers
- Help tags
- Git commits
- LSP references
- And more

---

# Installation

```lua
{
  "nvim-telescope/telescope.nvim",
  dependencies = { "nvim-lua/plenary.nvim" },
  config = function()
    require("telescope").setup({})
  end,
}
```

---

# Key Mappings

```lua
nnoremap <leader>ff <cmd>Telescope find_files<CR>
nnoremap <leader>fg <cmd>Telescope live_grep<CR>
nnoremap <leader>fb <cmd>Telescope buffers<CR>
nnoremap <leader>fh <cmd>Telescope help_tags<CR>
```

Or in Lua:

```lua
vim.keymap.set("n", "<leader>ff", require("telescope.builtin").find_files)
vim.keymap.set("n", "<leader>fg", require("telescope.builtin").live_grep)
vim.keymap.set("n", "<leader>fb", require("telescope.builtin").buffers)
```

---

# Telescope Commands

| Command | Action |
| ------- | ------ |
| `:Telescope find_files` | Search files |
| `:Telescope live_grep` | Search text |
| `:Telescope buffers` | List buffers |
| `:Telescope help_tags` | Search help |
| `:Telescope git_commits` | Browse git history |

---

# Chapter Summary

- Telescope is a fuzzy finder for Neovim.
- Search files, text, buffers, and more.
- Customize with key mappings.
- Essential for modern Neovim workflows.

---

## Exercises

1. Install Telescope.
2. Map `<leader>ff` to find files.
3. Map `<leader>fg` to live grep.
4. Use Telescope to navigate your project.

---

## Next Chapter

[**Chapter 54 — nvim-cmp**](54-nvim-cmp.md)

Autocompletion for Neovim.
