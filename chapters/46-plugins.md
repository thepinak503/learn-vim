# Chapter 46 — Plugins

> *"Plugins turn Vim into a fully featured editor."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

Plugins extend Vim with new features.

Popular plugin managers:

- **vim-plug** (simplest)
- Vundle
- Pathogen
- dein.vim

---

# vim-plug (Recommended)

## Installation

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

For Neovim:

```bash
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim \
    --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

---

# Using vim-plug

In your vimrc:

```vim
call plug#begin()

" Plugins go here
Plug 'tpope/vim-surround'
Plug 'tpope/vim-commentary'
Plug 'scrooloose/nerdtree'
Plug 'dracula/vim', { 'as': 'dracula' }

call plug#end()
```

Then:

```
:PlugInstall
```

---

# Essential Plugins

| Plugin | Purpose |
| ------ | ------- |
| `vim-surround` | Surround text with quotes/brackets |
| `vim-commentary` | Comment/uncomment code |
| `nerdtree` | File explorer |
| `fzf.vim` | Fuzzy finder |
| `vim-airline` | Status line |
| `gruvbox` | Color scheme |

---

# Chapter Summary

- vim-plug is the easiest plugin manager.
- Add plugins between `plug#begin()` and `plug#end()`.
- Run `:PlugInstall` to install.
- Start with a few essential plugins.

---

## Exercises

1. Install vim-plug.
2. Add NERDTree and vim-airline to your config.
3. Run `:PlugInstall`.
4. Explore NERDTree with `:NERDTreeToggle`.

---

## Next Chapter

[**Chapter 47 — Colorschemes**](47-colorschemes.md)

Customize the look of your editor.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
