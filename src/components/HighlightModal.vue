<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { imageUrl } from '../data/highlights.js';

const props = defineProps({
  item: { type: Object, default: null },
  category: { type: Object, default: null },
});
const emit = defineEmits(['close']);

const dialog = ref(null);
const image = computed(() => (props.item?.imageId ? imageUrl(props.item.imageId, 'large') : null));

watch(
  () => props.item,
  async (item) => {
    await nextTick();
    const el = dialog.value;
    if (!el) return;
    if (item && !el.open) el.showModal();
    if (!item && el.open) el.close();
  },
);

function onBackdrop(e) {
  if (e.target === dialog.value) emit('close');
}
</script>

<template>
  <dialog
    ref="dialog"
    class="modal"
    aria-labelledby="modal-title"
    @close="emit('close')"
    @click="onBackdrop"
  >
    <article v-if="item && category" class="modal__panel">
      <header class="modal__header">
        <span class="cds-tag" :class="`cds-tag--${category.tag}`">{{ category.label }}</span>
        <button type="button" class="modal__close" aria-label="Close" @click="emit('close')">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
          </svg>
        </button>
      </header>

      <figure v-if="image" class="modal__figure">
        <img :src="image" :alt="item.imageAlt" />
        <figcaption>Credit: {{ item.imageCredit }}</figcaption>
      </figure>

      <div class="modal__content">
        <h2 id="modal-title" class="modal__title">{{ item.title }}</h2>
        <p class="modal__detail">{{ item.detail }}</p>

        <div class="modal__fact">
          <span class="modal__factValue">{{ item.fact.value }}</span>
          <span class="modal__factLabel">{{ item.fact.label }}</span>
        </div>

        <ul class="modal__tags" aria-label="Topics">
          <li v-for="t in item.tags" :key="t" class="cds-tag cds-tag--gray">{{ t }}</li>
        </ul>
      </div>
    </article>
  </dialog>
</template>

<style scoped>
.modal {
  width: min(44rem, calc(100vw - 2rem));
  max-height: calc(100vh - 2rem);
  padding: 0;
  border: 0;
  background: var(--layer-01);
  color: var(--text-primary);
}
.modal::backdrop {
  background: rgba(22, 22, 22, 0.8);
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-03) var(--spacing-03) var(--spacing-03) var(--spacing-05);
}
.modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.modal__close:hover {
  background: var(--layer-hover);
}
.modal__figure {
  margin: 0;
}
.modal__figure img {
  display: block;
  width: 100%;
  max-height: 22rem;
  object-fit: cover;
}
.modal__figure figcaption {
  padding: var(--spacing-03) var(--spacing-05);
  font-size: 0.75rem;
  color: var(--text-helper);
}
.modal__content {
  padding: var(--spacing-05) var(--spacing-06) var(--spacing-07);
}
.modal__title {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.25;
}
.modal__detail {
  margin-top: var(--spacing-05);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-secondary);
}
.modal__fact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-02);
  margin-top: var(--spacing-06);
  padding: var(--spacing-05);
  border-left: 3px solid var(--cds-blue-50);
  background: var(--layer-02);
}
.modal__factValue {
  font-size: 2.25rem;
  font-weight: 300;
  line-height: 1.1;
}
.modal__factLabel {
  color: var(--text-secondary);
}
.modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-03);
  margin: var(--spacing-06) 0 0;
  padding: 0;
  list-style: none;
}
</style>
