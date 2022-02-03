<template>
  <section class="col-sm-12 col-md-9">
    <div v-if="notification" :class="['alert', 'alert-success']" role="alert">
      {{ notification }}
    </div>
    <div class="row d-flex justify-content-center mx-2">
        <City v-for="city in allCities" v-bind:key="city.id"  
        class="bg-light shadow" v-bind:city="city" @notificationFromChild="notification = $event"/>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import City from './City'

export default {
  name: 'ViewModel',
  components: {
    City
  },
  data: () => {
    return {
      notification: ''
    }
  },
  props: ["cities"],
  methods: {
    ...mapActions(['fetchCities'])
  },
  computed: 
  mapGetters(['allCities']),
  created() {
    this.fetchCities()
  },
  mixins: []
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a, a:hover {
  color: #42b983;
}

img {
  width: 100%; 
  height: 150px; 
  transition: .3s
}
</style>
