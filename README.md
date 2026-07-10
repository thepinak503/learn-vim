# Learn Vim & Neovim — The Complete Handbook (2026)

📖 A comprehensive guide to Vim and Neovim — from absolute beginner to advanced user.

> **"Write readme for complete navigation so that it is the only the thing to do."**

---

## Table of Contents

This handbook contains **65 chapters** organized into **10 parts**, covering everything from your first keystrokes to building a fully customized Neovim IDE.

---

## Part I — Foundations

Build your foundation. Understand what Vim is, why it matters, and how to get started.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 01 | [Introduction](chapters/01-introduction.md) | What is Vim? Modal editing, misconceptions, learning strategy |
| 02 | [Why Learn Vim?](chapters/02-why-learn-vim.md) | Real productivity benefits, the mouse problem, Vim everywhere |
| 03 | [What Is Vim?](chapters/03-what-is-vim.md) | History, architecture, Vi vs Vim vs Neovim, editing grammar |
| 04 | [Vim vs Vi vs Neovim](chapters/04-vim-vs-vi-vs-neovim.md) | Side-by-side comparison, feature table, which to choose |
| 05 | [Installing Vim & Neovim](chapters/05-installing-vim.md) | Install on Linux, macOS, Windows, WSL, verify installation |
| 06 | [Your First Launch](chapters/06-your-first-launch.md) | Open, navigate, edit, save, quit — your first Vim session |
| 07 | [Understanding Modes](chapters/07-understanding-modes.md) | Normal, Insert, Visual, Command modes — the core concept |
| 08 | [Opening, Saving & Quitting](chapters/08-opening-saving-quitting.md) | File operations, buffers, :w, :q, :wq, :e, :r |

---

## Part II — Navigation

Move around files at the speed of thought.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 09 | [Cursor Movement](chapters/09-cursor-movement.md) | h/j/k/l, arrow keys, counts, scrolling |
| 10 | [Motions](chapters/10-motions.md) | The grammar of Vim — operator + motion = action |
| 11 | [Word Motions](chapters/11-word-motions.md) | w, b, e, ge — word vs WORD, with counts |
| 12 | [Line Motions](chapters/12-line-motions.md) | 0, ^, $, g_, J — line beginnings and ends |
| 13 | [File Motions](chapters/13-file-motions.md) | gg, G, %, Ctrl+o/i, marks, jump list |
| 14 | [Searching](chapters/14-searching.md) | /, ?, n, N, *, #, incremental search |

---

## Part III — Editing

