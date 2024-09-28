<script setup>
import { ref } from 'vue';

const hoveredIndex = ref(null)

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
</script>

<template>
  <ul>
    <li v-for="(icon, index) in icons" :key="index"
      v-tooltip="{ content: icon.tooltip, delay: { show: 300, hide: 100 }, distance: 10 }"
      @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null" @focusin="hoveredIndex = index"
      @focusout="hoveredIndex = null"
      :class="{ hovered: index === hoveredIndex, sibling: hoveredIndex !== null && (index === hoveredIndex - 1 || index === hoveredIndex + 1) }">
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
  display: flex;
  gap: 0px;
  align-items: center;
  justify-items: center;
  width: 100%;
  max-width: 1024px;
  height: 40px;
  padding: 0;
}

li {
  cursor: pointer;
  list-style-type: none;
  flex: 1;
  display: flex;
  justify-content: center;
  transition: flex 0.3s;
}

li.sibling {
  flex-grow: 1.2
}

li.sibling>svg {
  height: 36px;
  width: 36px;
}

li.hovered {
  flex-grow: 1.5
}

li.hovered>svg {
  height: 48px;
  width: 48px;
  fill: rgb(155, 226, 34);
}
</style>