# Chapter 13 — File Motions

> *"Jump across hundreds of lines in a single keystroke."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

Word and line motions are fast—but what if you need to jump from line 5 to line 500?

File motions let you navigate across an entire file instantly.

---

# Top and Bottom of File

| Motion | Action                        |
| ------ | ----------------------------- |
| `gg`   | Jump to **first line** of file |
| `G`    | Jump to **last line** of file  |

## With Count

| Motion   | Action             |
| -------- | ------------------ |
| `42G`    | Jump to line 42    |
| `42gg`   | Jump to line 42    |
| `:42`    | Jump to line 42    |
| `50%`    | Jump to 50% of file |

## Examples

```
gg      →   go to line 1
G       →   go to last line
100gg   →   go to line 100
:200    →   go to line 200 (command mode)
```

---

# Screen-Based Jumps

| Motion | Action                        |
| ------ | ----------------------------- |
| `H`    | Jump to **top** of screen     |
| `M`    | Jump to **middle** of screen  |
| `L`    | Jump to **bottom** of screen  |

These are relative to what's currently visible.

## Example

```
Screen content (visible):

┌──────────────────────┐
│ Line 1               │ ← H (top of screen)
│ Line 2               │
│ Line 3               │
│ Line 4               │
│ Line 5               │ ← M (middle of screen)
│ Line 6               │
│ Line 7               │
│ Line 8               │
│ Line 9               │ ← L (bottom of screen)
└──────────────────────┘
```

---

# Scrolling

| Motion      | Action                     |
| ----------- | -------------------------- |
| `Ctrl+u`    | Scroll **up** half page    |
| `Ctrl+d`    | Scroll **down** half page  |
| `Ctrl+b`    | Scroll **up** full page    |
| `Ctrl+f`    | Scroll **down** full page  |
| `Ctrl+y`    | Scroll up one line         |
| `Ctrl+e`    | Scroll down one line       |

## Centering the Cursor

| Motion | Action                              |
| ------ | ----------------------------------- |
| `zz`   | Center cursor vertically on screen  |
| `zt`   | Move cursor to **top** of screen    |
| `zb`   | Move cursor to **bottom** of screen |

These do not move the cursor in the file—they move the viewport.

---

# The Jump List

Vim keeps a **jump list** — a history of cursor positions.

| Command     | Action                    |
| ----------- | ------------------------- |
| `Ctrl+o`    | Jump to **previous** position |
| `Ctrl+i`    | Jump to **next** position     |

## Key Insight

Every time you make a "big" jump (e.g., `gg`, `G`, search, line number jump), Vim saves the previous position in the jump list.

You can think of `Ctrl+o` as "go back" and `Ctrl+i` as "go forward."

---

# The Change List

Vim also tracks where you made changes:

| Command   | Action                          |
| --------- | ------------------------------- |
| `g;`      | Go to **previous** change position |
| `g,`      | Go to **next** change position     |

Useful when you need to revisit recently edited areas.

---

# Marks

You can set custom waypoints in a file:

| Command   | Action                     |
| --------- | -------------------------- |
| `ma`      | Set mark named `a`         |
| `'a`      | Jump to line of mark `a`   |
| `` `a ``  | Jump to exact position of mark `a` |

Marks can be lowercase (file-local) or uppercase (global across files).

---

# Percent Jump

| Motion | Action                                |
| ------ | ------------------------------------- |
| `%`    | Jump to matching bracket/brace/paren  |

This is extremely useful for code:

```
if (condition) {
    // cursor here
    ...
}
```

Press `%` → jump to the matching `{` or `}`.

---

# Practical Example

```
You're at line 10.
You need to go to line 350.
Then back to line 10.
Then to the matching bracket.
```

```
350G        →   jump to line 350
Ctrl+o      →   back to line 10
%           →   jump to matching bracket
Ctrl+i      →   forward again
```

---

# Chapter Summary

| Motion      | Action                |
| ----------- | --------------------- |
| `gg`        | First line            |
| `G`         | Last line             |
| `42G`       | Specific line         |
| `H`/`M`/`L` | Screen top/mid/bottom |
| `Ctrl+u/d`  | Scroll half page      |
| `Ctrl+o/i`  | Jump list back/forward |
| `%`         | Matching bracket      |
| `zz`        | Center screen         |

---

# Key Takeaways

* `gg` and `G` jump to the very beginning and end of a file.
* Use `:42` or `42G` to jump to a specific line number.
* `Ctrl+o` / `Ctrl+i` navigate through your jump history.
* `%` jumps between matching brackets—invaluable for coding.
* `zz` centers the screen without moving the cursor in the file.

---

## Exercises

1. Open a large file (500+ lines) and jump from top to bottom using `gg` and `G`.
2. Jump to line 250 using `250G`.
3. Scroll through the file using `Ctrl+d` and `Ctrl+u`.
4. Set a mark with `ma`, jump somewhere else, return with `'a`.
5. Use `Ctrl+o` and `Ctrl+i` to navigate your jump history.

---

## Next Chapter

[**Chapter 14 — Searching**](14-searching.md)

Find any word or pattern in your file instantly using Vim's powerful search features.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
