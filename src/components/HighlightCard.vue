<script setup>
import { computed } from 'vue';
import { imageUrl } from '../data/highlights.js';
import { t } from '../i18n.js';

const props = defineProps({
  item: { type: Object, required: true },
  category: { type: Object, required: true },
});
defineEmits(['open']);

const image = computed(() => (props.item.imageId ? imageUrl(props.item.imageId) : null));
</script>

<template>
  <article class="card">
    <button type="button" class="card__btn" @click="$emit('open', item)">
      <div class="card__media" :class="`card__media--${category.tag}`">
        <img v-if="image" :src="image" :alt="item.imageAlt" loading="lazy" />
        <span v-else class="card__fact" aria-hidden="true">{{ item.fact.value }}</span>
      </div>
      <div class="card__body">
        <span class="cds-tag" :class="`cds-tag--${category.tag}`">{{ category.label }}</span>
        <h3 class="card__title">{{ item.title }}</h3>
        <p class="card__summary">{{ item.summary }}</p>
        <span class="card__more">
          {{ t('card.more') }}
          <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M18 6 16.57 7.393 24.15 15H4v2h20.15l-7.58 7.573L18 26 28 16z" />
          </svg>
        </span>
      </div>
    </button>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  background: var(--layer-01);
}
.card__btn {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: background 110ms;
}
.card__btn:hover {
  background: var(--layer-hover);
}
.card__media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--tag-crimson-bg);
}
.card__media--crimson {
  background: var(--tag-crimson-bg);
}
.card__media--blue {
  background: var(--tag-blue-bg);
}
.card__media--navy {
  background: var(--tag-navy-bg);
}
.card__media--graphite {
  background: var(--tag-graphite-bg);
}
.card__media--slate {
  background: var(--tag-slate-bg);
}
.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__fact {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1;
  color: var(--ku-white);
  opacity: 0.9;
}
.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-03);
  padding: var(--spacing-05);
}
.card__title {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-primary);
}
.card__summary {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.43;
}
.card__more {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-03);
  margin-top: auto;
  padding-top: var(--spacing-05);
  color: var(--link);
}
</style>
