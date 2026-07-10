# Chapter 29 — Text Objects: Advanced

> *"Sentences, paragraphs, and blocks — Vim understands text structure."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Beyond words and brackets, Vim understands larger structural units.

---

# Sentence Text Objects

| Command | Action                          |
| ------- | ------------------------------- |
| `is`    | **Inner** sentence              |
| `as`    | **A** sentence (includes spaces) |

A sentence ends with `.`, `!`, or `?`.

## Example

```
Hello world. This is a test. Vim is great.
             ^

dis → 

Hello world. Vim is great.
```

---

# Paragraph Text Objects

| Command | Action                          |
| ------- | ------------------------------- |
| `ip`    | **Inner** paragraph             |
| `ap`    | **A** paragraph (includes blank line) |

A paragraph is separated by blank lines.

## Example

```
Line 1
Line 2

Line 3
Line 4
```

Cursor on Line 1, press `dip`:

```

Line 3
Line 4
```

---

# Block Text Objects

| Command | Action                        |
| ------- | ----------------------------- |
| `iB`    | Inner block `{ }`             |
| `aB`    | A block including braces      |

These are like `i{` / `a{` but operate on the outermost block.

---

# All Text Objects Quick Reference

| Command   | Operates On        |
| --------- | ------------------ |
| `iw` / `aw` | Word              |
| `iW` / `aW` | WORD              |
| `is` / `as` | Sentence          |
| `ip` / `ap` | Paragraph         |
| `i(` / `a(` | Parentheses       |
| `i[` / `a[` | Square brackets   |
| `i{` / `a{` | Curly braces       |
| `i<` / `a<` | Angle brackets     |
| `i"` / `a"` | Double quotes      |
| `i'` / `a'` | Single quotes      |
| `i\``| a\``   | Backticks          |
| `it` / `at` | HTML/XML tags      |

---

# Key Takeaways

* Text objects let you operate on structural units.
* `is`/`as` for sentences, `ip`/`ap` for paragraphs.
* `iB`/`aB` for the outermost block.
* All text objects work with `d`, `c`, `y`, `v`, `gu`, `gU`, etc.

---

## Exercises

1. Open a text file with paragraphs and delete one with `dip`.
2. Use `dis` to delete a sentence.
3. Practice text objects until they become muscle memory.

---

## Next Chapter

[**Chapter 30 — Advanced Editing: Search and Replace**](30-advanced-text-objects.md)

Master complex search and replace operations.
