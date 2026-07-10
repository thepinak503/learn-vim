# Chapter 11 — Word Motions

> *"Words are the most natural unit of navigation in any language."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

Word motions are among the most frequently used navigation commands in Vim.

They let you jump over entire words instead of moving character by character.

---

# The Four Word Motions

| Motion | Action                              |
| ------ | ----------------------------------- |
| `w`    | Forward to **beginning** of next word |
| `b`    | Backward to **beginning** of word     |
| `e`    | Forward to **end** of word            |
| `ge`   | Backward to **end** of word           |

## Visual Diagram

```
This is an example sentence
^    ^  ^   ^       ^
|    |  |   |       |
|    |  |   |       w → beginning of "sentence"
|    |  |   w → beginning of "example"
|    |  w → beginning of "an"
|    w → beginning of "is"
w → beginning of "This"
```

---

# Word vs WORD

## Word (`w`, `b`, `e`)

A **word** is a sequence of letters, digits, or underscores.

Words are separated by:
* spaces
* punctuation (`.`, `,`, `;`, `-`, `_`, etc.)
* special characters

```
hello-world foo.bar
```

Using `w`:
1. `hello`
2. `-`
3. `world`
4. ` `
5. `foo`
6. `.`
7. `bar`

## WORD (`W`, `B`, `E`)

A **WORD** is a sequence of non-blank characters.

WORDs are separated **only by spaces**.

```
hello-world foo.bar
```

Using `W`:
1. `hello-world`
2. `foo.bar`

---

# When to Use Which

## Use `w` / `b` / `e` when:

* Navigating code
* Editing function names: `hello_world`
* Moving through paths: `src/components/Button.tsx`
* Deleting words precisely

## Use `W` / `B` / `E` when:

* Skipping large chunks quickly
* Navigating prose with punctuation
* You don't care about punctuation boundaries

---

# Word Motions with Counts

| Command    | Action                      |
| ---------- | --------------------------- |
| `3w`       | Forward 3 words             |
| `5b`       | Backward 5 words            |
| `2e`       | Forward to end of 2nd word  |
| `3ge`      | Backward to end of 3rd word |

---

# Combining with Operators

Word motions become powerful when combined with operators:

| Command   | Action                                 |
| --------- | -------------------------------------- |
| `dw`      | Delete word (from cursor to next word) |
| `d3w`     | Delete 3 words                         |
| `db`      | Delete backward word                   |
| `cw`      | Change word (to end of current word)   |
| `c2w`     | Change 2 words                         |
| `yw`      | Yank word                              |
| `y3w`     | Yank 3 words                           |

## Important Difference

* `dw` deletes from cursor to the beginning of the next word.
* `diw` (delete inner word) deletes the entire word under the cursor.

We'll cover text objects like `iw` (inner word) in Part V.

---

# Edge Cases

## Cursor in the Middle of a Word

```
Hello World
    ^
    cursor
```

`dw` → deletes only `lo World` (from cursor onward).

Not the entire word. To delete the whole word, use `diw`.

## Empty Lines

Word motions skip empty lines.

## End of File

`w` at the last word → can't move forward.

---

# Practice

Open a file and try:

1. Navigate through a paragraph using `w` only.
2. Navigate backward using `b`.
3. Move to the end of each word using `e`.
4. Use `3w`, `5b`, `2e` to jump larger distances.
5. Delete words using `dw` and `diw`.
6. Copy words using `yw`.

---

# Chapter Summary

| Motion | Forward/Backward | To Beginning/End |
| ------ | ---------------- | ---------------- |
| `w`    | Forward          | Beginning        |
| `b`    | Backward         | Beginning        |
| `e`    | Forward          | End              |
| `ge`   | Backward         | End              |

* Use lowercase for word boundaries (punctuation-aware).
* Use uppercase for WORD boundaries (space-only).

---

# Key Takeaways

* Word motions jump over text faster than character motions.
* `w`/`b` jump to word beginnings; `e`/`ge` jump to word endings.
* W (uppercase) treats everything until a space as one WORD.
* Combine with `d`, `c`, `y` for powerful editing.
* `dw` deletes from cursor—not the whole word; use `diw` for that.

---

## Exercises

1. Find a paragraph of text and count how many `w` moves it takes to cross it.
2. Practice the difference between `dw` and `diw`.
3. Use `W` across a sentence with punctuation and note the difference.

---

## Next Chapter

[**Chapter 12 — Line Motions**](12-line-motions.md)

Master navigating to the beginnings and ends of lines—indispensable for editing code.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
