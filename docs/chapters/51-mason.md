# Chapter 51 — Mason

> *"One tool to install all your language servers, linters, and formatters."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

Mason is a Neovim plugin that manages external editor tools.

It installs:

- LSP servers (pyright, tsserver, rust-analyzer)
- Linters (flake8, eslint)
- Formatters (prettier, black)

---

# Installation

```lua
{
  "williamboman/mason.nvim",
  build = ":MasonUpdate",
  config = function()
    require("mason").setup()
  end,
}
```

---

# Using Mason

| Command | Action |
| ------- | ------ |
| `:Mason` | Open Mason UI |
| `:MasonInstall pyright` | Install a package |
| `:MasonUninstall pyright` | Uninstall a package |
| `:MasonUpdate` | Update package index |

---

# mason-lspconfig

```lua
{
  "williamboman/mason-lspconfig.nvim",
  dependencies = { "williamboman/mason.nvim" },
  config = function()
    require("mason-lspconfig").setup({
      ensure_installed = { "pyright", "tsserver", "rust_analyzer" },
    })
  end,
}
```

---

# Chapter Summary

- Mason manages LSP servers and tools.
- `:Mason` opens the graphical UI.
- `mason-lspconfig` bridges Mason and lspconfig.
- Install tools with `:MasonInstall`.

---

## Exercises

1. Install Mason.
2. Open `:Mason` to browse available packages.
3. Install a language server for your language.
4. Add mason-lspconfig for automatic setup.

---

## Next Chapter

[**Chapter 52 — LSP Configuration**](52-lsp.md)

Set up language server protocol in Neovim.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
