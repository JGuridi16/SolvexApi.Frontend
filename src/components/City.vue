<template>
  <div v-bind:key="index" class="card m-3" style="width: 14rem">
    <div class="card-body">
      <h5 class="card-title">{{ city.id }} - {{ city.name }}</h5>
      <p class="card-text">{{ city.description }}</p>
      <hr />
      <div class="col-md-12">
        <button @click.exact="handleSelectedCity(city)" class="btn btn-outline-success">Modify</button>
        <button @click.exact="deleteCity()" class="btn btn-outline-danger">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import store from '../store/index.js'

export default {
  name: "City",
  props: ["city"],
  data: () => {
    return {
      notification: ''
    }
  },
  methods: {
    ...mapActions(["removeCity"]),
    deleteCity() {
      //this.removeCity(this.city)
      this.notification = 'City deleted successfully'
    },
    handleSelectedCity(city) {
      store.state.id = city.id
      store.state.name = city.name
      store.state.description = city.description
    }
  },
  watch: {
    notification(msg) {
      this.$emit('notificationFromChild', msg)
      msg = ''
    }
  }
};
</script>