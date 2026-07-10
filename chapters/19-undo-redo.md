# Chapter 19 — Undo / Redo

> *"Mistakes are inevitable. Undo is essential."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Vim's undo system is more powerful than most editors.

It supports:

* Multiple undo levels
* Redo
* Branching undo (you can undo a redo)
* Time-based undo

---

# Basic Undo / Redo

| Key       | Action                       |
| --------- | ---------------------------- |
| `u`       | Undo last change             |
| `Ctrl+r`  | Redo last undone change      |
| `U`       | Undo all changes on current line |

## Examples

```
Make a change: type i, add text, Esc
Press u        →   undoes that change
Press Ctrl+r   →   redoes that change
Press u        →   undoes it again
```

## With Counts

```
3u          →   undo last 3 changes
5Ctrl+r     →   redo last 5 undone changes
```

---

# What Counts as a Change?

Vim groups certain actions into a single "change":

* Everything between entering and leaving insert mode is one change.
* Each command in normal mode is one change.

So typing an entire paragraph in insert mode can be undone with one `u`.

---

# The Undo Tree

Vim doesn't just have an undo history line — it has an **undo tree**.

```
Change 1 ← Change 2 ← Change 3
                           ↓
                      Change 4 (branch)
```

If you undo back to Change 2, then make a new change, it creates a branch.

```
Change 1 ← Change 2 ← Change 3
                           ↓
                      Change 2 ← Change 5 (new branch)
```

## Navigating the Undo Tree

| Command         | Action                         |
| --------------- | ------------------------------ |
| `:undo 3`      | Undo to change number 3        |
| `g-`           | Go to older change in tree     |
| `g+`           | Go to newer change in tree     |

---

# Persistent Undo

Vim can save undo history between sessions.

Enable it in your config:

```vim
set undofile
set undodir=~/.vim/undo
```

This lets you undo changes even after closing and reopening a file.

---

# Chapter Summary

| Key       | Action                   |
| --------- | ------------------------ |
| `u`       | Undo                     |
| `Ctrl+r`  | Redo                     |
| `U`       | Undo all line changes    |
| `g-`      | Go to older in tree      |
| `g+`      | Go to newer in tree      |

---

# Key Takeaways

* `u` undoes, `Ctrl+r` redoes.
* Insert mode typing is one undoable change.
* Vim has an undo tree, not just a linear history.
* `:undofile` enables persistent undo across sessions.

---

## Exercises

1. Make several edits and undo them one by one with `u`.
2. Redo them with `Ctrl+r`.
3. Undo all changes on a single line with `U`.

---

## Next Chapter

[**Chapter 20 — Replace**](20-replace.md)

Replace characters and text patterns in Vim.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
