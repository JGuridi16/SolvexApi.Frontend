<template>
    <nav class="navbar navbar-light bg-light shadow-sm">
    <div class="container-fluid">
        <a href="https://v3.vuejs.org/guide/events.html#listening-to-events" class="navbar-brand">
        <img src="../assets/logo.png" width="30" height="24" class="d-inline-block align-text-top">
        {{ msg }}
        </a>
        <form @submit="formSubmitted($event)" class="d-flex">
          <input @change="onChange($event)"
          class="form-control me-2" type="search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  methods: {
    onChange: function(e){
      console.log(e.target.value);
    },
    formSubmitted: function(e){
      e.preventDefault()
      console.log(e.target.value)
    }
  }
}
</script>