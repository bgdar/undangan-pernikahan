<script>
  import { ClientData } from "../config/managementsData";
  import { setName } from "../config/managementsData";

  let name = $state("");
  let client_data = $state(ClientData);

  // filter data pertama tama jika name masih kosong maka kembalikan array kosong jika tidak maka filter data yg di cari
  let filtered = $derived(
    name.length > 0
      ? client_data.filter((data) =>
          data.name.toLowerCase().includes(name.toLowerCase()),
        )
      : [],
  );
</script>

<div class="container">
  <header>
    <h4>Welcome</h4>
    <input
      type="text"
      bind:value={name}
      placeholder="Nama anda yang terhormat"
    />
    <div class="card-live-search">
      {#if filtered.length > 0}
        <ul>
          {#each filtered as data}
            <!--nantik sat di clink namay yang di cari akan tapil ke halaman utama berdasarkan usernya-->
            <li>
              {data.name}{""}<button onclick={() => setName(data.name)}
                >Welcome</button
              >
            </li>
          {/each}
        </ul>
      {:else}
        <p>search your name</p>
      {/if}
    </div>
  </header>
</div>

<style>
  .container {
    max-width: 250px;
    position: relative;
  }
  header input {
    padding: 10px;
    font-family: sans-serif;
  }
  header {
    background-color: #eaeaea;
    position: absolute;
    z-index: 50;
    top: 10px;
  }
</style>
