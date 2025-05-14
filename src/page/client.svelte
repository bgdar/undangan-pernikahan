<script>
  import { thisName, updateName } from "../config/managementsData";
  import { FlowerIcon, HomeIcon } from "lucide-svelte";
</script>

<h2>Undangan anda</h2>
<header>
  <div>
    <h3>Hey {$thisName.name} welcome</h3>
  </div>

  <div>
    <!-- di sini saya akan mengirimkan string kosong atau tidak ada yg di cek di App.svelte nantik yg menyatakan bahwa namanya tidak ada -->
    <button onclick={() => updateName("")}><HomeIcon /></button>
  </div>
</header>

<main>
  <div class="main-card">
    <h1>Jamal dan Yanti</h1>
    <div class="descripsi">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse
        ab? Quae unde repellat nobis consequuntur! Et nemo quae aut quis minus
        ipsa impedit suscipit dolorem libero nostrum unde ut laudantium tempore
        sit excepturi laboriosam quam vel repellendus, odio nihil
        exercitationem?
      </p>
      <div>
        <FlowerIcon />
      </div>
    </div>
  </div>
</main>

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

  main {
    border: 1px solid;
    box-shadow: 2px 2px 3px;
    background-color: #e63946;
    box-shadow: 2px 2px 3px #ffffff;
  }
  main .main-card {
    border: 1px solid;
    box-shadow: 2px 2px 3px #ffffff;
    background-color: #f5e9dc;
  }
</style>
