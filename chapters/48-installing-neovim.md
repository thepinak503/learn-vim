# Chapter 48 — Installing Neovim

> *"Neovim is the modern evolution of Vim. It's time to upgrade."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Neovim is a fork of Vim with modern features.

It is backwards-compatible with most Vim commands.

---

# Installation

## Linux

```bash
# Ubuntu/Debian
sudo apt install neovim

# Fedora
sudo dnf install neovim

# Arch
sudo pacman -S neovim
```

## macOS

```bash
brew install neovim
```

## Windows

```powershell
# With Scoop
scoop install neovim

# With Chocolatey
choco install neovim
```

---

# Verify Installation

```bash
nvim --version
```

Should show:

```
NVIM v0.10.0
```

---

# First Launch

```bash
nvim
```

Neovim looks similar to Vim but has additional features:

- Built-in terminal
- Lua configuration
- LSP client
- Treesitter

---

# Configuration

Neovim config location:

```
~/.config/nvim/init.lua
```

Or for Vimscript:

```
~/.config/nvim/init.vim
```

---

# Chapter Summary

- Neovim is a modern Vim fork.
- Install via package manager.
- Config is at `~/.config/nvim/init.lua`.
- Neovim supports Lua configuration.
- All Vim commands work in Neovim.

---

## Exercises

1. Install Neovim if you haven't already.
2. Open it with `nvim`.
3. Create the config directory: `mkdir -p ~/.config/nvim`.
4. Create a basic `init.lua` with line numbers.

---

## Next Chapter

[**Chapter 49 — lazy.nvim**](49-lazy-nvim.md)

The modern plugin manager for Neovim.
