# Chapter 58 — Which-key

> *"Never forget a key mapping again."*

---

**Difficulty:** ⭐⭐⭐ Intermediate
**Estimated Reading Time:** 10 minutes

---

# Introduction

Which-key shows available key mappings as you type.

When you press the leader key, it shows all available mappings.

---

# Installation

```lua
{
  "folke/which-key.nvim",
  event = "VeryLazy",
  config = function()
    require("which-key").setup({})
  end,
}
```

---

# Features

- Shows available keybindings after pressing leader
- Displays descriptions for each mapping
- Groups related mappings
- Configurable popup appearance

---

# Custom Descriptions

```lua
require("which-key").register({
  ["<leader>f"] = { name = "find", _ = "which_key" },
  ["<leader>ff"] = { "Find files", "Telescope find_files" },
  ["<leader>fg"] = { "Live grep", "Telescope live_grep" },
  ["<leader>fb"] = { "Buffers", "Telescope buffers" },
})
```

---

# Chapter Summary

- Which-key shows available key mappings.
- Install with lazy.nvim.
- Customize descriptions for your mappings.
- Essential for learning new keybindings.

---

## Exercises

1. Install which-key.
2. Press your leader key and see available mappings.
3. Add descriptions for your custom mappings.
4. Explore new plugins with which-key.

---

## Next Chapter

[**Chapter 59 — Editing Code**](59-editing-code.md)

Practical editing workflows for daily coding.
---

[⬆ Back to TOC](../TOC.md) | [🏠 Back to README](../README.md)
