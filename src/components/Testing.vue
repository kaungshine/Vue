<template>
	<div>
		<h1 class="text-danger">{{title}}</h1>
		<p>This is the testing vue</p>
	</div>
</template>

<script>
	export default {
		name: 'Testing',
		props: {
			msg: String
		},
		data (){
	      return {
	        title: 'Testing Component'
	      }
	    }
	}
</script>

<style>

</style>