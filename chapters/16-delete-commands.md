# Chapter 16 — Delete Commands

> *"In Vim, deletion is not just removal—it's the first step to cutting, moving, and reshaping text."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

Deleting is one of the most common editing actions.

In Vim, deletion is really **cutting**—deleted text is stored in a register and can be pasted later.

---

# Character Deletion

| Key   | Action                           |
| ----- | -------------------------------- |
| `x`   | Delete character under cursor    |
| `X`   | Delete character before cursor   |
| `s`   | Delete character and enter insert mode |

## Examples

```
Hello
^

Press x:

ello
```

```
Hello
   ^
   
Press X:

Helo
```

---

# Word Deletion

| Key   | Action                                      |
| ----- | ------------------------------------------- |
| `dw`  | Delete from cursor to start of next word    |
| `daw` | Delete **a word** (including trailing space) |
| `diw` | Delete **inner word** (no trailing space)   |
| `db`  | Delete backward to start of word            |
| `dW`  | Delete to next WORD                         |

## Examples

```
Hello Beautiful World
      ^
      
Press dw:

Hello World
```

```
Hello Beautiful World
      ^

Press daw:

HelloWorld
```

---

# Line Deletion

| Key   | Action                                    |
| ----- | ----------------------------------------- |
| `dd`  | Delete entire current line                |
| `D`   | Delete from cursor to end of line         |
| `d0`  | Delete from cursor to beginning of line   |
| `d^`  | Delete from cursor to first non-blank     |
| `d$`  | Delete from cursor to end of line         |
| `dgg` | Delete from cursor to beginning of file   |
| `dG`  | Delete from cursor to end of file         |

## With Counts

| Command | Action                    |
| ------- | ------------------------- |
| `3dd`   | Delete 3 lines            |
| `d5j`   | Delete 5 lines downward   |

---

# Block Deletion

| Key      | Action                       |
| -------- | ---------------------------- |
| `d%`     | Delete to matching bracket   |
| `d)`     | Delete to next sentence      |
| `d}`     | Delete to next paragraph     |
| `dap`    | Delete **a** paragraph       |

---

# Visual Mode Deletion

1. Select text with `v`, `V`, or `Ctrl+v`.
2. Press `d` to delete.

This is the most intuitive way to delete for beginners.

---

# Deleting and Inserting Combined

| Key | Action                      |
| --- | --------------------------- |
| `s` | Delete char, enter insert   |
| `S` | Delete line, enter insert   |
| `C` | Delete to end of line, enter insert |
| `cc`| Delete line, enter insert   |

---

# Undoing Deletions

| Key   | Action       |
| ----- | ------------ |
| `u`   | Undo         |
| `Ctrl+r` | Redo   |

All deletions can be undone.

---

# Chapter Summary

| Key    | Deletes                        |
| ------ | ------------------------------ |
| `x`    | Character under cursor         |
| `dw`   | Word (from cursor)             |
| `dd`   | Current line                   |
| `D`    | To end of line                 |
| `dG`   | To end of file                 |
| `d}`   | To end of paragraph            |
| `d%`   | To matching bracket            |

---

# Key Takeaways

* `x` deletes a single character; `X` deletes the character before the cursor.
* `dd` deletes a whole line; `D` deletes to the end of the line.
* Counts work: `3dd` deletes 3 lines.
* Deleted text is stored in a register and can be pasted.
* Combine `d` with any motion for precise deletion.

---

## Exercises

1. Open a file and practice `x`, `dd`, `dw`, `D`.
2. Use `3dd` to delete three lines at once.
3. Delete from the cursor to the end of the file with `dG`.
4. Use visual mode to select and delete text.
5. Undo all deletions with `u`.

---

## Next Chapter

**Chapter 17 — Change Commands**

Learn how to delete text and immediately enter insert mode to replace it.
