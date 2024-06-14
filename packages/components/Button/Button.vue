<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button' ? props.nativeType : null"
    :class="[
      'd-button',
      `d-button--${props.size}`,
      `d-button--${props.type}`,
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.disabled,
        'is-loading': props.loading,
      },
    ]"
  >
    <slot></slot
  ></component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ButtonProps } from "./types";
defineOptions({
  name: "DButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});

const slot = defineSlots();
const _ref = ref<HTMLButtonElement>();
</script>

<style scoped>
@import "./style.css";
</style>
