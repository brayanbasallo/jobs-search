<template>
  <HeaderContainer>
    <template #title>
      <h1 class="text-4xl font-normal w-full">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">It's awesome work here. why don't you come joiun us?</h2>
    </template>
  </HeaderContainer>
</template>

<script>
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'
export default {
  name: 'TeamsView',
  components: {
    HeaderContainer
  }
}
</script>
