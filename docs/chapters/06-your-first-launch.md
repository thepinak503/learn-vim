# Chapter 6 — Your First Launch

> *"The moment you open Vim for the first time, you enter a new world of editing."*

---

**Difficulty:** ⭐ Beginner
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

You've installed Vim or Neovim.

Now what?

This chapter walks through your very first session step by step.

By the end, you'll be able to:

* Open and close Vim
* Understand the screen layout
* Navigate the help system
* Create, edit, and save a file

---

# Opening Vim

Open your terminal and type:

```bash
vim
```

or

```bash
nvim
```

You should see:

```
~                              
~                              
~                              
~                              
~                              
   VIM - Vi IMproved           
                              
   version 9.0                
   by Bram Moolenaar et al.   
   Vim is open source and freely distributable
   +---------------------------+
   | Donate to help children   |
   | in Uganda!                |
   +---------------------------+
```

With Neovim, you might see a slightly different startup screen.

---

# Understanding the Screen

```
+------------------------------------------+
| " practice.txt         4,1           All |
|------------------------------------------|
| Line 1: This is my practice file.        |
| Line 2: I am learning Vim.              |
| Line 3:                               |
| Line 4:                               |
| ...                                    |
| ~                                       |
| ~                                       |
| ~                                       |
|------------------------------------------|
| :                                      |
+------------------------------------------+
```

## The Main Area

This is where your file content appears.

Empty lines show a `~` character (tilde).

## The Status Line

The bottom line shows:

* File name
* Line number
* Column number
* File status

## The Command Line

The very last line is where commands appear.

---

# How to Quit Vim

This is the most famous Vim meme:

> "How do I exit Vim?"

Here's how:

Press **Escape** to make sure you're in normal mode.

Then type:

```
:q!
```

Then press **Enter**.

This quits Vim without saving changes.

## Other Ways to Quit

| Command     | Action                                |
| ----------- | ------------------------------------- |
| `:q`        | Quit (only if no unsaved changes)     |
| `:q!`       | Quit and discard unsaved changes      |
| `:wq`       | Save and quit                         |
| `:x`        | Save and quit (same as `:wq`)         |
| `:w`        | Save only (don't quit)                |
| `ZZ`        | Save and quit (no colon needed)       |
| `ZQ`        | Quit without saving (no colon needed) |

---

# Opening a File

To open an existing file:

```bash
vim filename.txt
```

To create a new file:

```bash
vim newfile.txt
```

If `newfile.txt` doesn't exist, Vim creates an empty buffer. When you save, the file is created on disk.

## Open Multiple Files

```bash
vim file1.txt file2.txt file3.txt
```

Use `:next` and `:prev` to switch between them.

---

# Your First Edit

Let's create and edit a file step by step.

## Step 1: Open Vim

```bash
vim hello.txt
```

## Step 2: Enter Insert Mode

Press the letter `i`.

Look at the bottom left:

```
-- INSERT --
```

This means you're in insert mode. Now keys type text.

## Step 3: Type Something

Type:

```
Hello, Vim!
I am learning to edit text.
```

## Step 4: Return to Normal Mode

Press **Escape**.

The `-- INSERT --` indicator disappears.

## Step 5: Save the File

Type `:w` and press **Enter**.

```
:w
```

You should see:

```
"hello.txt" 2L, 40B written
```

## Step 6: Quit Vim

Type `:q` and press **Enter**.

Congratulations. You just created your first file with Vim.

---

# Navigation Basics

Now reopen `hello.txt`:

```bash
vim hello.txt
```

In normal mode, you can move the cursor with:

| Key   | Direction |
| ----- | --------- |
| `h`   | Left      |
| `j`   | Down      |
| `k`   | Up        |
| `l`   | Right     |

Arrow keys also work, but training yourself to use `h`/`j`/`k`/`l` will be faster in the long run.

## Try These

* Press `j` to move down.
* Press `k` to move up.
* Press `l` to move right.
* Press `h` to move left.

---

# The Help System

Vim has an extensive built-in help system.

Open help with:

```
:help
```

This opens a help window.

Navigate help like any Vim file.

Search for specific topics:

```
:help navigation
:help insert
:help saving
```

Close the help window with:

```
:q
```

## Help Tips

* Help files use `.txt` extension.
* Tags appear between `|` bars—you can jump to them with `Ctrl+]`.
* Go back with `Ctrl+O`.
* `:help :w` explains the `:w` command.
* `:help i` explains insert mode.

---

# Practice: Your First Session

Open Vim and try this:

1. Open a file called `practice.md`.
2. Enter insert mode by pressing `i`.
3. Write a short paragraph about why you want to learn Vim.
4. Press **Escape** to return to normal mode.
5. Save with `:w`.
6. Move around the file using `h`, `j`, `k`, `l`.
7. Quit with `:q`.

---

# Common Beginner Mistakes

## Typing in Normal Mode

If you're in normal mode and type `d`, `i`, `e`, etc., Vim interprets them as commands, not text.

If unexpected things happen, press **Escape** to return to normal mode.

## Can't Exit Insert Mode

Press **Escape**. If that doesn't work, try `Ctrl+C` or `Ctrl+[` (which is equivalent to Escape).

## Accidentally Opened Help

Type `:q` to close the help window.

## Lost in Commands

Press **Escape** a few times to reset to normal mode.

---

# Chapter Summary

* Opening Vim: `vim filename`
* Entering insert mode: `i`
* Returning to normal mode: **Escape**
* Saving: `:w`
* Quitting: `:q` or `:q!`
* Navigating: `h`, `j`, `k`, `l`
* Help: `:help`

---

# Key Takeaways

* Vim has two main modes you'll use constantly: **normal** and **insert**.
* Insert mode types text; normal mode runs commands.
* Knowing how to exit Vim is your first milestone.
* The built-in help system is comprehensive and always available.
* Practice the `h`, `j`, `k`, `l` keys—they form the foundation of Vim navigation.

---

## Exercises

1. Open Vim and enter insert mode by pressing `i`. Type your name.
2. Return to normal mode with Escape. Save and quit with `:wq`.
3. Reopen the file and navigate using `h`, `j`, `k`, `l`.
4. Open the help system with `:help` and explore a topic.

---

## Next Chapter

**[Chapter 7 — Understanding Modes](07-understanding-modes.md)**

The most important concept in Vim. We'll explore all four modes, when to use each, and how to switch between them efficiently.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
