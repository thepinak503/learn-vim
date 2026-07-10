# Chapter 64 — Practice Exercises

> *"Practice is the only path to mastery."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

These exercises cover every major concept from the handbook.

Work through them in order.

---

# Exercise 1: The Basics

1. Create a new file: `vim practice.txt`
2. Enter insert mode and type 5 lines about your day.
3. Save the file with `:w`.
4. Quit with `:q`.

---

# Exercise 2: Navigation

1. Open a file with at least 50 lines.
2. Move to line 1 with `gg`.
3. Move to the last line with `G`.
4. Move to line 25 with `25G`.
5. Move forward 10 words with `10w`.
6. Move backward 5 words with `5b`.
7. Move to the end of line with `$`.
8. Move to the beginning with `0`.

---

# Exercise 3: Editing

1. Delete a line with `dd`.
2. Delete 3 lines with `3dd`.
3. Delete a word with `dw`.
4. Change a word with `ciw`.
5. Change inside parentheses with `ci(`.
6. Change inside quotes with `ci"`.

---

# Exercise 4: Copy and Paste

1. Yank a line with `yy`.
2. Paste it below with `p`.
3. Paste it above with `P`.
4. Yank a word with `yiw`.
5. Delete a line and paste it elsewhere using registers.
6. Yank into register `a` with `"ayy`.

---

# Exercise 5: Visual Mode

1. Select 3 lines with `V` and `j`.
2. Indent them with `>`.
3. Select a block with `Ctrl+v`.
4. Add a prefix to all lines with `I`.

---

# Exercise 6: Search and Replace

1. Search for a word with `/word`.
2. Navigate matches with `n` and `N`.
3. Replace all instances with `:%s/old/new/g`.
4. Replace with confirmation using `c` flag.

---

# Exercise 7: Macros

1. Record a macro that adds a semicolon to the end of a line.
2. Apply it to 5 lines.
3. Record a macro that comments out a line.
4. Apply it using a count.

---

# Exercise 8: Multiple Files

1. Open 3 files simultaneously.
2. Navigate buffers with `:bn` and `:bp`.
3. Split windows with `:split` and `:vsplit`.
4. Navigate windows with `Ctrl+w`.

---

# Exercise 9: Configuration

1. Create a basic vimrc with:
   - Line numbers
   - Tab width 4
   - Syntax highlighting
   - Incremental search
2. Add a key mapping for quick saving.
3. Install a plugin using vim-plug.

---

# Exercise 10: Challenge Mode

Create a file with the following content:

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

result1 = add(10, 5)
result2 = subtract(10, 5)
print(result1)
print(result2)
```

Then perform these tasks as fast as possible:

1. Rename `add` to `multiply` and `subtract` to `divide`.
2. Change the arguments from `10, 5` to `20, 4`.
3. Delete the `print(result2)` line.
4. Add a new function called `modulo`.
5. Auto-indent the entire file.

---

# Chapter Summary

Practice these exercises regularly.

Repetition builds muscle memory.

---

## Next Chapter

[**Chapter 65 — Cheat Sheet**](65-cheat-sheet.md)

Your quick reference for all Vim commands.
