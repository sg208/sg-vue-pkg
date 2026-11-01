# conventions.md

## Naming

- Library components: PascalCase `Sg<Name>.vue` in `src/components/` (`SgButton.vue`, `SgButtonText.vue`).
- Tests: colocated `<Component>.test.ts` beside the component (`src/components/SgButton.test.ts`).
- Showcase components: PascalCase `<Name>Section.vue` / `Site<Name>.vue` in `demo/components/`; static data in `demo/data/*.ts`.
- CSS tokens: `--sg-button-*` / `--sg-button-text-*` (`src/styles/tokens.css`); stable classes `.sg-button`, `.sg-button-text`.

## Style

- Formatting + lint enforced by `.prettierrc.json` + `eslint.config.mjs`; run `pnpm format` / `pnpm lint:fix`.
- Config files ESM via `.mts` / `.mjs` extensions; `package.json` stays `"type": "commonjs"`.

## Git

- Commit subjects: Conventional Commits — `feat` · `fix` · `chore` · `docs` · `build` · `test`, optional scope (`git log --format=%s`).
- Branches: `<type>/<slug>` off `develop` (`feat/legal-footer-hosting`, `chore/cf-workers-hosting`); merged into `develop` with a merge commit.
- `develop` → `main` only for releases (`chore(release): vX.Y.Z`, tagged).
