# Huzaifa Afzal - Portfolio

A lightweight static portfolio for GitHub Pages, built with semantic HTML, responsive CSS, and a small amount of vanilla JavaScript. No package installation or build step is required.

## Preview locally

From the project directory, run either:

```bash
python -m http.server 8000
```

or:

```bash
npx serve .
```

Then open `http://localhost:8000` (or the URL printed by `serve`). Opening `index.html` directly also works, but a local server is a better match for GitHub Pages.

## Deploy with GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repository's **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch to publish (usually `main`) and the `/ (root)` folder.
5. Save. GitHub will display the public Pages URL after deployment completes.

All URLs in the site are relative, so it works from either a user/organization Pages site or a repository subpath.

## Connect a Namecheap custom domain

1. Choose the domain or subdomain you want to use.
2. Copy `CNAME.example` to a new file named `CNAME` and replace `yourdomain.com` with the exact domain.
3. In GitHub **Settings > Pages**, enter the same custom domain and save it before changing DNS. This prevents another Pages site from claiming an unassigned subdomain.
4. In Namecheap **Advanced DNS**, add the records from [GitHub's current custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site):
   - For `www`, create a CNAME record pointing to `<github-username>.github.io`.
   - For an apex domain, add GitHub's documented A and AAAA records.
5. After DNS verification succeeds, enable **Enforce HTTPS**. DNS changes may take up to 24 hours to propagate.

Keep only `CNAME.example` until the real domain is known. The example file is not interpreted by GitHub Pages.

### Replace domain placeholders

The current production base URL is `https://portfolio.huzaifaafzal.me/`. If the custom domain changes, replace that value throughout `index.html`; it is used by the canonical URL, Open Graph metadata, Twitter card metadata, and Person structured data.

## Update the downloadable resume

Replace `assets/Syed_Huzaifa_Bin_Afzal_Resume.pdf` with the new PDF while keeping the same filename. If the filename changes, update all resume links in `index.html`.

## Main files

- `index.html` - page content, metadata, and structured data
- `styles.css` - design system and responsive layout
- `script.js` - mobile menu and current footer year
- `404.html` - GitHub Pages fallback page
- `assets/og-card.png` - social-sharing image
- `CNAME.example` - future custom-domain placeholder
