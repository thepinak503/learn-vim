# Chapter 43 — vimrc Configuration

> *"Your editor should work the way you do. Configure it."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

The vimrc file is Vim's configuration file.

It runs every time Vim starts.

---

# Location

## Vim

```
~/.vimrc
```

## Neovim

```
~/.config/nvim/init.vim
```

or (Lua):

```
~/.config/nvim/init.lua
```

---

# Basic vimrc

```vim
set nocompatible        " Use Vim defaults, not Vi
syntax on               " Enable syntax highlighting
filetype plugin indent on " Enable filetype detection
set number              " Show line numbers
set relativenumber      " Show relative line numbers
set tabstop=4           " Tab width
set shiftwidth=4        " Indent width
set expandtab           " Use spaces instead of tabs
set autoindent          " Auto indent
set smartindent         " Smart indent
set hlsearch            " Highlight search
set incsearch           " Incremental search
set ignorecase          " Case insensitive search
set smartcase           " Smart case matching
set mouse=a             " Enable mouse
set clipboard=unnamedplus " Use system clipboard
colorscheme desert      " Color scheme
```

---

# Loading the vimrc

```vim
:source ~/.vimrc
```

Reload the configuration without restarting.

---

# Chapter Summary

- `~/.vimrc` is the Vim config file.
- Settings use `set command`.
- `:source` reloads the configuration.
- Start simple, add settings gradually.

---

## Exercises

1. Create your first vimrc file.
2. Add line numbers, syntax highlighting, and tab settings.
3. Reload with `:source ~/.vimrc`.
4. Open a file and verify the settings work.

---

## Next Chapter

**Chapter 44 — Settings**

Essential Vim settings every user should know.
