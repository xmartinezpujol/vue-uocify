<template>
  <div id="app">
    <app-header />
    <div class="app-container container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

  library.add(faSearch, faSignOutAlt, faUser);

  import AppHeader from '@/components/AppHeader'

  export default {
    name: 'App',
    components: {
      AppHeader,
    }
  }
</script>
