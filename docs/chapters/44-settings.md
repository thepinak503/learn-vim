# Chapter 44 — Essential Settings

> *"The right settings transform Vim from bare bones to a comfortable editor."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Vim has hundreds of settings.

Here are the most useful ones.

---

# Display Settings

```vim
set number              " Show line numbers
set relativenumber      " Show relative line numbers
set cursorline          " Highlight current line
set showcmd             " Show command in status line
set showmode            " Show current mode
set ruler               " Show cursor position
set laststatus=2        " Always show status line
```

---

# Editing Settings

```vim
set tabstop=4           " Tab width
set shiftwidth=4        " Indent width
set softtabstop=4       " Soft tab width
set expandtab           " Spaces instead of tabs
set autoindent          " Auto indent
set smartindent         " Smart indent
set wrap                " Line wrap
set linebreak           " Break at words
```

---

# Search Settings

```vim
set hlsearch            " Highlight search matches
set incsearch           " Incremental search
set ignorecase          " Ignore case
set smartcase           " Smart case detection
set showmatch           " Show matching brackets
```

---

# Behavior Settings

```vim
set mouse=a             " Enable mouse
set clipboard=unnamedplus " System clipboard
set hidden              " Allow hidden buffers
set scrolloff=5         " Keep 5 lines visible around cursor
set sidescrolloff=5     " Keep 5 columns visible
set undofile            " Persistent undo
set backup             " Keep backup files
set writebackup        " Write backup before overwriting
```

---

# Chapter Summary

- Display: `number`, `relativenumber`, `cursorline`
- Editing: `tabstop`, `shiftwidth`, `expandtab`
- Search: `hlsearch`, `incsearch`, `smartcase`
- Behavior: `mouse=a`, `hidden`, `scrolloff`

---

## Exercises

1. Enable line numbers and relative numbers.
2. Set tabs to 4 spaces.
3. Enable incremental search.
4. Enable mouse support.

---

## Next Chapter

[**Chapter 45 — Keymaps**](45-keymaps.md)

Create custom key mappings to supercharge your workflow.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
