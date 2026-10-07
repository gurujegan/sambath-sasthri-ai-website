# website-sambathsasthri

Static site built with [Nuxt 4](https://nuxt.com), [Nuxt Content 3](https://content.nuxt.com) and Tailwind CSS, hosted on Firebase.

Requires Node.js 22.12+ or 24.11+.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# generate the static site into .output/public
npm run generate

# preview the generated site locally
npm run preview

# lint
npm run lint

# firebase deploy (serves .output/public)
firebase deploy
```

## Project layout

| Path | Purpose |
| --- | --- |
| `app/pages/` | Routes (file-based). `pages/exclude/` holds old drafts, blocked in robots.txt and the sitemap. |
| `app/components/` | Auto-imported Vue components. `components/content/` is usable from Markdown. |
| `app/layouts/default.vue` | Nav bar, page slot and footer. |
| `app/assets/` | Files processed by the bundler (CSS, images). |
| `content/services/` | Service articles (Markdown), defined as the `services` collection in `content.config.ts`. |
| `public/` | Served as-is from `/` (images, icons, favicon). |
| `nuxt.config.ts` | Head tags, modules, sitemap/robots/analytics config. |

### Using components in Markdown

Components in `app/components/content/` are used with MDC block syntax:

```md
::image-with-caption{width="350" imgsrc="/images/temple-tower.webp" imgalttext="temple tower"}
Caption / paragraph text goes here.
::
```
