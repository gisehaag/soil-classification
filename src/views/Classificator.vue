<template>
	<div class="graph-paper">
		<div class="flex justify-center py-6 title" id="title">
			<h1 class="font-bold text-3xl">
				Clasifiquemos suelos según el método {{ systemName }}!
			</h1>
			<button
				@click="toggleSystem"
				class="toggle-system hover:bg-white hover:text-black text-white font-bold py-2 px-5 uppercase"
			>
				según {{ !isAashto ? 'AASHTO' : 'SUCS' }}
			</button>
		</div>

		<div v-if="isAashto">
			<aashto
				:soilParams="soilParams"
				@update-soil-params="updateSoilParams"
			></aashto>
		</div>
		<div v-else>
			<sucs
				:soilParams="soilParams"
				@update-soil-params="updateSoilParams"
			></sucs>
		</div>
	</div>
</template>

<script>
import Sucs from '@/components/Sucs';
import Aashto from '@/components/Aashto';

export default {
	name: 'Classificator',

	components: { Aashto, Sucs },

	data() {
		return {
			// systemName: null,
			isAashto: null,
			soilParams: {
				tamiz10: null,
				tamiz40: null,
				tamiz200: null,
				limitePlastico: null,
				limiteLiquido: null,
			},
		};
	},

	methods: {
		toggleSystem() {
			this.isAashto = !this.isAashto;
		},

		updateSoilParams(soilParams) {
			this.soilParams = soilParams;
		},
	},

	created() {
		this.isAashto = this.$route.params.system == 'aashto';
	},

	computed: {
		systemName() {
			return this.isAashto ? 'AASHTO' : 'SUCS';
		},
	},
};
</script>

<style lang="scss" scoped>
$primary-color: #ffb400;

.graph-paper {
	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23555555' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

button {
	background-color: $primary-color;
	border: 4px solid transparent;
	padding: 10px 25px;
	margin-left: 2rem;

	&:hover {
		border-color: $primary-color;
	}
}
@media screen and (max-width: 500px) {
	.title {
		flex-direction: column;
		width: 90vw;
		margin: 0 auto;
		text-align: center;
	}

	button {
		margin: 0;
		margin-top: 15px;
	}
}
</style>
