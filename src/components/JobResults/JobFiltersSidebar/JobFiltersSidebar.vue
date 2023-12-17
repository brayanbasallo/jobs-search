<template>
  <div class="flex flex-col border-r border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do yo want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear all" type="secondary" />
        </div>
      </div>
      <collapsible-accordion header="Job types">
        <p>Placeholder for now</p>
      </collapsible-accordion>
      <collapsible-accordion header="Orgniztions">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Between Vue and Me" type="checkbox" class="mr-3" />
                <label for="Between Vue and Me">Between Vue</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Et Vue Vrute" type="checkbox" class="mr-3" />
                <label for="Et Vue Vrute">Et Vue Brute</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsible-accordion>
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion
  }
}
</script>
