<template>
  <ul>
    <li v-for="spotLight in spothLights" :key="spotLight.id">
        <slot :spotlight="spotLight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotLight',
  data() {
    return {
      spothLights: []
    }
  },
  async mounted() {
    const basUrl = import.meta.env.VITE_APP_API_URL
    const url = `${basUrl}/spotlights`
    const response = await axios.get(url)
    console.log(response.data);
    this.spothLights = response.data
  }
}
</script>
