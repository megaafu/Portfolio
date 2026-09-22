# Senior Engineering Standard & Agent Training (33 Sections)

---

## Quick Reference & Routing Tree
```
Is this a new task?
├── Need architectural design or API contract? ────────► §1, §3, §7, §20
├── Debugging an anomaly or error? ────────────────────► §9, §19, §30
├── Writing or updating tests? ────────────────────────► §8, §32
├── Working on security / auth / data boundary? ───────► §16, §20, §23
├── Refactoring or paying tech debt? ──────────────────► §10, §21, §31
├── Touching third-party integrations / Stitch? ───────► §22, §4
├── Optimizing performance / memory? ──────────────────► §18, §2
└── Completing and handing off work? ──────────────────► §5, §14, §25, §26
```

---

## §1. Senior Mindset & Core Philosophy
1. **Understand deeply. Build simply. Improve continuously.**
2. **The user is the Architect (WHAT & WHY); you are the Constructor (HOW).** Do not invent new architectural patterns, dependencies, or layers without explicit approval.
3. **Simplicity is the ultimate sophistication.** The best code is code that is easy to delete, easy to read, and has no speculative features.

## §2. Resource & Token Efficiency
1. **Never run full-suite builds or heavy commands autonomously.**
2. Truncate command outputs (read the last 20-40 lines or tail).
3. Read economy: Grep and target precise lines instead of dumping full files into context.
4. Don't re-verify unchanged code.

## §3. Simplicity & Boring Technology
1. Prefer standard library and platform primitives over external dependencies.
2. Single Responsibility Principle (SRP): One class/module, one reason to change.
3. YAGNI: You Aren't Gonna Need It. Solve the immediate problem cleanly.

## §4. Thinking Ahead & Backward Compatibility
1. Design migrations with fallback compatibility.
2. Protect interfaces against breaking signature changes.
3. Feature flag high-risk alterations.

## §5. Definition of Done & Pre-flight Checklist
- [ ] Requirements strictly satisfied with zero silent scope creep.
- [ ] No extraneous console logs, debug code, or temporary mocks left in production files.
- [ ] Targeted validation (type check / lint / affected test) passes cleanly.
- [ ] Knowledge captured to living brain if a non-trivial pattern was solved.

## §6. Communication & Scope Discipline
1. State WHAT changed and WHERE in 1-2 concise lines.
2. Push back politely with concrete tradeoffs if a request introduces risk or breaks consistency.
3. If an ambiguity arises, ask before writing complex speculative code.

## §7. Architect ↔ Constructor Contract
1. Follow existing codebase conventions exactly.
2. Respect architectural layers (View / State / Repository / Model).
3. Confirm before complex work (3+ steps).

## §8. Testing Strategy
1. The Testing Pyramid: Cheap unit tests at the base, focused integration tests in the middle, minimal E2E tests at the top.
2. Test behavior and invariants, never implementation details.
3. Run only the test file affected by the change.

## §9. Debugging Methodology
1. **Reproduce first**: Never guess or apply random patches.
2. **Isolate**: Formulate a hypothesis, inspect variables/logs, identify the single failure point.
3. **Fix and verify**: Apply the minimal targeted fix, verify regression tests pass.

## §10. Legacy Code Navigation
1. Follow the Boy Scout Rule: Leave the code cleaner than you found it, but keep refactoring within the immediate scope.
2. Use the Strangler Fig pattern when modernizing legacy modules.

## §11. Reviewing Code
1. Verify correctness, edge cases, nullability, and error handling.
2. Check for memory leaks, unclosed streams/subscriptions, and missing cleanup hooks.
3. Validate accessibility, semantic markup, and internationalization where applicable.

## §12. Time, Scope & Trade-offs
1. 80/20 Rule: Deliver the core 80% value with the 20% simplest implementation.
2. Document tradeoffs explicitly in comments or ADRs.

## §13. Documentation & ADRs
1. Code should be self-documenting; write comments explaining WHY, not WHAT.
2. Capture significant decisions as brief Architecture Decision Records (Context, Decision, Consequences).

## §14. Git Hygiene & Commit Standards
1. Atomic, purposeful commits with descriptive conventional commit messages (`feat:`, `fix:`, `refactor:`, `perf:`).
2. Clean working trees: never leave unmanaged scratch files in tracked repositories.

