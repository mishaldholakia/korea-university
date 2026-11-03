<script setup>
import { computed, ref } from 'vue';
import { CATEGORIES, highlights } from './data/highlights.js';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import FilterBar from './components/FilterBar.vue';
import HighlightCard from './components/HighlightCard.vue';
import HighlightModal from './components/HighlightModal.vue';
import ImageLibrary from './components/ImageLibrary.vue';
import AppFooter from './components/AppFooter.vue';

const active = ref('all');
const query = ref('');
const selected = ref(null);

const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

const categoriesWithCount = computed(() =>
  CATEGORIES.map((c) => ({ ...c, count: highlights.filter((h) => h.category === c.id).length })),
);

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return highlights.filter((h) => {
    if (active.value !== 'all' && h.category !== active.value) return false;
    if (!q) return true;
    return [h.title, h.summary, h.detail, ...h.tags].join(' ').toLowerCase().includes(q);
  });
});
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection :total="highlights.length" :categories="categoriesWithCount" />

    <section id="highlights" class="highlights" aria-labelledby="highlights-title">
      <div class="cds--container">
        <header class="section-head">
          <p class="cds--eyebrow">NASA Ames, Silicon Valley</p>
          <h2 id="highlights-title" class="cds--heading-05">2025 highlights</h2>
        </header>

        <FilterBar
          v-model:active="active"
          v-model:query="query"
          :categories="CATEGORIES"
          :result-count="filtered.length"
        />

        <ul v-if="filtered.length" class="grid">
          <li v-for="h in filtered" :key="h.id">
            <HighlightCard :item="h" :category="categoryById[h.category]" @open="selected = $event" />
          </li>
        </ul>
        <p v-else class="empty">No highlights match your filters.</p>
      </div>
    </section>

    <ImageLibrary />
  </main>
  <AppFooter />

  <HighlightModal
    :item="selected"
    :category="selected ? categoryById[selected.category] : null"
    @close="selected = null"
  />
</template>

<style scoped>
.highlights {
  padding: var(--spacing-10) 0 var(--spacing-11);
}
.section-head {
  margin-bottom: var(--spacing-07);
}
.section-head .cds--heading-05 {
  margin-top: var(--spacing-03);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  gap: var(--spacing-05);
  margin: 0;
  padding: 0;
  list-style: none;
}
.grid > li {
  display: flex;
}
.grid > li > * {
  flex: 1;
}
.empty {
  padding: var(--spacing-09) 0;
  color: var(--text-helper);
}
</style>
