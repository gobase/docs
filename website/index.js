import html from 'html-template-tag'
import googleAnalytics from 'docute-google-analytics'
import Docute from '../src'
import prismLanguages from '../src/utils/prismLanguages'
import ColorBox from './components/ColorBox.vue'

new Docute({
  target: 'app',
  title: 'GO BASE',
  logo: '<img src="https://s3-ap-northeast-1.amazonaws.com/gobase.io/images/logo/gobase_logo_transparent_619x200.png" style="margin-top: 10px; height: 50px;" />',
  highlight: ['typescript', 'bash', 'json', 'markdown', 'javascript'],
  plugins: [
    process.env.NODE_ENV === 'production' && googleAnalytics('UA-54857209-11')
  ].filter(Boolean),
  // editLinkBase: 'https://github.com/egoist/docute/tree/master/website/docs',
  // editLinkText: 'Edit this page on GitHub',
  router: {
    mode: 'hash'
  },
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: '/',
  componentMixins: [
    {
      data() {
        return {
          builtinLanguages: prismLanguages.builtin,
          deps: __DEPS__
        }
      },
      methods: {
        insertCustomFontsCSS() {
          const ID = 'custom-fonts-css'
          const existing = document.getElementById(ID)
          if (existing) {
            existing.parentNode.removeChild(existing)
          } else {
            const style = document.createElement('style')
            style.id = ID
            style.textContent = `
            /* Import desired font from Google fonts */
            @import url('https://fonts.googleapis.com/css?family=Lato');

            /* Apply the font to body (to override the default one) */
            body {
              font-family: Lato, sans-serif;
            }
            `
            document.head.appendChild(style)
          }
        }
      },
      components: {
        ColorBox
      }
    }
  ],
  versions: {
    'v1': {
      link: '/'
    }
  },
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Developer',
      link: 'https://developer.gobase.io'
    }
  ],
  sidebar: [
    {
      title: 'Go! Wallet Integration',
      children: [
        {
          title: 'Signature',
          link: '/wallet/web3#signature'
        },
        {
          title: 'Send',
          link: '/wallet/web3#send'
        }
      ]
    },
    {
      title: 'API',
      children: [
        {
          title: 'Authentication',
          link: '/api/authentication'
        },
        {
          title: 'Push notification',
          link: '/api/push'
        },
        {
          title: 'GP API',
          link: '/api/gp'
        }
      ]
    }
  ],
  overrides: {
    '/': {
      language: 'English'
    },
    '/ja/': {
      language: '日本語',
      // editLinkText: 'GitHub 上で編集',
      nav: [
        {
          title: 'ホーム',
          link: '/ja/'
        },
        {
          title: '開発者ページ',
          link: 'https://developer.gobase.io'
        }
      ],
      sidebar: [
        {
          title: 'GO! Wallet連携',
          children: [
            {
              title: '署名',
              link: '/ja/wallet/web3#署名'
            },
            {
              title: '送金',
              link: '/ja/wallet/web3#送金'
            },
            {
              title: 'DAppsサンプル',
              link: '/ja/wallet/web3#dappsサンプル'
            }
          ]
        },
        {
          title: 'API',
          children: [
            {
              title: '認証',
              link: '/ja/api/authentication'
            },
            {
              title: 'プッシュ通知',
              link: '/ja/api/push'
            },
            {
              title: 'GP付与',
              link: '/ja/api/gp'
            }
          ]
        }
      ]
    },
    '/zh/': {
      language: '中文',
      // editLinkText: '在 GitHub 上编辑此页',
      nav: [
        {
          title: '首页',
          link: '/zh/'
        },
        {
          title: '开发者',
          link: 'https://developer.gobase.io'
        }
      ],
      sidebar: [
        {
          title: 'GO! Wallet链接',
          children: [
            {
              title: '署名',
              link: '/zh/wallet/web3#署名'
            },
            {
              title: '送金',
              link: '/zh/wallet/web3#送金'
            },
            {
              title: 'DApps例子',
              link: '/zh/wallet/web3#dapps例子'
            }
          ]
        },
        {
          title: 'API',
          children: [
            {
              title: '認証',
              link: '/zh/api/authentication'
            },
            {
              title: 'プッシュ通知',
              link: '/zh/api/push'
            },
            {
              title: 'GP付与',
              link: '/zh/api/gp'
            }
          ]
        }
      ]
    }
  },
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} GO BASE by <a href="https://smartapp.co.jp" target="_blank">SmartApp</a>.
  </div>
  `,
  banner: {
    // template: html`
    //   <div class="docute-banner">
    //     <note :label="false"
    //       >バナーをここに書く
    //       <a href="https://go-wallet.app" target="_blank"
    //         >Go! Wallet <ExternalLinkIcon /></a
    //       >.</note
    //     >
    //   </div>
    // `,
    // components: {
      
    // }
  }
})

Vue.component('ReverseText', {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: html`
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
      .reverse-text {
        border: 1px solid var(--border-color);
        padding: 20px;
        font-weight: bold;
        border-radius: 4px;
      }
      </v-style>
    </div>
  `,
  computed: {
    reversedText() {
      return this.text
        .split('')
        .reverse()
        .join('')
    }
  }
})

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
