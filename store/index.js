const state = () => ({
    currentCrypto: ""
})

const getters = {
    getCurrentCrypto(state) {
        return state.currentCrypto
    }
}

const mutations = {
    setCurrentCrypto(state, currentCrypto) {
        state.currentCrypto = currentCrypto
    }
}

export default {
    state,
    getters,
    mutations
}