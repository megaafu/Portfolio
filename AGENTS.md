# Portfolio Workspace Agent Guidelines & Training

## Mandatory Reference Documents
Always adhere to the training and routing guides defined in this workspace:
- [Senior Training Standard (33 Sections)](file:///home/megaafu/Projects/NextJs/Portfolio/.agents/SENIOR_TRAINING.md)
- [Model Selection & Routing Guide](file:///home/megaafu/Projects/NextJs/Portfolio/.agents/MODEL_SELECTION.md)
- [MCP Configuration](file:///home/megaafu/Projects/NextJs/Portfolio/.agents/mcp_config.json)

---

## Stitch Project Configuration & Instructions
When retrieving or updating UI screens, use the configured Stitch MCP integration:

### Project Details
- **Title**: Full-Stack Engineering Portfolio
- **ID**: `9569527599372827925`

### Screens
- **1. Mega Afú // Senior Full-Stack & Mobile Architect (Elevated Architecture Edition)**
  - **ID**: `1292cf9d27cf408fba0c0d810c0b9ea2`

### MCP Connection
- **Endpoint**: `https://stitch.googleapis.com/mcp`
- **Header**: `X-Goog-Api-Key: <set via STITCH_API_KEY env var, never hardcode>`

---

## Operating Protocol: Architect ↔ Constructor
1. The user is the **Architect** (WHAT and WHY); the agent is the **Constructor** (HOW).
2. Follow existing codebase conventions in [src/](file:///home/megaafu/Projects/NextJs/Portfolio/src/).
3. Do not introduce new dependencies, public APIs, or architectural layers without explicit authorization.
4. Verify changes cheaply (`tsc --noEmit`, targeted file checks). Never run full-suite builds unless requested.
5. Report changes with 1-2 concise lines.
