<script setup>
const links = [
  { href: '#highlights', label: 'Highlights' },
  { href: '#library', label: 'Image library' },
  { href: '#sources', label: 'Sources' },
];
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__name" href="#top">
        <span class="header__prefix">NASA</span>&nbsp;Discoveries 2025
      </a>
      <nav aria-label="Primary">
        <ul class="header__nav">
          <li v-for="l in links" :key="l.href">
            <a :href="l.href">{{ l.label }}</a>
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
  background: var(--cds-gray-100);
  border-bottom: 1px solid var(--border-subtle);
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
  color: var(--text-primary);
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
  color: var(--text-secondary);
  transition: background 110ms, color 110ms;
}
.header__nav a:hover {
  background: var(--layer-hover);
  color: var(--text-primary);
  text-decoration: none;
}
@media (max-width: 40rem) {
  .header__nav a {
    padding: 0 var(--spacing-03);
  }
}
</style>
