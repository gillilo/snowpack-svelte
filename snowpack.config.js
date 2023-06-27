module.exports = {
  mount: {
    public: '/', // public이라는 디렉토리가 프로젝트의 루트 경로에 해당
    src: '/_dist_' // src 디렉토리에 있는 내용을 해당 경로로 빌드
  }, 
  plugins: [ // 설치한 plugin 연결 부분
    '@snowpack/plugin-svelte'
  ]
}