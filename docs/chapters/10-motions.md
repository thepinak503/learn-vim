# Chapter 10 — Motions

> *"Motions are the verbs in Vim's editing language."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 20–25 minutes

---

# Introduction

In the previous chapter, you learned how to move the cursor.

But in Vim, movement keys are not just for navigation.

They are **motions**—and motions can be combined with **operators** to perform powerful edits.

---

# What Is a Motion?

A **motion** is a command that moves the cursor.

Every movement key you learned is a motion:

* `w` — move to next word (motion)
* `j` — move down one line (motion)
* `$` — move to end of line (motion)
* `G` — move to end of file (motion)

But motions alone are just the beginning.

---

# The Key Insight

In Vim, you can combine an **operator** + **motion** to act on the text between the cursor and the destination.

```
Operator   +   Motion   =   Action

   d       +     w      =   dw  (delete word)
   c       +     $      =   c$  (change to end of line)
   y       +     j      =   yj  (yank current + next line)
```

This is the grammar that makes Vim powerful.

---

# Common Operators

| Operator | Action             |
| -------- | ------------------ |
| `d`      | Delete             |
| `c`      | Change (delete + insert) |
| `y`      | Yank (copy)        |
| `v`      | Character-wise visual |
| `g~`     | Swap case          |
| `gu`     | Make lowercase     |
| `gU`     | Make uppercase     |
| `>`      | Indent right       |
| `<`      | Indent left        |
| `=`      | Auto-indent        |

---

# Operator + Motion Examples

## Delete

| Command | Action                                |
| ------- | ------------------------------------- |
| `dw`    | Delete from cursor to next word       |
| `d3w`   | Delete next 3 words                   |
| `db`    | Delete backward to beginning of word  |
| `d$`    | Delete to end of line                 |
| `d0`    | Delete to beginning of line           |
| `dG`    | Delete from cursor to end of file     |
| `dgg`   | Delete from cursor to beginning       |
| `d10j`  | Delete current line and 10 lines down |

## Change

| Command | Action                                |
| ------- | ------------------------------------- |
| `cw`    | Change word (delete word + insert)    |
| `c$`    | Change to end of line                 |
| `c0`    | Change to beginning of line           |
| `c3w`   | Change next 3 words                   |
| `cG`    | Change to end of file                 |

## Yank (Copy)

| Command | Action                                |
| ------- | ------------------------------------- |
| `yw`    | Yank word                             |
| `y$`    | Yank to end of line                   |
| `y0`    | Yank to beginning of line             |
| `y3w`   | Yank next 3 words                     |
| `yG`    | Yank from cursor to end of file       |
| `ygg`   | Yank from cursor to beginning         |

---

# Motion Types

Motions can be:

| Category       | Examples               | Description          |
| -------------- | ---------------------- | -------------------- |
| Character      | `h`, `j`, `k`, `l`    | Basic cursor movement |
| Word           | `w`, `b`, `e`         | Word-based movement  |
| Line           | `0`, `$`, `^`, `g_`   | Line-boundary movement |
| File           | `gg`, `G`, `H`, `L`   | File-level movement  |
| Search         | `f`, `F`, `t`, `T`    | Character search     |
| Text object    | `iw`, `ip`, `i(`, `i"` | Structural elements |

---

# Inclusive vs Exclusive Motions

Some motions are **inclusive** (include the character under the cursor).

Some are **exclusive** (stop before the character).

```
d$  →  deletes from cursor to end of line (inclusive of last char)
dw  →  deletes from cursor to start of next word (exclusive of first char of next word)
```

You don't need to memorize this—just be aware it exists.

---

# Compound Example

Let's see how motions combine with operators in practice.

File content:

```python
def calculate_total(items):
    total = 0
    for item in items:
        total += item.price
    return total
```

| If cursor is on... | You type | Result |
| ------------------ | -------- | ------ |
| Line 3, column 10  | `d$`     | Deletes rest of line |
| `items` on line 1  | `ci(`     | Changes parentheses content |
| Line 2             | `dd`      | Deletes whole line |
| `total` on line 2  | `yiw`     | Copies word `total` |
| Anywhere           | `gg`      | Jumps to line 1 |

---

# The Dot Command and Motions

The dot (`.`) repeats the **last change**.

If you delete a word with `dw`, then press `.`, it deletes the next word.

If you change inside quotes with `ci"`, then press `.` somewhere else inside quotes, it repeats the change.

---

# Chapter Summary

* A **motion** moves the cursor.
* An **operator** performs an action.
* **Operator + Motion** = Powerful editing command.
* Common operators: `d` (delete), `c` (change), `y` (yank).
* Most movement keys can serve as motions.
* The dot command repeats the last operator+motion combo.

---

# Key Takeaways

* Vim's power comes from composing operators with motions.
* `dw`, `c$`, `yG` — learn to think in this pattern.
* Almost every movement can be combined with an operator.
* Practice the combinations; they will become automatic.

---

## Exercises

1. Open a file and practice: `dw`, `d3w`, `d$`, `d0`, `dG`.
2. Practice change: `cw`, `c$`, `c3w`.
3. Practice yank: `yw`, `y$`, `yG`.
4. Combine with counts: `d5w`, `c2$`, `y10j`.

---

## Next Chapter

[**Chapter 11 — Word Motions**](11-word-motions.md)

Master word-level navigation—the motions you'll use most frequently.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
