<template>
	<div>
		<div class="box flex justify-arround">
			<form
				novalidate
				class="inputs text-center"
				action="/"
				@submit.prevent="getGroup"
			>
				<h2 class="font-bold text-lg">
					Ingresa los parámetros del suelo a clasificar:
				</h2>
				<granulometria :isAashto="isAashto"></granulometria>
				<plasticidad :isAashto="isAashto"></plasticidad>

				<button
					class="button submit mt-5 hover:bg-white hover:text-black text-white font-bold py-2 px-5 uppercase"
					type="submit"
				>
					Clasificar <span class="emoji">🤓</span>
				</button>
			</form>

			<div class="data" id="data">
				<h2 class="font-bold text-lg my-4">Características del suelo:</h2>
				<ul class="text-left">
					<li>
						Pasa tamiz 10:
						<span class="yellow-text" v-show="tamiz10">
							{{ tamiz10 }}%</span
						>
					</li>
					<li>
						Pasa tamiz 40:
						<span class="yellow-text" v-show="tamiz40"
							>{{ tamiz40 }}%</span
						>
					</li>
					<li>
						Pasa tamiz 200:
						<span class="yellow-text" v-show="tamiz200"
							>{{ tamiz200 }}%</span
						>
					</li>
					<li v-if="plastico">
						Límite Líquido:
						<span class="yellow-text" v-show="limiteLiquido"
							>{{ limiteLiquido }}%</span
						>
					</li>
					<li v-if="plastico">
						Límite Plástico:
						<span class="yellow-text" v-show="limitePlastico">
							{{ limitePlastico }}%</span
						>
					</li>
				</ul>
				<div class="data-list"></div>
				<curva-granulometrica></curva-granulometrica>
			</div>
		</div>
		<div class="result-container">
			<div
				class="results bg-white border-4 flex flex-col justify-center items-center py-6 px-3"
			>
				<div class="suelo font-extrabold text-xl">
					<h1 v-if="groupName">
						Grupo de clasificación:
						<span class="yellow-text">{{ group }}</span>
					</h1>
					<h1 v-else>Necesito más datos para clasificar 🧐...</h1>
				</div>
				<div v-if="groupName" class="text-lg">
					<h3>
						El material que está siendo clasificado es
						<span class="yellow-text">{{ esGranular }}</span
						>.
					</h3>
					<p v-if="errorMessage">{{ errorMessage }}</p>
					<p>Este tipo de suelos consta usualmente de {{ groupName }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import granulometria from './granulometria.vue';
import plasticidad from '@/components/plasticidad';
import soilData from '@/soilData';
import curvaGranulometrica from '@/components/curvaGranulometrica';

export default {
	name: 'Aashto',

	components: { granulometria, plasticidad, curvaGranulometrica },

	data() {
		return {
			granulometria: null,
			graphicData: [],
			group: null,
			groupName: null,
			errorMessage: null,
			isAashto: true,
		};
	},

	methods: {
		getGroup() {
			console.log('hola');
		},

		getResult() {
			this.group = null;
			this.groupName = null;

			// this.$emit('update-soil-params', {
			// 	tamiz10: this.tamiz10,
			// 	tamiz40: this.tamiz40,
			// 	tamiz200: this.tamiz200,
			// 	limitePlastico: this.limitePlastico,
			// 	limiteLiquido: this.limiteLiquido,
			// });

			this.group = 'A-';

			if (this.esGranular == 'granular' && this.granulometria) {
				this.group += '2-';
				this.groupName = 'limos o gravas arcillosas y arena';

				if (this.tamiz40 <= 50) {
					this.groupName = 'fragmentos petreos, grava y arena';

					if (this.tamiz200 <= 25 && this.indicePlastico <= 6) {
						this.group = 'A-1-b';
					}

					if (
						this.tamiz10 <= 50 &&
						this.tamiz200 <= 15 &&
						this.indicePlastico <= 6
					) {
						this.group = 'A-1-a';
					}
				} else {
					if (
						this.tamiz200 <= 10 &&
						typeof this.indicePlastico === 'string'
					) {
						this.group = 'A-3';
						this.groupName = 'arena fina';
					}
				}
			}

			if (this.indicePlastico) {
				if (this.limiteLiquido <= 40) {
					if (this.indicePlastico <= 10) {
						this.group += '4';
						this.groupName = 'suelos limosos';
					} else {
						this.group += '6';
						this.groupName = 'suelos arcillosos';
					}
				} else {
					if (this.indicePlastico <= 10) {
						this.group += '5';
						this.groupName = 'suelos limosos';
					} else {
						this.group += '7';
						if (this.esGranular === 'limo-arcilloso') {
							this.groupName = 'suelos arcillosos';
							if (this.indicePlastico <= this.limiteLiquido - 30) {
								this.group += '-5';
							} else {
								this.group += '-6';
							}
						}
					}
				}
			}
		},
	},

	computed: {
		systemName() {
			let systemName = this.isAashto ? 'AASHTO' : 'SUCS';
			return systemName;
		},
		tamiz10() {
			return soilData.data.tamiz10;
		},

		tamiz40() {
			return soilData.data.tamiz40;
		},

		tamiz200() {
			return soilData.data.tamiz200;
		},

		plastico() {
			return soilData.data.plastico;
		},

		limiteLiquido() {
			return soilData.data.limiteLiquido;
		},

		limitePlastico() {
			return soilData.data.limitePlastico;
		},

		indicePlastico() {
			let indicePlastico =
				this.limiteLiquido && this.limitePlastico
					? (this.limiteLiquido - this.limitePlastico).toFixed(1)
					: null;

			if (indicePlastico < 0 || indicePlastico == 0) {
				indicePlastico = 'Material no plástico';
			}

			return indicePlastico;
		},

		esGranular() {
			let esGranular = this.tamiz200 <= 35 ? 'granular' : 'limo-arcilloso';
			return esGranular;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components';
</style>
