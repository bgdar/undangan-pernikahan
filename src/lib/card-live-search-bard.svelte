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
            <li>
              {data.name}
              <button onclick={() => setName(data.name)}> Welcome </button>
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  header {
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    text-align: center;
    max-width: 340px;
    width: 100%;
    border: 1px solid #f5e9dc; /* beige border */
    margin: auto;
  }

  header h4 {
    margin-bottom: 1.25rem;
    font-size: 1.4rem;
    color: #333333; /* abu gelap */
  }

  header input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    font-size: 1rem;
    margin-bottom: 1rem;
    outline-color: #12b5c4; /* biru kehijauan saat fokus */
  }

  .card-live-search ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .card-live-search li {
    background: #fdd5cc; /* salmon muda */
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;
  }

  .card-live-search button {
    background-color: #e65c00; /* oranye tua */
    border: none;
    padding: 0.4rem 0.75rem;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background 0.2s ease;
  }

  .card-live-search button:hover {
    background-color: #8b2500; /* coklat tua */
  }

  .card-live-search p {
    font-style: italic;
    color: #666;
    margin-top: 1rem;
  }
</style>
