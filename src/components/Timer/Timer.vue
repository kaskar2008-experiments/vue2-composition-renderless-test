<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from '@vue/composition-api'

export default defineComponent({
  emits: ['tick'],
  props: {
    interval: {
      type: Number,
      default: 1000,
    }
  },
  setup(props, { emit }) {
    let timerRef = 0;

    onMounted(() => {
      timerRef = setInterval(() => {
        emit('tick', timerRef)
      }, props.interval)
    })

    onBeforeUnmount(() => {
      clearInterval(timerRef)
    })
  }
})
</script>
