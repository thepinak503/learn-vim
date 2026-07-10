# Chapter 37 — Macros

> *"Record a sequence of commands once, replay it hundreds of times."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 20 minutes

---

# Introduction

Macros let you record a sequence of Vim commands and replay them.

They are stored in registers.

---

# Recording a Macro

| Key | Action |
| --- | ------ |
| `qa` | Start recording macro into register `a` |
| (commands) | Your sequence of actions |
| `q` | Stop recording |

## Example

Record a macro that adds a semicolon to the end of a line:

```
qa      →   Start recording into register a
A;      →   Append semicolon
Esc     →   Return to normal mode
j       →   Move down
q       →   Stop recording
```

---

# Playing a Macro

| Key | Action |
| --- | ------ |
| `@a` | Execute macro from register `a` |
| `@@` | Repeat last macro |
| `10@a` | Execute macro `a` 10 times |

---

# Practical Example

Suppose you have:

```
Line 1
Line 2
Line 3
Line 4
Line 5
```

Record:

```
qa      →   Start recording
0       →   Go to start of line
i*      →   Insert * at beginning
Esc     →   Normal mode
j       →   Next line
q       →   Stop recording
```

Then:

```
3@a     →   Apply to next 3 lines
```

Result:

```
*Line 1
*Line 2
*Line 3
*Line 4
*Line 5
```

---

# Editing a Macro

```
:let @a = 'commands'
```

Manually set a macro.

```
:let @a = '0i*' . "\<Esc>" . 'j'
```

Set macro with special keys.

---

# Appending to a Macro

```
qA      →   Append to existing macro in register a
```

Capital letter = append.

---

# Chapter Summary

* `qa` records, `q` stops.
* `@a` plays, `@@` repeats.
* Macros can combine any Vim commands.
* Use macros for repetitive edits.

---

## Exercises

1. Record a macro that adds `# ` to the start of a line.
2. Record a macro that wraps text in quotes.
3. Execute the macro 5 times.
4. Use `@@` to repeat.

---

## Next Chapter

[**Chapter 38 — Buffers**](38-buffers.md)

Work with multiple files using Vim's buffer system.
