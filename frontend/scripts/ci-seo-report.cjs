const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const app = path.join(root, '.next', 'server', 'app');
const output = path.join(root, 'ci-seo-report.md');
const warnings = [];
const seen = new Map();
let inspected = 0;

function inspect(file) {
  inspected++;
  const route = '/' + path.relative(app, file).replace(/\\/g, '/').replace(/\.html$/, '').replace(/(^|\/)index$/, '').replace(/\/$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const fields = {
    title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim(),
    description: html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)/i)?.[1]?.trim(),
    h1: html.match(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]*>/g, '').trim(),
    canonical: html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)/i)?.[1],
  };
  const utility = ['/confirmation', '/book/checkout', '/delete-account'].includes(route);
  if (utility && !/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(html)) warnings.push(`${route}: missing noindex`);
  if (utility) return;
  for (const [name, value] of Object.entries(fields)) {
    if (!value) warnings.push(`${route}: missing ${name}`);
    if (value && name !== 'canonical') {
      const key = `${name}:${value.replace(/\s+/g, ' ').toLowerCase()}`;
      seen.set(key, [...(seen.get(key) || []), route]);
    }
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (file.endsWith('.html')) inspect(file);
  }
}

walk(app);
for (const [key, routes] of seen) {
  if (routes.length > 1) warnings.push(`Duplicate ${key.split(':')[0]}: ${routes.join(', ')}`);
}
fs.writeFileSync(output, [
  '# FixWheel rendered SEO audit', '',
  `Built HTML pages inspected: ${inspected}`, `Warnings: ${warnings.length}`, '',
  'Existing-page warnings are advisory; route and sitemap tests are blocking.', '',
  ...warnings.map(warning => `- ${warning}`), '',
  'Not covered: dynamic runtime HTML, body similarity, live booking read-back, visual checks, preview or rollback.',
].join('\n') + '\n');
console.log(`SEO audit: ${inspected} built pages; ${warnings.length} warnings. Report: ${output}`);
if (inspected === 0) process.exitCode = 1;
