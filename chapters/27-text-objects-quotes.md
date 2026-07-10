# Chapter 27 — Text Objects: Quotes

> *"Changing text inside quotes is a daily task for every programmer."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Quotes are everywhere in code — strings, messages, keys, JSON.

Vim's quote text objects let you edit inside them instantly.

---

# Quote Text Objects

| Command | Action                        |
| ------- | ----------------------------- |
| `ci"`   | Change inside **double quotes** |
| `ca"`   | Change a double quote (includes quotes) |
| `di"`   | Delete inside double quotes   |
| `yi"`   | Yank inside double quotes     |
| `ci'`   | Change inside **single quotes** |
| `di'`   | Delete inside single quotes   |
| `ci\``   | Change inside **backticks**   |

---

# Example: Changing a String

```javascript
const message = "Hello, World!";
                 ^

ci" → delete "Hello, World!", enter insert mode

Type "Goodbye!" →

const message = "Goodbye!";
```

---

# Example: Yanking a String

```python
print("Processing file:", filename)
       ^

yi" → yanks "Processing file:"
p   → pastes it somewhere
```

---

# Example: Deleting a String

```javascript
const url = 'https://api.example.com/v2/users';
             ^

di' →

const url = '';
```

---

# Single vs Double Quotes

The commands are the same — just swap the quote character:

| Command | Quote Type    |
| ------- | ------------- |
| `ci"`   | Double quotes |
| `ci'`   | Single quotes |
| `ci\``   | Backticks     |

---

# Chapter Summary

| Command  | Action                        |
| -------- | ----------------------------- |
| `ci"`    | Change inside double quotes   |
| `di"`    | Delete inside double quotes   |
| `yi"`    | Yank inside double quotes     |
| `ci'`    | Change inside single quotes   |
| `di'`    | Delete inside single quotes   |

---

# Key Takeaways

* `ci"` changes text inside double quotes in one command.
* Works with `d`, `c`, `y`, `v`.
* Single quotes and backticks work the same way.
* One of the most frequently used Vim text objects.

---

## Exercises

1. Open a code file and change a string with `ci"`.
2. Delete inside single quotes with `di'`.
3. Yank a string from backticks with `yi\``.

---

## Next Chapter

**Chapter 28 — Text Objects: Brackets and Tags**

Edit inside brackets, braces, and HTML tags.
