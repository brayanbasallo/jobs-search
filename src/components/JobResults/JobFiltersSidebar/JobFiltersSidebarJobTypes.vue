<template>
    <collapsible-accordion header="Job types">
      <div class="mt-5">
        <fieldset>
          <ul class="flex flex-row flex-wrap">
            <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType" class="h-8 w-1/2">
              <input
                :id="jobType"
                v-model="selectJobTypes"
                :value="jobType"
                type="checkbox"
                class="mr-3"
                @change="selectJobType"
              />
              <label :for="jobType">{{ jobType }}</label>
            </li>
          </ul>
        </fieldset>
      </div>
    </collapsible-accordion>
  </template>
  
  <script>
  import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
  import { mapState, mapActions } from 'pinia'
  
  import { useJobsStore, UNIQUE_JOB_TYPES } from '@/stores/jobs'
  import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/stores/user"
  
  export default {
    name: 'JobFiltersSidebarOrganization',
    components: {
      CollapsibleAccordion
    },
    data() {
      return {
        selectJobTypes: []
      }
    },
    computed: {
      ...mapState(useJobsStore, [UNIQUE_JOB_TYPES])
    },
    methods: {
      ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
      selectJobType() {
        this.ADD_SELECTED_JOB_TYPES(this.selectJobTypes)
        this.$router.push({ name: "JobResults" })
      }
    }
  }
  </script>
  