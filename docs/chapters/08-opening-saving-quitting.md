# Chapter 8 — Opening, Saving and Quitting

> *"Every Vim session starts with opening a file and ends with saving your work."*

---

**Difficulty:** ⭐ Beginner
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

File operations are the most basic tasks in any editor.

In Vim, they're done through **commands** (starting with `:`) or **key sequences**.

By the end of this chapter, you'll be able to:

* Open files in multiple ways
* Save files with different options
* Quit Vim gracefully
* Handle multiple files

---

# Opening Files

## From the Terminal

```bash
vim filename.txt
```

Opens `filename.txt` in Vim.

If the file doesn't exist, Vim creates a new buffer.

## Open Multiple Files

```bash
vim file1.txt file2.txt file3.txt
```

Vim opens the first file. Use these commands to switch:

| Command    | Action                     |
| ---------- | -------------------------- |
| `:next` or `:n` | Go to next file        |
| `:previous` or `:N` or `:prev` | Go to previous file |
| `:first`   | Go to first file           |
| `:last`    | Go to last file            |
| `:args`    | Show list of open files    |

## Open a File From Inside Vim

```
:e filename.txt
```

Short for **edit**. Opens `filename.txt` in the current buffer.

```
:e /path/to/file
```

Opens a file from an absolute path.

```
:e *.txt
```

Opens a wildcard match (with tab completion).

## Using Tab Completion

Type a partial path and press **Tab**:

```
:e /etc/ng[TAB]
:e /etc/nginx/
```

Vim completes the path.

---

# Saving Files

## Basic Save

```
:w
```

Writes the current buffer to disk.

## Save As

```
:w newname.txt
```

Saves with a new name. The original file remains unchanged.

## Save to a Different Location

```
:w /path/to/backup.txt
```

Saves a copy to the specified path.

## Save and Quit

```
:wq
```

Save changes and exit.

## Save with Sudo

When you open a file without `sudo` but need to save:

```
:w !sudo tee %
```

This runs the write command through `sudo`.

---

# Quitting Vim

| Command   | Action                          |
| --------- | ------------------------------- |
| `:q`      | Quit (only if no unsaved changes) |
| `:q!`     | Force quit, discard changes     |
| `:wq`     | Save and quit                   |
| `:x`      | Save and quit (same as `:wq`)   |
| `ZZ`      | Save and quit (normal mode)     |
| `ZQ`      | Quit without saving (normal mode) |

## Quit All Files

If you have multiple files open:

```
:qa
```

Quit all.

```
:qa!
```

Force quit all, discarding changes.

```
:wqa
```

Save all and quit.

---

# Discarding Changes

Sometimes you edit a file and want to **discard all changes**.

To reload the original file from disk:

```
:e!
```

This discards all modifications since the last save.

## Abandon Changes and Quit

```
:cq
```

Quit with an error code (useful for Git when you want to abort a commit).

---

# Understanding the Status Line

When you save, Vim shows a message:

```
"filename.txt" 10L, 234B written
```

This means:

* 10 lines
* 234 bytes
* File saved

If the file is new:

```
"filename.txt" [New] 10L, 234B written
```

If there are unsaved changes:

```
"filename.txt" 10L, 234B written
```

Vim displays indicators like `[+]` or `[Modified]` in the status line.

---

# Reading Files Into a Buffer

You can insert the content of another file into the current buffer:

```
:r otherfile.txt
```

Reads `otherfile.txt` and inserts it below the cursor.

```
:0r otherfile.txt
```

Reads and inserts at the beginning of the file.

```
:r !command
```

Reads the output of a shell command:

```
:r !date
```

Inserts the current date and time.

---

# File Operations Cheat Sheet

| Action                | Command   |
| --------------------- | --------- |
| Open file             | `:e file` |
| Save                  | `:w`      |
| Save as               | `:w name` |
| Save and quit         | `:wq`     |
| Quit                  | `:q`      |
| Force quit            | `:q!`     |
| Save all              | `:wa`     |
| Quit all              | `:qa`     |
| Save and quit all     | `:wqa`    |
| Next file             | `:n`      |
| Previous file         | `:prev`   |
| Reload from disk      | `:e!`     |
| Insert file contents  | `:r file` |
| Insert command output | `:r !cmd` |

---

# Chapter Summary

* Open files with `vim filename` or `:e filename` inside Vim.
* Save with `:w`, save as with `:w newname`.
* Quit with `:q`, force quit with `:q!`.
* Save and quit with `:wq` or `ZZ`.
* `ZZ` and `ZQ` are normal-mode shortcuts that skip the colon.
* Use `:r` to insert file contents or command output into your buffer.

---

# Key Takeaways

* File commands always start with `:`.
* Press Enter to execute a command.
* `!` forces an action (quit without saving, overwrite, etc.).
* `:wq` saves and quits in one step.
* `:e!` reloads the file from disk, discarding changes.
* Multiple files can be opened and managed from the command line.

---

## Exercises

1. Create a new file, write some text, save it, and quit.
2. Reopen the file, add a line, and save using `ZZ`.
3. Open three files at once and practice switching between them with `:n` and `:prev`.
4. Insert the output of `:r !ls` into a text file.

---

## Next Chapter

[**Chapter 9 — Cursor Movement**](09-cursor-movement.md)

Now that you can open and save files, let's learn how to move around efficiently.
