<script setup>
import { SOURCE } from '../data/highlights.js';
</script>

<template>
  <footer id="sources" class="footer">
    <div class="cds--container footer__grid">
      <div>
        <h2 class="footer__heading">Sources</h2>
        <ul class="footer__list">
          <li>
            <a :href="SOURCE.url" target="_blank" rel="noopener">{{ SOURCE.title }}</a>
            <span class="footer__meta">NASA Ames Research Center, {{ SOURCE.published }}</span>
          </li>
          <li>
            <a href="https://images.nasa.gov" target="_blank" rel="noopener">
              NASA Image and Video Library
            </a>
            <span class="footer__meta">images-api.nasa.gov, filtered to 2025</span>
          </li>
        </ul>
      </div>
      <p class="footer__note">
        This is an independent project, not an official NASA product. Highlight text is
        summarized from NASA’s year in review. NASA media is generally not subject to copyright
        in the United States; credits are shown with each image. Styled with IBM Carbon colors,
        IBM Plex type, and Carbon layout guidelines.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--spacing-09) 0;
  background: var(--cds-gray-100);
  border-top: 1px solid var(--border-subtle);
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
.footer__meta {
  font-size: 0.75rem;
  color: var(--text-helper);
}
.footer__note {
  max-width: 36rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--text-helper);
}
</style>