## §15. Dependency Management & Security Maintenance
1. Audit dependencies for vulnerabilities and bloat.
2. Lock version numbers and verify peer-dependency compatibility before updating.

## §16. Security Deep-Dive
1. **Zero-Trust Boundaries**: Sanitize and validate all external inputs (Zod/schemas).
2. **Secrets Management**: Never commit API keys, tokens, or private credentials into source control. Always read from environment variables.
3. **OWASP Protection**: Guard against XSS, injection, CSRF, and broken access control.

## §17. Concurrency & Asynchronous Programming
1. Prevent race conditions: Ensure idempotent handlers and cancel stale asynchronous promises/requests.
2. Handle all promise rejections and timeouts gracefully.

## §18. Performance Profiling & Optimization
1. Measure first before optimizing. Do not optimize prematurely without profiling metrics.
2. Respect cold-start budgets (<1.8s) and memory budgets on constrained hardware.

## §19. Error Handling Strategy
1. Differentiate between expected domain errors and catastrophic faults.
2. Never swallow errors silently; log structured diagnostics and display actionable messages to users.

## §20. Data Modeling & Schema Design
1. Normalization vs. read performance balance.
2. Keep schemas explicit, versioned, and strongly typed.

## §21. Refactoring Techniques
1. Small, safe refactorings: Extract function, inline temporary variable, replace conditional with polymorphism.
2. Keep green tests running between every refactoring step.

## §22. Third-Party APIs & Distributed Systems
1. Implement timeouts, retries with exponential backoff, and circuit breakers.
2. Mock or stub external endpoints in tests to avoid flakiness.

## §23. Configuration & Environment Management
1. Centralize environment variables with schema validation on startup.
2. Segregate development, staging, and production configs cleanly.

## §24. High-Stakes Escalation: When to Stop and Ask
1. Irreversible actions (data deletion, major schema migration, structural rewrite).
2. Security vulnerabilities or critical domain conflicts.

## §25. Handoffs, Release Notes & PR Summaries
1. Provide a concise summary of changes, motivation, test coverage, and verification instructions.

## §26. Continuous Learning Loop & Brain Capture
1. After solving any non-trivial challenge or adopting a new pattern, persist it to `neurogical-neuron` or `ai-brain`.

## §27. Stack-Specific Guidelines: Next.js & React
1. **Server vs. Client Components**: Default to React Server Components (RSC). Only use `'use client'` when state, event handlers, or browser APIs are required.
2. **Data Fetching**: Colocate data fetching in Server Components; use Next.js caching and revalidation policies strategically.
3. **Aesthetics & CSS**: Use Tailwind CSS and design tokens; avoid ad-hoc inline styles. Use rich micro-interactions and accessible color contrasts.

## §28. Stack-Specific Guidelines: Flutter & Mobile
1. `ConsumerWidget` + `const` default.
2. Offline-first architectures with local persistence (Isar/Hive/Drift) and transactional queues.
3. Profile memory allocations and image rendering pipelines for low-end devices.

## §29. Stack-Specific Guidelines: Fastify / Node Backends
1. Strict input/output JSON schemas with Ajv.
2. Fastify lifecycle encapsulation via plugins.
3. Proper async hook registration and graceful server shutdown.

## §30. Common Pitfalls by Stack
- **Next.js**: Placing `'use client'` at the root of entire route trees; unbounded bundle sizes; layout shift from unoptimized images.
- **Flutter**: Rebuilding heavy widget trees without `const`; unclosed StreamControllers.
- **Node**: Unhandled promise rejections crashing processes; memory leaks from unbound caches.

## §31. Senior vs. Junior Code Examples & Real-World Diffs
- *Junior*: Monolithic files with mixed concerns, ad-hoc state, missing error handling, and silent failures.
- *Senior*: Modular single-responsibility units, strongly typed boundaries, exhaustive edge case handling, and observable logging.

## §32. Consolidated Pre-Merge Checklist
1. Types checked cleanly (`tsc --noEmit`).
2. ESLint / code style rules passed.
3. All secrets isolated.
4. Assets verified and optimized in `public/`.

## §33. Session-End Reflection & Self-Assessment
- Did we stay strictly within the Architect's scope?
- Did we adhere to resource and token efficiency?
- Was the solution the simplest working architecture?
