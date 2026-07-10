# Chapter 42 — Change List

> *"Vim tracks every edit you make. Use that to navigate."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

While the jump list tracks cursor movement, the **change list** tracks edits.

---

# Change List Commands

| Key | Action |
| --- | ------ |
| `g;` | Go to **previous** change position |
| `g,` | Go to **next** change position |
| `:changes` | List change history |

---

# Example

Make edits at lines 10, 20, and 30.

```
g;   →   jump to edit at line 30
g;   →   jump to edit at line 20
g;   →   jump to edit at line 10
g,   →   jump forward to line 20
g,   →   jump forward to line 30
```

---

# Dot Command Connection

The change list and dot command are related.

Each entry in the change list can be repeated with `.` if you reapply the edit.

---

# Chapter Summary

- `g;` goes to previous edit location.
- `g,` goes to next edit location.
- `:changes` shows all edits.
- Changes are tracked per buffer.

---

## Exercises

1. Edit text at 5 different lines.
2. Navigate backward through edits with `g;`.
3. Navigate forward with `g,`.
4. View the change list with `:changes`.

---

## Next Chapter

[**Chapter 43 — vimrc Configuration**](43-vimrc.md)

Configure Vim with your personal settings.
