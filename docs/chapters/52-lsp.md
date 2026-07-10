# Chapter 52 — LSP Configuration

> *"Language Server Protocol brings IDE features to Neovim."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 20 minutes

---

# Introduction

LSP provides:

- Autocompletion
- Go to definition
- Hover information
- Diagnostics (errors/warnings)
- Code actions
- Rename symbols

---

# nvim-lspconfig

```lua
{
  "neovim/nvim-lspconfig",
  config = function()
    local lspconfig = require("lspconfig")
    
    lspconfig.pyright.setup({})
    lspconfig.tsserver.setup({})
    lspconfig.rust_analyzer.setup({})
  end,
}
```

---

# Key Mappings

```lua
vim.api.nvim_create_autocmd("LspAttach", {
  group = vim.api.nvim_create_augroup("UserLspConfig", {}),
  callback = function(ev)
    vim.keymap.set("n", "gd", vim.lsp.buf.definition, { buffer = ev.buf })
    vim.keymap.set("n", "K", vim.lsp.buf.hover, { buffer = ev.buf })
    vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename, { buffer = ev.buf })
    vim.keymap.set("n", "gr", vim.lsp.buf.references, { buffer = ev.buf })
    vim.keymap.set("n", "<leader>ca", vim.lsp.buf.code_action, { buffer = ev.buf })
    vim.keymap.set("n", "[d", vim.diagnostic.goto_prev, { buffer = ev.buf })
    vim.keymap.set("n", "]d", vim.diagnostic.goto_next, { buffer = ev.buf })
  end,
})
```

---

# LSP Commands

| Key | Action |
| --- | ------ |
| `gd` | Go to definition |
| `K` | Hover info |
| `gr` | Find references |
| `<leader>rn` | Rename symbol |
| `<leader>ca` | Code action |

---

# Chapter Summary

- nvim-lspconfig configures LSP servers.
- Key mappings turn Neovim into an IDE.
- LSP provides navigation, diagnostics, and refactoring.
- Use Mason + lspconfig together.

---

## Exercises

1. Install nvim-lspconfig.
2. Configure an LSP server for your language.
3. Add key mappings for `gd`, `K`, `gr`.
4. Open a code file and use LSP features.

---

## Next Chapter

[**Chapter 53 — Telescope**](53-telescope.md)

Fuzzy find everything in your project.
