<script setup>
import { SOURCE } from '../data/highlights.js';

defineProps({
  total: { type: Number, required: true },
  categories: { type: Array, required: true },
});
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="cds--container hero__grid">
      <div class="hero__copy">
        <p class="cds--eyebrow">Year in review</p>
        <h1 id="hero-title" class="hero__title">
          Discoveries from NASA<span class="hero__year">2025</span>
        </h1>
        <p class="hero__lead">
          From a gum-like material inside asteroid Bennu to siderite on Mars, explore the
          science, technology, and exploration milestones NASA highlighted this year.
        </p>
        <div class="hero__actions">
          <a class="cds-btn" href="#highlights">
            Explore highlights
            <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 22 6 12l1.4-1.4L16 19.2l8.6-8.6L26 12z" />
            </svg>
          </a>
          <a class="cds-btn cds-btn--secondary" :href="SOURCE.url" target="_blank" rel="noopener">
            Read the NASA article
          </a>
        </div>
      </div>

      <dl class="hero__stats" aria-label="Summary">
        <div class="stat stat--primary">
          <dt>Highlights</dt>
          <dd>{{ total }}</dd>
        </div>
        <div v-for="c in categories" :key="c.id" class="stat">
          <dt>{{ c.label }}</dt>
          <dd>{{ c.count }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background:
    linear-gradient(180deg, rgba(15, 98, 254, 0.18) 0%, rgba(22, 22, 22, 0) 70%),
    var(--cds-gray-100);
  border-bottom: 1px solid var(--border-subtle);
}
.hero__grid {
  display: grid;
  gap: var(--spacing-09);
  padding-top: var(--spacing-11);
  padding-bottom: var(--spacing-10);
}
@media (min-width: 66rem) {
  .hero__grid {
    grid-template-columns: 3fr 2fr;
    align-items: end;
  }
}
.hero__title {
  margin-top: var(--spacing-05);
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 0;
}
.hero__year {
  display: block;
  color: var(--cds-blue-40);
  font-weight: 600;
}
.hero__lead {
  max-width: 36rem;
  margin-top: var(--spacing-06);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.4;
  color: var(--text-secondary);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-03);
  margin-top: var(--spacing-08);
}
.hero__actions .cds-btn {
  min-width: 14rem;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin: 0;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
}
.stat {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: var(--spacing-05);
  min-height: 7rem;
  padding: var(--spacing-05);
  background: var(--layer-01);
}
.stat--primary {
  grid-column: 1 / -1;
  background: var(--interactive);
}
.stat dt {
  font-size: 0.875rem;
  color: var(--text-secondary);
}
.stat--primary dt {
  color: var(--cds-white);
}
.stat dd {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1;
}
.stat--primary dd {
  font-size: 3.5rem;
}
</style>
