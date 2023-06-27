import Home from './Home.svelte'
import Ex1 from './Ex1.svelte'
import Ex2 from './Ex2.svelte'
import Ex3 from './Ex3.svelte'
import NotFound from './NotFound.svelte'

export default {
  '/': Home,
  '/ex1': Ex1,
  '/ex2/:inpathparam': Ex2, // 라우츠 파라미터
  '/ex3': Ex3,
  '*': NotFound, // 위 주소로 필터링이 되지 않는경우 표시되는 페이지
}