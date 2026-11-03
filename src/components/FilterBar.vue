<script setup>
defineProps({
  categories: { type: Array, required: true },
  active: { type: String, required: true },
  query: { type: String, required: true },
  resultCount: { type: Number, required: true },
});
defineEmits(['update:active', 'update:query']);
</script>

<template>
  <div class="filters">
    <div class="filters__tabs" role="group" aria-label="Filter by category">
      <button
        type="button"
        class="tab"
        :aria-pressed="active === 'all'"
        :class="{ 'tab--active': active === 'all' }"
        @click="$emit('update:active', 'all')"
      >
        All
      </button>
      <button
        v-for="c in categories"
        :key="c.id"
        type="button"
        class="tab"
        :aria-pressed="active === c.id"
        :class="{ 'tab--active': active === c.id }"
        @click="$emit('update:active', c.id)"
      >
        {{ c.label }}
      </button>
    </div>

    <div class="search">
      <label class="sr-only" for="highlight-search">Search highlights</label>
      <svg class="search__icon" width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="m29 27.586-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9Z" />
      </svg>
      <input
        id="highlight-search"
        type="search"
        placeholder="Search missions, tools, topics"
        :value="query"
        @input="$emit('update:query', $event.target.value)"
      />
    </div>
    <p class="filters__count" aria-live="polite">
      {{ resultCount }} {{ resultCount === 1 ? 'result' : 'results' }}
    </p>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-05);
  margin-bottom: var(--spacing-06);
}
.filters__tabs {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  background: var(--layer-01);
}
.tab {
  min-height: 2.5rem;
  padding: 0 var(--spacing-05);
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 110ms;
}
.tab:hover {
  background: var(--layer-hover);
  color: var(--text-primary);
}
.tab--active {
  border-bottom-color: var(--cds-blue-50);
  color: var(--text-primary);
  background: var(--layer-02);
}
.search {
  position: relative;
  flex: 0 1 20rem;
  min-width: 14rem;
}
.search input {
  width: 100%;
  height: 2.5rem;
  padding: 0 var(--spacing-05) 0 var(--spacing-08);
  border: 0;
  border-bottom: 1px solid var(--border-strong);
  border-radius: 0;
  background: var(--layer-01);
  color: var(--text-primary);
}
.search input::placeholder {
  color: var(--text-helper);
}
.search__icon {
  position: absolute;
  top: 50%;
  left: var(--spacing-05);
  transform: translateY(-50%);
  color: var(--text-helper);
  pointer-events: none;
}
.filters__count {
  color: var(--text-helper);
  font-size: 0.75rem;
}
</style>
