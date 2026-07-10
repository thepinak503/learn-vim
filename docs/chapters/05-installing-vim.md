# Chapter 5 — Installing Vim & Neovim

> *"Every journey begins with a single step—or in this case, a single install command."*

---

**Difficulty:** ⭐ Beginner
**Estimated Reading Time:** 15 minutes

---

# Introduction

Before you can learn Vim, you need to have it installed.

This chapter covers installation on:

* Linux
* macOS
* Windows

We'll also verify the installation and set up a basic configuration.

---

# Linux

## Check if Vim Is Already Installed

Most Linux distributions come with Vim pre-installed.

Check with:

```bash
vim --version
```

Or:

```bash
vi --version
```

If you see:

```
VIM - Vi IMproved
```

you already have it.

## Install Vim

### Debian / Ubuntu / Linux Mint

```bash
sudo apt update
sudo apt install vim -y
```

### Fedora / Red Hat / CentOS

```bash
sudo dnf install vim -y
```

### Arch Linux / Manjaro

```bash
sudo pacman -S vim
```

### openSUSE

```bash
sudo zypper install vim
```

## Install Neovim

### Debian / Ubuntu

```bash
sudo apt install neovim -y
```

### Fedora

```bash
sudo dnf install neovim -y
```

### Arch Linux

```bash
sudo pacman -S neovim
```

### Via AppImage (all distros)

```bash
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage
```

---

# macOS

## Via Homebrew (Recommended)

If you don't have Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Vim:

```bash
brew install vim
```

Or Neovim:

```bash
brew install neovim
```

## Check Built-in Vim

macOS comes with a pre-installed version of Vim.

```bash
vim --version
```

The built-in version is usually older. Homebrew gives you the latest.

---

# Windows

## Method 1: Windows Subsystem for Linux (WSL) — Recommended

This is the best way to use Vim on Windows.

1. Install WSL:

   ```powershell
   wsl --install
   ```

2. Restart your computer.

3. Open Ubuntu from the Start menu.

4. Install Vim inside WSL:

   ```bash
   sudo apt update
   sudo apt install vim -y
   ```

Now you have a full Linux terminal with Vim on Windows.

## Method 2: Native Vim for Windows

Download the installer from:

```
https://www.vim.org/download.php
```

Choose the **gvim** executable (includes both GVim GUI and terminal Vim).

## Method 3: Neovim on Windows

Download the latest release:

```
https://github.com/neovim/neovim/releases/latest
```

Choose `nvim-win64.msi` or `nvim-win64.zip`.

### Via Scoop (package manager)

```powershell
scoop install neovim
```

### Via Chocolatey

```powershell
choco install neovim
```

---

# Verify Installation

Open a terminal and run:

```bash
vim --version
```

You should see output similar to:

```
VIM - Vi IMproved 9.0 (2022 Jun 28, compiled ...)
Included patches: 1-1000
Modified by ...
Compiled by ...
```

For Neovim:

```bash
nvim --version
```

Output:

```
NVIM v0.10.0
Build type: Release
LuaJIT 2.1.0-beta3
```

If you see these, installation was successful.

---

# GUI Versions

## GVim

Vim with a graphical interface.

```bash
# Linux
sudo apt install vim-gtk3 -y
```

```bash
# macOS (via Homebrew)
brew install macvim
```

Launch with:

```bash
gvim
```

## Neovide (Neovim GUI)

A modern GUI for Neovim written in Rust.

```
https://github.com/neovide/neovide
```

---

# Your First Launch

Open Vim:

```bash
vim
```

Or Neovim:

```bash
nvim
```

You should see:

```
~                              
~                              
~                              
~                              
~                              
   VIM - Vi IMproved           
                              
   version 9.0                
   by Bram Moolenaar et al.   
   Vim is open source and freely distributable
```

Don't worry if it looks plain. You'll customize it later.

For now, exit by typing:

```
:q!
```

Then press **Enter**.

Congratulations—you just used Vim!

---

# Creating a Practice File

Create a file to practice with:

```bash
vim practice.txt
```

Or with Neovim:

```bash
nvim practice.txt
```

If the file doesn't exist, Vim creates a new empty buffer.

---

# Chapter Summary

* Vim and Neovim can be installed on all major operating systems.
* WSL is the recommended approach for Windows users.
* Use `vim --version` or `nvim --version` to verify installation.
* GUI versions exist (GVim, MacVim, Neovide) but are optional.
* The first launch should end with `:q!` to quit.

---

# Key Takeaways

* Install using your system's package manager when possible.
* WSL provides the best Vim experience on Windows.
* Both Vim and Neovim work identically for basic commands.
* Visualization is not necessary—terminal Vim is fully functional.
* Create a practice file to follow along with the next chapters.

---

## Exercises

1. Install Vim on your operating system using the appropriate method.
2. Verify the installation with `vim --version`.
3. Install Neovim if possible.
4. Create a practice file and open it with Vim.

---

## Next Chapter

**[Chapter 6 — Your First Launch](06-your-first-launch.md)**

We'll open Vim, understand the screen layout, and learn how to perform basic tasks right away.
---
---

[⬆ Back to TOC](../../TOC.md) | [🏠 Back to README](../../README.md)
