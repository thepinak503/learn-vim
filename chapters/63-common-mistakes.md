# Chapter 63 — Common Mistakes

> *"Learn from others' mistakes. These are the most common Vim pitfalls."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Every Vim user makes these mistakes at some point.

Knowing them will save you time and frustration.

---

# Mistake 1: Staying in Insert Mode

Many beginners stay in insert mode and use arrow keys.

This defeats the purpose of Vim.

**Fix:** Return to normal mode as soon as you finish typing.

---

# Mistake 2: Using the Mouse

The mouse is slow compared to keyboard commands.

**Fix:** Force yourself to use `h`/`j`/`k`/`l` and `/search`.

---

# Mistake 3: Not Using the Dot Command

Manually repeating an edit instead of using `.`.

**Fix:** Think "can I use the dot command here?"

---

# Mistake 4: Overusing Visual Mode

Visual mode is useful, but operator+motion is often faster.

```
Instead of: v$d
Use:        D

Instead of: viwd
Use:        diw
```

---

# Mistake 5: Ignoring Registers

Using only the unnamed register.

**Fix:** Use named registers (`"a`-`"z`) for multiple clipboards.

---

# Mistake 6: Not Using Relative Numbers

Without relative numbers, you can't use `5j` or `d5j` easily.

**Fix:** Enable `set relativenumber`.

---

# Mistake 7: Installing Too Many Plugins

Plugin overload makes Vim slow and complex.

**Fix:** Start with a minimal setup. Add plugins only when needed.

---

# Chapter Summary

- Stay in normal mode as much as possible.
- Avoid the mouse and learn keyboard commands.
- Use the dot command for repetition.
- Prefer operator+motion over visual mode.
- Use named registers for multiple clipboards.
- Enable relative numbers.
- Keep your plugin setup minimal.

---

## Exercises

1. Identify which of these mistakes you make most often.
2. Spend a day focusing on fixing one mistake.
3. Repeat until all bad habits are corrected.

---

## Next Chapter

[**Chapter 64 — Practice Exercises**](64-practice-exercises.md)

Practice exercises to build your Vim skills.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
