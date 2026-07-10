# Chapter 34 — Advanced Replace

> *"Replace isn't just find-and-replace. It's a transformation language."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

The `:s` command can do more than simple substitutions.

---

# Replace with Confirmation

```
:%s/old/new/gc
```

Vim asks at each match:

- `y` — Replace this match
- `n` — Skip this match
- `a` — Replace all remaining
- `q` — Quit
- `l` — Replace this and quit

---

# Replace with Expressions

```
:%s/\v\d+/\=submatch(0) + 1/g
```

Increment every number in the file.

---

# Replace in a Range

```
:10,20s/foo/bar/g
```

Replace only in lines 10-20.

```
:.,$s/foo/bar/g
```

Replace from cursor to end.

```
:'<,'>s/foo/bar/g
```

Replace in visual selection (automatic when selecting then `:`).

---

# Chapter Summary

* `:s` with `c` flag adds confirmation.
* `\=` expressions compute replacements.
* Visual selection auto-populates the range.

---

## Next Chapter

[**Chapter 35 — Registers**](35-registers.md)

Master Vim's multiple clipboards.
