<script setup>
import { ref, onMounted } from 'vue';
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

const MAX_GAP = 32;
const MIN_GAP = 16;
const OFFSET = 12;
const ICON_WIDTH = 24;

const hoveredIndex = ref(null)
const ulRef = ref(null);
const padding = ref(0);
const width = ref(0);

function calculateWidth() {
  const ulWidth = ulRef.value.getBoundingClientRect().width;

  width.value = Math.max(Math.min(ulWidth / icons.length, MAX_GAP + ICON_WIDTH), MIN_GAP + ICON_WIDTH);
  padding.value = (ulWidth - icons.length * width.value) / 2;
}

onMounted(() => {
  new ResizeObserver(calculateWidth).observe(ulRef.value);
})
</script>

<template>
  <ul ref="ulRef">
    <li v-for="(icon, index) in icons" :key="index"
      v-tooltip="{ content: icon.tooltip, delay: { show: 300, hide: 100 }, distance: 10 }"
      @mouseleave="hoveredIndex = null" @mouseenter="hoveredIndex = index" @focusin="hoveredIndex = index"
      @focusout="hoveredIndex = null" tabindex="0"
      :class="{ hovered: index === hoveredIndex, sibling: hoveredIndex !== null && (index === hoveredIndex - 1 || index === hoveredIndex + 1) }"
      :style="{
        left: hoveredIndex === null
          ? (padding + index * width) + 'px'
          : index === hoveredIndex - 1
            ? (padding + index * width - OFFSET * 2) + 'px'
            : index === hoveredIndex + 1
              ? padding + index * width + OFFSET / 2
              : hoveredIndex > index
                ? (padding + index * width - OFFSET) + 'px'
                : hoveredIndex === index
                  ? (padding + index * width - (width / 2)) + 'px'
                  : (padding + index * width + OFFSET) + 'px',
        width: hoveredIndex === index
          ? width * 2 + 'px'
          : hoveredIndex !== null && (index === hoveredIndex - 1 || index === hoveredIndex + 1)
            ? width * 1.5 + 'px'
            : width + 'px'

      }">
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
  display: flex;
  justify-content: center;
  transition: width 0.3s, left 0.3s;
}

li:focus {
  outline: none;
}

li.sibling>svg {
  height: 32px;
  width: 32px;
}

li.hovered>svg {
  height: 48px;
  width: 48px;
  fill: rgb(155, 226, 34);
}
</style>