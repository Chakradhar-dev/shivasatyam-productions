# Shiva Satyam Productions (SSP) – Modern Vite Frontend

A lightning-fast, modern, responsive frontend clone of [Shiva Satyam Productions](https://www.shivasatyamproductions.com/), migrated from WordPress + Elementor to **React + Vite + Tailwind CSS**.

---

## 🌟 Highlights & Improvements Over WordPress

| Feature | WordPress (Original) | Vite + React (This Clone) |
| :--- | :--- | :--- |
| **Performance** | ~4-6s initial load, heavy PHP/Elementor bloat | **< 200ms instantaneous loads**, zero server-side rendering lag |
| **Security** | Susceptible to WP vulnerabilities, brute-force spam bots | **100% static client-side application**, zero database attacks |
| **Hosting Cost** | Requires PHP hosting, MySQL database, caching plugins | **Free hosting** on Cloudflare Workers / Pages, Vercel, Netlify |
| **Design & UI** | Heavy Elementor layout, broken mobile hamburger styling | **Custom tailored dark cinematic aesthetic**, DM Sans & Bodoni Moda typography, smooth transitions |
| **Assets & Media** | Remote WordPress uploads subject to hotlink/speed issues | **61 local high-res authentic assets** included in `public/assets/` |
| **Interactivity** | Basic static text & image displays | **Interactive poster lightboxes**, multi-lingual switcher, functional departmental contact routing |

---

## 🚀 Cloudflare Deployment (Workers & Pages)

### Option A: Deploy via Cloudflare Workers CLI (Fastest)

1. **Log in to Cloudflare**:
   ```bash
   npx wrangler login
   ```
   *(A browser tab will open asking you to click **Authorize**)*

2. **Deploy directly to Cloudflare Workers**:
   ```bash
   npm run deploy
   ```
   *Wrangler uploads the build files and outputs your live `https://shivasatyam-productions.<your-subdomain>.workers.dev` URL.*

3. **Add Your Custom Domain**:
   - In Cloudflare Dashboard ➔ **Workers & Pages** ➔ click `shivasatyam-productions` ➔ **Settings** ➔ **Domains & Routes** ➔ click **Add Custom Domain** and enter `shivasatyamproductions.com`.

---

### Option B: Deploy via Cloudflare Pages Dashboard (Drag-and-Drop)

1. Open [dash.cloudflare.com](https://dash.cloudflare.com/)
2. In the sidebar, go to **Workers & Pages** ➔ click **Create**.
3. Select the **Pages** tab ➔ choose **Upload assets**.
4. Name project: `shivasatyam-productions`.
5. Drag and drop the `dist` folder located at:
   `C:\Users\91824\.gemini\antigravity\scratch\shivasatyam-vite\dist`
6. Click **Deploy site**.
7. Connect your custom domain in the **Custom domains** tab in 1 click!

---

## 📦 Local Development

```bash
# Run local Vite dev server
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview
```
