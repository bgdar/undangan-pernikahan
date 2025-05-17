<script lang="ts">
  import { Calendar, Heart, Users } from "lucide-svelte";
  import { onMount } from "svelte";

  let daysLeft = 0;
  const targetDate = new Date("2025-10-12T11:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60);
    return () => clearInterval(interval);
  });
</script>

<main>
  <section class="hero">
    <Heart size="48" color="#b38867" />
    <h1>Undangan Pernikahan</h1>
    <h2>Rani & Andi</h2>
    <p><Calendar size="16" /> 12 Oktober 2025</p>
  </section>

  <section class="couple-info">
    <h3><Users size="20" /> Mempelai</h3>
    <div class="names">
      <div>
        <strong>Rani Sari</strong>
        <p>Putri dari Bapak Ahmad & Ibu Siti</p>
      </div>
      <div>
        <strong>Andi Pratama</strong>
        <p>Putra dari Bapak Joko & Ibu Dewi</p>
      </div>
    </div>
  </section>

  <section class="countdown">
    <p>Menuju hari bahagia dalam:</p>
    <h2>{daysLeft} hari lagi</h2>
  </section>
</main>

<style>
  main {
    max-width: 600px;
    margin: 2rem auto;
    font-family: "Helvetica", sans-serif;
    padding: 0 1rem;
  }

  .hero {
    text-align: center;
    background: #fdf6f0;
    border-radius: 1rem;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    color: #b38867;
  }

  .hero h1 {
    margin-top: 0.5rem;
    font-size: 2rem;
  }

  .hero h2 {
    margin: 0.5rem 0 1rem 0;
    font-size: 1.5rem;
  }

  .hero p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .couple-info h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .names {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #444;
  }

  strong {
    font-size: 1.1rem;
  }

  .countdown {
    text-align: center;
    background: #ffe8d6;
    border-radius: 1rem;
    padding: 1rem;
    color: #8b5e3c;
  }

  .countdown h2 {
    font-size: 2rem;
    margin-top: 0.25rem;
  }
</style>
