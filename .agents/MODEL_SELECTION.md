# Model Selection & Routing Guide

This guide establishes the decision matrix for model routing across different development tasks to maximize intelligence, speed, and token cost efficiency.

---

## 1. Quick Lookup Cheat Sheet

| Task Category | Primary Model | Alternative | Rationale |
| :--- | :--- | :--- | :--- |
| **Exploration / File Scanning** | `Gemini 1.5/2.0 Flash` | `Gemini 1.5 Pro` | Ultra-fast, high throughput, large context window, lowest cost. |
| **Documentation & Summaries** | `Gemini 1.5/2.0 Flash` | `Claude 3.5 Sonnet` | Excellent language generation, zero need for heavy reasoning. |
| **Applying Confirmed Fixes** | `Gemini 1.5/2.0 Flash` | `Claude 3.5 Sonnet` | Straightforward code edits after diagnosis is already determined. |
| **Complex Logic / Diagnosis** | `Gemini 1.5/2.0 Pro` | `Claude 3.5 Sonnet` | Strong multi-step causal reasoning, deep code comprehension. |
| **Targeted Test Generation** | `Gemini 1.5/2.0 Pro` | `Claude 3.5 Sonnet` | Edge case discovery, mocking boundaries, invariant verification. |
| **Full Stack Architecture Review** | `Claude 3.5 Sonnet` | `Gemini 1.5 Pro` | Industry standard for nuanced architectural tradeoffs and aesthetics. |
| **High-Risk Data / DB Migrations** | `Claude 3.5 Sonnet` | `Claude 3.5 Opus` | Zero tolerance for data loss, strict idempotency and boundary verification. |
| **Novel / Mathematical Algorithms**| `Claude 3.5 Opus` | `Gemini 1.5 Pro` | Highest tier reasoning for intricate algorithmic state machines. |

---

## 2. Debug vs. Fix Split Workflow

To conserve tokens and budget without sacrificing quality:
1. **Diagnosis Phase (Reasoning-Heavy)**:
   - Use `Gemini Pro` or `Claude Sonnet` to trace the root cause, review logs, and inspect edge conditions.
   - Formulate the minimal fix plan.
2. **Implementation Phase (Execution-Heavy)**:
   - Switch to `Gemini Flash` or apply directly with minimal diffs.
   - Run cheap, targeted verifications (`tsc --noEmit`, targeted tests).

---

## 3. Cost & Context Budgeting Heuristics

- **Context Window Management**: Never paste raw terminal output or huge dependency dumps into context. Truncate outputs to the last 20-40 lines.
- **Incremental Turns**: Prefer 2-3 focused turns over 1 massive turn that re-reads full repository indexes.
- **Fallback Rule**: If `Gemini Flash` fails to resolve an edit accurately within two attempts, escalate immediately to `Claude 3.5 Sonnet` or `Gemini Pro` rather than looping.
- **Ask User Rule**: For architectural changes or high-stakes refactoring spanning >3 files, pause and align with the Architect before execution.
