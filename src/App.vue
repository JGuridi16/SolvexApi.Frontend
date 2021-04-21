<template>
  <Navbar msg="Vue Js Events" />
  <div class="mx-auto container row mt-5">
    <Form />
    <ViewModel />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Form from './components/Form.vue'
import ViewModel from './components/ViewModel.vue'

export default {
  mounted(){
    console.log("App just mounted")
  },
  name: 'App',
  components: {
    Navbar,
    Form,
    ViewModel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0px;
}
</style>
