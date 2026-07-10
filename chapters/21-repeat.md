# Chapter 21 — Repeat (.)

> *"The dot command is the most powerful command in Vim."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

The dot command (`.`) repeats the **last change**.

It is perhaps Vim's single most powerful productivity feature.

---

# How It Works

Press `.` to repeat the last edit.

## Examples

```
ciwHello        →   Change inner word to "Hello"
.               →   Change next word to "Hello"
.               →   Change next word to "Hello"
```

```
dd              →   Delete a line
j               →   Move down
.               →   Delete this line too
j               →   Move down
.               →   Delete this line too
```

---

# What Counts as a Change?

Everything from entering insert mode to leaving it.

Everything from one command until the next.

## Changes

* `dw` — delete word (one change)
* `ci"text"Esc` — change inside quotes (one change)
* `dd` — delete line (one change)
* `x` — delete character (one change)

## Non-Changes

* Movement (`j`, `k`, `w`, `b`) — not changes
* Search (`/pattern`) — not a change
* Visual mode selection — not a change

---

# Practical Example

You have a list with misspelled names:

```
Jhon
Jhon
Jhon
Jhon
```

Fix the first one:

```
ciwJohn       →   Change "Jhon" to "John"
```

Then move down and press `.` for each remaining line.

```
j
.
j
.
j
.
```

All fixed with one command and three dot presses.

---

# The Dot Command Formula

The dot command repeats:

`Operator + Motion + Text`

as a single unit.

This means compound commands like `ci"`, `daw`, `c$` are all repeatable.

---

# Chapter Summary

| Key | Action                      |
| --- | --------------------------- |
| `.` | Repeat last change          |

---

# Key Takeaways

* `.` repeats the last edit.
* It works with any change (insert mode, delete, change, replace).
* Combine with movement for rapid repetitive editing.
* It is the single most valuable Vim command.

---

## Exercises

1. Change a word, move to another word, press `.`.
2. Delete a line, move down, press `.`.
3. Change inside quotes with `ci"`, move to next quote, press `.`.
4. Add a semicolon at the end of multiple lines using `A;` then `.`.

---

## Next Chapter

**Chapter 22 — Visual Mode: Character Selection**

Select text character by character in visual mode.
