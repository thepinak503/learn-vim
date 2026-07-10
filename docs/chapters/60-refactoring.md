# Chapter 60 — Refactoring

> *"Efficient refactoring techniques in Vim."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

Vim makes code refactoring fast and precise.

---

# Refactoring with Text Objects

```
ciw         →   Change word (rename variable)
ci(         →   Change inside parentheses
ci{         →   Change inside braces
ci"         →   Change string content
```

---

# Extracting Variables/Function

Use visual mode + selection:

```
V           →   Select lines
:          →   Enter command mode (visual range pre-filled)
!sort      →   Run external command
```

---

# Renaming with LSP

With LSP configured:

```
<leader>rn   →   Rename symbol
```

Automatically renames all references.

---

# Moving Code

```
dd          →   Cut a line
p           →   Paste below
:move 10    →   Move current line to line 10
:g/pattern/move 0   →   Move matching lines to top
```

---

# Chapter Summary

- Use `ciw`, `ci(`, `ci"` for quick edits.
- Use LSP rename for safe refactoring.
- Use `:move` to rearrange lines.
- Practice with visual mode and `:norm`.

---

## Exercises

1. Rename a variable with `ciw`.
2. Use LSP rename (`<leader>rn`).
3. Move lines with `:move`.

---

## Next Chapter

[**Chapter 61 — Navigation Tricks**](61-navigation-tricks.md)

Advanced navigation techniques.
