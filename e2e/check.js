import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1440, height: 900 },
  ];

  const pagesToCheck = [
    { name: 'Index', url: 'http://localhost:4321/' },
    { name: 'Cursos', url: 'http://localhost:4321/cursos' },
    { name: 'Proyectos', url: 'http://localhost:4321/proyectos' },
    { name: 'Publicaciones', url: 'http://localhost:4321/publicaciones' }
  ];

  let hasErrors = false;

  for (const pageInfo of pagesToCheck) {
    console.log(`\nChecking page: ${pageInfo.name}`);
    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(pageInfo.url);
      await page.waitForLoadState('networkidle');

      const isResponsive = await page.evaluate(() => {
        return document.documentElement.scrollWidth <= window.innerWidth;
      });

      console.log(`  - Viewport ${vp.name} (${vp.width}x${vp.height}): Responsive=${isResponsive}`);

      if (!isResponsive) {
        console.error(`    ERROR: Horizontal scroll detected on ${pageInfo.name} at ${vp.name}!`);
        
        // Find what's overflowing
        const overflowingElements = await page.evaluate(() => {
          const docWidth = document.documentElement.clientWidth;
          const elements = Array.from(document.querySelectorAll('*'));
          const overflows = [];
          for (const el of elements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth) {
              overflows.push({
                tag: el.tagName,
                className: el.className,
                right: rect.right,
                docWidth
              });
            }
          }
          return overflows.slice(0, 3); // top 3
        });
        console.log(`    Overflowing elements:`, overflowingElements);
        hasErrors = true;
      }
    }
  }

  await browser.close();
  
  if (hasErrors) {
    process.exit(1);
  } else {
    console.log('\nSUCCESS: All pages and viewports are successfully responsive.');
    process.exit(0);
  }
})();
