# Chapter 31 — Search Patterns

> *"Search is the fastest way to navigate any file."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Vim's search supports regular expressions (regex) for powerful pattern matching.

---

# Basic Patterns

| Pattern | Matches                |
| ------- | ---------------------- |
| `/foo`  | Exact text `foo`       |
| `/^foo` | `foo` at **start** of line |
| `/foo$` | `foo` at **end** of line   |
| `/c.f`  | `c`, any char, `f` (e.g., `cof`, `caf`) |

---

# Quantifiers

| Pattern | Matches              |
| ------- | -------------------- |
| `foo*`  | `fo` + zero or more `o` |
| `fo\+`  | `fo` + one or more `o` |
| `foo\?` | `foo` optional       |
| `foo\{3}` | Exactly 3 `o`     |

---

# Character Classes

| Pattern  | Matches              |
| -------- | -------------------- |
| `[abc]`  | `a`, `b`, or `c`     |
| `[a-z]`  | Any lowercase letter |
| `[0-9]`  | Any digit            |
| `[^abc]` | Not `a`, `b`, or `c` |
| `\d`     | Any digit            |
| `\w`     | Word character       |
| `\s`     | Whitespace           |

---

# Anchors

| Pattern | Matches                      |
| ------- | ---------------------------- |
| `^`     | Start of line                |
| `$`     | End of line                  |
| `\<`    | Beginning of word            |
| `\>`    | End of word                  |

---

# Chapter Summary

* `/pattern` searches for regex patterns.
* `^` anchors to line start, `$` to line end.
* `*`, `\+`, `\?` are quantifiers.
* `[...]` defines character classes.

---

## Next Chapter

**Chapter 32 — Regex in Vim**

Deeper dive into Vim's regex syntax.
