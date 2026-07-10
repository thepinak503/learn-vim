# Chapter 23 — Visual Mode: Line Selection

> *"Line-wise selection makes editing entire lines effortless."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

Line-wise visual mode selects whole lines at a time.

It is the most common visual mode for code editing.

---

# Line-Wise Visual Mode

Press `V` (capital V) to enter line-wise visual mode.

| Key | Action                             |
| --- | ---------------------------------- |
| `V` | Enter line-wise visual mode        |
| `j` | Extend selection downward          |
| `k` | Extend selection upward            |

---

# Actions on Selection

Same as character-wise, but operates on whole lines:

| Key   | Action                        |
| ----- | ----------------------------- |
| `d`   | Delete selected lines         |
| `y`   | Yank selected lines           |
| `c`   | Change selected lines         |
| `>`   | Indent right                  |
| `<`   | Indent left                   |
| `J`   | Join selected lines           |
| `=`   | Auto-indent selected lines    |

---

# Example

```
def hello():
    print("Hello")
    print("World")
    return True
```

Press `V` on line 2, press `j` twice:

```
def hello():
    print("Hello")    ← selected
    print("World")    ← selected
    return True       ← selected
```

Press `>`:

```
def hello():
        print("Hello")
        print("World")
        return True
```

---

# Switching Visual Modes

While in visual mode, you can switch:

| Key         | Switch To              |
| ----------- | ---------------------- |
| `v`         | Character-wise         |
| `V`         | Line-wise              |
| `Ctrl+v`    | Block-wise             |

---

# Chapter Summary

| Key | Action                        |
| --- | ----------------------------- |
| `V` | Enter line-wise visual mode   |
| `d` | Delete lines                  |
| `y` | Yank lines                    |
| `>` | Indent right                  |
| `<` | Indent left                   |

---

# Key Takeaways

* `V` selects whole lines.
* Move with `j`/`k` to extend the selection.
* `d`, `y`, `c`, `>`, `<` all work on entire lines.
* Switch between visual modes mid-selection.

---

## Exercises

1. Open a file and select 5 lines with `V` and `j`.
2. Delete them with `d`.
3. Undo, then yank them with `y` and paste elsewhere.
4. Select lines and indent them with `>`.

---

## Next Chapter

**Chapter 24 — Visual Mode: Block Selection**

Select rectangular blocks of text for column editing.
