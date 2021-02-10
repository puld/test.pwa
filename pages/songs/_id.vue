<template>
	<v-container>
		<v-app-bar app color="green">
			<v-btn icon :to="'/'">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>
			<v-toolbar-title>{{song.n + '. ' + song.title}}</v-toolbar-title>
		</v-app-bar>

		<v-list dense>
			<v-list-item-group
				color="primary"
			>
				<v-list-item
					v-for="(item, i) in song.body"
					:key="i"
				>
					<v-subheader>{{item.type == 'verse' ? 'Куплет' : 'Припев' }}</v-subheader>
					<v-list-item-content v-if="item.type == 'verse' || item.repeatId == undefined">
						{{item.content}}
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
		{{song.text}}
	</v-container>
</template>
<script>
	export default {
		async fetch({store, params}) {
			store.dispatch('fetchSong', params.id)
		},
		computed: {
			song() {
				return this.$store.getters.song
			}
		}
	}
</script>