# Chapter 45 — Keymaps

> *"Custom key bindings make Vim yours."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Keymaps let you create custom shortcuts for any command.

---

# Map Command Syntax

```
:map <key> <action>
```

| Command | Mode |
| ------- | ---- |
| `nmap` | Normal mode |
| `imap` | Insert mode |
| `vmap` | Visual mode |
| `xmap` | Visual mode |
| `cmap` | Command mode |
| `omap` | Operator-pending mode |

---

# Using `nnoremap` (Recommended)

```vim
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>e :e .<CR>
```

## The Leader Key

```vim
let mapleader = " "    " Space as leader
nnoremap <leader>w :w<CR>
```

Now press `Space+w` to save.

---

# Useful Mappings

```vim
" Better navigation
nnoremap j gj
nnoremap k gk

" Quick save
nnoremap <leader>w :w<CR>

" Quick quit
nnoremap <leader>q :q<CR>

" Clear search highlight
nnoremap <leader>h :noh<CR>

" Buffer navigation
nnoremap <leader>bn :bn<CR>
nnoremap <leader>bp :bp<CR>
```

---

# Chapter Summary

- `nnoremap` maps keys in normal mode (non-recursive).
- `<leader>` is a prefix key (default `\`).
- `<CR>` means Enter.
- Use non-recursive maps to avoid issues.

---

## Exercises

1. Map `<leader>w` to save.
2. Map `<leader>q` to quit.
3. Set the leader key to space.
4. Add the mappings to your vimrc.

---

## Next Chapter

**Chapter 46 — Plugins**

Extend Vim with plugins.
