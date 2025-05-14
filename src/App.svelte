<script lang="id">
  import Dashboard from "./page/dashboard.svelte";

  import { thisName, ClientData } from "./config/managementsData";
  import Client from "./page/client.svelte";
</script>

<!-- <p>{$thisName.name}</p> -->
<div class="container">
  <!-- jika nama yang di cari benar adanya maka tapil ke halaman user dengan data dari user-->
  <!-- cek apakah suatu nama ada dalam object array -->
  {#if ClientData.some((value) => value.name === $thisName.name)}
    <Client />
  {:else}
    <Dashboard />
  {/if}
</div>

<style>
  .container {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
