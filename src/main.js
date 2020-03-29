// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/css/main.css'
import DefaultLayout from '~/layouts/Default.vue'
import config from '../gridsome.config'

export default function (Vue, { head }) {

  let copyRightNotice = `\u00a9 threenine.co.uk, ${ new Date().getFullYear() }. All rights reserved`;

  head.meta.push(
      {
          key: 'keywords',
          name: 'keywords',
          content: 'Toys, Games, Computer Games, product reviews, '
      },
      {
        name: 'author',
        content: 'threenine.co.uk'
      },
      {
          key: 'description',
          name: 'description',
          content: config.siteDescription
      },

      { name: 'copyright', content: copyRightNotice},
      { key:"og:type",  property: "og:type", content: 'article' },
      { key:"og:description",  property: "og:description", content: config.siteDescription },
      { key:"og:image", property: "og:image", content: 'https://geekiam.co.uk/assets/static/logo.png' },
      { property: "og:site_name", content: config.siteName }
      );

  Vue.component('Layout', DefaultLayout)
}
