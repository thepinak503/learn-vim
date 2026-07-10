# Chapter 30 — Advanced Text Objects

> *"Mastering text objects is what separates intermediate Vim users from advanced ones."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

This chapter covers advanced text object techniques, indentation objects, and custom text objects.

---

# Indentation Text Objects

| Command | Action                                  |
| ------- | --------------------------------------- |
| `vii`   | Select same indentation level           |
| `vai`   | Select same level + one line above/below |

## Example

```python
def hello():
    print("hello")
    print("world")
    if True:
        print("nested")
```

Cursor on `print("hello")`, press `vii`:

```python
    print("hello")    ← selected
    print("world")    ← selected
```

---

# Custom Text Objects with Plugins

With the `vim-sandwich` or `vim-surround` plugin, you can add custom text objects.

## vim-surround

```
ysiw"     →   surround word with double quotes
cs"'      →   change surrounding double quotes to single quotes
ds"       →   delete surrounding double quotes
```

---

# Text Object Combinations

```
gUiw      →   uppercase inner word
guas      →   lowercase a sentence
g~ip      →   toggle case of inner paragraph
```

---

# Chapter Summary

Text objects are one of Vim's most powerful features.

Master them to edit at the speed of thought.

---

## Next Chapter

**Chapter 31 — Search Patterns**

Master Vim's search capabilities with regular expressions.
