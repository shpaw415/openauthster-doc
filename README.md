# OpenAuthster Documentation Site

Static documentation site for [OpenAuthster](https://github.com/shpaw415/openauthster), built with Frame Master, MDX, and Tailwind CSS.

## What’s inside

- MDX-based docs in `src/pages/docs/`
- React + Frame Master for rendering
- Tailwind CSS (v4) with typography plugin
- Shiki + rehype-pretty-code for syntax highlighting

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3.8
- Bun.js-compatible toolchain (for Tailwind/Frame Master)

## Install

```bash
bun install
```

## Local development

```bash
bun dev
# opens http://localhost:3000
```

## Build

```bash
bun run build
# output: .frame-master/build
```

## Deploy (Cloudflare Pages)

- Build command: `bun install --frozen-lockfile && NODE_ENV=production bun run build`
- Output directory: `.frame-master/build`
- Root directory: repository root
- Environment vars: `BUN_VERSION=1.3.8`, `SKIP_DEPENDENCY_INSTALL=true`

## Project structure

- `src/pages/docs/` – MDX docs pages
- `src/` – components/layout
- `static/` – static assets
- `frame-master.config.ts` – frame-master config

## Related

- Issuer: https://github.com/shpaw415/OpenAuthSter-issuer
- WebUI: https://github.com/shpaw415/OpenAuthSter-webUI
- Shared types/client: https://github.com/shpaw415/OpenAuthSter-shared

## License

See root repository license when added.
