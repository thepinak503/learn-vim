# Chapter 18 — Copy & Paste

> *"In Vim, copying and pasting are called yanking and putting."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

Copying and pasting in Vim uses different terminology and concepts:

* **Yank** = Copy
* **Put** = Paste
* **Registers** = Multiple clipboards

---

# Yanking (Copying)

| Command | Action                        |
| ------- | ----------------------------- |
| `yy`    | Yank current line             |
| `Y`     | Yank current line (same as yy) |
| `yw`    | Yank word                     |
| `y$`    | Yank to end of line           |
| `y0`    | Yank to beginning of line     |
| `yG`    | Yank from cursor to end of file |
| `ygg`   | Yank from cursor to beginning |
| `y5j`   | Yank 5 lines down             |

## Visual Mode Yanking

1. Select text with `v`, `V`, or `Ctrl+v`.
2. Press `y` to yank.

---

# Putting (Pasting)

| Command | Action                                |
| ------- | ------------------------------------- |
| `p`     | Put (paste) **after** cursor           |
| `P`     | Put (paste) **before** cursor          |
| `gp`    | Put after cursor, then move cursor to end |
| `gP`    | Put before cursor, then move cursor to end |

## With Counts

| Command | Action                     |
| ------- | -------------------------- |
| `3p`    | Paste 3 times              |
| `5P`    | Paste 5 times before       |

---

# Registers (Multiple Clipboards)

Vim has **registers** — named storage locations for text.

| Register | Name           | Contents                           |
| -------- | -------------- | ---------------------------------- |
| `"`      | Unnamed        | Last yank or delete                |
| `0`      | Yank          | Last yank (not delete)             |
| `1`-`9`  | Delete history | Last 9 deletes                     |
| `a`-`z`  | Named          | User-defined storage               |
| `+`      | System clipboard | System clipboard (OS clipboard)   |
| `*`      | Selection clipboard | Mouse selection                |
| `_`      | Black hole     | Discard text (like /dev/null)      |

## Using Registers

To use a register, prefix the command with `"` and the register name:

```
"ayy        →   Yank current line into register a
"ap         →   Paste from register a
"0p         →   Paste last yanked text (even after delete)
"+p         →   Paste from system clipboard
"+yy        →   Yank into system clipboard
```

## Viewing Registers

```
:reg
```

Shows all registers and their contents.

```
:reg a b c
```

Shows specific registers.

---

# The Black Hole Register

Sometimes you want to delete text without storing it.

Use the black hole register:

```
"_dd       →   Delete line without saving to any register
"_dw       →   Delete word without saving
```

---

# Swapping Text

A common editing task: swap two words or lines.

```
apple banana
^ cursor on apple

To swap: "apple banana" → "banana apple":

dw          →   delete "apple " (store in register ")
e           →   move to end of "banana"
p           →   put "apple " after "banana"
```

---

# Chapter Summary

| Command | Action                 |
| ------- | ---------------------- |
| `yy`    | Yank line              |
| `yw`    | Yank word              |
| `y$`    | Yank to end of line    |
| `p`     | Put after cursor       |
| `P`     | Put before cursor      |
| `"ayy`  | Yank to register a     |
| `"ap`   | Paste from register a  |
| `"+y`   | Yank to system clipboard |
| `:reg`  | View registers         |

---

# Key Takeaways

* `yy` yanks a line, `p` pastes it.
* Deleted text is also stored in registers — you can paste it.
* Use `"a`-`"z` for named registers (multiple clipboards).
* Use `"+` for the system clipboard.
* `:reg` shows all register contents.

---

## Exercises

1. Yank a line with `yy` and paste it multiple times with `p`.
2. Yank a word with `yw` and paste it elsewhere.
3. Store text in register `a` with `"ayy`, then paste with `"ap`.
4. Copy text from another application and paste into Vim with `"+p`.
5. View all registers with `:reg`.

---

## Next Chapter

[**Chapter 19 — Undo / Redo**](19-undo-redo.md)

Learn how to undo and redo changes in Vim, including branching undo history.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
