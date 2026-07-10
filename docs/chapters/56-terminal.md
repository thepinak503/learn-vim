# Chapter 56 — Terminal

> *"Run terminals inside Neovim without leaving your editor."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

Neovim has a built-in terminal emulator.

You can run shell commands, REPLs, and tools without leaving Neovim.

---

# Terminal Commands

| Command | Action |
| ------- | ------ |
| `:terminal` or `:term` | Open terminal in horizontal split |
| `:term bash` | Open with specific shell |
| `:vert term` | Open terminal in vertical split |

---

# Terminal Mode

In the terminal buffer:

| Key | Action |
| --- | ------ |
| `Ctrl+\ Ctrl+n` | Exit terminal mode (return to normal) |
| `i` | Enter terminal mode |
| `Esc` | Exit to normal mode (Neovim 0.10+) |

---

# Key Mappings

```lua
nnoremap <leader>t :terminal<CR>
nnoremap <leader>tv :vert term<CR>
tnoremap <Esc> <C-\><C-n>
```

---

# Chapter Summary

- `:terminal` opens a terminal in Neovim.
- Use `Ctrl+\ Ctrl+n` to exit terminal mode.
- Use terminal for builds, tests, and REPLs.
- Map keys for quick terminal access.

---

## Exercises

1. Open a terminal with `:term`.
2. Run a command inside the terminal.
3. Exit terminal mode with `Ctrl+\ Ctrl+n`.
4. Map a key for quick terminal access.

---

## Next Chapter

[**Chapter 57 — Debugger**](57-debugger.md)

Debug your code inside Neovim.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
