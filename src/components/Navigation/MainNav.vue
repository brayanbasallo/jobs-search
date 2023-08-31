<template>
  <header class="w-full text-sm" :class="headerHeightClass">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{name:'Home'}" class="flex h-full items-center text-xl">
          Bobo Careers  
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full">
            <li v-for="(menuItem, index) in menuItems" :key="index" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="sing in" type="primary" @click="logginUser"  />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      menuItems: ['Teams', 'Location', 'Life at Bobo careers', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      return this.isLoggedIn ? 'h-32' : 'h-16'
    }
  },
  methods: {
    logginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>
