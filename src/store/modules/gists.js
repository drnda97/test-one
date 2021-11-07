import axios from "axios";
const BASE_URL = process.env.VUE_APP_EXP_BASE_URL;
const state = {
    gists: []
};
const getters = {
    allGists: (state) => state.gists
};
const actions = {
    async getGists({commit}, pageNum) {
        const response = await axios.get(`${BASE_URL}?page=${pageNum}`);
        commit('setGists', response.data)
    }
};
const mutations = {
    setGists: (state, gists) => {
        state.gists = gists;
    }
};

export default {
    state, 
    getters, 
    actions, 
    mutations
}