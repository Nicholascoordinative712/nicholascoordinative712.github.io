---
name: repo-styler
description: Formats and designs professional, emoji-free, multilingual repository READMEs.
---

# Repository Styler Skill

This skill defines the styling and formatting standards for repository README files across all projects. It enforces a high-quality, professional technical aesthetic, removing all graphical emojis (which are considered bad tone in serious software engineering circles) and using clean ASCII and markdown elements instead.

---

## 1. Top Navigation & Multilingual Switcher

Every README file must begin with a clean language switcher navigation bar at the very top of the document.
* Use a simple, centered or left-aligned link row using ASCII pipes (`|`) or bullets (`•`).
* The active language should NOT be linked, or all three should be listed as simple links to their files.
* Format:
  `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)`

---

## 2. No Emojis Policy

Graphical emojis (🚀, 🛠️, 📝, 📦, etc.) are strictly prohibited. 
* Replace graphical indicators with standard Markdown elements:
  * Bullet items: Use standard hyphens `-` or asterisks `*`.
  * Highlighted parameters or keywords: Use backticks `` `code` `` or bold text `**bold**`.
  * Status or properties: Use bracketed tags, e.g. `[C#]`, `[WinUI 3]`, `[MIT]`, `[API 24+]`.
  * Section breaks: Use markdown horizontal rules `---`.

---

## 3. Standard Document Structure

Every project README must follow this logical, professional layout:

### Title Header
* Project name as `# Project Name`.
* A clean, italicized or bold subtitle block directly underneath.
* Language switcher bar.
* Optional bracketed badges (e.g. build status, license tags) using Shields.io but without emojis.

### Overview / Description
* A brief, professional overview of the problem the application solves and its target audience.

### Key Features
* A structured bulleted list of the main capabilities. 
* Keep descriptions concise and focused on developer/user value.

### Tech Stack
* Use a clean markdown table to display the technologies, versions, and descriptions:
  ```markdown
  | Layer / Component | Technology | Details / Purpose |
  | --- | --- | --- |
  | Language | C# (.NET 8.0) | net8.0-windows target framework |
  | UI Library | WPF-UI (v4.3.0) | Fluent Design theme and components |
  ```

### Getting Started / Installation
* System requirements (OS versions, dependencies).
* Clear, copy-pasteable build and run commands in formatted code blocks:
  ```powershell
  git clone <url>
  cd <folder>
  dotnet build
  ```

### License
* State the license clearly under `## License`.
* Reference the `LICENSE` file (e.g. `This project is licensed under the MIT License - see the LICENSE file for details.`).
