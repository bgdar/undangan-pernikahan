<script lang="ts">
  //ts untuk typescript
  import { thisName, updateName } from "../config/managementsData";
  import { HomeIcon } from "lucide-svelte";

  import CeritaCinta from "./client-page/cerita-cinta.svelte";
  import Home from "./client-page/home.svelte";
  import Lokasi from "./client-page/lokasi.svelte";

  let nav = $state<number>(1);

  function nextNav() {}

  function toPage(page: number) {
    if (nav <= 1) {
      nav = 1;
    }
    nav = page; // ubah halaman nya
  }
</script>

<h2>Undangan anda</h2>
<header>
  <div>
    <h3>Hey {$thisName.name} welcome</h3>
  </div>

  <div class="nav">
    <ol>
      <li onclick={() => toPage(1)}>Home</li>
      <li onclick={() => toPage(2)}>Cerita cinta</li>

      <li onclick={() => toPage(4)}>Lokasi</li>
      <li></li>
    </ol>
  </div>

  <div class="menu">
    <!-- di sini saya akan mengirimkan string kosong atau tidak ada yg di cek di App.svelte nantik yg menyatakan bahwa namanya tidak ada -->
    <button onclick={() => updateName("")}><HomeIcon /></button>
  </div>
</header>

{#if nav == 1}
  <Home />
{:else if nav == 2}
  <CeritaCinta />
{:else if nav == 4}
  <Lokasi />
{/if}

<style>
  header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 80;
    opacity: 0.8;
    background-color: #fdd5cc;
    border: 1px solid #e63946;
    box-shadow: 2px 2px 3px #000000;
  }
  header h3 {
    color: #efefef;
    font-family: serif;
  }

  header .nav ol {
    list-style: none;
    display: flex;
    gap: 10px;
  }
  header .nav ol li {
    border: 1p solid;
    background-color: #ffffff;
    border: 1px solid;
    box-shadow: 2px 2px solid;
    font-size: px;
    font-family: monospace;
  }
  header .nav ol li:hover {
    background-color: linear-gradient(45deg, #ffffff, #333333);
  }
</style>
