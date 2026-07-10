# Chapter 28 — Text Objects: Brackets and Tags

> *"From HTML tags to angle brackets, Vim handles them all."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 15 minutes

---

# Introduction

This chapter covers text objects for angle brackets, HTML tags, and other delimiters.

---

# Angle Brackets

| Command | Action                        |
| ------- | ----------------------------- |
| `ci<`   | Change inside angle brackets  |
| `di<`   | Delete inside angle brackets  |
| `yi<`   | Yank inside angle brackets    |

## Example

```cpp
vector<int> myVector;
              ^

ci< → 

vector<> myVector;
```

---

# HTML/XML Tags

| Command | Action                                 |
| ------- | -------------------------------------- |
| `cit`   | Change **inside tag** (content only)   |
| `cat`   | Change **a tag** (includes tags)       |
| `dit`   | Delete inside tag                      |
| `dat`   | Delete a tag                           |

## Example

```html
<div class="container">
    <p>Hello World</p>
    ^
    cit → deletes "Hello World", enters insert mode

    <p></p>
</div>
```

## Deleting the Entire Tag

```html
<div class="container">
    <p>Hello World</p>
    ^
    dat → deletes entire <p>Hello World</p>

<div class="container">
</div>
```

---

# All Bracket Types Summary

| Text Object | Delimiter         |
| ----------- | ----------------- |
| `i(` / `a(` | Parentheses `()` |
| `i[` / `a[` | Square brackets `[]` |
| `i{` / `a{` | Curly braces `{}` |
| `i<` / `a<` | Angle brackets `<>` |
| `i"` / `a"` | Double quotes `""` |
| `i'` / `a'` | Single quotes `''` |
| `i\``| a\`` | Backticks ``` |

---

# Chapter Summary

| Command | Action                        |
| ------- | ----------------------------- |
| `cit`   | Change inside HTML tag        |
| `dat`   | Delete a tag (including tags) |
| `ci<`   | Change inside angle brackets  |
| `di<`   | Delete inside angle brackets  |

---

# Key Takeaways

* `cit` edits content inside HTML tags.
* `dat` deletes the entire tag including its content.
* Bracket text objects work for all bracket types.
* These commands work across programming languages.

---

## Exercises

1. Open an HTML file and change content inside a tag with `cit`.
2. Delete an entire HTML element with `dat`.
3. Use `ci<` on some angle-bracket syntax.

---

## Next Chapter

[**Chapter 29 — Text Objects: Advanced**](29-text-objects-advanced.md)

Master advanced text objects for sentences, paragraphs, and more.
