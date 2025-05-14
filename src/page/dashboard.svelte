<script>
  import CardLiveSearchBard from "../lib/card-live-search-bard.svelte";
  let isShowCard = $state(false);

  function reversShow() {
    isShowCard = !isShowCard;
  }
</script>

<div class="container">
  <nav>
    <p>Undangan Pernikahan</p>

    <button onclick={reversShow}>Search Your Name</button>

    {#if isShowCard}
      <CardLiveSearchBard />
    {/if}
  </nav>
</div>

<style>
  .container {
    border: 1px solid;
    background-color: #fdd5cc;
  }
</style>
