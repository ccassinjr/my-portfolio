
# Copilot Instructions for my-portfolio

## Project Overview

This is a simple static portfolio website for Carlos Cassin Junior. The project currently consists of a single HTML file (`index.html`).

## Structure & Conventions

- The main entry point is `index.html`.
- Styles are expected to be in `styles.css` (referenced in the HTML, but not present yet).
- Navigation is handled via anchor links to sections within the same page (`#about`, `#projects`, `#contact`).
- The project does not use any build tools, frameworks, or package managers at this time.

## Developer Workflows

- No build or test commands are required; simply edit the HTML (and CSS, if present) and open `index.html` in a browser to view changes.
- There are no external dependencies or integrations currently.

## Patterns & Recommendations

- Keep all assets (HTML, CSS, images) in the project root unless the structure changes.
- If adding new sections or files, update navigation and references in `index.html` accordingly.
- Follow semantic HTML practices for accessibility and maintainability.

## Extending the Project

- If you add a `styles.css`, ensure it is linked in `index.html`.
- For more complex features (e.g., JavaScript interactivity), create separate `.js` files and link them in the HTML head or before the closing `</body>` tag.
- If the project grows, consider organizing assets into folders (e.g., `css/`, `js/`, `images/`).

## Example: Adding a New Section

To add a new section (e.g., "Skills"), update the navigation and add a corresponding section in the HTML:

```html
<nav>
  <ul>
    ...existing code...
    <li><a href="#skills">Skills</a></li>
  </ul>
</nav>
...
<section id="skills">
  <h2>Skills</h2>
  <p>List your skills here.</p>
</section>
```

---
If you add new workflows, dependencies, or structure, update these instructions to keep them accurate.
