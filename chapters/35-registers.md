# Chapter 35 — Registers

> *"Registers are Vim's clipboard on steroids."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

Registers are named storage locations for text.

They are Vim's version of multiple clipboards.

---

# Register Types

| Register | Name | Contents |
| -------- | ---- | -------- |
| `""` | Unnamed | Last yank or delete |
| `"0` | Yank | Last yank only |
| `"1`-`"9` | Delete history | Last 9 deletes |
| `"a`-`"z` | Named | User-defined |
| `"+` | System clipboard | OS clipboard |
| `"*` | Selection | Mouse selection |
| `"_` | Black hole | Discard text |
| `"=` | Expression | Result of expression |

---

# Using Named Registers

```
"ayy     →   yank line into register a
"ap      →   paste from register a
"bdd     →   delete line into register b
"bp      →   paste from register b
```

---

# The Black Hole Register

```
"_dd     →   delete line, nothing stored
"_dw     →   delete word, nothing stored
```

Useful when deleting text you don't want to overwrite the clipboard.

---

# Viewing Registers

```
:reg
```

Shows all registers.

```
:reg a b c
```

Shows specific registers.

---

# Chapter Summary

* `"a`-`"z` are named registers — your own clipboards.
* `"+` is the system clipboard.
* `"_` discards text (black hole).
* `:reg` lists all registers.

---

## Exercises

1. Yank text into register `a` and paste it.
2. Delete text into register `b` and paste it.
3. Use `"+` to paste from the system clipboard.
4. View all registers with `:reg`.

---

## Next Chapter

**Chapter 36 — Marks**

Set waypoints in your files for quick navigation.
