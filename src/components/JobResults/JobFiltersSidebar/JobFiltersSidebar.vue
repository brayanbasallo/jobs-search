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
      <job-filters-sidebar-organizations />

      <job-filters-sidebar-job-types />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue';

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobTypes
  }
}
</script>
