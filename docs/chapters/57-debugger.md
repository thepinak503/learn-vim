# Chapter 57 — Debugger

> *"Debug your code without leaving Neovim."*

---

**Difficulty:** ⭐⭐⭐⭐ Advanced
**Estimated Reading Time:** 15 minutes

---

# Introduction

nvim-dap (Debug Adapter Protocol) brings debugging to Neovim.

---

# Installation

```lua
{
  "mfussenegger/nvim-dap",
  config = function()
    require("dap").adapters.python = {
      type = "executable",
      command = "python",
      args = { "-m", "debugpy.adapter" },
    }
  end,
}
```

---

# DAP UI

```lua
{
  "rcarriga/nvim-dap-ui",
  dependencies = { "mfussenegger/nvim-dap" },
  config = function()
    require("dapui").setup()
  end,
}
```

---

# Key Mappings

```lua
nnoremap <leader>db :DapToggleBreakpoint<CR>
nnoremap <leader>dc :DapContinue<CR>
nnoremap <leader>do :DapStepOver<CR>
nnoremap <leader>di :DapStepInto<CR>
```

---

# Chapter Summary

- nvim-dap adds debugging to Neovim.
- Supports multiple languages via DAP adapters.
- nvim-dap-ui provides a visual debugger interface.
- Set breakpoints and step through code.

---

## Exercises

1. Install nvim-dap.
2. Configure a debug adapter for Python or JavaScript.
3. Set a breakpoint and start debugging.
4. Install nvim-dap-ui for a visual interface.

---

## Next Chapter

[**Chapter 58 — Which-key**](58-which-key.md)

Discover key mappings as you type.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
