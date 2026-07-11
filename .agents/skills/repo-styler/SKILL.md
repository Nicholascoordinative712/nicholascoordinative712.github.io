---
name: repo-styler
description: Formats and designs professional, emoji-free, multilingual repository READMEs.
---

# Repository Styler Skill

This skill defines the styling and formatting standards for repository README files across all projects. It is based on industry best practices (PurpleBooth README template and Habr repository guidelines) but adapts them to enforce a high-quality, professional technical aesthetic: **strictly no graphical emojis** (which are considered bad tone in serious software engineering circles) and using clean ASCII, markdown formatting, badges, and sharing buttons instead.

---

## 1. Top Section (Header & Navigation)

Every README must start with a clean, structured top section to capture attention and summarize information:

### Language Switcher
* Directly at the very top, place a clean link row for multilingual quick-switching:
  `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)`

### Project Title & Subtitle
* Heading 1 for the project name: `# Project Name`
* A brief, italicized or bold subtitle directly underneath describing the core purpose in one sentence.

### Badges & Share Buttons
* Place a row of clean Shields.io badges (no emojis in labels) showing:
  * License (e.g. `[License: MIT]`)
  * Platform/OS compatibility
  * Language/API versions
* Add a standardized "Share on X" (Twitter) button using the shields.io social style:
  `[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FUser%2FRepo)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FUser%2FRepo)`

### Visual Demonstration
* Include a clean screenshot slider or presentation:
  * **On GitHub (README.md)**: Because GitHub sanitizes JavaScript and custom CSS rules, standard clickable JS sliders are not supported. To present multiple screenshots without any quality loss (e.g. from GIF compression) and keep page height clean, use HTML `<details>` accordion tabs. Set the first tab as `open` by default, and others collapsed:
    ```html
    <details open>
      <summary><b>1. First Feature Screenshot</b></summary>
      <br/>
      <p align="center"><img src="screenshots/screenshot1.png" width="95%" /></p>
    </details>
    <details>
      <summary><b>2. Second Feature Screenshot</b></summary>
      <br/>
      <p align="center"><img src="screenshots/screenshot2.png" width="95%" /></p>
    </details>
    ```
    This guarantees 100% lossless PNG quality, supports native image zoom in browsers, and behaves like an accordion slider.
  * **On the Web App / Portfolio Pages**: Implement a fully interactive screenshot slider featuring one large active display image and a ribbon of clickable thumbnails below it that swap the main view upon interaction.

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

### 1. Overview / Description
* A brief, professional overview of the problem the application solves and its target audience.

### 2. Key Features
* A structured bulleted list of the main capabilities. Keep descriptions concise and focused on developer/user value.

### 3. Tech Stack
* Use a clean markdown table to display the technologies, versions, and descriptions:
  | Layer / Component | Technology | Details / Purpose |
  | --- | --- | --- |
  | Language | C# (.NET 8.0) | net8.0-windows target framework |
  | UI Library | WPF-UI (v4.3.0) | Fluent Design theme and components |

### 4. Getting Started
* **Prerequisites**: What tools, SDKs, or runtimes must be installed first (with links).
* **Installation & Running**: Step-by-step build and run commands in formatted code blocks:
  ```powershell
  git clone <url>
  cd <folder>
  dotnet build
  dotnet run
  ```

### 5. Running the Tests
* Clearly explain how to run automated unit, integration, or linting tests:
  ```powershell
  dotnet test
  ```

### 6. Deployment
* Brief instructions or commands for compiling/publishing production bundles or standalone executables (e.g. self-contained single-file publish commands).

### 7. Contributing
* Inviting other developers to participate. Explain how they can contribute (Issues, Pull Requests) and link to `CONTRIBUTING.md`.

### 8. Versioning
* Explicitly state the versioning system used (e.g., SemVer) and how to view available releases/tags.

### 9. Authors & Contributors
* List initial authors and links to their GitHub profiles.
* Acknowledgment of all contributors.

### 10. License
* State the license clearly (MIT, GPL-3.0, etc.) and link to the `LICENSE` file.

### 11. Acknowledgments
* Hat tips, third-party library references, or inspirations.
