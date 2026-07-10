# Chapter 25 — Text Objects: iw and aw

> *"Text objects let you operate on structural units of text rather than arbitrary ranges."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

Text objects are one of Vim's most powerful features.

Instead of thinking "delete from character 3 to character 8,"

you think "delete this word" or "change inside these quotes."

---

# What Is a Text Object?

A **text object** is a structural unit of text:

* A word
* A sentence
* A paragraph
* Text inside quotes
* Text inside parentheses
* Text inside brackets

---

# The Two Prefixes

| Prefix | Meaning  | Includes Boundaries? |
| ------ | -------- | -------------------- |
| `i`    | **inner**  | No (inside only)   |
| `a`    | **a**      | Yes (includes surrounding whitespace/delimiters) |

## Examples

```
Hello World
     ^

diw   →   deletes "World" (no space)
daw   →   deletes "World " (includes the space)
```

---

# Word Text Objects

| Command | Action                                    |
| ------- | ----------------------------------------- |
| `diw`   | Delete **inner word**                     |
| `daw`   | Delete **a word** (includes space)        |
| `ciw`   | Change inner word                         |
| `caw`   | Change a word                             |
| `yiw`   | Yank inner word                           |
| `yaw`   | Yank a word                               |

## Example

```
function calculateTotal() {
                ^

ciw → change inner word
Type "compute" →

function computeTotal() {
```

---

# Why Text Objects Matter

Without text objects:

```
dword    →   deletes from cursor to next word (not the whole word)
```

With text objects:

```
diw      →   deletes the entire word under cursor
```

The difference is crucial when the cursor is in the middle of a word.

---

# Practice

```
The quick brown fox
      ^

diw → "The  brown fox" (deletes "quick")
daw → "The brown fox" (deletes "quick " including space)
ciw → "The  brown fox" (insert mode, "quick" deleted)
```

---

# Chapter Summary

| Command | Action                        |
| ------- | ----------------------------- |
| `diw`   | Delete inner word             |
| `daw`   | Delete a word (with space)    |
| `ciw`   | Change inner word             |
| `caw`   | Change a word                 |
| `yiw`   | Yank inner word               |
| `yaw`   | Yank a word                   |

---

# Key Takeaways

* `i` = inner (without surrounding whitespace/delimiters).
* `a` = a (includes surrounding whitespace/delimiters).
* Text objects work with all operators: `d`, `c`, `y`, `v`, `gu`, `gU`, etc.
* Use `iw` for precise word editing regardless of cursor position.

---

## Exercises

1. Open a file and practice `diw` on words.
2. Compare `diw` vs `daw` to see the space difference.
3. Use `ciw` to replace words without deleting surrounding punctuation.

---

## Next Chapter

[**Chapter 26 — Text Objects: Parentheses**](26-text-objects-parentheses.md)

Edit text inside parentheses with surgical precision.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
