import html from 'html-template-tag'
import googleAnalytics from 'docute-google-analytics'
import Docute from '../src'
import prismLanguages from '../src/utils/prismLanguages'
import ColorBox from './components/ColorBox.vue'

new Docute({
  target: 'app',
  title: 'GO BASE',
  // logo: '<img src="https://s3-ap-northeast-1.amazonaws.com/gobase.io/images/logo/gobase_logo_transparent_619x200.png" style="margin-top: 10px; height: 50px;" />',
  highlight: ['typescript', 'bash', 'json', 'markdown', 'javascript', 'go', 'python'],
  plugins: [
    process.env.NODE_ENV === 'production' && googleAnalytics('UA-165946232-1')
  ].filter(Boolean),
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
          link: '/wallet/signature'
        },
        {
          title: 'Send transaction',
          link: '/wallet/transaction'
        },
        {
          title: 'DApps example',
          link: '/wallet/example'
        }
      ]
    },
    {
      title: 'API',
      children: [
        {
          title: 'HTTP API',
          link: '/api/http'
        },
        {
          title: 'Authentication',
          link: '/api/authentication'
        },
        {
          title: 'Granting GP',
          link: '/api/point'
        },
        {
          title: 'Push notification',
          link: '/api/push'
        },
        {
          title: 'Status Code',
          link: '/api/code'
        },
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
          title: 'GO! Wallet 連携',
          children: [
            {
              title: '署名',
              link: '/ja/wallet/signature'
            },
            {
              title: '送金',
              link: '/ja/wallet/transaction'
            },
            {
              title: 'DAppsサンプル',
              link: '/ja/wallet/example'
            }
          ]
        },
        {
          title: 'API',
          children: [
            {
              title: 'HTTP API',
              link: '/ja/api/http'
            },
            {
              title: 'API認証',
              link: '/ja/api/authentication'
            },
            {
              title: 'GP付与',
              link: '/ja/api/point'
            },
            {
              title: 'プッシュ通知',
              link: '/ja/api/push'
            },
            {
              title: 'ステータスコード',
              link: '/ja/api/code'
            },
          ]
        },
        {
          title: 'NFT',
          children: [
            {
              title: '作成(単一)',
              link: '/ja/nft/tokens/step.md'
            },
            {
              title: '作成(複数)',
              link: '/ja/nft/tokens/bulk.md'
            },
            {
              title: 'NFTリスト',
              link: '/ja/nft/tokens/list'
            },
            {
              title: 'NFT詳細',
              link: '/ja/nft/tokens/show'
            },
            {
              title: 'Publisher出品',
              link: '/ja/nft/market/sell_post'
            },
            {
              title: '出品後の金額変更',
              link: '/ja/nft/market/sell_put'
            },
            {
              title: 'NFT配布、所有者変更',
              link: '/ja/nft/market/transfer_post'
            },
            {
              title: 'ユーザー出品',
              link: '/ja/nft/market/sell_post_user'
            },
            {
              title: 'ユーザー出品金額変更',
              link: '/ja/nft/market/sell_put_user'
            },
            {
              title: 'ETH Signature取得',
              link: '/ja/nft/market/eth_signature'
            },
            {
              title: 'ETHトランザクション情報送信',
              link: '/ja/nft/market/eth_transaction'
            },
            {
              title: 'Stripeセッション取得',
              link: '/ja/nft/market/stripe_session'
            },
            {
              title: 'NFT返品,返金',
              link: '/ja/nft/market/refund'
            },
            {
              title: 'NFTステータス一覧',
              link: '/ja/nft/market/status'
            },
          ]
        }
      ]
    },
    '/zh/': {
      language: '简体中文',
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
          title: 'GO! Wallet 整合',
          children: [
            {
              title: '署名',
              link: '/zh/wallet/signature'
            },
            {
              title: '发送交易',
              link: '/zh/wallet/transaction'
            },
            {
              title: 'DApps例子',
              link: '/zh/wallet/example'
            }
          ]
        },
        {
          title: 'API',
          children: [
            {
              title: 'HTTP API',
              link: '/zh/api/http'
            },
            {
              title: 'API认证',
              link: '/zh/api/authentication'
            },
            {
              title: '授予GP',
              link: '/zh/api/point'
            },
            {
              title: 'APP推送',
              link: '/zh/api/push'
            },
            {
              title: '状态码',
              link: '/zh/api/code'
            }
          ]
        }
      ]
    },
    '/ko/': {
      language: '한국어',
      // editLinkText: '在 GitHub 上编辑此页',
      nav: [
        {
          title: '홈',
          link: '/ko/'
        },
        {
          title: '개발자',
          link: 'https://developer.gobase.io'
        }
      ],
      sidebar: [
        {
          title: 'GO! Wallet 통합',
          children: [
            {
              title: '서명',
              link: '/ko/wallet/signature'
            },
            {
              title: '거례',
              link: '/ko/wallet/transaction'
            },
            {
              title: 'DApps예',
              link: '/ko/wallet/example'
            }
          ]
        },
        {
          title: 'API',
          children: [
            {
              title: 'HTTP API',
              link: '/ko/api/http'
            },
            {
              title: 'API인증',
              link: '/ko/api/authentication'
            },
            {
              title: 'GP급여',
              link: '/ko/api/point'
            },
            {
              title: 'Push알림',
              link: '/ko/api/push'
            },
            {
              title: '상태 코드',
              link: '/ko/api/code'
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
