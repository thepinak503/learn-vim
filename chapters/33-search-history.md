# Chapter 33 — Search History

> *"Every search is remembered. Reuse them effortlessly."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

Vim remembers all your searches during a session.

---

# Navigating Search History

| Key | Action                         |
| --- | ------------------------------ |
| `/` then `↑` | Previous search      |
| `/` then `↓` | Next search          |
| `?` then `↑` | Previous backward search |
| `?` then `↓` | Next backward search     |

## Clearing Search

| Command | Action                   |
| ------- | ------------------------ |
| `:noh`  | Remove search highlighting |
| `:let @/ = ""` | Clear search register |

---

# Search Register

The last search pattern is stored in the `/` register.

```
:echo @/
```

Shows the last search pattern.

```
:let @/ = "foo"
```

Sets the search pattern to `foo`.

---

# Chapter Summary

* `↑`/`↓` after `/` or `?` browses history.
* `:noh` clears highlighting.
* `@/` register stores the last search.

---

## Next Chapter

**Chapter 34 — Replace**

Advanced replacement techniques with patterns.
