# Chapter 59 — Editing Code

> *"Practical Vim workflows for everyday coding."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

This chapter combines everything you've learned into practical coding workflows.

---

# Navigating Code

```
gd          →   Go to definition
K           →   Show documentation
Ctrl+o/i    →   Jump back/forward
%           →   Jump to matching bracket
[{          →   Go to previous `{`
]}          →   Go to next `}`
```

---

# Refactoring

```
ciw         →   Rename variable under cursor
ci(         →   Change function arguments
ci"         →   Change string content
daw         →   Delete a word
yiw         →   Copy a word
```

---

# Code Formatting

```
==          →   Auto-indent current line
=G          →   Auto-indent to end of file
gg=G        →   Auto-indent entire file
=%          →   Auto-indent block
```

---

# Commenting

With `vim-commentary`:

```
gc          →   Toggle comment
gcc         →   Comment current line
gc3j        →   Comment 3 lines down
```

---

# Chapter Summary

- Use `gd`, `K`, `Ctrl+o` for navigation.
- Use `ci(`, `ci"`, `ciw` for quick edits.
- Use `=` for auto-indentation.
- Use `gc` for commenting.

---

## Exercises

1. Open a code file and navigate with `gd` and `Ctrl+o`.
2. Refactor a variable with `ciw`.
3. Auto-indent the file with `gg=G`.

---

## Next Chapter

[**Chapter 60 — Refactoring**](60-refactoring.md)

Efficient refactoring techniques in Vim.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
