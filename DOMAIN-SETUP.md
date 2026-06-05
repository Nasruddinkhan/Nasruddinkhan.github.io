# Custom Domain Setup

The portfolio works on GitHub Pages without a purchased domain.

When a domain is purchased:

1. Add the custom domain in the repository's GitHub Pages settings.
2. Create a `CNAME` file in this repository containing only the domain, for example:

   ```text
   nasruddinkhan.dev
   ```

3. Configure the domain provider's DNS records using the values shown by GitHub Pages.
4. Replace `https://nasruddinkhan.github.io/` in canonical links, `sitemap.xml`, `robots.txt`, and structured data with the new domain.
5. Enable **Enforce HTTPS** in GitHub Pages after DNS verification succeeds.

Do not add a `CNAME` file before the domain is owned and configured.
