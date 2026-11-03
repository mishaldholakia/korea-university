<script setup>
import { computed } from 'vue';
import { LOCALES, locale, t } from '../i18n.js';

const links = computed(() => [
  { href: '#highlights', label: t('nav.highlights') },
  { href: '#library', label: t('nav.library') },
  { href: '#sources', label: t('nav.sources') },
]);
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__name" href="#top">
        <span class="header__prefix">NASA</span>&nbsp;{{ t('brand') }}
      </a>
      <nav :aria-label="t('nav.label')">
        <ul class="header__nav">
          <li v-for="l in links" :key="l.href">
            <a :href="l.href">{{ l.label }}</a>
          </li>
          <li>
            <div class="lang" role="group" :aria-label="t('nav.language')">
              <button
                v-for="l in LOCALES"
                :key="l.code"
                type="button"
                class="lang__btn"
                :class="{ 'lang__btn--active': locale === l.code }"
                :aria-pressed="locale === l.code"
                :lang="l.code"
                :aria-label="l.label"
                @click="locale = l.code"
              >
                {{ l.short }}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background: var(--ku-crimson);
}
.header__inner {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--spacing-05);
}
.header__name {
  display: flex;
  align-items: center;
  color: var(--ku-white);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.1px;
}
.header__name:hover {
  text-decoration: none;
}
.header__prefix {
  font-weight: 600;
}
.header__nav {
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.header__nav a {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-05);
  color: rgba(255, 255, 255, 0.85);
  transition: background 110ms, color 110ms;
}
.header__nav a:hover {
  background: var(--ku-crimson-hover);
  color: var(--ku-white);
  text-decoration: none;
}
.lang {
  display: flex;
  height: 100%;
  margin-left: var(--spacing-03);
  border-left: 1px solid rgba(255, 255, 255, 0.35);
}
.lang__btn {
  min-width: 3rem;
  padding: 0 var(--spacing-04);
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 110ms, color 110ms;
}
.lang__btn:hover {
  background: var(--ku-crimson-hover);
  color: var(--ku-white);
}
.lang__btn--active {
  background: var(--ku-white);
  color: var(--ku-crimson);
  font-weight: 600;
}
.lang__btn--active:hover {
  background: var(--ku-white);
  color: var(--ku-crimson);
}
.header :focus-visible {
  outline-color: var(--ku-white);
}
@media (max-width: 40rem) {
  .header__nav a {
    padding: 0 var(--spacing-03);
  }
}
</style>
