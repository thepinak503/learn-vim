# Chapter 38 — Buffers

> *"Every file you open is a buffer. Manage them well."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

A **buffer** is a file loaded into memory for editing.

Unlike windows or tabs, buffers exist even when not visible.

---

# Buffer Commands

| Command | Action |
| ------- | ------ |
| `:ls` or `:buffers` | List all buffers |
| `:bn` | Next buffer |
| `:bp` | Previous buffer |
| `:b3` | Go to buffer number 3 |
| `:b file` | Go to buffer by filename |
| `:bd` | Delete (close) buffer |
| `:e file` | Open file in new buffer |

---

# Key Mappings

| Key | Action |
| --- | ------ |
| `Ctrl+^` | Toggle between last two buffers |
| `:bn` | Next buffer |
| `:bp` | Previous buffer |
| `:bdelete` | Close current buffer |
| `:bufdo` | Run command on all buffers |

---

# Buffer States

```
:ls
```

Shows all buffers with their state:

- `%` — Current buffer
- `#` — Alternate buffer
- `a` — Active (visible)
- `h` — Hidden
- `u` — Unlisted
- `+` — Modified

---

# Chapter Summary

- Buffers are files loaded in memory.
- `:ls` lists buffers, `:bn`/:bp` navigate.
- `Ctrl+^` toggles between last two buffers.
- `:bd` closes a buffer.

---

## Exercises

1. Open three files, list buffers with `:ls`.
2. Navigate buffers with `:bn` and `:bp`.
3. Use `Ctrl+^` to toggle.
4. Delete a buffer with `:bd`.

---

## Next Chapter

**Chapter 39 — Windows**

Split your workspace into multiple windows.
