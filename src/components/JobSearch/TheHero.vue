<template>
  <main class="flex flex-col h-screen">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt=""
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <spot-ligth class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="jobs/results"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
        >
          <img class="object-contain" :src="slotProps.spotlight.img" alt="" />
          <div class="mt-3 h-48 px-4 py-4">
            <h3 class="text-lg font-medium">
              {{ slotProps.spotlight.title }}
            </h3>
            <p class="mt-3 text-sm">
                {{ slotProps.spotlight.description }}
            </p>
          </div>
          <router-link to="jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1">
            See job
          </router-link>
        </router-link>
      </template>
    </spot-ligth>
  </main>
</template>
<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import SpotLigth from '@/components/JobSearch/SpotLight.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm,
    SpotLigth
  }
}
</script>
