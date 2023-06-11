<template>
  <img :src="imageLink" alt="user profile image" class="rounded-3xl w-8 h-8 object-contain" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://cdn-icons-png.flaticon.com/512/2919/2919906.png'
    }
  }
}
</script>
