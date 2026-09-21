# Foldrone Universe — Main Web V2

Brand-focused landing page for foldrone.com.

## Public architecture
- Foldrone Play — Media
- Foldrone Studio — Creation
- Foldrone Workspace — Productivity / Documents / PDF
- Foldrone Labs — Future / experimental products

## Brand assets
Uses the newly supplied Foldrone wordmark and Foldrone Universe artwork. The supplied universe artwork is used as visual branding only; it is not treated as a substitute for semantic page text.

## Public information policy
The landing page intentionally does not expose internal architecture, implementation criteria, detailed security controls, infrastructure topology, or other sensitive engineering information.

## Footer
The footer contains professional About, Privacy Notice, Terms of Use, Security and Contact destinations. Foldrone Labs is not linked to a Facebook page.

## Security baseline
No third-party analytics, advertising trackers, external fonts, or unnecessary client-side dependencies are included in this build. A strict Content Security Policy and additional response headers are included for Cloudflare Pages.

## Deployment
Connect the repository to Cloudflare Pages and map the canonical domain to `foldrone.com`. Configure `www.foldrone.com` as a redirect to the chosen canonical hostname.
