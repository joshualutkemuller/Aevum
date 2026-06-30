# Aevum Agent Guidance

This file describes helpful automation and assistant patterns for the Aevum repo.

## Purpose
- Provide a clear structure for future agents or AI helpers.
- Keep agent behavior aligned with the Aevum design brief.
- Help contributors use consistent prompts and tasks.

## Ideal Agent Responsibilities
- Suggest next small UI or game-design tasks based on the handoff document.
- Validate local build and lint status.
- Summarize repo state before making edits.
- Avoid making large design decisions without explicit approval.

## Useful Agent Prompts
- "Review the current `aevum-app/src/App.tsx` and propose the next minimal polish step for Journey mode."
- "Inspect `docs/Aevum_master_brief_and_handoff.md` and add a backlog entry for Calm mode implementation."
- "Run `npm run build` in `aevum-app` and report any compile errors."

## Recommended Agent Behavior
- Always read `docs/Aevum_master_brief_and_handoff.md` before changing game systems.
- Prefer updating existing files instead of adding new unrelated files.
- Keep commits small and focused.
- Do not overwrite design docs without user approval.

## Git Focused Agent Rules
- When asked to commit, use Conventional Commit format.
- If there are unstaged changes, report them before pushing.
- If a branch is not clean, ask whether to stash, commit, or discard changes.

## Future Enhancements
- Add GitHub Actions workflows for lint/build checks.
- Add a `.github/ISSUE_TEMPLATE` and `PULL_REQUEST_TEMPLATE` for consistent contributions.
- Add a `docs/AGENT_TASKS.md` for task-oriented prompts and workflows.
