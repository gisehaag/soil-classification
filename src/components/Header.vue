<template>
	<header
		class="flex items-center border-1 border-gray-200 pl-6 text-xl bg-white bg-opacity-100 font-extrabold"
		id="header"
	>
		<div>
			<ul>
				<li><router-link to="/">Inicio</router-link></li>
				<li>
					<router-link to="/clasificar/sucs">SUCS</router-link>
				</li>
				<li>
					<router-link to="/clasificar/aashto">AASHTO</router-link>
				</li>
				<li>
					<router-link to="/about">Marco Teórico</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>


<script>
export default {
	name: 'Header',

	data() {
		return {};
	},

	computed: {
		isAbout() {
			return this.$route.path == '/about' ? true : false;
		},
		isHome() {
			return this.$route.path == '/' ? true : false;
		},
	},
};
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');

$primary-color: #ffb400;

#header {
	border-bottom: 3px solid #dedede !important;
	box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.4) !important;
	/* -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.4) !important; */
	/* -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.4) !important; */
}

header {
	font-family: 'Poppins', sans-serif;
	height: var(--header-height);
}

ul {
	display: flex;
	justify-content: space-between;
}

li {
	margin-right: 35px;
}

li:hover {
	color: $primary-color;
}
</style>
