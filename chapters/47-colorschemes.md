# Chapter 47 — Colorschemes

> *"Make your editor look the way you want."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

Colorschemes change the visual appearance of Vim.

---

# Built-in Colorschemes

View available schemes:

```
:colorscheme
```

Press `Tab` to cycle through options.

## Common Built-in Schemes

```
:colorscheme desert
:colorscheme elflord
:colorscheme slate
:colorscheme murphy
:colorscheme blue
:colorscheme darkblue
:colorscheme delek
```

---

# Installing a Colorscheme

With vim-plug:

```vim
Plug 'dracula/vim', { 'as': 'dracula' }
Plug 'morhetz/gruvbox'
Plug 'sainnhe/sonokai'
Plug 'catppuccin/nvim', { 'as': 'catppuccin' }
```

Then in your config:

```vim
colorscheme dracula
```

---

# Setting the Colorscheme

```vim
" In .vimrc or init.vim
colorscheme desert

" Or toggle at runtime
:colorscheme gruvbox
```

---

# Terminal vs GUI Colors

```vim
set termguicolors     " Enable true color support
```

Required for modern colorschemes.

---

# Chapter Summary

- `:colorscheme` changes the color scheme.
- Install new schemes via plugins.
- `set termguicolors` enables true color.
- Choose a scheme that's easy on the eyes.

---

## Exercises

1. Try 3 built-in colorschemes.
2. Install a popular colorscheme via vim-plug.
3. Set it as your default in vimrc.
4. Enable true color with `termguicolors`.

---

## Next Chapter

[**Chapter 48 — Installing Neovim**](48-installing-neovim.md)

Get started with Neovim.
