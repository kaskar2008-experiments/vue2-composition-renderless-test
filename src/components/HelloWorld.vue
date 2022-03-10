<template>
  <div class="hello">
    <h4>Counter component:</h4>
    <base-counter class="my-custom-counter">
      <template v-slot="{ count, increment, doubled }">
        <p>Count: {{ count }}</p>
        <p>doubled: {{ doubled }}</p>
        <div>
          <button @click="increment(2)">Increment</button>
        </div>
      </template>
    </base-counter>

    <h4>Full Counter component:</h4>
    <full-counter class="my-custom-counter">
      <template v-slot="{ count, increment, decrement, doubled }">
        <p>Count: {{ count }}</p>
        <p>doubled: {{ doubled }}</p>
        <div>
          <button @click="increment(2)">Increment</button>
          <button @click="decrement(2)">Decrement</button>
        </div>
      </template>
    </full-counter>

    <h4>Automatic Counter component:</h4>
    <base-counter>
      <template v-slot="{ count, increment }">
        <timer :interval="1500" @tick="increment()" />
        <p>Count: {{ count }}</p>
      </template>
    </base-counter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BaseCounter from './Counter/Base/Base.vue'
import FullCounter from './Counter/Full/Full.vue'
import Timer from './Timer/Timer.vue'

export default defineComponent({
  components: {
    BaseCounter,
    FullCounter,
    Timer,
  },
});
</script>
