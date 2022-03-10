import Vue from 'vue'
import VueCompositionAPI, { reactive, computed, ref } from '@vue/composition-api'

Vue.use(VueCompositionAPI)

export const useCounter = () => {
  const count = ref(0)

  const doubled = computed(() => count.value * 2)

  const increment = (val: number = 1) => count.value += val

  return reactive({
    count,
    doubled,
    increment,
  })
}
