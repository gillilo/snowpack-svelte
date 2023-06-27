<script>
  import { fade } from 'svelte/transition'
  import Router, { location } from 'svelte-spa-router'
  import routes from '~/routes'
  import Header from "~/components/Header.svelte"
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router 
      {routes} 
      restoreScrollState={true} />
  </div>
{/key}

<style lang="scss"></style>