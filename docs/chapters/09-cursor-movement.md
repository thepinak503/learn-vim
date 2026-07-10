# Chapter 9 — Cursor Movement

> *"Moving efficiently through a file is the first skill every Vim user must master."*

---

**Difficulty:** ⭐ Beginner
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

Navigation is the most frequent action you'll perform in Vim.

The faster you can move, the faster you can edit.

This chapter covers:

* Basic cursor movement
* The home row keys (h, j, k, l)
* Combined with counts

---

# The Home Row

Vim places the four most important navigation keys right on the home row:

```
    ↑
    k
← h   l →
    j
    ↓
```

| Key | Direction        | Finger  |
| --- | ---------------- | ------- |
| `h` | Left             | Right index   |
| `j` | Down             | Right index   |
| `k` | Up               | Right middle  |
| `l` | Right            | Right ring    |

Keeping your fingers on the home row is faster than reaching for arrow keys.

---

# Moving One Character

```
h   →   move left one character
j   →   move down one line
k   →   move up one line
l   →   move right one character
```

## Try This

Open any text file and practice:

```
jjjj    (move down 4 lines)
kkkk    (move up 4 lines)
hhhh    (move left 4 characters)
llll    (move right 4 characters)
```

---

# Arrow Keys

Arrow keys also work:

```
←   →   move left/right
↑   ↓   move up/down
```

However, they require moving your hand from the home row.

For now, feel free to use arrow keys. Over time, try to transition to `h`/`j`/`k`/`l`.

---

# Moving by Counts

Every movement command can be preceded by a number.

This repeats the movement N times.

| Command    | Action                 |
| ---------- | ---------------------- |
| `5j`       | Move down 5 lines      |
| `10k`      | Move up 10 lines       |
| `3h`       | Move left 3 characters |
| `7l`       | Move right 7 characters |

## Example

```
┌─────────────────────────────────┐
│ Line 1                          │
│ Line 2                          │
│ Line 3                          │ ← cursor starts here
│ Line 4                          │
│ Line 5                          │
│ Line 6                          │
│ Line 7                          │
│ Line 8                          │ ← cursor ends here after 5j
└─────────────────────────────────┘
```

---

# Moving by Words

Word movements jump over entire words at a time.

| Key   | Action                                 |
| ----- | -------------------------------------- |
| `w`   | Forward to **beginning** of next word  |
| `W`   | Forward to next WORD (space-separated) |
| `b`   | Backward to **beginning** of word      |
| `B`   | Backward to beginning of WORD          |
| `e`   | Forward to **end** of current word     |
| `E`   | Forward to end of WORD                 |

## What's the Difference?

* **word** (`w`) — separated by punctuation and spaces
* **WORD** (`W`) — separated only by spaces

Example:

```
hello-world foo
```

* `w` sees: `hello` `-` `world` `foo` (4 words)
* `W` sees: `hello-world` `foo` (2 WORDS)

## With Counts

```
3w      →   forward 3 words
5b      →   backward 5 words
2e      →   forward to end of next 2 words
```

---

# Moving by Lines

| Key       | Action                         |
| --------- | ------------------------------ |
| `0`       | Go to **first** column of line |
| `^`       | Go to **first non-blank** character |
| `$`       | Go to **end** of line          |
| `g_`      | Go to **last non-blank** character |

## Examples

```
    0
    ↓
    ┌──────────────────────┐
    │    Hello World       │
    └──────────────────────┘
                          ↑
                          $
```

```
    ^
    ↓
    ┌──────────────────────┐
    │    Hello World       │
    └──────────────────────┘
                            ↑
                            g_
```

## Combined with Counts

```
3$      →   go to end of 3 lines down
```

---

# Moving by Screen

| Key   | Action                        |
| ----- | ----------------------------- |
| `H`   | Jump to **top** of screen     |
| `M`   | Jump to **middle** of screen  |
| `L`   | Jump to **bottom** of screen  |
| `zt`  | Scroll cursor to **top**      |
| `zz`  | Scroll cursor to **center**   |
| `zb`  | Scroll cursor to **bottom**   |
| `Ctrl+u` | Scroll **up** half screen  |
| `Ctrl+d` | Scroll **down** half screen |
| `Ctrl+b` | Scroll **up** full screen  |
| `Ctrl+f` | Scroll **down** full screen |

## Why This Matters

Instead of scrolling line by line, use these to jump around the visible area instantly.

---

# Practice Exercise

Open a file and try:

1. Move down 10 lines: `10j`
2. Move up 5 lines: `5k`
3. Jump to end of line: `$`
4. Jump to beginning: `0`
5. Move forward 3 words: `3w`
6. Move backward 2 words: `2b`
7. Center the cursor on screen: `zz`
8. Scroll half a page: `Ctrl+d`, `Ctrl+u`

---

# Chapter Summary

| Key     | Movement               |
| ------- | ---------------------- |
| `h`     | Left                   |
| `j`     | Down                   |
| `k`     | Up                     |
| `l`     | Right                  |
| `w`/`b` | Word forward/backward  |
| `e`     | End of word            |
| `0`/`$` | Start/end of line      |
| `H`/`M`/`L` | Screen top/mid/bottom |
| `Ctrl+u`/`Ctrl+d` | Scroll up/down |

---

# Key Takeaways

* `h`/`j`/`k`/`l` keep your fingers on the home row.
* Precede any movement with a number for repetition.
* Word movements (`w`, `b`, `e`) jump over entire words.
* Line movements (`0`, `$`) jump to line edges.
* Screen movements (`H`, `M`, `L`, `zz`) keep you oriented.

---

## Next Chapter

[**Chapter 10 — Motions**](10-motions.md)

We'll explore Vim's motion system—the grammar that powers every editing command.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
