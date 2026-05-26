# textcontrol-promises – Claude Instructions

## Release Process

To publish a new version of `@sinc-gmbh/textcontrol-promises` to GitHub Packages and npm:

### Steps

1. **Bump version** in [lib/package.json](lib/package.json) (field `"version"`) to the new semver (e.g. `34.1.0`)

2. **Commit & push** to `develop`:
   ```
   git add lib/package.json
   git commit -m "chore: bump version to X.Y.Z"
   git push
   ```

3. **Create a GitHub release** with a matching tag (e.g. `v34.1.0`) at:
   `https://github.com/SINC-GmbH/textcontrol-promises/releases/new`
   - Publishing the release triggers the `release-package.yml` pipeline automatically
   - The pipeline also supports manual `workflow_dispatch`

### What the pipeline does (`.github/workflows/release-package.yml`)

- Builds the lib: `yarn install --immutable && yarn run build` (in `lib/`)
- Publishes to **GitHub Packages** (`npm.pkg.github.com`) using `GITHUB_TOKEN`
- Publishes to **npmjs.org** (`registry.npmjs.org`) using OIDC trusted publisher
- Both registry jobs run in parallel on `ubuntu-latest`
