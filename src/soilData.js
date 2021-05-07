import Vue from 'vue';

const soilData = new Vue({
	name: 'SoilData',

	data() {
		return {
			// hasData: false,
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
		}
	},

	computed: {
		indicePlasticidad() {
			if (this.data.plastico) {
				let indicePlasticidad =
					this.data.limiteLiquido && this.data.limitePlastico
						? (this.data.limiteLiquido - this.data.limitePlastico).toFixed(1)
						: null;

				return indicePlasticidad;
			}
			return null;
		}
	},

	created() {
		this.$on('getData', (data) => {
			// this.hasData = true;
			this.data = data;
		});
	}
});

export default soilData;