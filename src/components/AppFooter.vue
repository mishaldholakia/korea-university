<script setup>
import { SOURCE } from '../data/highlights.js';
import { t, dateFormatter } from '../i18n.js';

const published = new Date(SOURCE.publishedIso);
</script>

<template>
  <footer id="sources" class="footer">
    <div class="cds--container footer__grid">
      <div>
        <h2 class="footer__heading">{{ t('footer.sources') }}</h2>
        <ul class="footer__list">
          <li>
            <a :href="SOURCE.url" target="_blank" rel="noopener">{{ SOURCE.title }}</a>
            <span class="footer__meta">
              {{ t('footer.article') }}, {{ dateFormatter.format(published) }}
            </span>
          </li>
          <li>
            <a href="https://images.nasa.gov" target="_blank" rel="noopener">
              NASA Image and Video Library
            </a>
            <span class="footer__meta">{{ t('footer.apiNote') }}</span>
          </li>
        </ul>
      </div>
      <p class="footer__note">{{ t('footer.note') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--spacing-09) 0;
  background: var(--ku-slate);
  color: var(--ku-white);
  border-top: 4px solid var(--ku-crimson);
}
.footer__grid {
  display: grid;
  gap: var(--spacing-07);
}
@media (min-width: 66rem) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}
.footer__heading {
  margin-bottom: var(--spacing-05);
  font-size: 1rem;
  font-weight: 600;
}
.footer__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-05);
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer__list li {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-02);
}
.footer a {
  color: var(--ku-white);
  text-decoration: underline;
}
.footer__meta {
  font-size: 0.75rem;
  color: #c6c6c6;
}
.footer__note {
  max-width: 36rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #c6c6c6;
}
</style>
