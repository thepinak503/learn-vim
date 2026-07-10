# Chapter 14 — Searching

> *"Stop scrolling. Start searching."*

---

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Reading Time:** 20 minutes

---

# Introduction

Scrolling through a large file to find something is slow.

Searching is instant.

Vim's search is powerful, fast, and works with the composable command grammar.

---

# Basic Search

## Forward Search

From normal mode, type:

```
/pattern
```

Press **Enter**.

Vim jumps to the **next** occurrence of `pattern` after the cursor.

## Backward Search

```
?pattern
```

Vim jumps to the **previous** occurrence of `pattern` before the cursor.

---

# Navigating Search Results

| Key      | Action                       |
| -------- | ---------------------------- |
| `n`      | Jump to **next** match       |
| `N`      | Jump to **previous** match   |

After a forward search (`/`):

* `n` goes forward
* `N` goes backward

After a backward search (`?`):

* `n` goes backward
* `N` goes forward

---

# Search Highlighting

By default, matches are highlighted.

To **remove highlighting temporarily**:

```
:noh
```

Short for `:nohlsearch` (no highlight search).

To **disable highlighting permanently**:

```
:set nohlsearch
```

To **enable it again**:

```
:set hlsearch
```

---

# Incremental Search

Enable this:

```
:set incsearch
```

Now as you type your search pattern, Vim jumps to the first match immediately.

It updates as you type more characters.

---

# Case Sensitivity

| Setting              | Effect                     |
| -------------------- | -------------------------- |
| `:set ignorecase`    | Make search case-insensitive |
| `:set smartcase`     | If pattern has uppercase, be case-sensitive; otherwise, ignore case |

Example:

```
/hello     → matches "hello", "Hello", "HELLO" (with ignorecase)
/Hello     → matches only "Hello" (with smartcase)
```

---

# Searching for the Current Word

Place the cursor on a word, then press:

| Key    | Action                                       |
| ------ | -------------------------------------------- |
| `*`    | Search **forward** for the word under cursor |
| `#`    | Search **backward** for the word under cursor |
| `g*`   | Like `*` but matches partial words           |
| `g#`   | Like `#` but matches partial words           |

These are extremely useful for code navigation.

---

# Using Counts with Search

| Command    | Action                          |
| ---------- | ------------------------------- |
| `3n`       | Go to 3rd next match            |
| `2N`       | Go to 2nd previous match        |

---

# Combining Search with Operators

This is where search becomes extremely powerful.

| Command       | Action                                     |
| ------------- | ------------------------------------------ |
| `d/foo`       | Delete from cursor to next occurrence of `foo` |
| `c?bar`       | Change from cursor back to `bar`           |
| `y/hello`     | Yank from cursor to next `hello`           |

## Examples

```
d/function    Delete everything up to the next occurrence of "function"
c?return      Change everything back to "return"
y/}           Yank everything up to the next closing brace
```

---

# Search History

Vim remembers your previous searches.

| Key      | Action                       |
| -------- | ---------------------------- |
| `/` then `↑` | Browse previous searches |
| `?` then `↑` | Browse previous searches |

Press `↑` and `↓` to cycle through history.

Press **Enter** to repeat a previous search.

---

# Special Characters in Searches

Some characters have special meaning in search patterns.

To search for them literally, **escape** them with `\`:

| Character | Meaning           | To Search Literally |
| --------- | ----------------- | ------------------- |
| `.`       | Any character     | `\.`                |
| `*`       | Zero or more      | `\*`                |
| `^`       | Start of line     | `\^`                |
| `$`       | End of line       | `\$`                |
| `[`       | Character class   | `\[`                |
| `\`       | Escape character  | `\\`                |

---

# Chapter Summary

| Action            | Command         |
| ----------------- | --------------- |
| Search forward    | `/pattern`      |
| Search backward   | `?pattern`      |
| Next match        | `n`             |
| Previous match    | `N`             |
| Search word under cursor | `*` / `#` |
| Clear highlight   | `:noh`          |
| Case insensitive  | `:set ignorecase` |
| Incremental search | `:set incsearch` |

---

# Key Takeaways

* `/` searches forward, `?` searches backward.
* `n` and `N` navigate through matches.
* `*` and `#` search for the word under the cursor instantly.
* Combine search with `d`, `c`, `y` for powerful edits.
* `:noh` clears search highlighting.

---

## Exercises

1. Open a file and search for a common word using `/`.
2. Navigate through matches with `n` and `N`.
3. Place the cursor on a word and press `*` to search forward.
4. Use `d/function` to delete up to a function definition.
5. Search with `:set incsearch` enabled to see live results.

---

## Next Chapter

**Chapter 15 — Insert Commands**

Learn all the ways to enter and exit insert mode efficiently.
