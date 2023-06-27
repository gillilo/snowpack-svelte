<script>
  import { link } from "svelte-spa-router"
  import active from 'svelte-spa-router/active'

  const menus = [
    {
      href: '/',
      name: 'Home',
      // path: '/' root 경로는 path 없어도 됨..
    },
    {
      href: '/ex1',
      name: 'Ex1',
      path: '/ex1'
    },
    {
      href: '/ex2/testparam',
      name: 'Ex2',
      path: '/ex2/*' // active 하이라이팅 path는 와일드카드(*)로
    },
    {
      href: '/ex3?q=p', 
      name: 'Ex3',
      path: /^\/ex3/ // "/ex3으로 시작하는 주소" 정규식
      // in path param이 아닌 query string 사용할때
    }
  ]
</script>

<header>
  HEADER!
  <!-- link 안쓰면 /#/, /#/about 해야함.. -->
  <!-- active: 현재 경로가 값이면 a Tag에 active class 추가 -->
  <nav>
    <ul>
      {#each menus as {href, name, path} (name)}
        <li>
          <a 
            use:link
            use:active={path}
            {href}>
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  header :global(a.active) {
    color: $color--primary;
  }
</style>