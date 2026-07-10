# Chapter 41 — Jump List

> *"Never lose your place again. Vim remembers where you've been."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

The jump list tracks cursor positions as you navigate.

It lets you go back to previous locations.

---

# Jump List Navigation

| Key | Action |
| --- | ------ |
| `Ctrl+o` | Jump to **older** position |
| `Ctrl+i` | Jump to **newer** position |
| `:jumps` | List jump list |

---

# When Jumps Are Recorded

Jumps are recorded for:

- `gg`, `G` — file top/bottom
- `{line}G` — line number jump
- `/pattern`, `?pattern` — search
- `%` — matching bracket
- `(`, `)` — sentence jumps
- `{`, `}` — paragraph jumps
- Marks like `'a`

---

# Change List

| Key | Action |
| --- | ------ |
| `g;` | Go to previous change position |
| `g,` | Go to next change position |
| `:changes` | List change list |

---

# Chapter Summary

- `Ctrl+o` goes back, `Ctrl+i` goes forward.
- `:jumps` shows jump history.
- `g;`/`g,` navigates edit positions.
- Jumps are saved per window.

---

## Exercises

1. Jump to line 100, then press `Ctrl+o` to go back.
2. Use `gg` then `G`, then `Ctrl+o` twice.
3. Navigate changes with `g;` and `g,`.

---

## Next Chapter

**Chapter 42 — Change List**

Track and navigate your edit history.
