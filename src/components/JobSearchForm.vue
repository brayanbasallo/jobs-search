<template>
    <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
        <font-awesome-icon class="ml-4 mr-3" :icon="['fas', 'search']" />
        <div class="flex flex-1 flex-nowrap h-full text-base font-light">
            <div class="flex h-full flex-1 relative items-center pr-3">
                <label for="role" class="absolute left-0 -top-10">Role</label>
                <input 
                    id="role" 
                    v-model="role"
                    type="text" 
                    name="role" 
                    placeholder="Sofware engineer" 
                    class="w-full font-normal focus:outline-none" 
                />
            </div>
            <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">
                in
            </span>
            <div class="flex h-full flex-1 relative items-center pl-3">
                <label for="location" class="absolute left-0 -top-10">where?</label>
                <input 
                    id="location"
                    v-model="location"
                    type="text" 
                    name="location" 
                    placeholder="Los angeles" 
                    class="w-full font-normal focus:outline-none" 
                />
            </div>
        </div>
        <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
    </form>
</template>
<script>
import ActionButton from '@/components/ActionButton.vue';
export default {
    name: 'JobSearchForm',
    components: {
        ActionButton
    },
    data() {
        return {
            role: '',
            location: ''
        }
    },
}
</script>