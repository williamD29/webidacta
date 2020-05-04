<template>
    <div>{{users}}</div>
</template>

<script>
import axios from 'axios'
export default {
	layout: 'plain',
	async asyncData({ req }) {
		const { data } = await axios.get('http://localhost:3000/api/test')
		return {
			users: data
		}
	}
}
</script>

<style lang="scss" scoped>
</style>