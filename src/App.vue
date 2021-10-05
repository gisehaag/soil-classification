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
			title: 'Clasificación de Suelos para uso ingenieril',
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
	--background-img: url('https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTIyNDV8MHwxfHNlYXJjaHwxNHx8YnVpbGRpbmclMjBsb2FkZXJ8ZW58MHx8fHwxNjMzMzM3NzIw&ixlib=rb-1.2.1&q=80&w=1080');
}

body {
	font-family: 'Rubik', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2a2a2a;
	padding-bottom: var(--footer-height);
}

@media print {
	#header,
	.submit,
	#footer,
	.toggle-system,
	.print {
		display: none !important;
	}

	div.box {
		display: block !important;
	}

	form,
	#data {
		width: 80vw !important;
		margin: 0 auto !important;
	}

	canvas {
		width: 100% !important;
		height: auto !important;
	}

	form {
		break-after: page;
	}

	.graphic-box.plasticidad {
		width: 12cm !important;
		height: 10.5cm !important;
	}
	.graphic-box.granulometria {
		width: 18cm !important;
		height: 10.5cm !important;
	}

	.results {
		width: 80vw !important;
	}

	.consistencia {
		flex-direction: column;
	}

	@page {
		size: A4 portrait;
		margin: 1cm;
		// page-break-inside: avoid;
	}
}
</style>
