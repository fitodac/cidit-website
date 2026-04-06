import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1440, height: 900 },
];

test.describe('Responsive Index Page', () => {
  for (const vp of viewports) {
    test(`Viewport: ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:4321/');
      
      // Wait for network idle to ensure everything is loaded
      await page.waitForLoadState('networkidle');

      // Check for horizontal scrollability by comparing scrollWidth and clientWidth
      const isResponsive = await page.evaluate(() => {
        return document.documentElement.scrollWidth <= window.innerWidth;
      });
      
      // Take a screenshot for visual confirmation
      await page.screenshot({ path: `playwright-report/screenshots/index-${vp.name.toLowerCase()}.png`, fullPage: true });

      // The layout should fit without horizontal scrolling
      expect(isResponsive, `Page should not have horizontal scrollbar on ${vp.name}`).toBe(true);
    });
  }
});
