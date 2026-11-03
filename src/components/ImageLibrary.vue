<script setup>
import { ref, onMounted } from 'vue';

// Second source: NASA Image and Video Library (https://images.nasa.gov).
// Public, CORS-enabled API; no key required. Results are limited to 2025.
const API = 'https://images-api.nasa.gov/search';

const query = ref('Ames Research Center');
const items = ref([]);
const total = ref(0);
const status = ref('idle'); // idle | loading | ready | error

async function search() {
  const q = query.value.trim();
  if (!q) return;
  status.value = 'loading';
  try {
    const params = new URLSearchParams({
      q,
      media_type: 'image',
      year_start: '2025',
      year_end: '2025',
      page_size: '12',
    });
    const res = await fetch(`${API}?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    total.value = json.collection.metadata?.total_hits ?? 0;
    items.value = json.collection.items
      .filter((i) => i.links?.length)
      .map((i) => {
        const d = i.data[0];
        return {
          id: d.nasa_id,
          title: d.title,
          date: d.date_created.slice(0, 10),
          center: d.center,
          src: i.links[0].href,
          page: `https://images.nasa.gov/details/${encodeURIComponent(d.nasa_id)}`,
        };
      });
    status.value = 'ready';
  } catch (e) {
    status.value = 'error';
  }
}

onMounted(search);
</script>

<template>
  <section id="library" class="library" aria-labelledby="library-title">
    <div class="cds--container">
      <header class="section-head">
        <p class="cds--eyebrow">Second source</p>
        <h2 id="library-title" class="cds--heading-05">NASA Image and Video Library, 2025</h2>
        <p class="section-head__lead">
          Search live imagery NASA published in 2025. Results come straight from the public
          images.nasa.gov API.
        </p>
      </header>

      <form class="library__form" @submit.prevent="search">
        <label class="sr-only" for="library-q">Search the NASA image library</label>
        <input id="library-q" v-model="query" type="search" placeholder="Try Artemis, Mars, Webb, Bennu" />
        <button class="cds-btn" type="submit">Search</button>
      </form>

      <p v-if="status === 'ready'" class="library__meta" aria-live="polite">
        Showing {{ items.length }} of {{ total.toLocaleString() }} images from 2025
      </p>
      <p v-if="status === 'loading'" class="library__state" role="status">Loading images…</p>
      <p v-if="status === 'error'" class="library__state library__state--error" role="alert">
        Could not reach the NASA Image Library. Check your connection and try again.
      </p>
      <p v-if="status === 'ready' && !items.length" class="library__state">
        No 2025 images match that search.
      </p>

      <ul v-if="items.length" class="library__grid">
        <li v-for="i in items" :key="i.id">
          <a class="tile" :href="i.page" target="_blank" rel="noopener">
            <img :src="i.src" :alt="i.title" loading="lazy" />
            <div class="tile__body">
              <span class="tile__title">{{ i.title }}</span>
              <span class="tile__meta">{{ i.date }} · {{ i.center }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.library {
  padding: var(--spacing-10) 0 var(--spacing-11);
  background: var(--layer-01);
  border-top: 1px solid var(--border-subtle);
}
.section-head {
  margin-bottom: var(--spacing-07);
}
.section-head .cds--heading-05 {
  margin-top: var(--spacing-03);
}
.section-head__lead {
  max-width: 40rem;
  margin-top: var(--spacing-04);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-secondary);
}
.library__form {
  display: flex;
  max-width: 36rem;
}
.library__form input {
  flex: 1;
  min-width: 0;
  height: 3rem;
  padding: 0 var(--spacing-05);
  border: 0;
  border-bottom: 1px solid var(--border-strong);
  border-radius: 0;
  background: var(--layer-02);
  color: var(--text-primary);
}
.library__form input::placeholder {
  color: var(--text-helper);
}
.library__form .cds-btn {
  gap: 0;
  justify-content: center;
  min-width: 8rem;
}
.library__meta,
.library__state {
  margin-top: var(--spacing-05);
  color: var(--text-helper);
}
.library__state--error {
  color: #ff8389;
}
.library__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: var(--spacing-05);
  margin: var(--spacing-06) 0 0;
  padding: 0;
  list-style: none;
}
.tile {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--layer-02);
  color: var(--text-primary);
  transition: background 110ms;
}
.tile:hover {
  background: var(--layer-hover);
  text-decoration: none;
}
.tile img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: var(--cds-gray-100);
}
.tile__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-02);
  padding: var(--spacing-04) var(--spacing-05) var(--spacing-05);
}
.tile__title {
  font-size: 0.875rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.tile__meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-helper);
}
</style>
