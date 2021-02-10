import Vuex from 'vuex'
import { getSongs, getSong } from "@/assets/js/flatFileDb";

export default () =>
	new Vuex.Store({
		state: {
			songs: {},
			song: {},
		},
		getters: {
			songs: state => state.songs,
			song: state => state.song,
		},
		mutations: {
			setSongs(state, songs) {
				state.songs = songs
			},
			setSong(state, song) {
				state.song = song
			},
		},
		actions: {
			async fetchSongs({commit}) {
				commit('setSongs', await getSongs())
			},
			async fetchSong({commit}, id) {
				commit('setSong', await getSong(id))
			},
		}
	})