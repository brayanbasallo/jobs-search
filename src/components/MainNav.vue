<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full">
            <li v-for="(menuItem, index) in menuItems" :key="index" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Location', 'Life at Bobo careers', 'How we hire', 'Students', 'Jobs']
    }
  }
}
</script>
