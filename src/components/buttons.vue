<template>
	<div class="buttons text-center mr-8 pb-8 text-xs">
		<button
			class="mt-5 hover:text-white text-grey-500 font-bold py-2 px-5 uppercase"
			@click="resetValues"
		>
			Borrar valores
		</button>

		<button
			class="mt-5 hover:text-white text-grey-500 font-bold py-2 px-5 uppercase"
			@click="print"
		>
			Imprimir
		</button>
	</div>
</template>


<script>
import soilData from '@/soilData';

export default {
	name: 'Botones',
	data() {
		return {
			data: {
				granulometria: new Map(),
				graphicData: [],
				tamiz112: null,
				tamiz1: null,
				tamiz34: null,
				tamiz12: null,
				tamiz38: null,
				tamiz4: null,
				tamiz10: null,
				tamiz40: null,
				tamiz100: null,
				tamiz200: null,
				plastico: false,
				limiteLiquido: null,
				limitePlastico: null,
			},
		};
	},

	methods: {
		print() {
			window.print();
		},

		resetValues() {
			soilData.$emit('getData', this.data);
			window.location.reload();
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components';
$primary-color: #ffb400;

button {
	text-align: center;
	border: 2px solid #555;
	background-color: #fff;
}

button:hover {
	background-color: $primary-color;
	border-color: transparent;
}

button:first-child {
	margin-right: 100px;
}
</style>