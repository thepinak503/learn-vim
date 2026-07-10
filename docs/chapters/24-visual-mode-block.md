# Chapter 24 — Visual Mode: Block Selection

> *"Block visual mode treats text like a spreadsheet—select columns, not rows."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Block visual mode selects a rectangular region of text.

It is useful for:

* Editing columns of data
* Adding prefixes to multiple lines
* Modifying aligned code

---

# Entering Block Mode

| Key        | Action                      |
| ---------- | --------------------------- |
| `Ctrl+v`   | Enter block visual mode     |

Move in any direction to extend the rectangular selection.

---

# Block Actions

| Key   | Action                              |
| ----- | ----------------------------------- |
| `d`   | Delete block                        |
| `y`   | Yank block                          |
| `c`   | Change block (delete + insert into all lines) |
| `I`   | Insert at all selected lines (return to normal) |
| `A`   | Append at all selected lines        |
| `r`   | Replace all selected characters     |
| `J`   | Join selected lines                 |
| `~`   | Toggle case in block                |

---

# Example: Inserting Text on Multiple Lines

```
1. item one
2. item two
3. item three
4. item four
```

1. Press `Ctrl+v` on line 1, column 1.
2. Press `jjj` to select 4 lines vertically.
3. Press `I` (capital I).
4. Type `- ` (dash space).
5. Press **Escape**.

Result:

```
- 1. item one
- 2. item two
- 3. item three
- 4. item four
```

---

# Example: Commenting Out Code

```python
print("hello")
print("world")
print("goodbye")
```

1. Press `Ctrl+v` at column 1, line 1.
2. Press `jj` to select 3 lines.
3. Press `I` (capital I).
4. Type `# `.
5. Press **Escape**.

Result:

```python
# print("hello")
# print("world")
# print("goodbye")
```

---

# Example: Deleting a Column

```
Name    Age    City
Alice   30     NY
Bob     25     LA
Carol   35     SF
```

1. Press `Ctrl+v` at column 8 (start of "Age").
2. Move right 3 columns and down 3 lines.
3. Press `d`.

Result:

```
Name    City
Alice   NY
Bob     LA
Carol   SF
```

---

# Chapter Summary

| Key      | Action                       |
| -------- | ---------------------------- |
| `Ctrl+v` | Enter block visual mode      |
| `I`      | Insert on all selected lines |
| `A`      | Append on all selected lines |
| `r`      | Replace all selected chars   |
| `d`      | Delete block                 |

---

# Key Takeaways

* `Ctrl+v` enters block visual mode.
* Use it for column editing across multiple lines.
* `I` inserts before the block on every selected line.
* `A` appends after the block on every selected line.
* Press Escape after `I`/`A` to apply changes to all lines.

---

## Exercises

1. Create a list of 5 items and use `Ctrl+v` to add a bullet point to all.
2. Open a Python file and use block visual mode to comment out 3 lines with `I` + `# `.
3. Create a simple table and delete a column using block visual mode.

---

## Next Chapter

[**Chapter 25 — Text Objects: iw and aw**](25-text-objects-iw-aw.md)

Edit structured text objects like words with precision.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
