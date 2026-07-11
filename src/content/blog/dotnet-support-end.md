---
title: "End of Support for .NET 8 and .NET 9: Dates and Migration"
description: "Microsoft is ending support for .NET 8 and .NET 9 on the same day — November 10, 2026. Learn why this happened and how to prepare your projects."
pubDate: 2026-06-30
category: "Updates"
image: "/images/blog/dotnet-support-end.jpg"
readTime: "3 min"
status: "PUB"
---

Microsoft has officially notified the developer community that support for both the **.NET 8** and **.NET 9** platforms will end on the exact same day — **November 10, 2026**. After this date, applications running on these versions will stop receiving monthly security updates and technical hotfixes.

This is the first time that an LTS (Long-Term Support) and an STS (Standard-Term Support) release are being retired concurrently.

## Why the End-of-Support Dates Concurred

This alignment is driven by two main factors:

1. **.NET 8 (LTS)** was released in November 2023 with a standard 3-year support cycle, which naturally ends in November 2026.
2. **.NET 9 (STS)**, released in late 2024, received a revised support policy. Starting with this version, Microsoft extended the STS release lifecycle from 18 to **24 months**. Consequently, support for .NET 9 has also been extended until November 2026.

## Consequences (What this means for active projects)

**Important:** Existing applications will not stop running after November 10, 2026. However, the lack of security patches leaves them vulnerable to new types of threats and may violate corporate compliance policies.

To migrate your projects, the following actions are recommended:

**Step 1.** Audit dependencies for all your projects targeting .NET 8 and .NET 9.

**Step 2.** Plan to migrate your codebase to **.NET 10 (LTS)**, which is scheduled to release in November 2025. It will be supported until late 2028.

**Step 3.** Check that all third-party NuGet libraries used in your projects are fully compatible with .NET 10.

## Conclusion

Preparing early for the transition to newer .NET versions will prevent potential infrastructure security issues in the future. We recommend beginning migration testing on .NET 10 preview builds as early as early 2026.
