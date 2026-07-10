# Chapter 32 — Regex in Vim

> *"Regular expressions turn search into a superpower."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 20 minutes

---

# Introduction

Vim has its own regex syntax, similar but not identical to Perl/PCRE.

---

# Vim Magic Levels

| Mode | Prefix | Example         |
| ---- | ------ | --------------- |
| Magic | `\v`  | `/\v(abc|def)` |
| Nomagic | `\V` | `/\Vfoo.bar` (literal) |
| Very magic | `\v` | `/\v(a|b)+` |

## Very Magic (`\v`)

Disables escaping for most special characters.

```
/\v(abc|def){2,3}
```

## Very Nomagic (`\V`)

Treats everything literally except `\`.

```
/\Vfoo.bar   →   matches "foo.bar" literally
```

---

# Regex Examples

| Pattern            | Matches                          |
| ------------------ | -------------------------------- |
| `/\vfoo\|bar`     | `foo` or `bar`                   |
| `/\v(colou)?r`    | `color` or `colour`             |
| `/\v\d+`          | One or more digits               |
| `/\v\w+@\w+\.\w+` | Simple email pattern             |

---

# Regex in Substitution

```
:%s/\v(\w+)@(\w+)/\1 at \2/g
```

Replace `user@domain` with `user at domain`.

---

# Chapter Summary

* Vim uses its own regex syntax.
* `\v` enables "very magic" (less escaping).
* `\V` disables special characters.
* Regex works in both search and substitution.

---

## Next Chapter

**Chapter 33 — Search History**

Navigate your search history like a pro.
