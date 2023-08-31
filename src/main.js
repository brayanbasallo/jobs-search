import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "@/index.css"
import App from '@/App.vue'
import router from '@/router'

library.add(faSearch)

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon )
    .mount('#app')
