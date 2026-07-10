# Chapter 15 — Insert Commands

> *"Typing text is only half of editing—the other half is knowing how to enter insert mode efficiently."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

In Chapter 7, you learned that `i` enters insert mode.

But `i` is just one of many ways to enter insert mode.

Each method places the cursor at a different position, saving you extra keystrokes.

---

# All Insert Mode Entries

## Basic Entries

| Key   | Action                                        |
| ----- | --------------------------------------------- |
| `i`   | Insert **before** the cursor                  |
| `a`   | Append **after** the cursor                   |
| `I`   | Insert at **beginning** of line               |
| `A`   | Append at **end** of line                     |
| `o`   | Open a **new line below** and insert           |
| `O`   | Open a **new line above** and insert           |

---

# Visual Examples

## `i` — Insert Before Cursor

```
Hello World
     ^
     cursor

Press i, type "Good ":

Hello Good World
```

## `a` — Append After Cursor

```
Hello World
     ^
     cursor

Press a, type " Beautiful":

Hello Beautiful World
```

## `I` — Insert at Line Start

```
   Hello World
     ^
     cursor

Press I, type "Hi ":

   Hi Hello World
```

Actually, `I` goes to the very first character of the line (ignoring indentation):

```
   Hello World
^
cursor jumps here, then enters insert mode

Press I, type "Hi ":

Hi Hello World
```

## `A` — Append at Line End

```
Hello World
     ^
     cursor

Press A, type "!!!":

Hello World!!!
                    ^
                    cursor jumps here
```

## `o` — Open Line Below

```
Line 1
Line 2
     ^
     cursor

Press o:

Line 1
                 ← new blank line, insert mode active
Line 2
```

## `O` — Open Line Above

```
Line 1
Line 2
     ^
     cursor

Press O:

Line 1
                 ← new blank line, insert mode active
Line 2
```

---

# Delete and Insert

| Key | Action                                         |
| --- | ---------------------------------------------- |
| `s` | Delete character under cursor, enter insert mode |
| `S` | Delete whole line, enter insert mode           |
| `C` | Delete from cursor to end of line, enter insert mode |
| `c` | Change operator (delete motion + insert)         |
| `cc`| Change whole line (delete line + insert)         |

## Examples

```
Hello World
^
cursor on "H"

Press s, type "J":

Jello World
```

```
Hello World
Press S (whole line deleted, insert mode):

         ← empty line, insert mode active
```

```
Hello World
     ^
     cursor on "W"

Press C:

Hello     ← " World" deleted, insert mode active
```

---

# Special Insert Mode Commands

While in insert mode, some Ctrl+key combinations still work:

| Command    | Action                          |
| ---------- | ------------------------------- |
| `Ctrl+w`   | Delete word backward            |
| `Ctrl+u`   | Delete to beginning of line     |
| `Ctrl+t`   | Indent current line right       |
| `Ctrl+d`   | Indent current line left        |
| `Ctrl+r`   | Insert from register            |
| `Ctrl+r=`  | Insert expression result        |
| `Ctrl+n`   | Autocomplete (next)             |
| `Ctrl+p`   | Autocomplete (previous)         |
| `Ctrl+x`   | Start completion menu           |
| `Ctrl+e`   | Insert character below cursor   |
| `Ctrl+y`   | Insert character above cursor   |

## `Ctrl+w` — Delete Word Backward

While typing in insert mode:

```
Hello Wor|                     ← cursor at "|"
Press Ctrl+w:

Hello |                        ← "Wor" deleted
```

## `Ctrl+u` — Delete to Line Start

```
   Hello World|                ← cursor at "|"
Press Ctrl+u:

   |                           ← back to indentation
```

## `Ctrl+r` — Insert from Register

```
Type Ctrl+r, then " (quote register):

"clipboard content pasted here"
```

## `Ctrl+r=` — Calculator

```
Type Ctrl+r, then =:

=                      ← Vim asks for expression
Type 2 + 2, press Enter:

4                      ← Result inserted
```

---

# Insert Mode Completion

Vim can autocomplete words while you type:

| Command      | Completion Type               |
| ------------ | ----------------------------- |
| `Ctrl+n`     | General keyword completion    |
| `Ctrl+p`     | General keyword completion    |
| `Ctrl+x` `Ctrl+f` | File name completion    |
| `Ctrl+x` `Ctrl+l` | Whole line completion   |
| `Ctrl+x` `Ctrl+o` | Omni-completion (LSP based) |

---

# Insert Mode Shortcuts

| Key         | Action                    |
| ----------- | ------------------------- |
| `Ctrl+[`    | Exit insert mode (like Escape) |
| `Ctrl+c`    | Exit insert mode          |
| `Shift+Insert` | Paste from clipboard   |

---

# Chapter Summary

| Key | Action                              |
| --- | ----------------------------------- |
| `i` | Insert before cursor                |
| `a` | Append after cursor                 |
| `I` | Insert at line beginning            |
| `A` | Append at line end                  |
| `o` | Open line below                     |
| `O` | Open line above                     |
| `s` | Delete character and insert          |
| `S` | Delete line and insert               |
| `C` | Delete to end of line and insert     |

---

# Key Takeaways

* Choose the right insert command to avoid extra cursor movements.
* `I` and `A` jump to line start/end before inserting.
* `o` and `O` create new lines without moving to the end first.
* `Ctrl+w` and `Ctrl+u` delete while in insert mode.
* `Ctrl+r` lets you paste from registers without leaving insert mode.

---

## Exercises

1. Practice each insert command on a sample file.
2. Type a paragraph, then use `Ctrl+w` to delete words backward.
3. Use `Ctrl+r` to paste the contents of register `"` while in insert mode.
4. Compare `i` vs `I` and `a` vs `A` by editing the same line.

---

## Next Chapter

[**Chapter 16 — Delete Commands**](16-delete-commands.md)

Master deleting text efficiently in Vim—from single characters to entire blocks.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
