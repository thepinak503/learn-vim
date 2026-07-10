# Chapter 40 — Tabs

> *"Think of tabs as different workspaces, not different files."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

Vim tabs are **collections of windows**, not individual files.

They let you organize different working contexts.

---

# Tab Commands

| Command | Action |
| ------- | ------ |
| `:tabnew` | Create new tab |
| `:tabedit file` | Open file in new tab |
| `:tabclose` | Close current tab |
| `:tabnext` or `gt` | Next tab |
| `:tabprev` or `gT` | Previous tab |
| `:tabmove 0` | Move tab to first position |
| `:tabs` | List all tabs |
| `:tabonly` | Close all other tabs |
| `{i}gt` | Go to tab number i |

---

# Key Mappings

| Key | Action |
| --- | ------ |
| `gt` | Next tab |
| `gT` | Previous tab |
| `3gt` | Go to tab 3 |
| `Ctrl+PageUp` | Previous tab |
| `Ctrl+PageDown` | Next tab |

---

# Chapter Summary

- `gt`/`gT` navigate tabs.
- `:tabnew` creates a new tab.
- Tabs contain windows; windows show buffers.
- Use tabs for different projects or contexts.

---

## Exercises

1. Open a file in a new tab with `:tabedit`.
2. Navigate with `gt` and `gT`.
3. Create 3 tabs and switch between them.
4. Close a tab with `:tabclose`.

---

## Next Chapter

[**Chapter 41 — Jump List**](41-jump-list.md)

Navigate through your cursor position history.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
