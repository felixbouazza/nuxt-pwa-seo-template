const state = () => ({
    currentCrypto: null,
    isSettingsSidebar: false,
    cryptoListActive: false,
    cryptoSearch: null,
    preferredCryptoList: []
})

const mutations = {
    setCurrentCrypto(state, currentCrypto) {
        state.cryptoListActive = false
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
    },
    resetSearch(state) {
        state.cryptoSearch = null
    },
    updatePreferredCryptoList(state, data) {
        state.preferredCryptoList = data
    }
}

export default {
    state,
    mutations,
}