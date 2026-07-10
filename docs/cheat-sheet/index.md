---
title: Vim Cheat Sheet
---

# 📋 Vim Cheat Sheet — Printable Reference

> *Your quick reference for all essential Vim commands. Print this page for offline use.*

---

## Cursor Movement

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
| `Ctrl+u` | Scroll up half page |
| `Ctrl+d` | Scroll down half page |
| `zz` | Center cursor |

---

## Editing

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

## Text Objects

| Command | Action |
| ------- | ------ |
| `ciw` | Change inner word |
| `ci(` | Change inside `(...)` |
| `ci{` | Change inside `{...}` |
| `ci"` | Change inside `"..."` |
| `ci'` | Change inside `'...'` |
| `ci[` | Change inside `[...]` |
| `ci<` | Change inside `<...>` |
| `cit` | Change inside HTML tag |
| `diw` | Delete inner word |
| `daw` | Delete a word |

---

## Copy & Paste

| Key | Action |
| --- | ------ |
| `yy` | Yank (copy) line |
| `yw` | Yank word |
| `y$` | Yank to end of line |
| `p` | Paste after cursor |
| `P` | Paste before cursor |
| `"ayy` | Yank to register `a` |
| `"ap` | Paste from register `a` |
| `"+y` | Yank to system clipboard |
| `"+p` | Paste from system clipboard |

---

## Visual Mode

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

## Search & Replace

| Command | Action |
| ------- | ------ |
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next match |
| `N` | Previous match |
| `*` | Search word under cursor |
| `#` | Search backward for word |
| `:s/old/new/g` | Replace on line |
| `:%s/old/new/g` | Replace in file |
| `:%s/old/new/gc` | Replace with confirm |

---

## Windows & Tabs

| Command | Action |
| ------- | ------ |
| `:split` | Horizontal split |
| `:vsplit` | Vertical split |
| `Ctrl+w w` | Next window |
| `Ctrl+w h/j/k/l` | Navigate windows |
| `Ctrl+w =` | Equalize sizes |
| `:tabnew` | New tab |
| `gt` | Next tab |
| `gT` | Previous tab |

---

## File Operations

| Command | Action |
| ------- | ------ |
| `:e file` | Open file |
| `:w` | Save |
| `:q` | Quit |
| `:wq` | Save & quit |
| `:q!` | Force quit |
| `ZZ` | Save & quit |
| `ZQ` | Quit without saving |

---

## Advanced

| Command | Action |
| ------- | ------ |
| `ma` | Set mark `a` |
| `'a` | Jump to mark `a` |
| `qa` | Start recording macro |
| `q` | Stop recording |
| `@a` | Play macro |
| `:!cmd` | Run shell command |
| `:r file` | Insert file contents |
| `:r !cmd` | Insert command output |
| `K` | Look up man page |

---

## Neovim LSP

| Key | Action |
| --- | ------ |
| `gd` | Go to definition |
| `K` | Hover info |
| `gr` | Find references |
| `<leader>rn` | Rename symbol |
| `<leader>ca` | Code action |
| `[d` | Go to previous diagnostic |
| `]d` | Go to next diagnostic |

---

## Telescope (Fuzzy Finder)

| Command | Action |
| ------- | ------ |
| `<leader>ff` | Find files |
| `<leader>fg` | Live grep |
| `<leader>fb` | Buffers |
| `<leader>fh` | Help tags |

---

**[Back to Home](../)** | [All Chapters](../chapters/01-introduction.md)
