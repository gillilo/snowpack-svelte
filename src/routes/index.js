import Home from './Home.svelte'
import Ex1 from './Ex1.svelte'
import Ex2 from './Ex2.svelte'
import Ex3 from './Ex3.svelte'

export default {
  '/': Home,
  '/ex1': Ex1,
  '/ex2/:inpathparam': Ex2, // 라우츠 파라미터
  '/ex3': Ex3,
}