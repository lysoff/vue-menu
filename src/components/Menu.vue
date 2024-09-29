<script setup>
import { ref, onMounted } from 'vue';

const hoveredIndex = ref(null)
const ulRef = ref(null);

const icons = [
  { filename: 'c-sharp', tooltip: 'C Sharp' },
  { filename: 'css', tooltip: 'CSS' },
  { filename: 'dart', tooltip: 'Dart' },
  { filename: 'docker', tooltip: 'Docker' },
  { filename: 'elixir', tooltip: 'Elixir' },
  { filename: 'elm', tooltip: 'Elm' },
  { filename: 'error', tooltip: 'Error' },
  { filename: 'eslint', tooltip: 'ESLint' },
  { filename: 'field', tooltip: 'Field' },
  { filename: 'go', tooltip: 'GO' },
  { filename: 'graphql', tooltip: 'GraphQL' },
  { filename: 'html', tooltip: 'HTML' },
  { filename: 'ionic', tooltip: 'Ionic' },
  { filename: 'java', tooltip: 'Java' },
  { filename: 'javascript', tooltip: 'Javascript' },
  { filename: 'json', tooltip: 'JSON' },
  { filename: 'keyword', tooltip: 'Keyword' },
  { filename: 'kotlin', tooltip: 'Kotlin' },
  { filename: 'kubernetes', tooltip: 'Kubernetes' },
  { filename: 'layout', tooltip: 'Layout' },
  { filename: 'loading', tooltip: 'Loading' },
  { filename: 'lua', tooltip: 'Lua' },
  { filename: 'next', tooltip: 'Next' },
  { filename: 'nginx', tooltip: 'nginx' },
  { filename: 'node', tooltip: 'NodeJS' },
  { filename: 'npm', tooltip: 'NPM' },
  { filename: 'perl', tooltip: 'Perl' },
]

const offset = ref(0);

onMounted(() => {
  offset.value = (ulRef.value.getBoundingClientRect().width - 28 * 36) / 2
})
</script>

<template>
  <ul ref="ulRef">
    <li v-for="(icon, index) in icons" :key="index"
      v-tooltip="{ content: icon.tooltip, delay: { show: 300, hide: 100 }, distance: 10 }"
      @mouseleave="hoveredIndex = null" @mouseenter="hoveredIndex = index" @focusin="hoveredIndex = index"
      @focusout="hoveredIndex = null" tabindex="0"
      :class="{ hovered: index === hoveredIndex, sibling: hoveredIndex !== null && (index === hoveredIndex - 1 || index === hoveredIndex + 1) }"
      :style="{ left: hoveredIndex === null ? (offset + index * 36) + 'px' : hoveredIndex > index ? (offset + index * 36 - 14) + 'px' : hoveredIndex === index ? (offset + index * 36 - 8) + 'px' : (offset + index * 36 + 14) + 'px' }">
      <inline-svg :src="'/src/assets/' + icon.filename + '.svg'" />
    </li>
  </ul>
</template>

<style scoped>
svg {
  cursor: pointer;
  height: 24px;
  width: 24px;
  fill: violet;
  transition: all 0.3s;
}

ul {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1420px;
  height: 40px;
  padding: 0;
}

li {
  position: absolute;
  cursor: pointer;
  list-style-type: none;
  width: 36px;
  display: flex;
  justify-content: center;
  transition: width 0.3s, left 0.3s;
}

li:focus {
  outline: none;
}

li.sibling {
  width: 44px;
}

li.sibling>svg {
  height: 32px;
  width: 32px;
}

li.hovered {
  width: 56px;
}

li.hovered>svg {
  height: 48px;
  width: 48px;
  fill: rgb(155, 226, 34);
}
</style>