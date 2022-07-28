const state = () => ({
    currentCrypto: null,
    isSettingsSidebar: false,
    cryptoListActive: false,
    cryptoSearch: null
})

const mutations = {
    setCurrentCrypto(state, currentCrypto) {
        state.currentCrypto = currentCrypto
    },
    switchNavbar(state) {
        state.isSettingsSidebar = !state.isSettingsSidebar
    },
    displayCryptoList(state) {
        state.cryptoListActive = !state.cryptoListActive
    },
    searchCrypto(state, search) {
        state.cryptoSearch = search
    }
}

export default {
    state,
    mutations
}