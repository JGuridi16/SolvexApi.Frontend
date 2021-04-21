<template>
  <section class="col-sm-12 col-md-3">
    <form
      @submit.prevent="submitForm()"
      class="p-3 bg-light rounded p-2 border shadow"
    >
      <div class="mb-3">
        <label for="uuid" class="form-label">City Identification</label>
        <input
          id="uuid"
          type="text"
          v-model="$store.state.id"
          name="id"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          type="text"
          v-model="$store.state.name"
          name="name"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          type="text"
          v-model="$store.state.description"
          name="description"
          class="form-control"
          rows="3"
        ></textarea>
      </div>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label class="mb-3" for="checkbox">Update City: {{ checked }}</label>
      <button type="submit" class="btn btn-primary w-100">Create|Update City</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store/index.js'

export default {
  name: "Form",
  data: () => {
    return {
      checked: false
    }
  },
  methods: {
    ...mapActions(["addCity", "updateCity"]),
    submitForm() {
      const city = {
        id: store.state.id,
        name: store.state.name,
        description: store.state.description
      };
      if(this.checked){
        this.updateCity(city);
        return;
      }
      this.addCity(city);
    },
  }
};
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
a {
  color: #42b983;
}

img {
  width: 100%;
  height: 150px;
  transition: 0.3s;
}
</style>
