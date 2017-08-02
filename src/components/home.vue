<template>
  <div class="home">
    <h2>Hello <i>{{getUser}}</i>!Welcome to the photo world!</h2>
  </div>
</template>

<script>

  import { mapGetters } from "vuex";

export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
        "getUser",
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
