import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Guidelines",
  description: "",
  base: '/guidelines/',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/images/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/images/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/images/favicon-16x16.png"}],
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/v1/introduction/what-is-guidelines' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Guidelines', link: '/v1/introduction/what-is-guidelines' },
        ]
      },
      {
        text: 'Laravel',
        items: [
          { text: 'Main', link: '/v1/laravel/laravel' },
          { text: 'Notes Misc', link: '/v1/laravel/notes' },
        ]
      },
      {
        text: 'Php',
        items: [
          { text: 'Testing', link: '/v1/php/testing-php' },
          { text: 'Packages', link: '/v1/php/packages' },
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Main', link: '/v1/vue/vue' },
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: 'Javascript', link: '/v1/javascript/javascript' },
        ]
      },
      {
        text: 'Translations',
        items: [
          { text: 'Main', link: '/v1/translations/keys' },
        ]
      },
      {
        text: 'HTML - todo',
        items: [
        ]
      },
      {
        text: 'Workflow',
        items: [
          { text: 'New project', link: '/v1/workflow/new-project-setup' },
          { text: 'Security', link: '/v1/workflow/security' },
          { text: 'Version Control', link: '/v1/workflow/version-control' },
          { text: 'Going live', link: '/v1/workflow/going-live' },
        ]
      },
      { text: 'Contributing', items: [
        { text: 'Roadmap', link: '/general/roadmap' },
        { text: 'License', link: '/general/license' },
        { text: 'Change log', link: '/general/changelog' },
        { text: 'Contributing', link: '/general/contributing' },
        { text: 'Code of Conduct', link: '/general/code_of_conduct' },
        { text: 'Credits', link: '/general/credits' },
      ]},

      { text: 'Contact', items: [
          { text: 'Contact', link: '/general/contact' },
        ]},

    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 to present Yormy'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yormy/guidelines' }
    ]
  }

})
