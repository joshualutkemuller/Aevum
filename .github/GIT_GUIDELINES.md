# Aevum Git & GitHub Best Practices

## Branching
- Keep `main` clean and deployable.
- Create feature branches for new work, e.g. `feat/edo-puzzle`, `fix/ui-path-visuals`.
- Use descriptive branch names and avoid long-lived branches.

## Commit Messages
- Follow Conventional Commits:
  - `feat(...)`: new feature
  - `fix(...)`: bug fix
  - `docs(...)`: documentation only
  - `chore(...)`: build or tooling
  - `refactor(...)`: code change that neither fixes a bug nor adds a feature
  - `perf(...)`: performance improvement
  - `test(...)`: adding or fixing tests
  - `build(...)`: build system changes
- Example: `feat(ui): add visible path nodes for Edo puzzle progression`

## Pull Requests
- One PR per coherent feature or fix.
- Include a short description, key changes, and test/verification steps.
- Link PRs to any relevant tasks in the design handoff docs.
- Keep diffs small and reviewable.

## Code Quality
- Run lint before commit:
  - `cd aevum-app && npm run lint`
- Run build before pushing:
  - `cd aevum-app && npm run build`
- Keep UI changes and logic changes separate when possible.

## Git Hooks
- This repo contains local hooks in `.githooks/`.
- Run the setup script after cloning:
  - `./setup-hooks.sh`
- Or manually enable them:
  - `git config core.hooksPath .githooks`
  - `chmod +x .githooks/*`
- Hooks included:
  - `pre-commit`: runs `npm run lint` in `aevum-app`
  - `commit-msg`: validates Conventional Commit format
  - `pre-push`: runs `npm run build` in `aevum-app`

## Dependency Workflow
- Install dependencies from repo root if needed:
  - `cd aevum-app && npm install`
- Keep `package-lock.json` or `npm-shrinkwrap.json` tracked if added.

## Agent / Automation Guidance
- For future automation, keep task definitions and prompts in `docs/`.
- Use the master handoff brief as the authoritative source of game design decisions.
- Prefer small, incremental commits when updating UX or design systems.

## Future GitHub Integrations
- Consider adding GitHub Actions for:
  - `npm install`, `npm run lint`, `npm run build`
  - PR title/pattern validation
  - dependency security scans
- Keep CI fast and focused on preventing regressions, not full end-to-end tests at first.
