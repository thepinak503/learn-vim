# Chapter 50 — Treesitter

> *"Smarter syntax highlighting and code analysis for Neovim."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

Treesitter provides better syntax highlighting, code folding, and text object support.

It uses a real parser instead of regex-based highlighting.

---

# Installation

With lazy.nvim:

```lua
{
  "nvim-treesitter/nvim-treesitter",
  build = ":TSUpdate",
  config = function()
    require("nvim-treesitter.configs").setup({
      ensure_installed = { "lua", "python", "javascript" },
      highlight = { enable = true },
      indent = { enable = true },
    })
  end,
}
```

---

# Key Commands

| Command | Action |
| ------- | ------ |
| `:TSInstall python` | Install parser for Python |
| `:TSUpdate` | Update all parsers |
| `:TSModuleInfo` | Show installed modules |

---

# Benefits

- **Accurate highlighting** — understands code structure
- **Smart indentation** — language-aware indenting
- **Better folding** — fold by function/class/block
- **Incremental parsing** — fast even on large files

---

# Chapter Summary

- Treesitter provides language-aware editing.
- Install parsers with `:TSInstall`.
- Enable `highlight` and `indent` modules.
- Essential for modern Neovim setups.

---

## Exercises

1. Add nvim-treesitter to your lazy.nvim config.
2. Install parsers for your languages.
3. Open a code file and compare highlighting with and without Treesitter.

---

## Next Chapter

[**Chapter 51 — Mason**](51-mason.md)

Install LSP servers, linters, and formatters.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
