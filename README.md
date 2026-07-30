# Melroy AI Portfolio — Premium Version

A modern portfolio for AI / Data Science roles, built with:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 1. Install Node.js

Download and install Node.js LTS from https://nodejs.org/

Check the installation:

```bash
node -v
npm -v
```

## 2. Open the project folder

Extract the ZIP and open the folder in VS Code.

Or in Terminal:

```bash
cd melroy-ai-portfolio-premium
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the website

```bash
npm run dev
```

Then open:

http://localhost:3000

## 5. Edit your information

Main content is in:

```text
data/portfolio.ts
```

Edit your:

- Projects
- Skills
- Experience

Hero text is in:

```text
components/Hero.tsx
```

Contact information is in:

```text
components/Contact.tsx
```

## 6. Build before deploying

```bash
npm run build
```

## 7. Deploy to Vercel

1. Upload the folder to GitHub.
2. Go to https://vercel.com
3. Sign in with GitHub.
4. Click Add New → Project.
5. Import your portfolio repository.
6. Click Deploy.

Vercel detects Next.js automatically.

## Important placeholders

Replace these before publishing:

- `your.email@example.com`
- GitHub URL
- LinkedIn URL

## Common issue

If dependencies behave strangely:

```bash
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

On Windows PowerShell, delete `node_modules`, `package-lock.json`, and `.next` manually instead.
