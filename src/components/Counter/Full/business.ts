import Vue from 'vue'
import VueCompositionAPI, { reactive, toRefs } from '@vue/composition-api'
import { useCounter } from '../Base/business';

Vue.use(VueCompositionAPI)

export const useFullCounter = () => {
  const baseCounter = toRefs(useCounter())

  const decrement = (count: number = 1) => baseCounter.count.value -= count

  return reactive({
    ...baseCounter,
    decrement
  })
}
