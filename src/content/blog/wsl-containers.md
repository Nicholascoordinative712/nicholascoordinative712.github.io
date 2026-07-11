---
title: "How to Run Linux Containers in WSL Without Docker Desktop"
description: "The built-in WSL containers feature is now in public preview. Learn how to configure wslc.exe and the WSL Container API."
pubDate: 2026-06-29
category: "WSL"
image: "/images/blog/wsl-containers.jpg"
readTime: "4 min"
status: "PUB"
---

At the recent Microsoft Build 2026 conference, developers announced a long-awaited feature: native support for **WSL Containers**. This feature allows you to build, run, and manage Linux containers directly inside the Windows Subsystem for Linux, completely removing the need to install resource-heavy third-party platforms like Docker Desktop.

This solution aims to simplify developers' workflows by providing a lightweight, built-in alternative that works right out of the box without extra background services and overhead.

## Core System Components

As of now, WSL Containers highlight two key tools:

- **Command-Line Utility `wslc.exe`** (aliased as `container.exe`) – used to quickly create, run, and debug containers through a familiar terminal.
- **WSL Container API** – a specialized NuGet package `Microsoft.WSL.Containers`, enabling developers to programmatically integrate container management into their Windows applications.

## How to Test It Right Now

**Step 1.** Update WSL on your computer to the latest pre-release build. To do this, open Command Prompt as an administrator and run:

```bash
wsl --update --pre-release
```

**Note:** Native container support requires WSL version 2.9.3 or higher.

**Step 2.** Restart WSL by running `wsl --shutdown` to apply all changes.

**Step 3.** Check if the utility is working by running a test command in your terminal:

```bash
wslc --version
```

## Release Roadmap

Currently, the feature is in Public Preview and available on Windows 10 and Windows 11. Microsoft is collecting developer feedback and plans to release the stable General Availability (GA) version in the autumn of 2026.
