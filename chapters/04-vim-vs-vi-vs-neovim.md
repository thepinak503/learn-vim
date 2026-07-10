# Chapter 4 — Vim vs Vi vs Neovim

> *"Three editors, one philosophy—but vastly different capabilities."*

---

**Difficulty:** ⭐ Beginner
**Estimated Reading Time:** 15–20 minutes

---

# Introduction

If you search online for "learn Vim," you'll quickly encounter three names:

* **Vi**
* **Vim**
* **Neovim**

This is confusing for beginners.

Which one should you install?

Which one should you learn?

Do they even work the same way?

This chapter answers those questions clearly.

---

# The Family Tree

```
1976 — EX (Bill Joy)
        |
1979 — Vi (Bill Joy)
        |
1991 — Vim (Bram Moolenaar)
        |
2014 — Neovim (Community Fork)
```

Each version added features while preserving the core editing model.

---

# Vi — The Original (1979)

## What Is Vi?

**Vi** stands for **Visual** (originally the visual mode of the `ex` editor).

It was written by **Bill Joy** in 1979 and shipped with every Unix system.

## Features

* Modal editing (Normal, Insert, Command modes)
* Basic navigation (`h`, `j`, `k`, `l`)
* Simple editing commands
* Extremely lightweight
* Portable to nearly any system

## Limitations

* No syntax highlighting
* No multiple undo (only one level)
* No split windows
* No plugins
* No scripting
* No arrow keys in insert mode

## Where Vi Is Still Used

* Embedded systems
* Minimal Docker containers
* Recovery environments
* Old Unix certification exams

---

# Vim — The Improvement (1991)

## What Is Vim?

**Vim** stands for **Vi Improved**.

Created by **Bram Moolenaar**, it started as a port of Vi to the Amiga but grew into a full rewrite.

## What Vim Added Over Vi

### Usability

* Arrow keys in insert mode
* Mouse support
* Multiple undo / redo
* Visual mode (selecting text visually)
* On-screen help (`:help`)

### Visual Features

* Syntax highlighting
* Color schemes
* Split windows
* Tab pages

### Extensibility

* Vimscript scripting language
* Plugin system
* Package management
* User-defined functions

### Productivity

* Registers (multiple clipboards)
* Macros (record and replay actions)
* Jump list
* Change list
* Quickfix list

## Why Most People Mean Vim

When someone says "I use Vim," they almost always mean **Vim**, not the original Vi.

---

# Neovim — The Modern Fork (2014)

## What Is Neovim?

**Neovim** is a **fork** of Vim created by a community of developers who wanted to modernize Vim's codebase.

It is **not** a separate editor—it's a refactored, improved Vim.

## What Neovim Improved Over Vim

### Architecture

* Better code structure
* Asynchronous job control
* Built-in terminal emulator
* Remote plugin architecture

### Configuration

* **Lua** as a first-class configuration language (faster, cleaner than Vimscript)
* Better API for plugin developers

### Language Support

* Built-in LSP (Language Server Protocol) client
* Treesitter for smarter syntax highlighting
* Better integration with modern developer tools

### Performance

* Faster startup time
* Lower memory usage
* Better handling of large files

---

# Feature Comparison Table

| Feature               | Vi       | Vim      | Neovim   |
| --------------------- | -------- | -------- | -------- |
| Modal editing         | ✅       | ✅       | ✅       |
| Syntax highlighting   | ❌       | ✅       | ✅       |
| Multiple undo         | ❌       | ✅       | ✅       |
| Visual mode           | ❌       | ✅       | ✅       |
| Split windows         | ❌       | ✅       | ✅       |
| Plugins               | ❌       | ✅       | ✅       |
| Vimscript             | ❌       | ✅       | ✅       |
| Lua config            | ❌       | ❌       | ✅       |
| Built-in terminal     | ❌       | ❌       | ✅       |
| LSP client            | ❌       | ❌       | ✅       |
| Treesitter            | ❌       | ❌       | ✅       |
| Async plugins         | ❌       | (partial)| ✅       |
| Mouse support         | ❌       | ✅       | ✅       |
| Package manager       | ❌       | ✅ (8.0+) | ✅ (native) |

---

# Compatibility

Here's the important part:

> **Nearly everything you learn in Vim works identically in Neovim.**

The core editing model is the same:

* `i` enters insert mode
* `Esc` returns to normal mode
* `dd` deletes a line
* `:wq` saves and quits
* All motions, operators, and text objects

If you learn commands in Vim, you can use them in Neovim, and vice versa.

---

# Configuration Differences

## Vim uses `.vimrc`

```
~/.vimrc
```

Written in **Vimscript**:

```vim
set number
set tabstop=4
colorscheme desert
```

## Neovim uses `init.lua` (or `init.vim`)

```
~/.config/nvim/init.lua
```

Written in **Lua**:

```lua
vim.opt.number = true
vim.opt.tabstop = 4
vim.cmd.colorscheme("desert")
```

Neovim also supports the old `.vimrc` syntax, so you can start with what you know.

---

# Which One Should You Learn?

## If you're a beginner: Start with Neovim

Reasons:

* Modern features out of the box
* Larger plugin ecosystem
* Better documentation for new users
* Lua is easier to learn than Vimscript
* Active community development

## If you need Vim on servers

Learn basic Vim commands anyway.

Most servers have `vim` or `vi` installed. The core commands are identical.

---

# Graphical Variants

Both Vim and Neovim have graphical versions:

| Name        | Based On | Description                   |
| ----------- | -------- | ----------------------------- |
| GVim        | Vim      | Standalone GUI version of Vim |
| MacVim      | Vim      | macOS-native Vim GUI          |
| Neovide     | Neovim   | Rust-based Neovim GUI         |
| Goneovim    | Neovim   | Go-based Neovim GUI           |

These provide:

* Native menus and toolbars
* Better font rendering
* Scrollbar support
* System clipboard integration

---

# Chapter Summary

* **Vi** (1979) is the original—minimal but limited.
* **Vim** (1991) added plugins, syntax highlighting, and usability.
* **Neovim** (2014) modernized the architecture with Lua, LSP, and async support.
* Core editing commands are identical across all three.
* **Neovim is recommended for new users**, while learning Vim commands prepares you for server environments.

---

# Key Takeaways

* Vi, Vim, and Neovim share the same editing philosophy.
* Each version builds upon the previous one.
* The commands you learn transfer across all three.
* Neovim is the most modern and actively developed version.
* You can use Vim keybindings even in GUI editors like VS Code.

---

## Exercises

1. Research whether Vi is installed on your system.
2. Identify which version you have installed (Vi or Vim).
3. Open Vim and try `:version` to see your version details.
4. Check if Neovim is available for your operating system.

---

## Next Chapter

**[Chapter 5 — Installing Vim & Neovim](05-installing-vim.md)**

We'll walk through installing Vim and Neovim on Linux, Windows, and macOS, with detailed steps for each operating system.
