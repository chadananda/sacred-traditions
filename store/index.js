import Vuex from 'vuex';
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            locales: [
                {
                    code: 'en',
                    name: 'EN'
                },
                {
                    code: 'de',
                    name: 'DE'
                },
                {
                    code: 'ru',
                    name: 'RU'
                }
            ],
            locale: 'en'
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user;
            }
        },
        mutations: {
            setUser (state, payload) {
                state.user = payload;
            },
            SET_LANG(state, locale) {
                if (state.locales.find(el => el.code == locale)) {
                    state.locale = locale
                }
            }
        },
        actions: {
            autoSignIn ({commit}, payload) {
                commit('setUser', payload)
            },

            signInWithGoogle ({commit}) {
                return new Promise((resolve, reject) => {
                    auth.signInWithRedirect(GoogleProvider);
                    resolve();
                })
            },

            signOut ({commit}) {
                auth.signOut().then(() => {
                    commit('setUser', null);
                }).catch(err => console.log(error))
            }
        }
    })
}

export default createStore