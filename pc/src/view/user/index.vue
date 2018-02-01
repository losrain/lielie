<template>
  <div :class="PAGE_CLASS">
		<router-view></router-view>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
	export default{
		computed: {
  		...mapGetters([
  			'PAGE_CLASS'
  		])
  	}
	}
</script>