Edit text with surgical precision.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 15 | [Insert Commands](chapters/15-insert-commands.md) | i, a, I, A, o, O, s, S, C, Ctrl+w, Ctrl+u |
| 16 | [Delete Commands](chapters/16-delete-commands.md) | x, dd, dw, D, d$, dG, d%, visual deletion |
| 17 | [Change Commands](chapters/17-change-commands.md) | cw, cc, C, ciw, ci(, ci" — delete + insert |
| 18 | [Copy & Paste](chapters/18-copy-paste.md) | yy, yw, p, P, registers, system clipboard |
| 19 | [Undo / Redo](chapters/19-undo-redo.md) | u, Ctrl+r, U, undo tree, persistent undo |
| 20 | [Replace](chapters/20-replace.md) | r, R, :s///g, :%s///gc, substitution |
| 21 | [Repeat (.)](chapters/21-repeat.md) | The dot command — Vim's most powerful command |

---

## Part IV — Visual Mode

Select text visually and act on it.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 22 | [Character Selection](chapters/22-visual-mode-character.md) | v — character-wise visual mode |
| 23 | [Line Selection](chapters/23-visual-mode-line.md) | V — line-wise visual mode |
| 24 | [Block Selection](chapters/24-visual-mode-block.md) | Ctrl+v — block visual mode, column editing |

---

## Part V — Text Objects

Operate on structural units of text.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 25 | [iw and aw](chapters/25-text-objects-iw-aw.md) | Inner word vs a word — the difference |
| 26 | [Parentheses](chapters/26-text-objects-parentheses.md) | ci(, di[, yi{ — bracket text objects |
| 27 | [Quotes](chapters/27-text-objects-quotes.md) | ci", di', ci` — quote text objects |
| 28 | [Brackets & Tags](chapters/28-text-objects-brackets-tags.md) | ci<, cit, dat — angle brackets and HTML tags |
| 29 | [Advanced](chapters/29-text-objects-advanced.md) | Sentences, paragraphs, indentation objects |
| 30 | [Mastering Text Objects](chapters/30-advanced-text-objects.md) | Custom objects, surround plugin, combinations |

---

## Part VI — Searching

Find anything in your files instantly.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 31 | [Search Patterns](chapters/31-search-patterns.md) | /, ?, regex basics, character classes |
| 32 | [Regex](chapters/32-regex.md) | Vim regex syntax, very magic, \v, \V |
| 33 | [Search History](chapters/33-search-history.md) | Navigating history, @/ register |
| 34 | [Advanced Replace](chapters/34-replace.md) | Substitution with confirmation, expressions |

---

## Part VII — Advanced Vim

Master Vim's advanced features.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 35 | [Registers](chapters/35-registers.md) | Named registers, system clipboard, black hole |
| 36 | [Marks](chapters/36-marks.md) | Setting and jumping to marks, file-local and global |
| 37 | [Macros](chapters/37-macros.md) | Record, play, edit macros — automate everything |
| 38 | [Buffers](chapters/38-buffers.md) | Multiple files in memory, :ls, :bn, :bd |
| 39 | [Windows](chapters/39-windows.md) | Splits, navigation, resizing |
| 40 | [Tabs](chapters/40-tabs.md) | Tab pages as workspaces |
| 41 | [Jump List](chapters/41-jump-list.md) | Ctrl+o/i, navigating cursor history |
| 42 | [Change List](chapters/42-change-list.md) | g;, g,, navigating edit history |

---

## Part VIII — Configuration

Make Vim your own.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 43 | [vimrc](chapters/43-vimrc.md) | Creating and loading your configuration file |
| 44 | [Settings](chapters/44-settings.md) | Essential settings for display, editing, search |
| 45 | [Keymaps](chapters/45-keymaps.md) | Custom key mappings, leader key |
| 46 | [Plugins](chapters/46-plugins.md) | Plugin managers, essential plugins |
| 47 | [Colorschemes](chapters/47-colorschemes.md) | Built-in and custom color schemes |

---

## Part IX — Neovim

Build a modern IDE with Neovim.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 48 | [Installing Neovim](chapters/48-installing-neovim.md) | Install and configure Neovim |
| 49 | [lazy.nvim](chapters/49-lazy-nvim.md) | The modern plugin manager for Neovim |
| 50 | [Treesitter](chapters/50-treesitter.md) | Better syntax highlighting and code analysis |
| 51 | [Mason](chapters/51-mason.md) | LSP servers, linters, formatters manager |
| 52 | [LSP](chapters/52-lsp.md) | Language Server Protocol configuration |
| 53 | [Telescope](chapters/53-telescope.md) | Fuzzy finder for files, text, buffers, and more |
| 54 | [nvim-cmp](chapters/54-nvim-cmp.md) | Intelligent autocompletion |
| 55 | [Git](chapters/55-git.md) | Git integration with fugitive and gitsigns |
| 56 | [Terminal](chapters/56-terminal.md) | Built-in terminal emulator |
| 57 | [Debugger](chapters/57-debugger.md) | Debug Adapter Protocol (nvim-dap) |
| 58 | [Which-key](chapters/58-which-key.md) | Discover key mappings as you type |

---

## Part X — Daily Workflow

Put it all together.

| #  | Chapter | Description |
| -- | ------- | ----------- |
| 59 | [Editing Code](chapters/59-editing-code.md) | Practical coding workflows |
| 60 | [Refactoring](chapters/60-refactoring.md) | Efficient refactoring techniques |
| 61 | [Navigation Tricks](chapters/61-navigation-tricks.md) | Advanced navigation techniques |
| 62 | [Productivity Tips](chapters/62-productivity-tips.md) | Tips for daily Vim productivity |
| 63 | [Common Mistakes](chapters/63-common-mistakes.md) | Pitfalls to avoid |
| 64 | [Practice Exercises](chapters/64-practice-exercises.md) | Exercises to build muscle memory |
| 65 | [Cheat Sheet](chapters/65-cheat-sheet.md) | Quick reference for all commands |

---

## How to Use This Handbook

### Beginners
Start with **Part I (Chapters 1–8)**. Build your foundation by understanding modes, opening files, and basic navigation. Don't skip ahead — the fundamentals are essential.

### Intermediate Users
If you know the basics, focus on **Parts II–V (Chapters 9–30)**. Master motions, text objects, and the dot command. These are where Vim's true power lies.

### Advanced Users
Jump to **Parts VII–X (Chapters 35–65)**. Macros, registers, buffers, configuration, and building a Neovim IDE with plugins.

### Reference
Use **Chapter 65** ([Cheat Sheet](chapters/65-cheat-sheet.md)) as your quick reference for all commands.

---

## Quick Start

1. [Install Vim](chapters/05-installing-vim.md)
2. [Open your first file](chapters/06-your-first-launch.md)
3. [Learn the four modes](chapters/07-understanding-modes.md)
4. [Practice navigation](chapters/09-cursor-movement.md)
5. [Keep the cheat sheet handy](chapters/65-cheat-sheet.md)

---

## License

This handbook is open source and freely distributable.

---

*Happy editing! 🎉*
