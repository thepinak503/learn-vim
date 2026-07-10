# Chapter 12 — Line Motions

> *"Lines are the fundamental unit of code. Moving to their edges is essential."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 10–15 minutes

---

# Introduction

After word motions, line motions are the next most important navigation skill.

They let you jump to the beginning, end, or logical start of any line.

---

# The Four Line Motions

| Motion | Action                                    |
| ------ | ----------------------------------------- |
| `0`    | Jump to **first column** (column 0)       |
| `^`    | Jump to **first non-whitespace** character |
| `$`    | Jump to **end of line**                   |
| `g_`   | Jump to **last non-whitespace** character  |

---

# Visual Example

```
    Line: "    hello world    "
          ^
          │
          0 (column 0)

              ^
              │
              ^ (first non-blank)

                      ^
                      │
                      g_ (last non-blank)

                                 ^
                                 │
                                 $ (end of line)
```

---

# When to Use Each

## `0` — Beginning of Line

Use when you want to go to the absolute start.

Common before indentation-sensitive operations.

## `^` — First Non-Blank Character

Use when you want to go to where the text actually begins.

This is the most commonly used line-start motion.

## `$` — End of Line

Use when you want to append text or delete to the end.

Equivalent to pressing End on a regular keyboard.

## `g_` — Last Non-Blank Character

Use when you want to operate on the last real character.

Less common than `$`, but useful for precise editing.

---

# Combining with Operators

Line motions + operators = efficient line editing:

| Command | Action                                 |
| ------- | -------------------------------------- |
| `d0`    | Delete from cursor to beginning of line |
| `d^`    | Delete from cursor to first non-blank   |
| `d$`    | Delete from cursor to end of line       |
| `c0`    | Change to beginning of line             |
| `c$`    | Change to end of line                   |
| `y0`    | Yank to beginning of line               |
| `y$`    | Yank to end of line                     |

---

# Special Line Operations

## Joining Lines

| Command | Action                       |
| ------- | ---------------------------- |
| `J`     | Join current line with next  |
| `gJ`    | Join without adding space    |
| `3J`    | Join 3 lines together        |

## Example

```
Line 1
Line 2
```

Cursor on Line 1, press `J`:

```
Line 1 Line 2
```

---

# Chapter Summary

| Motion | Position             |
| ------ | -------------------- |
| `0`    | First column         |
| `^`    | First non-blank char |
| `$`    | End of line          |
| `g_`   | Last non-blank char  |

---

# Key Takeaways

* `0` goes to column 0; `^` goes to the first actual character.
* `$` goes to the end; `g_` goes to the last non-blank.
* Combine with `d`, `c`, `y` to edit parts of a line.
* `J` joins lines together.

---

## Exercises

1. Open a file with indented code and practice `0` vs `^` to see the difference.
2. Use `d$` to delete from the cursor to the end of a line.
3. Use `c0` to change from the cursor to the beginning.
4. Practice `J` to join multiple lines.

---

## Next Chapter

[**Chapter 13 — File Motions**](13-file-motions.md)

Navigate across an entire file in seconds using jumps and scroll commands.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
