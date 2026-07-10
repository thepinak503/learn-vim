# Chapter 26 — Text Objects: Parentheses

> *"Editing inside parentheses is one of Vim's killer features."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

Parentheses are everywhere in code.

Vim's text objects let you operate on everything inside them with a single command.

---

# Parentheses / Round Brackets

| Command | Action                                        |
| ------- | --------------------------------------------- |
| `ci(`   | Change **inside** parentheses                 |
| `ca(`   | Change **a** parentheses (includes `(` and `)`) |
| `di(`   | Delete inside parentheses                     |
| `da(`   | Delete a parentheses                          |
| `yi(`   | Yank inside parentheses                       |

## Using `(` or `)` — Both work

```
ci(   →   change inside parentheses
ci)   →   same thing
```

---

# Examples

## Changing Function Arguments

```javascript
function greet(name, age) {
             ^

ci( → delete "name, age", enter insert mode

Type "user" →

function greet(user) {
```

## Deleting Inside Parentheses

```python
result = calculate_total(price, quantity, discount)
                          ^

di( →

result = calculate_total()
```

## Yanking Inside Parentheses

```
print(get_data()))
       ^

yi( → yanks "get_data"
p   → pastes: print(get_data(get_data()))
```

---

# Square Brackets

| Command | Action                                        |
| ------- | --------------------------------------------- |
| `ci[`   | Change inside square brackets                 |
| `ca[`   | Change a square bracket                       |
| `di[`   | Delete inside square brackets                 |
| `yi[`   | Yank inside square brackets                   |

## Example

```python
items = [1, 2, 3, 4, 5]
         ^

ci[ →

items = []
```

---

# Curly Braces

| Command | Action                                        |
| ------- | --------------------------------------------- |
| `ci{`   | Change inside curly braces                    |
| `ca{`   | Change a curly brace                          |
| `di{`   | Delete inside curly braces                    |
| `yi{`   | Yank inside curly braces                      |

## Example

```javascript
const obj = { name: "John", age: 30 };
              ^

yi{ → yanks name: "John", age: 30
```

---

# Nesting

Vim handles nesting intelligently.

It operates on the **innermost** matching pair from the cursor position.

```javascript
function foo(bar(x, y)) {
              ^ cursor inside "("

ci( → changes "x, y" (innermost pair)

If cursor is here:
function foo(bar(x, y)) {
         ^ cursor inside outer "("

ci( → changes "bar(x, y)" (outer pair)
```

---

# Chapter Summary

| Command | Action                        |
| ------- | ----------------------------- |
| `ci(`   | Change inside parentheses     |
| `di(`   | Delete inside parentheses     |
| `yi(`   | Yank inside parentheses       |
| `ci[`   | Change inside square brackets |
| `ci{`   | Change inside curly braces    |
| `ci<`   | Change inside angle brackets  |

---

# Key Takeaways

* `i(` and `i)` both work the same way.
* Works for `()`, `[]`, `{}`, `<>`.
* Vim operates on the innermost matching pair.
* Combine with `d`, `c`, `y` for powerful editing.

---

## Exercises

1. Open a code file and use `ci(` to change function arguments.
2. Use `di[` to delete array contents.
3. Use `yi{` to copy object contents.

---

## Next Chapter

**Chapter 27 — Text Objects: Quotes**

Edit text inside quotes with a single command.
