# Chapter 65 — Cheat Sheet

> *"Your quick reference for all essential Vim commands."*

---

**Difficulty:** ⭐ All levels
**Estimated Reading Time:** 10 minutes (reference)

---

# Introduction

This is a quick reference for the most important Vim commands.

Use it as a lookup when you forget a command.

---

# Cursor Movement

| Key | Action |
| --- | ------ |
| `h` | Left |
| `j` | Down |
| `k` | Up |
| `l` | Right |
| `w` | Next word |
| `b` | Previous word |
| `e` | End of word |
| `0` | Start of line |
| `$` | End of line |
| `^` | First non-blank |
| `gg` | First line |
| `G` | Last line |
| `{line}G` | Specific line |

---

# Editing

| Key | Action |
| --- | ------ |
| `i` | Insert before cursor |
| `a` | Append after cursor |
| `I` | Insert at line start |
| `A` | Append at line end |
| `o` | Open line below |
| `O` | Open line above |
| `dd` | Delete line |
| `dw` | Delete word |
| `D` | Delete to end of line |
| `cc` | Change line |
| `cw` | Change word |
| `C` | Change to end of line |
| `x` | Delete character |
| `r` | Replace character |
| `.` | Repeat last change |
| `u` | Undo |
| `Ctrl+r` | Redo |

---

# Text Objects

| Key | Action |
| --- | ------ |
| `ciw` | Change inner word |
| `ci(` | Change inside parentheses |
| `ci{` | Change inside braces |
| `ci"` | Change inside quotes |
| `ci'` | Change inside single quotes |
| `ci[` | Change inside brackets |
| `ci<` | Change inside angle brackets |
| `cit` | Change inside HTML tag |
| `diw` | Delete inner word |
| `daw` | Delete a word |

---

# Copy and Paste

| Key | Action |
| --- | ------ |
| `yy` | Yank line |
| `yw` | Yank word |
| `y$` | Yank to end of line |
| `yG` | Yank to end of file |
| `p` | Paste after cursor |
| `P` | Paste before cursor |
| `"ayy` | Yank to register a |
| `"ap` | Paste from register a |

---

# Visual Mode

| Key | Action |
| --- | ------ |
| `v` | Character visual mode |
| `V` | Line visual mode |
| `Ctrl+v` | Block visual mode |
| `d` | Delete selection |
| `y` | Yank selection |
| `c` | Change selection |
| `>` | Indent right |
| `<` | Indent left |

---

# Search and Replace

| Key/Command | Action |
| ----------- | ------ |
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next match |
| `N` | Previous match |
| `*` | Search word under cursor |
| `:s/old/new/g` | Replace on line |
| `:%s/old/new/g` | Replace in file |
| `:%s/old/new/gc` | Replace with confirm |

---

# Windows and Tabs

| Key/Command | Action |
| ----------- | ------ |
| `:split` | Horizontal split |
| `:vsplit` | Vertical split |
| `Ctrl+w w` | Next window |
| `Ctrl+w h/j/k/l` | Navigate windows |
| `:tabnew` | New tab |
| `gt` | Next tab |
| `gT` | Previous tab |

---

# File Operations

| Command | Action |
| ------- | ------ |
| `:e file` | Open file |
| `:w` | Save |
| `:q` | Quit |
| `:wq` | Save and quit |
| `:q!` | Force quit |
| `ZZ` | Save and quit |
| `ZQ` | Quit without saving |

---

# Chapter Summary

This cheat sheet covers the essential Vim commands.

Bookmark this chapter for quick reference.

---

## Final Words

Congratulations on completing this handbook!

You now have the knowledge to use Vim and Neovim effectively.

Remember:

1. **Practice daily** — even 10 minutes helps.
2. **Learn gradually** — add a few commands each week.
3. **Stay consistent** — muscle memory takes time.
4. **Use cheat sheets** — reference this chapter whenever you forget.
5. **Enjoy the journey** — Vim is a tool that keeps rewarding you.

Happy editing!

---

**[Back to Table of Contents](../TOC.md)**
