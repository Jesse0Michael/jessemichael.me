# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (requires GitHub token for @jesse0michael/fetcher)
echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" > ~/.npmrc
npm install

# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run a single test file
npm test -- --testPathPattern=App.test

# Deploy to Firebase
./node_modules/.bin/firebase deploy --token "$FIREBASE_TOKEN"
```

## Architecture

Single-page React app (Create React App) with no client-side routing — navigation is handled by state in `App` (`src/containers/App/index.jsx`), which renders one of three views: `Home`, `Projects`, or `Bio`. The `Nav` component drives page changes via a `pageTurn` callback prop.

**Data fetching:** `Home` fetches a social feed from a Cloud Run API (`https://fetcher-ho4joes5va-uw.a.run.app`) using `@jesse0michael/fetcher` (a private GitHub Packages package). The feed is rendered as a lazy-loading grid of `Content` cards with scroll-based pagination.

**Hosting:** Firebase Hosting (`firebase.json`) serves the `build/` directory with SPA rewrites to `index.html`. CI/CD runs on CircleCI — it builds and deploys on every push to master (tests are currently commented out in `.circleci/config.yml`).

**UI:** Material-UI v1 (`@material-ui/core`) with a grey/orange theme defined in `App`.

**Key structure:**
- `src/containers/` — stateful page-level components (App, Home, Projects, Bio)
- `src/components/` — presentational components (Nav, Foot, Content, ContentMedia, Project)
