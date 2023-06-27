<script>
  import { querystring } from "svelte-spa-router"
  import qs from 'qs'

  console.log($querystring)
  console.log(qs.parse($querystring))
</script>
<h1>Ex3!</h1>