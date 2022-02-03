export default {
    computed:{
        fiteredCities: () => this.fetchCities().filter((city) => console.log(city))
    }
}