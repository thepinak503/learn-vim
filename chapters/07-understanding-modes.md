# Chapter 7 — Understanding Modes

> *"Modes are not a limitation—they are a superpower."*

---

**Difficulty:** ⭐ Beginner
**Estimated Reading Time:** 20–25 minutes

---

# Introduction

Most text editors have one mode:

> You type, text appears.

Vim has **multiple modes**.

This sounds complicated, but actually it's what makes Vim powerful.

Think of it this way:

```
Normal mode  =  Steering wheel (driving, navigating)
Insert mode  =  Accelerator (moving forward)
Visual mode  =  Highlighting (selecting)
Command mode =  Controls (signals, wipers)
```

Each mode has a specific job.

---

# The Four Main Modes

| Mode      | Purpose                         | Enter               | Exit        |
| --------- | ------------------------------- | ------------------- | ----------- |
| Normal    | Navigation, editing commands    | Escape, Ctrl+[      | N/A (default)|
| Insert    | Typing text                     | i, a, o, etc.       | Escape       |
| Visual    | Selecting text                  | v, V, Ctrl+v       | Escape       |
| Command   | Running commands                | :                   | Enter, Escape|

---

# Normal Mode

This is Vim's **default mode**.

You start in normal mode when you open Vim.

## What Normal Mode Is For

* Moving around the file
* Deleting, copying, pasting
* Searching
* Undoing and redoing
* Running commands
* Everything except typing text

## Key Concept

In normal mode, **keys are commands, not text**.

| Key   | Command            |
| ----- | ------------------ |
| `j`   | Move down          |
| `k`   | Move up            |
| `dd`  | Delete a line      |
| `yy`  | Copy (yank) a line |
| `u`   | Undo               |

Return to normal mode from any other mode by pressing **Escape**.

---

# Insert Mode

Insert mode is where you **type text**.

## Entering Insert Mode

| Key      | Action                                    |
| -------- | ----------------------------------------- |
| `i`      | Insert before cursor                      |
| `a`      | Append after cursor                       |
| `I`      | Insert at beginning of line               |
| `A`      | Append at end of line                     |
| `o`      | Open a new line below and insert          |
| `O`      | Open a new line above and insert          |
| `s`      | Delete character and insert               |
| `S`      | Delete line and insert                    |
| `C`      | Delete from cursor to end of line, insert |

## While in Insert Mode

* Keys type text normally.
* Arrow keys move the cursor (but using `h`/`j`/`k`/`l` requires normal mode).
* Backspace deletes previous characters.

## Exiting Insert Mode

Press **Escape**.

Or use `Ctrl+C` or `Ctrl+[` .

---

# Visual Mode

Visual mode is for **selecting text**.

## Types of Visual Mode

| Key       | Selection Type         |
| --------- | ---------------------- |
| `v`       | Character-wise select  |
| `V`       | Line-wise select       |
| `Ctrl+v`  | Block (column) select  |

## Character-Wise Visual Mode (`v`)

Press `v` and move the cursor.

Characters are highlighted as you move.

```
Hello World
^^^^^^^     ← highlighted
```

## Line-Wise Visual Mode (`V`)

Press `V` and move up/down.

Entire lines are highlighted.

```
Line one       ← highlighted
Line two       ← highlighted
Line three
```

## Block Visual Mode (`Ctrl+v`)

Press `Ctrl+v` and move in any direction.

Selects a rectangular block of text.

```
Col1    Col2    Col3
^^^^    ^^^^
^^^^    ^^^^
only these columns selected
```

## What to Do With Selections

Once text is selected:

| Command | Action          |
| ------- | --------------- |
| `d`     | Delete          |
| `y`     | Yank (copy)     |
| `c`     | Change (delete + insert) |
| `>`     | Indent right    |
| `<`     | Indent left     |
| `~`     | Toggle case     |
| `u`     | Lowercase       |
| `U`     | Uppercase       |

Exit visual mode with **Escape**.

---

# Command Mode

Command mode is for running **ex-commands** (inherited from the `ex` editor).

## Entering Command Mode

From normal mode, press `:`.

The cursor jumps to the bottom of the screen.

```
:_
```

## Common Commands

| Command   | Action                   |
| --------- | ------------------------ |
| `:w`      | Save file                |
| `:q`      | Quit                     |
| `:wq`     | Save and quit            |
| `:q!`     | Quit without saving      |
| `:e file` | Open a file              |
| `:help`   | Open help                |
| `:set nu` | Show line numbers        |
| `:!cmd`   | Run shell command        |

Press **Enter** to execute the command.

Press **Escape** to cancel.

---

# Additional Modes

## Replace Mode

Enter with `R` (capital R).

Overwrites existing characters instead of inserting.

```
Hello World
R
Rello World    ← H replaced with R
```

## Terminal Mode (Neovim Only)

Enter with `:terminal` or `:term`.

Works like a terminal inside Neovim.

Exit with `Ctrl+\ Ctrl+n` to return to normal mode.

---

# Mode Switching Diagram

```
                 +--------------+
                 |   NORMAL     | ← Default mode
                 +--------------+
                  ↕ ↑        ↓ ↕
            Esc   │ │ i,a,o  │ │     v,V,Ctrl+v
                  │ │   s,S  │ │
             +--------+   +--------+
             | INSERT |   | VISUAL |
             +--------+   +--------+
                  │            │
             +---------+  +---------+
             | REPLACE |  | COMMAND | ← : enters this
             +---------+  +---------+
```

---

# Common Mistake: Staying in Insert Mode

Beginners often stay in insert mode and use arrow keys.

This defeats the purpose of Vim.

**Pattern to develop:**

```
Normal → Insert → Normal → Insert → Normal
```

Enter insert mode only to type, then immediately return to normal mode.

---

# Visual Indicators

Vim shows your current mode in the bottom left:

| Indicator    | Mode       |
| ------------ | ---------- |
| (nothing)    | Normal     |
| `-- INSERT --` | Insert   |
| `-- VISUAL --` | Visual     |
| `-- V-BLOCK --`| Visual Block |
| `-- REPLACE --`| Replace   |
| `:`           | Command line about to be entered |

Watch this indicator—it tells you what mode you're in.

---

# Chapter Summary

| Mode    | Purpose           | Enter         |
| ------- | ----------------- | ------------- |
| Normal  | Navigation, commands | Escape      |
| Insert  | Typing text       | `i`, `a`, `o` |
| Visual  | Selecting text    | `v`, `V`, `Ctrl+v` |
| Command | Running commands  | `:`           |

---

# Key Takeaways

* Normal mode is the default—use it most of the time.
* Enter insert mode only when typing new text.
* Return to normal mode as soon as you finish typing.
* Visual mode makes selecting text visual and intuitive.
* The bottom of the screen shows your current mode.
* Practice switching between modes until it becomes automatic.

---

## Exercises

1. Open a file and practice switching: Normal → Insert → Normal → Insert.
2. Enter visual mode, select some text, then press Escape.
3. Enter command mode (`:`) and type `:help modes`, then read about modes.
4. Practice all four ways to enter insert mode on the same line.

---

## Next Chapter

**Chapter 8 — Opening, Saving and Quitting**

Master the essential file operations that you'll use every day.
