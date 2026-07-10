# Chapter 54 — nvim-cmp

> *"Intelligent autocompletion for Neovim."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 20 minutes

---

# Introduction

nvim-cmp is a completion engine for Neovim.

It provides:

- Keyword completion
- LSP-based completion
- Snippet expansion
- Custom sources

---

# Installation

```lua
{
  "hrsh7th/nvim-cmp",
  dependencies = {
    "hrsh7th/cmp-nvim-lsp",    -- LSP source
    "hrsh7th/cmp-buffer",       -- Buffer words
    "hrsh7th/cmp-path",         -- File paths
    "L3MON4D3/LuaSnip",         -- Snippets
    "saadparwaiz1/cmp_luasnip", -- Snippet source
  },
  config = function()
    local cmp = require("cmp")
    cmp.setup({
      snippet = {
        expand = function(args)
          require("luasnip").lsp_expand(args.body)
        end,
      },
      mapping = cmp.mapping.preset.insert({
        ["<C-b>"] = cmp.mapping.scroll_docs(-4),
        ["<C-f>"] = cmp.mapping.scroll_docs(4),
        ["<C-Space>"] = cmp.mapping.complete(),
        ["<C-e>"] = cmp.mapping.abort(),
        ["<CR>"] = cmp.mapping.confirm({ select = true }),
      }),
      sources = cmp.config.sources({
        { name = "nvim_lsp" },
        { name = "luasnip" },
      }, {
        { name = "buffer" },
        { name = "path" },
      }),
    })
  end,
}
```

---

# Key Mappings

| Key | Action |
| --- | ------ |
| `Ctrl+Space` | Trigger completion |
| `Ctrl+n/p` | Navigate items |
| `Ctrl+b/f` | Scroll docs |
| `Enter` | Confirm selection |
| `Ctrl+e` | Abort |

---

# Chapter Summary

- nvim-cmp provides intelligent autocompletion.
- It integrates with LSP, snippets, and buffers.
- Use `cmp-nvim-lsp` for LSP completion.
- Use `LuaSnip` for snippet support.

---

## Exercises

1. Install nvim-cmp and its dependencies.
2. Configure LSP and buffer sources.
3. Add snippets with LuaSnip.
4. Test completion in a code file.

---

## Next Chapter

[**Chapter 55 — Git Integration**](55-git.md)

Use Git inside Neovim.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
