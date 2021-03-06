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
          link: '/en/wallet/signature'
        },
        {
          title: 'Send transaction',
          link: '/en/wallet/transaction'
        },
        {
          title: 'DApps example',
          link: '/en/wallet/example'
        }
      ]
    },
    {
      title: 'API',
      children: [
        {
          title: 'HTTP API',
          link: '/en/api/http'
        },
        {
          title: 'Authentication',
          link: '/en/api/authentication'
        },
        {
          title: 'Granting GP',
          link: '/en/api/point'
        },
        {
          title: 'Push notification',
          link: '/en/api/push'
        },
        {
          title: 'Fiat',
          link: '/en/api/fiat'
        },
        {
          title: 'Status Code',
          link: '/en/api/code'
        },
      ]
    },
    {
      title: 'NFT(OffChain)',
      children: [
        {
          title: 'Create NFT',
          link: '/en/offchain/publisher/create'
        },
        {
          title: 'List of created tokens',
          link: '/en/offchain/publisher/tokens'
        },
        {
          title: 'Details of created tokens',
          link: '/en/offchain/publisher/tokens_show'
        },
        {
          title: 'List of created bundles',
          link: '/en/offchain/publisher/bundles'
        },
        {
          title: 'Details of created bundles',
          link: '/en/offchain/publisher/bundles_show'
        },
        {
          title: 'Webhook',
          link: '/en/offchain/publisher/webhook'
        },
        {
          title: 'List of token status',
          link: '/en/offchain/market/status'
        }
      ]
    },
    {
      title: 'Market-Token(OffChain)',
      children: [
        {
          title: 'List of tokens',
          link: '/en/offchain/assets/tokens.md'
        },
        {
          title: 'Details of tokens',
          link: '/en/offchain/assets/tokens_show.md'
        },
        {
          title: 'Sell token',
          link: '/en/offchain/market/tokens/publisher_sell_post'
        },
        {
          title: 'Change amount',
          link: '/en/offchain/market/tokens/publisher_sell_put'
        },
        {
          title: 'Transfer token',
          link: '/en/offchain/market/tokens/publisher_transfer'
        },
        {
          title: 'Get signature at the time of purchase',
          link: '/en/offchain/market/tokens/buy_signature'
        },
        {
          title: 'Send TxHash at the time of purchase',
          link: '/en/offchain/market/tokens/buy_transaction'
        },
        {
          title: 'Get Stripe information',
          link: '/en/offchain/market/tokens/buy_stripe'
        },
        {
          title: 'Returns and Refunds',
          link: '/en/offchain/market/tokens/publisher_refund'
        },
      ]
    },
    {
      title: 'Market-Bundle(OffChain)',
      children: [
        {
          title: 'List of bundles',
          link: '/en/offchain/assets/bundles.md'
        },
        {
          title: 'Details of bundles',
          link: '/en/offchain/assets/bundles_show.md'
        },
        {
          title: 'Sell bundle',
          link: '/en/offchain/market/bundles/publisher_sell_post'
        },
        {
          title: 'Change amount',
          link: '/en/offchain/market/bundles/publisher_sell_put'
        },
        {
          title: 'Transfer bundle',
          link: '/en/offchain/market/bundles/publisher_transfer'
        },
        {
          title: 'Get signature at the time of purchase',
          link: '/en/offchain/market/bundles/buy_signature'
        },
        {
          title: 'Send TxHash at the time of purchase',
          link: '/en/offchain/market/bundles/buy_transaction'
        },
        {
          title: 'Get Stripe information',
          link: '/en/offchain/market/bundles/buy_stripe'
        },
        {
          title: 'Returns and Refunds',
          link: '/en/offchain/market/bundles/publisher_refund'
        },
      ]
    },
    {
      title: 'NFT(OnChain)',
      children: [
        {
          title: 'Create NFT',
          link: '/en/onchain/publisher/create'
        },
        {
          title: 'List of created tokens',
          link: '/en/onchain/publisher/tokens'
        },
        {
          title: 'Details of created tokens',
          link: '/en/onchain/publisher/tokens_show'
        },
        {
          title: 'List of created bundles',
          link: '/en/onchain/publisher/bundles'
        },
        {
          title: 'Details of created bundles',
          link: '/en/onchain/publisher/bundles_show'
        },
        {
          title: 'Webhook',
          link: '/en/onchain/publisher/webhook'
        },
        {
          title: 'List of token status',
          link: '/en/onchain/market/status'
        }
      ]
    },
    {
      title: 'Market-Token(OnChain)',
      children: [
        {
          title: 'List of tokens',
          link: '/en/onchain/assets/tokens.md'
        },
        {
          title: 'Details of tokens',
          link: '/en/onchain/assets/tokens_show.md'
        },
        {
          title: 'Sell token',
          link: '/en/onchain/market/tokens/publisher_sell_post'
        },
        {
          title: 'Change amount',
          link: '/en/onchain/market/tokens/publisher_sell_put'
        },
        {
          title: 'Transfer token',
          link: '/en/onchain/market/tokens/publisher_transfer'
        },
        {
          title: 'Get signature at the time of purchase',
          link: '/en/onchain/market/tokens/buy_signature'
        },
        {
          title: 'Send TxHash at the time of purchase',
          link: '/en/onchain/market/tokens/buy_transaction'
        },
        {
          title: 'Get Stripe information',
          link: '/en/onchain/market/tokens/buy_stripe'
        },
        {
          title: 'Returns and Refunds',
          link: '/en/onchain/market/tokens/publisher_refund'
        },
      ]
    },
    {
      title: 'Market-Bundle(OnChain)',
      children: [
        {
          title: 'List of bundles',
          link: '/en/onchain/assets/bundles.md'
        },
        {
          title: 'Details of bundles',
          link: '/en/onchain/assets/bundles_show.md'
        },
        {
          title: 'Sell bundle',
          link: '/en/onchain/market/bundles/publisher_sell_post'
        },
        {
          title: 'Change amount',
          link: '/en/onchain/market/bundles/publisher_sell_put'
        },
        {
          title: 'Transfer bundle',
          link: '/en/onchain/market/bundles/publisher_transfer'
        },
        {
          title: 'Get signature at the time of purchase',
          link: '/en/onchain/market/bundles/buy_signature'
        },
        {
          title: 'Send TxHash at the time of purchase',
          link: '/en/onchain/market/bundles/buy_transaction'
        },
        {
          title: 'Get Stripe information',
          link: '/en/onchain/market/bundles/buy_stripe'
        },
        {
          title: 'Returns and Refunds',
          link: '/en/onchain/market/bundles/publisher_refund'
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
              title: 'Fiat',
              link: '/ja/api/fiat'
            },
            {
              title: 'ステータスコード',
              link: '/ja/api/code'
            },
          ]
        },
        {
          title: 'NFT(OffChain)',
          children: [
            {
              title: 'トークン作成',
              link: '/ja/offchain/publisher/create'
            },
            {
              title: '作成済トークン一覧',
              link: '/ja/offchain/publisher/tokens'
            },
            {
              title: '作成済トークン詳細',
              link: '/ja/offchain/publisher/tokens_show'
            },
            {
              title: '作成済バンドル一覧',
              link: '/ja/offchain/publisher/bundles'
            },
            {
              title: '作成済バンドル詳細',
              link: '/ja/offchain/publisher/bundles_show'
            },
            {
              title: 'Webhook',
              link: '/ja/offchain/publisher/webhook'
            },
            {
              title: 'トークンステータス一覧',
              link: '/ja/offchain/market/status'
            }
          ]
        },
        {
          title: 'Market-Token(OffChain)',
          children: [
            {
              title: 'トークン一覧',
              link: '/ja/offchain/assets/tokens.md'
            },
            {
              title: 'トークン詳細',
              link: '/ja/offchain/assets/tokens_show.md'
            },
            {
              title: 'トークン出品',
              link: '/ja/offchain/market/tokens/publisher_sell_post'
            },
            {
              title: '出品金額の変更',
              link: '/ja/offchain/market/tokens/publisher_sell_put'
            },
            {
              title: 'トークン配布、所有者変更',
              link: '/ja/offchain/market/tokens/publisher_transfer'
            },
            {
              title: '購入時署名取得',
              link: '/ja/offchain/market/tokens/buy_signature'
            },
            {
              title: '購入時TxHash送信',
              link: '/ja/offchain/market/tokens/buy_transaction'
            },
            {
              title: 'Stripe情報取得',
              link: '/ja/offchain/market/tokens/buy_stripe'
            },
            {
              title: '返品、返金',
              link: '/ja/offchain/market/tokens/publisher_refund'
            },
          ]
        },
        {
          title: 'Market-Bundle(OffChain)',
          children: [
            {
              title: 'バンドル一覧',
              link: '/ja/offchain/assets/bundles.md'
            },
            {
              title: 'バンドル詳細',
              link: '/ja/offchain/assets/bundles_show.md'
            },
            {
              title: 'バンドル出品',
              link: '/ja/offchain/market/bundles/publisher_sell_post'
            },
            {
              title: '出品金額の変更',
              link: '/ja/offchain/market/bundles/publisher_sell_put'
            },
            {
              title: 'トークン配布、所有者変更',
              link: '/ja/offchain/market/bundles/publisher_transfer'
            },
            {
              title: '購入時署名取得',
              link: '/ja/offchain/market/bundles/buy_signature'
            },
            {
              title: '購入時TxHash送信',
              link: '/ja/offchain/market/bundles/buy_transaction'
            },
            {
              title: 'Stripe情報取得',
              link: '/ja/offchain/market/bundles/buy_stripe'
            },
            {
              title: '返品、返金',
              link: '/ja/offchain/market/bundles/publisher_refund'
            },
          ]
        },
        {
          title: 'NFT(OnChain)',
          children: [
            {
              title: 'トークン作成',
              link: '/ja/onchain/publisher/create'
            },
            {
              title: '作成済トークン一覧',
              link: '/ja/onchain/publisher/tokens'
            },
            {
              title: '作成済トークン詳細',
              link: '/ja/onchain/publisher/tokens_show'
            },
            {
              title: '作成済バンドル一覧',
              link: '/ja/onchain/publisher/bundles'
            },
            {
              title: '作成済バンドル詳細',
              link: '/ja/onchain/publisher/bundles_show'
            },
            {
              title: 'Webhook',
              link: '/ja/onchain/publisher/webhook'
            },
            {
              title: 'トークンステータス一覧',
              link: '/ja/onchain/market/status'
            }
          ]
        },
        {
          title: 'Market-Token(OnChain)',
          children: [
            {
              title: 'トークン一覧',
              link: '/ja/onchain/assets/tokens.md'
            },
            {
              title: 'トークン詳細',
              link: '/ja/onchain/assets/tokens_show.md'
            },
            {
              title: 'トークン出品',
              link: '/ja/onchain/market/tokens/publisher_sell_post'
            },
            {
              title: '出品金額の変更',
              link: '/ja/onchain/market/tokens/publisher_sell_put'
            },
            {
              title: 'トークン配布、所有者変更',
              link: '/ja/onchain/market/tokens/publisher_transfer'
            },
            {
              title: '購入時署名取得',
              link: '/ja/onchain/market/tokens/buy_signature'
            },
            {
              title: '購入時TxHash送信',
              link: '/ja/onchain/market/tokens/buy_transaction'
            },
            {
              title: 'Stripe情報取得',
              link: '/ja/onchain/market/tokens/buy_stripe'
            },
            {
              title: '返品、返金',
              link: '/ja/onchain/market/tokens/publisher_refund'
            },
          ]
        },
        {
          title: 'Market-Bundle(OnChain)',
          children: [
            {
              title: 'バンドル一覧',
              link: '/ja/onchain/assets/bundles.md'
            },
            {
              title: 'バンドル詳細',
              link: '/ja/onchain/assets/bundles_show.md'
            },
            {
              title: 'バンドル出品',
              link: '/ja/onchain/market/bundles/publisher_sell_post'
            },
            {
              title: '出品金額の変更',
              link: '/ja/onchain/market/bundles/publisher_sell_put'
            },
            {
              title: 'トークン配布、所有者変更',
              link: '/ja/onchain/market/bundles/publisher_transfer'
            },
            {
              title: '購入時署名取得',
              link: '/ja/onchain/market/bundles/buy_signature'
            },
            {
              title: '購入時TxHash送信',
              link: '/ja/onchain/market/bundles/buy_transaction'
            },
            {
              title: 'Stripe情報取得',
              link: '/ja/onchain/market/bundles/buy_stripe'
            },
            {
              title: '返品、返金',
              link: '/ja/onchain/market/bundles/publisher_refund'
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
