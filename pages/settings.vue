<template>
	<v-container>
		<v-app-bar app color="green">
			<v-btn icon :to="'/'">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>
			<v-toolbar-title>Настройки</v-toolbar-title>
		</v-app-bar>

		<v-list dense>
			<v-list-item-group
				color="primary"
			>
				<v-list-item>
					<v-list-item-content>
						<v-icon>mdi-format-size</v-icon>
						<v-list-item-title>Размер шрифта</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item>
					<v-list-item-content>
						<v-btn icon @click="backupRestore()">
							<v-icon>mdi-backup-restore</v-icon>
                          Загрузить обновление
						</v-btn>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-container>
</template>
<script>
	export default {
		data: () => ({}),
		async fetch({store}) {
			store.dispatch('fetchTexts')
		},
		computed: {
			items() {
				return this.$store.getters.texts//.filter(val => val.completed)
			}
		},
		methods: {
			backupRestore() {
				alert('backupRestore');
			}
		}
	}
</script>