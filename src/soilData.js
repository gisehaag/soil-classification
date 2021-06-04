import Vue from 'vue';

const soilData = new Vue({
	name: 'SoilData',

	data() {
		return {
			// hasData: false,
			data: {
				granulometria: new Map(),
				graphicData: [],
				tamiz3: null,
				tamiz212: null,
				tamiz2: null,
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

	computed: {
		indicePlasticidad() {
			if (this.data.plastico) {
				let indicePlasticidad =
					this.data.limiteLiquido && this.data.limitePlastico
						? (
							this.data.limiteLiquido - this.data.limitePlastico
						).toFixed(1)
						: null;

				return Number(indicePlasticidad);
			}

			return null;
		},

		lineaU() {
			//Verifica que estás ingresando un suelo real, pues en la naturaleza no existen suelos con LL < 16 y sobre la linea U
			let lineaU = null;
			if (this.data.plastico) {
				if (this.data.limiteLiquido >= 16) {
					lineaU = 0.9 * (this.data.limiteLiquido - 8);
				} else {
					lineaU = undefined;
				}
			}

			return this.indicePlasticidad > lineaU ? true : false;
		},
	},

	created() {
		this.$on('getData', (data) => {
			// this.hasData = true;
			this.data = data;
		});
	},
});

export default soilData;
