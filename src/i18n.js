import { computed, ref, watchEffect } from 'vue';
import { koHighlights } from './data/highlights.ko.js';

export const LOCALES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ko', label: '한국어', short: '한국어' },
];

function initialLocale() {
  const saved = localStorage.getItem('locale');
  if (saved === 'en' || saved === 'ko') return saved;
  return navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

export const locale = ref(initialLocale());

const messages = {
  en: {
    meta: { title: 'NASA discoveries 2025' },
    nav: {
      label: 'Primary',
      highlights: 'Highlights',
      library: 'Image library',
      sources: 'Sources',
      language: 'Language',
    },
    brand: 'Discoveries 2025',
    hero: {
      eyebrow: 'Year in review',
      title: 'Discoveries from NASA',
      lead: 'From a gum-like material inside asteroid Bennu to siderite on Mars, explore the science, technology, and exploration milestones NASA highlighted this year.',
      explore: 'Explore highlights',
      article: 'Read the NASA article',
      summary: 'Summary',
      total: 'Highlights',
    },
    highlights: {
      eyebrow: 'NASA Ames, Silicon Valley',
      title: '2025 highlights',
      empty: 'No highlights match your filters.',
    },
    filter: {
      group: 'Filter by category',
      all: 'All',
      search: 'Search highlights',
      placeholder: 'Search missions, tools, topics',
      one: 'result',
      many: 'results',
    },
    card: { more: 'Read more' },
    modal: { close: 'Close', credit: 'Credit', topics: 'Topics' },
    library: {
      eyebrow: 'Second source',
      title: 'NASA Image and Video Library, 2025',
      lead: 'Search live imagery NASA published in 2025. Results come straight from the public images.nasa.gov API, so titles appear in English.',
      label: 'Search the NASA image library',
      placeholder: 'Try Artemis, Mars, Webb, Bennu',
      search: 'Search',
      loading: 'Loading images…',
      error: 'Could not reach the NASA Image Library. Check your connection and try again.',
      none: 'No 2025 images match that search.',
    },
    footer: {
      sources: 'Sources',
      article: 'NASA Ames Research Center',
      apiNote: 'images-api.nasa.gov, filtered to 2025',
      note: 'This is an independent project, not an official NASA product. Highlight text is summarized from NASA’s year in review. NASA media is generally not subject to copyright in the United States; credits are shown with each image. Styled with Korea University colors, IBM Plex type, and Carbon layout guidelines.',
    },
    categories: {
      exploration: 'Moon & Mars',
      science: 'Space science',
      aeronautics: 'Aeronautics',
      biology: 'Biology & health',
      technology: 'Space technology',
    },
  },
  ko: {
    meta: { title: 'NASA 2025 발견' },
    nav: {
      label: '주요 메뉴',
      highlights: '주요 소식',
      library: '이미지 라이브러리',
      sources: '출처',
      language: '언어',
    },
    brand: '2025 발견',
    hero: {
      eyebrow: '올해의 리뷰',
      title: 'NASA의 발견',
      lead: '소행성 베누에서 발견된 껌 같은 물질부터 화성의 능철석까지, NASA가 올해 주목한 과학·기술·탐사 성과를 살펴보세요.',
      explore: '주요 소식 보기',
      article: 'NASA 기사 읽기',
      summary: '요약',
      total: '주요 소식',
    },
    highlights: {
      eyebrow: 'NASA 에임스, 실리콘밸리',
      title: '2025년 주요 소식',
      empty: '조건에 맞는 소식이 없습니다.',
    },
    filter: {
      group: '분야별 필터',
      all: '전체',
      search: '소식 검색',
      placeholder: '임무, 기술, 주제 검색',
      one: '건',
      many: '건',
    },
    card: { more: '자세히 보기' },
    modal: { close: '닫기', credit: '출처', topics: '주제' },
    library: {
      eyebrow: '두 번째 출처',
      title: 'NASA 이미지·영상 라이브러리, 2025',
      lead: 'NASA가 2025년에 공개한 이미지를 실시간으로 검색하세요. 결과는 images.nasa.gov 공개 API에서 직접 가져오므로 제목은 영어로 표시됩니다.',
      label: 'NASA 이미지 라이브러리 검색',
      placeholder: 'Artemis, Mars, Webb, Bennu 등을 검색해 보세요',
      search: '검색',
      loading: '이미지를 불러오는 중…',
      error: 'NASA 이미지 라이브러리에 연결할 수 없습니다. 연결 상태를 확인하고 다시 시도해 주세요.',
      none: '검색어와 일치하는 2025년 이미지가 없습니다.',
    },
    footer: {
      sources: '출처',
      article: 'NASA 에임스 연구센터',
      apiNote: 'images-api.nasa.gov, 2025년 기준 필터',
      note: '이 사이트는 NASA 공식 제품이 아닌 독립 프로젝트입니다. 소식 내용은 NASA의 연말 리뷰를 요약한 것입니다. 미국에서 NASA 미디어는 일반적으로 저작권 보호 대상이 아니며, 각 이미지에 출처를 표기했습니다. 고려대학교 색상, IBM Plex 서체, Carbon 레이아웃 가이드라인을 적용했습니다.',
    },
    categories: {
      exploration: '달·화성 탐사',
      science: '우주 과학',
      aeronautics: '항공',
      biology: '생명과학·건강',
      technology: '우주 기술',
    },
  },
};

function lookup(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}

export function t(path) {
  return lookup(messages[locale.value], path) ?? lookup(messages.en, path) ?? path;
}

export const dateFormatter = computed(
  () => new Intl.DateTimeFormat(locale.value, { year: 'numeric', month: 'short', day: 'numeric' }),
);

watchEffect(() => {
  document.documentElement.lang = locale.value;
  localStorage.setItem('locale', locale.value);
  document.title = messages[locale.value].meta.title;
});

// Returns the highlight with Korean text merged in when the locale is Korean.
export function localize(item) {
  if (locale.value !== 'ko') return item;
  return { ...item, ...koHighlights[item.id] };
}
