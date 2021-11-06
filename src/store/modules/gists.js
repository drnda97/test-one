import axios from "axios";

const state = {
    gists: []
};
const getters = {
    allGists: (state) => state.gists
};
const actions = {
    async getGists({commit}, pageNum) {
        const response = await axios.get(`https://api.github.com/gists/public?page=${pageNum}`);
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