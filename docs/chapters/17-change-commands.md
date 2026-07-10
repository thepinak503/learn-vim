# Chapter 17 — Change Commands

> *"Change is delete with purpose—remove old text and replace it with new in one command."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

The **change** command (`c`) is like delete, but it automatically enters insert mode afterward.

This makes it ideal for replacing text.

---

# The Change Operator

`c` is an operator. It works like `d`, but:

1. Deletes the specified text.
2. Enters insert mode immediately.

---

# Change by Motion

| Command   | Action                                     |
| --------- | ------------------------------------------ |
| `cw`      | Change to end of word (and insert)         |
| `cW`      | Change to end of WORD                      |
| `cb`      | Change backward to beginning of word       |
| `c$`      | Change to end of line                      |
| `c0`      | Change to beginning of line                |
| `c^`      | Change to first non-blank character        |
| `cG`      | Change to end of file                      |
| `cgg`     | Change to beginning of file                |
| `c%`      | Change to matching bracket                 |
| `c/foo`   | Change to next occurrence of "foo"         |

## Examples

```
function add(a, b) {
         ^

Press cw, type "subtract":

function subtract(a, b) {
```

```
print("Hello World");
            ^

Press c$, type "Goodbye!");:

print("Goodbye!");
```

---

# Change Line

| Command | Action                                    |
| ------- | ----------------------------------------- |
| `cc`    | Change entire line (delete line + insert) |
| `C`     | Change to end of line (same as c$)         |
| `S`     | Change entire line (same as cc)           |

## Example

```
line 1
line 2   ← cursor here
line 3

Press cc:

line 1
         ← blank, insert mode active
line 3
```

---

# Change with Text Objects

| Command | Action                                        |
| ------- | --------------------------------------------- |
| `ciw`   | Change inner word                             |
| `caw`   | Change a word (including trailing space)      |
| `ci(`   | Change inside parentheses                     |
| `ci"`   | Change inside double quotes                   |
| `ci'`   | Change inside single quotes                   |
| `ci[`   | Change inside square brackets                 |
| `ci{`   | Change inside curly braces                    |
| `cit`   | Change inside HTML tag                        |

Text objects make change extremely powerful.

---

# Change vs Delete

| Action     | After the Command    |
| ---------- | -------------------- |
| `dw`       | Still in normal mode |
| `cw`       | Enters insert mode   |

Use `d` when you want to remove text.

Use `c` when you want to remove and replace text.

---

# Change with Counts

| Command | Action                   |
| ------- | ------------------------ |
| `c3w`   | Change next 3 words      |
| `c2$`   | Change to end of 2 lines |
| `c5j`   | Change 5 lines down      |

---

# Change Inside Quotes Example

```
message = "Hello World";
           ^

Press ci" :

message = "";
                ^ cursor here, insert mode active
Type "Goodbye" :

message = "Goodbye";
```

This is one of the most frequently used Vim commands.

---

# Chapter Summary

| Command | Action                        |
| ------- | ----------------------------- |
| `cw`    | Change word                   |
| `cc`    | Change line                   |
| `C`     | Change to end of line         |
| `ciw`   | Change inner word             |
| `ci(`   | Change inside parentheses     |
| `ci"`   | Change inside quotes          |
| `c$`    | Change to end of line         |

---

# Key Takeaways

* `c` = delete + insert mode in one command.
* `cc` changes the whole line.
* `C` changes from cursor to end of line.
* `ci"`, `ci(`, `ci{` are extremely useful for code.
* Use `d` to remove, `c` to replace.

---

## Exercises

1. Open a file and change a word with `cw`.
2. Change a line with `cc`.
3. Change inside parentheses with `ci(`.
4. Change inside quotes with `ci"`.
5. Compare `dw` (delete) vs `cw` (change).

---

## Next Chapter

[**Chapter 18 — Copy & Paste**](18-copy-paste.md)

Master yanking (copying) and putting (pasting) in Vim.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
