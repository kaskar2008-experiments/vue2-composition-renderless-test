<template>
<div>
  <slot v-bind="counter"></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCounter } from './business'

export default defineComponent({
  setup() {
    return {
      counter: useCounter()
    }
  },
})
</script>
