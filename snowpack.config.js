const production = false// process.env.NODE_ENV === 'production'
function babelOptions() {
  return {
    plugins: production ? ['transform-remove-console'] : []
  }
}
module.exports = {
  mount: {
    public: '/', // public이라는 디렉토리가 프로젝트의 루트 경로에 해당
    src: '/_dist_' // src 디렉토리에 있는 내용을 해당 경로로 빌드
  }, 
  plugins: [ // 설치한 plugin 연결 부분
    ['@snowpack/plugin-svelte', {
      preprocess: require('svelte-preprocess')({ // 스벨트 전처리 옵션
        scss: {
          prependData: '@import "./src/scss/main.scss";'
        },
        postcss: {
          plugins: [
            require('autoprefixer')()
          ]
        },
        babel: babelOptions() // svelte 컴포넌트에서 콘솔 지우는 것 (svelte 미지원 이유로... babel로 빌드한다음 적용시키는 것임)
      })
    }],
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions() // 일반적인 js에서 콘솔 지우는 것
    }],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src' // 별칭: snowpack.config.js 위치 기준 경로
  }
}