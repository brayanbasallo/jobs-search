<template>
  <header class="w-full text-sm" :class="headerHeightClass">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          Bobo Careers
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="userStore.isLoggedIn" />
          <action-button v-else text="sing in" type="primary" @click="userStore.loginUser" />
        </div>
      </div>
      <the-subnav v-if="userStore.isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'
import { mapStores } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/' },
        { text: 'Location', url: '/' },
        { text: 'Life at Bobo careers', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' }
      ]
    }
  },
  computed: {
    ...mapStores(useUserStore),
    headerHeightClass() {
      return this.userStore.isLoggedIn ? 'h-32' : 'h-16'
    }
  }
}
</script>
