import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'DataGuard Encryptor',
  description:
    'DataGuard Encryptor gives you a powerful and easy-to-use encryption solution',

  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],
  },
});
