# Chapter 22 — Visual Mode: Character Selection

> *"Visual mode makes Vim's text selection visible and intuitive."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Visual mode shows you exactly what text you're selecting.

There are three variants:

* Character-wise (`v`)
* Line-wise (`V`)
* Block-wise (`Ctrl+v`)

---

# Character-Wise Visual Mode

Press `v` to enter character-wise visual mode.

Move the cursor to extend the selection.

## Entering

```
v       →   Start character selection
```

## Extending Selection

| Key   | Action                    |
| ----- | ------------------------- |
| `h`/`l` | Extend left/right        |
| `j`/`k` | Extend down/up           |
| `w`   | Extend to next word       |
| `b`   | Extend back one word      |
| `e`   | Extend to end of word     |
| `0`   | Extend to line beginning  |
| `$`   | Extend to line end        |
| `G`   | Extend to end of file     |
| `gg`  | Extend to start of file   |

---

# Actions on Selection

| Key   | Action                        |
| ----- | ----------------------------- |
| `d`   | Delete selection               |
| `x`   | Delete selection               |
| `y`   | Yank (copy) selection          |
| `c`   | Change selection (delete + insert) |
| `~`   | Swap case                      |
| `u`   | Make lowercase                 |
| `U`   | Make uppercase                 |
| `>`   | Indent right                   |
| `<`   | Indent left                    |
| `J`   | Join lines into one            |
| `Esc` | Exit visual mode               |

---

# Example

```
The quick brown fox jumps over the lazy dog.
         ^ cursor

Press v, then press w three times:

The quick brown fox jumps over the lazy dog.
^^^^^^^^^^^^^^^ selected

Press d:

The fox jumps over the lazy dog.
```

---

# Exiting Visual Mode

| Key       | Action                |
| --------- | --------------------- |
| `Esc`     | Exit visual mode      |
| `Ctrl+c`  | Exit visual mode      |
| `v`       | Toggle back to normal |

---

# Chapter Summary

| Key | Action                          |
| --- | ------------------------------- |
| `v` | Enter character visual mode     |
| Move keys | Extend selection           |
| `d` | Delete selection                |
| `y` | Yank selection                  |
| `c` | Change selection                |
| `~` | Toggle case                     |
| `Esc` | Exit visual mode              |

---

# Key Takeaways

* `v` enters character-wise visual mode.
* Move with any normal mode motion to extend selection.
* `d`, `y`, `c` operate on the selection.
* `Esc` exits back to normal mode.

---

## Exercises

1. Open a file and select a few words with `v` and `w`.
2. Delete the selection with `d`.
3. Select text and yank it with `y`, then paste with `p`.
4. Select text and change its case with `~`.

---

## Next Chapter

[**Chapter 23 — Visual Mode: Line Selection**](23-visual-mode-line.md)

Select entire lines in visual mode for efficient line-based editing.
