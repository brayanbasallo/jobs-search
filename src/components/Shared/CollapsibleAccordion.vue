<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex flex-wrap items-center justify-between cursor-pointer" @click="toggleAccordion">
      <h3 class="text-base font-semibold">Organization</h3>
      <font-awesome-icon :icon="caretIcon"></font-awesome-icon>
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      child
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleAccordion',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
