<script lang="ts">
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
    display: flex;
    justify-content: center;
  }

  nav {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    padding: 1.5rem 2rem;
    text-align: center;
    max-width: 400px;
    width: 100%;
    border: 1px solid #f5e9dc; /* beige border */
  }

  nav p {
    font-size: 1.3rem;
    color: #333333;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }

  nav button {
    background-color: #e65c00; /* oranye tua */
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  nav button:hover {
    background-color: #8b2500; /* coklat tua */
  }
</style>
