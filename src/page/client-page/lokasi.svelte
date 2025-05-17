<script lang="ts">
  import { Calendar, Heart, Users, MapPin } from "lucide-svelte";
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

  const galleryImages = [
    "https://source.unsplash.com/400x300/?wedding,venue",
    "https://source.unsplash.com/400x300/?wedding,place",
    "https://source.unsplash.com/300x400/?wedding,decoration",
    "https://source.unsplash.com/350x300/?wedding,building",
    "https://source.unsplash.com/300x300/?wedding,event",
    "https://source.unsplash.com/250x300/?wedding,reception",
  ];
</script>

<main>
  <!-- HOME / HERO -->
  <section class="hero">
    <Heart size="48" color="#b38867" />
    <h1>Undangan Pernikahan</h1>
    <h2>Rani & Andi</h2>
    <p><Calendar size="16" /> 12 Oktober 2025</p>
  </section>

  <!-- MENU PEMBATAS -->
  <nav class="menu">
    <span>Beranda</span>
    <span>/</span>
    <span>Galeri & Lokasi</span>
  </nav>

  <!-- INFO MEMPELAI -->
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

  <!-- COUNTDOWN -->
  <section class="countdown">
    <p>Menuju hari bahagia dalam:</p>
    <h2>{daysLeft} hari lagi</h2>
  </section>

  <!-- GALERI LOKASI -->
  <section class="gallery">
    <h3>Galeri Lokasi</h3>
    <div class="gallery-grid">
      {#each galleryImages as src, i}
        <img {src} alt="Foto lokasi {i}" class="grid-item item-{i % 6}" />
      {/each}
    </div>
  </section>

  <!-- LOKASI -->
  <section class="location">
    <h3><MapPin size="20" /> Lokasi Acara</h3>
    <p>Gedung Serbaguna Melati</p>
    <p>Jl. Mawar No. 12, Jakarta Selatan</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.344492226027!2d106.80681841536476!3d-6.240982062484767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e0d12cde5d%3A0x28e94a943e4b6347!2sGedung%20Serbaguna%20Melati!5e0!3m2!1sen!2sid!4v1617700497934!5m2!1sen!2sid"
      width="100%"
      height="250"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    >
    </iframe>
  </section>
</main>

<style>
  main {
    max-width: 700px;
    margin: 2rem auto;
    font-family: "Helvetica", sans-serif;
    padding: 0 1rem;
  }

  .hero {
    text-align: center;
    background: #fdf6f0;
    border-radius: 1rem;
    padding: 2rem 1rem;
    margin-bottom: 1rem;
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

  .menu {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    color: #999;
    margin: 1.5rem 0;
    font-size: 0.95rem;
  }

  .couple-info h3,
  .location h3 {
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
    margin: 2rem 0;
  }

  .countdown h2 {
    font-size: 2rem;
    margin-top: 0.25rem;
  }

  .gallery {
    margin: 2rem 0;
  }

  .gallery h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
  }

  .grid-item {
    border-radius: 0.5rem;
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  /* Tambahan gaya acak per item */
  .item-0 {
    grid-column: span 2;
  }
  .item-2 {
    transform: rotate(-2deg);
  }
  .item-4 {
    transform: scale(1.05);
  }
  .item-5 {
    grid-row: span 2;
  }

  .location {
    background: #f0f4f8;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    color: #333;
    margin-top: 2rem;
  }

  .location p {
    margin: 0.25rem 0;
  }

  iframe {
    margin-top: 1rem;
    border-radius: 0.5rem;
  }
</style>
