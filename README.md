# MiniMax M2.7

Search-focused MiniMax M2.7 website built with Next.js 16 and shadcn/ui-style components.

## Local development

```bash
npm install
npm run dev
```

Key commands:

```bash
npm run build
npm run lint
npm run test:e2e
```

## Production deployment

Production route:

`github.com/gateszhangc/minimax-m2-7 -> main -> Dokploy project/app minimax-m2-7`

Runtime assumptions:

- Build mode is `standalone`
- Production URL is `https://minimax-m2-7.lol`
- Dokploy is the only production deploy target
- `www.minimax-m2-7.lol` should redirect to the apex domain

## Analytics and SEO

The site expects these public env vars in production:

```bash
NEXT_PUBLIC_WEB_URL=https://minimax-m2-7.lol
NEXT_PUBLIC_PROJECT_NAME=minimax-m2-7
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-KSQ938VHFQ
NEXT_PUBLIC_CLARITY_PROJECT_ID=vy0jj0bjwf
```

SEO baseline includes:

- Unique page metadata
- Canonical URLs
- Open Graph and Twitter images
- `robots.txt`
- `sitemap.xml`
- Structured data for website, webpages, breadcrumbs, and FAQ

## Verification checklist

- `npm run build`
- `npm run test:e2e`
- Verify `https://minimax-m2-7.lol`
- Verify `https://minimax-m2-7.lol/robots.txt`
- Verify `https://minimax-m2-7.lol/sitemap.xml`
