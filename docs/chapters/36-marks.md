# Chapter 36 — Marks

> *"Set bookmarks in your files and jump between them instantly."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Marks let you save cursor positions and jump back to them later.

---

# Setting and Using Marks

| Command | Action                        |
| ------- | ----------------------------- |
| `ma`    | Set mark named `a`            |
| `'a`    | Jump to **line** of mark `a`  |
| `` `a `` | Jump to **exact position** of mark `a` |
| `:marks` | List all marks               |

---

# Types of Marks

| Mark  | Scope     | Description          |
| ----- | --------- | -------------------- |
| `a`-`z` | File-local | Visible only in current file |
| `A`-`Z` | Global | Visible across all files |
| `0`-`9` | Special | Set in `.viminfo`, persist across sessions |

---

# Special Marks

| Mark | Position                        |
| ---- | ------------------------------- |
| `` ` `` | Position before last jump     |
| `'.` | Position of last change         |
| `'^` | Position of last insert         |
| `'[` | Start of last change/yank       |
| `']` | End of last change/yank         |

---

# Chapter Summary

* `ma` sets mark `a`, `'a` jumps to it.
* Lowercase = file-local, uppercase = global.
* Special marks track jump history.
* `:marks` lists all marks.

---

## Exercises

1. Set a mark with `ma`, jump away, return with `'a`.
2. Set a global mark with `mA`, open another file, jump back.
3. Use `'. ` to jump to the last edit location.

---

## Next Chapter

[**Chapter 37 — Macros**](37-macros.md)

Record and replay sequences of commands.
