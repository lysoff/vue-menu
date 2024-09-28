<script setup>
import { ref } from 'vue';

const hoveredIndex = ref(null)

const icons = ['c-sharp', 'css', 'dart', 'docker', 'elixir', 'elm', 'error', 'eslint', 'field', 'go', 'graphql', 'html', 'ionic', 'java', 'javascript', 'json',
  'keyword', 'kotlin', 'kubernetes', 'layout', 'loading', 'lua', 'next', 'nginx', 'node', 'npm', 'perl'
]
</script>

<template>
  <ul>
    <li :key="index" v-for="(icon, index) in icons" @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null"
      :class="{ hovered: index === hoveredIndex, sibling: hoveredIndex !== null && (index === hoveredIndex - 1 || index === hoveredIndex + 1) }">
      <inline-svg :src="'/src/assets/' + icon + '.svg'" aria-label="My image" />
    </li>
  </ul>
</template>

<style scoped>
svg {
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
  fill: rgb(38, 219, 219);
}
</style>