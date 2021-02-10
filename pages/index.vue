<template>
	<v-container>
		<v-app-bar app color="green">
			<v-btn icon :to="'/settings'">
				<v-icon>mdi-menu</v-icon>
			</v-btn>
			<v-text-field
				v-model="num"
				hide-details
				prepend-icon="mdi-magnify"
				single-line
				solo dense flat
				color="black"
				:label="'Введите номер до ' + Math.max.apply(null, Object.keys(songs))"
				type="number"
				@change="openSongByNum"
			></v-text-field>
		</v-app-bar>

		<v-list dense>
			<v-list-item-group
				color="primary"
			>
				<v-list-item
					v-for="(song, i) in songs"
					:to="'songs/' + song.n"
					:key="i"
				>
					<v-list-item-content>
						<v-list-item-title v-text="song.n + '. ' + song.title">

						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-container>
</template>
<script>
	export default {
		data: () => ({
			num: null,
		}),
		async fetch({store}) {
			store.dispatch('fetchSongs')
		},
		computed: {
			songs() {
				return this.$store.getters.songs
			}
		},
		methods: {
			backupRestore() {
				alert('backupRestore');
			},
			openSongByNum() {
				this.$router.push({ path: `/songs/${this.num}` });
			},
		}
	}
</script>