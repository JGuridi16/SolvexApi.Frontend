import axios from 'axios';

const uri = "https://localhost:44382/cities/";

const state = {
    cities: []
};

const getters = {
    allCities: state => state.cities
};

const actions = {
    fetchCities: async ({ commit }) => {
        const response = await axios.get(uri)
        commit('setCities', response.data);
    },
    addCity: async ({ commit }, city) => {
        const response = await axios.post(uri, city);
        commit('createCity', response.data);
    },
    updateCity: async ({ commit }, city) => {
        const response = await axios.put(uri, city);
        console.log(response);
        commit('putCity', response.data);
    },
    removeCity: async ({ commit }, city) => {
        await axios.delete(`${uri}${city.id}`);
        commit('deleteCity', city);
    }
};

const mutations = {
    setCities: (state, cities) => {
        state.cities = cities
    },
    createCity: (state, city) => {
        state.cities.unshift(city)
    },
    putCity: (state, updatedCity) => {
        const replaceElement = 1;
        const index = state.cities.findIndex(c => c.id === updatedCity.id);
        if(index !== -1) {
            state.cities.splice(index, replaceElement, updatedCity);
        }
    },
    deleteCity: (state, city) => {
        state.cities = state.cities.filter(c => c.id !== city.id)
    }
};

export default { state, getters, actions, mutations }