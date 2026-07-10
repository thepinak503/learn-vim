---
title: Interactive Vim Practice
---

# 🏋️ Interactive Vim Practice Exercises

> *"Practice is the only path to mastery."*

Welcome to the interactive practice area! These exercises are designed to build your Vim muscle memory.

---

## 📋 How to Practice

1. Open a terminal
2. Create a practice file: `vim practice.txt`
3. Follow the exercise instructions
4. Try to complete each task without looking at the answers
5. Check your answers when stuck

---

## 🟢 Level 1: Navigation

### Exercise 1.1 — Basic Movement
```bash
vim practice.txt
# Type the following text:
# The quick brown fox jumps over the lazy dog.
```

**Tasks (don't use the mouse!):**
- [ ] Move to the beginning of the line (`0`)
- [ ] Move to the end of the line (`$`)
- [ ] Jump to the word "fox" (`w` 3 times)
- [ ] Jump back to "The" (`b`)
- [ ] Jump to the end of "brown" (`e`)

### Exercise 1.2 — Line Navigation

Create a file with numbers 1-20, one per line. Then:
- [ ] Jump to line 1 (`gg`)
- [ ] Jump to line 20 (`G`)
- [ ] Jump to line 10 (`10G`)
- [ ] Move down 5 lines (`5j`)
- [ ] Move up 3 lines (`3k`)

---

## 🟡 Level 2: Editing

### Exercise 2.1 — Deleting

```bash
vim practice.txt
# Type: delete this word please
```

- [ ] Delete "delete" (`dw`)
- [ ] Undo (`u`)
- [ ] Delete the entire line (`dd`)
- [ ] Undo (`u`)
- [ ] Delete "delete this" (`d2w`)

### Exercise 2.2 — Changing

```bash
vim practice.txt
# Type: hello = "world"
```

- [ ] Change "hello" to "greeting" (`ciw` then type)
- [ ] Change "world" to "universe" (`ci"` then type)
- [ ] Change the entire line (`cc`)

### Exercise 2.3 — Copy & Paste

```bash
vim practice.txt
# Type three lines:
# line one
# line two
# line three
```

- [ ] Yank line one (`yy`)
- [ ] Paste it at the end (`p`)
- [ ] Yank the word "one" (`yiw`)
- [ ] Paste it elsewhere

---

## 🟠 Level 3: Visual Mode

### Exercise 3.1 — Character Selection
```bash
vim practice.txt
# Type: Hello Beautiful World
```

- [ ] Select "Beautiful" with `v` then `e`
- [ ] Delete it with `d`
- [ ] Undo with `u`
- [ ] Select and yank "World" (`v` then `e` then `y`)

### Exercise 3.2 — Block Selection
```bash
vim practice.txt
# Type items 1-4, one per line:
# 1. item
# 2. item
# 3. item
# 4. item
```

- [ ] Use `Ctrl+v` to select the "1." column
- [ ] Delete it with `d`
- [ ] Undo
- [ ] Use `Ctrl+v` and `I` to add "- " before each item

---

## 🔴 Level 4: Search & Replace

### Exercise 4.1 — Search
```bash
vim practice.txt
# Type a paragraph with the word "vim" appearing 5+ times
```

- [ ] Search for "vim" (`/vim`)
- [ ] Navigate through matches (`n`, `N`)
- [ ] Search backward (`?vim`)

### Exercise 4.2 — Replace
```bash
vim practice.txt
# Type: apple apple apple apple apple
```

- [ ] Replace the first "apple" with "orange" (`:s/apple/orange/`)
- [ ] Replace all "apple" with "banana" (`:%s/apple/banana/g`)
- [ ] Replace with confirmation (`:%s/banana/cherry/gc`)

---

## 🟣 Level 5: Macros & Registers

### Exercise 5.1 — Macros
```bash
vim practice.txt
# Add 5 lines of code, each ending without a semicolon
```

- [ ] Record a macro that adds `;` at the end: `qa` then `A;` then `Esc` then `j` then `q`
- [ ] Play it on 4 more lines (`4@a`)

### Exercise 5.2 — Registers
- [ ] Yank a line into register `a` (`"ayy`)
- [ ] Yank another line into register `b` (`"byy`)
- [ ] Paste from register `a` (`"ap`)
- [ ] Paste from register `b` (`"bp`)
- [ ] View all registers (`:reg`)

---

## 🎯 Challenge Mode

### Challenge: Format This Code

Create a file with this ugly code:

```python
def add(a,b):
return a+b
def sub(a,b):
return a-b
result=add(10,5)
print(result)
```

Format it to be correctly indented and readable:

- [ ] Add proper indentation with visual mode and `>`
- [ ] Add spaces around operators
- [ ] Add blank lines between functions
- [ ] Auto-indent the entire file (`gg=G`)

### Challenge: Transform This List

```text
1) first item
2) second item
3) third item
```

Transform to:

```text
- [ ] First item
- [ ] Second item
- [ ] Third item
```

Use a combination of:
- Block visual mode (`Ctrl+v`)
- Replace (`:s`)
- Macros (`qa`...`q`)

---

## ✅ Answer Key

Click to expand each answer:

<details>
<summary>Navigation Answers</summary>

```
Exercise 1.1: 0 → $ → w w w → b b b → e
Exercise 1.2: gg → G → 10G → 5j → 3k
```
</details>

<details>
<summary>Editing Answers</summary>

```
Exercise 2.1: dw → u → dd → u → d2w
Exercise 2.2: ciw + "greeting" → ci" + "universe" → cc
Exercise 2.3: yy → p → yiw → p
```
</details>

<details>
<summary>Visual Mode Answers</summary>

```
Exercise 3.1: v e d → u → v e y
Exercise 3.2: Ctrl+v jjj d → u → Ctrl+v jjj I- [Space] Esc
```
</details>

<details>
<summary>Search & Replace Answers</summary>

```
Exercise 4.1: /vim → n → N → ?vim
Exercise 4.2: :s/apple/orange/ → :%s/apple/banana/g → :%s/banana/cherry/gc
```
</details>

<details>
<summary>Macros & Registers Answers</summary>

```
Exercise 5.1: qa A; Esc j q → 4@a
Exercise 5.2: "ayy → "byy → "ap → "bp → :reg
```
</details>

---

## 📈 Progress Tracker

Keep track of your progress:

| Level | Exercise | Completed? |
|-------|----------|------------|
| 🟢 1.1 | Basic Movement | ☐ |
| 🟢 1.2 | Line Navigation | ☐ |
| 🟡 2.1 | Deleting | ☐ |
| 🟡 2.2 | Changing | ☐ |
| 🟡 2.3 | Copy & Paste | ☐ |
| 🟠 3.1 | Character Selection | ☐ |
| 🟠 3.2 | Block Selection | ☐ |
| 🔴 4.1 | Search | ☐ |
| 🔴 4.2 | Replace | ☐ |
| 🟣 5.1 | Macros | ☐ |
| 🟣 5.2 | Registers | ☐ |
| 🎯 | Challenge Mode | ☐ |

---

**[Back to Home](../)**
