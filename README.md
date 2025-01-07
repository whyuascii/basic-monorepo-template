# basic-monorepo-template

Monorepo template with pnpm, shadecn, turbo, react, fastify, typescript, and more fun

# MONOREPO Template

- tailwind
- shadcn/ui
- pnpm
- eslint
- prettier
- tsconfig
- docker
- typescript
- fastify
- react

---

## How to Create a Release

### Commit Message Guidelines

Semantic Release relies on **Conventional Commits** to determine the type of release (major, minor, patch). Follow these guidelines when committing changes:

- **Patch Release**: Use `fix:` to indicate bug fixes, e.g., fix: resolve an issue with the login flow.

- **Minor Release**: Use `feat:` to indicate new features, e.g., feat: add user profile page.

- **Major Release**: Use `feat!:` or include `BREAKING CHANGE:` in the commit message body to indicate a breaking change, e.g., feat!: overhaul authentication system or BREAKING CHANGE: updated APIs require reauthentication.

---

### Steps to Create a Release

1. Push or merge changes to the `main` branch.
2. Ensure your commits follow the **Conventional Commits** format.
3. Semantic Release will automatically:
   - Analyze commits to determine the version bump (major, minor, patch).
   - Generate release notes.
   - Update the `CHANGELOG.md`.
   - Create a GitHub release.

---

### Custom Release Notes

Release notes are formatted using a custom template that includes:

- Highlights for breaking changes and new features.
- A list of all changes.
- Links to documentation and support.

**Example release notes format:**

## 🚀 Release Notes

Date: YYYY-MM-DD

### 📝 Highlights

- feat: add user profile page
- BREAKING CHANGE: updated APIs require reauthentication

### 🔧 Changes

- feat: add user profile page
- fix: resolve an issue with the login flow

### 📘 Documentation

For more details, refer to the [documentation](https://docs.yourcompany.com/releases).

### 🛠 Support

For support, contact the [DevOps Team](mailto:devops@yourcompany.com).

---

## Testing Locally

Run a dry run of Semantic Release to test the configuration:

npx semantic-release --dry-run

---

### Custom Notes Script

The provided `custom-notes.js` file works perfectly in its current form, extracting highlights and formatting the release notes into a professional and standardized format.
