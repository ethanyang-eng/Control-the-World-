# Publish Neon Frontiers Web With GitHub Pages

This folder is a static website. GitHub Pages can host it directly because it only uses `index.html`, `styles.css`, `app.js`, and `preview.svg`.

## Fastest Upload Path

1. Create a new GitHub repository.
2. Upload every file from this folder to the repository root.
3. Commit the upload.
4. Open the repository settings.
5. Go to `Pages`.
6. Set `Source` to `Deploy from a branch`.
7. Pick branch `main` and folder `/root`.
8. Save.

GitHub will publish the website at a URL like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Local Preview

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Files Needed For The Website

- `index.html`
- `styles.css`
- `app.js`
- `preview.svg`
- `.nojekyll`

`README.md` and `GITHUB_PAGES.md` are documentation files and can stay in the repository.
