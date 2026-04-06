# Blue Aurora Labs — Website

This is the official website for **Blue Aurora Labs**, a web design and development agency that builds high-performance, beautifully crafted websites for businesses of all sizes.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

Install dependencies and run the local dev server.

> **Note**: Requires Node.js version 20.3.0 or later.

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Installs dependencies                        |
| `npm run dev`       | Starts local dev server at `localhost:4321`  |
| `npm run build`     | Build your production site to `./dist/`      |
| `npm run preview`   | Preview your build locally before deploying  |

## Project Structure

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   ├── scripts/
│   │   └── ui/
│   ├── config/
│   ├── content/
│   │   └── blog/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   └── pages/
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Static assets served directly at the root URL.                                                                                     |
| `src/assets/`            | Images and assets used throughout the project.                                                                                     |
| `src/components/`        | Reusable components split into `ui` (individual elements) and `blocks` (full page sections).                                       |
| `src/config/`            | TypeScript configuration files for site settings, navigation, and analytics.                                                       |
| `src/content/`           | Collection data such as blog posts.                                                                                                 |
| `src/data/`              | JSON files for site content (features, pricing, FAQs, navigation, etc.).                                                           |
| `src/icons/`             | SVG icons used across the project, sourced from [Heroicons](https://heroicons.com/).                                               |
| `src/layouts/`           | Layout components that define the overall page structure.                                                                          |
| `src/pages/`             | `.astro` files for each page. Each file is exposed as a route based on its filename.                                               |

## Configuration

Key configuration files are in `src/config/` and content data is in `src/data/json-files/`.

| File                              | Description                                           |
| --------------------------------- | ----------------------------------------------------- |
| `src/config/config.ts`            | Site title, description, logo, mode, and animations.  |
| `src/data/json-files/`            | Page content: navigation, features, pricing, FAQ, etc.|

### Colors

Colors are defined as CSS variables in `src/styles/global.css`. Modify the `primary` and `neutral` color values to match your brand.

### Fonts

Update the `@font-face` declarations in `src/styles/global.css` and replace font files in the `public/` directory.

### Dark / Light Mode

Mode is set in `src/config/config.ts` via the `mode` property: `"light"`, `"dark"`, or `"auto"`. Set to `"auto"` and uncomment the ThemeSwitcher in `NavigationBar.astro` to let users toggle.

## License

Copyright 2026 — [Blue Aurora Labs](https://blueauroralabs.com)
