# Chapter 20 — Replace

> *"Replace is delete's surgical cousin—precise, targeted, and fast."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Vim offers several ways to replace text, from single characters to patterns across the entire file.

---

# Character Replacement

| Key | Action                                   |
| --- | ---------------------------------------- |
| `r` | Replace **one character** under cursor   |
| `R` | Enter **Replace mode** (overwrite text)  |

## `r` — Single Character Replace

```
Hello World
^ cursor on H

Press r then J:

Jello World
```

The cursor stays in normal mode after `r`.

## `R` — Replace Mode

Press `R` to enter Replace mode.

Every character you type overwrites the existing character under the cursor.

```
Hello World
^

Press R, type "XYZ":

XYLo World
```

Press **Escape** to exit Replace mode.

---

# Substitution (`:s`)

The `:s` command substitutes text patterns.

Basic syntax:

```
:s/old/new/
```

Replaces the first occurrence of `old` with `new` on the current line.

| Command             | Action                                        |
| ------------------- | --------------------------------------------- |
| `:s/old/new/`       | Replace first `old` on current line           |
| `:s/old/new/g`      | Replace **all** `old` on current line         |
| `:%s/old/new/g`     | Replace all `old` in **entire file**          |
| `:%s/old/new/gc`    | Replace all with **confirmation**             |
| `:5,10s/old/new/g`  | Replace in lines 5–10                        |

## The `g` Flag

Without `g`: only the first match per line.

With `g`: all matches per line.

## The `c` Flag — Confirmation

```
:%s/old/new/gc
```

Vim asks for confirmation at each match:

```
Replace with new? (y/n/a/q/l/^E/^Y)
```

* `y` — Yes
* `n` — No
* `a` — All (no more prompts)
* `q` — Quit
* `l` — Last (replace and stop)

---

# Complex Replacements

## Word Boundaries

```
:%s/\<old\>/new/g
```

Only replaces `old` as a whole word (not `older`, `bold`).

## Case Insensitive

```
:%s/old/new/gi
```

## Using Captures

```
:%s/\(hello\) world/\1 there/g
```

Replaces `hello world` with `hello there`.

---

# Chapter Summary

| Key / Command           | Action                      |
| ----------------------- | --------------------------- |
| `r`                     | Replace one character       |
| `R`                     | Replace mode                |
| `:s/old/new/`          | Replace first on line       |
| `:s/old/new/g`         | Replace all on line         |
| `:%s/old/new/g`        | Replace all in file         |
| `:%s/old/new/gc`       | Replace with confirmation   |

---

# Key Takeaways

* `r{x}` replaces the character under cursor with `x`.
* `R` enters replace mode (overwrite as you type).
* `:s` is the substitution command.
* Add `g` to replace all occurrences on a line.
* Add `c` for confirmation prompts.

---

## Exercises

1. Open a file and replace a single character with `r`.
2. Use `R` to overwrite several characters.
3. Replace all occurrences of a word in a file with `:%s/word/replacement/g`.
4. Practice with the confirmation flag `c`.

---

## Next Chapter

[**Chapter 21 — Repeat (.)**](21-repeat.md)

Master the dot command — Vim's most powerful repetition tool.
