<template>
	<main class="box-border">
		<sc-header></sc-header>
		<router-view></router-view>
		<gh-footer></gh-footer>
	</main>
</template>

<script>
import ScHeader from '@/components/Header';
import GhFooter from '@/components/GhFooter';

export default {
	name: 'App',

	components: { ScHeader, GhFooter },

	data() {
		return {
			title: 'Soil classification app',
		};
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;0,800;1,400&display=swap');
@import url('https://test.gisehaag.com/assets/css/icons.css');

$primary-color: #ffb400;

:root {
	--footer-height: 50px;
	--header-height: 85px;
	--background-img: url('https://images.unsplash.com/photo-1463099843411-206f505c28bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTIyNDV8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2MTg1Njc2NDQ&ixlib=rb-1.2.1&q=80&w=1080');
}

body {
	font-family: 'Rubik', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2a2a2a;
	padding-bottom: var(--footer-height);
}
</style>
