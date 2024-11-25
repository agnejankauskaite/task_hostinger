import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  retries: 1,
  workers: undefined,
  reporter: [['html', { outputFolder: './playwright-report', open: 'always' }]],
  use: {
    locale: 'en-EN',
    ignoreHTTPSErrors: true,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    viewport: { width: 1280, height: 720 }
  },
  projects: [
    {
      name: 'chromium',
      testMatch: 'tests/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'firefox',
      testMatch: 'tests/**/*.spec.ts',
      use: {
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'webkit',
      testMatch: 'tests/**/*.spec.ts',
      use: { 
        ...devices['Desktop Safari'] 
      },
    },
  ],
  snapshotDir: './test-tmp/snapshots/',
  outputDir: './test-tmp/results/'
});
