<template>
<div>
  <slot v-bind="counter"></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useFullCounter } from './business'

export default defineComponent({
  setup() {
    return {
      counter: useFullCounter()
    }
  },
})
</script>
