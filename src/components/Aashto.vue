<template>
	<div>
		<div
			class="box flex px-8 w-5/6 m-auto"
			v-bind:class="{ justify: groupName }"
		>
			<form
				novalidate
				class="inputs text-center justify-self-start"
				action="/"
				@submit.prevent="getResult"
			>
				<h2 class="font-bold text-lg mb-4 text-left">
					Ingresa los parámetros del suelo a clasificar:
				</h2>
				<granulometria :isAashto="isAashto"></granulometria>
				<plasticidad :isAashto="isAashto"></plasticidad>

				<button
					v-if="!clasificando"
					class="
						button
						submit
						mt-5
						hover:bg-white
						hover:text-black
						text-white
						font-bold
						py-2
						px-5
						uppercase
					"
					type="submit"
				>
					Clasificar <span class="emoji">🤓</span>
				</button>
			</form>

			<div v-if="groupName" class="data" id="datos">
				<hr class="separador" />

				<h2 class="font-bold text-lg mb-4">Características del suelo:</h2>
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
		<div class="result-container" v-show="errorMessage || groupName">
			<div
				class="
					results
					bg-white
					border-4
					flex flex-col
					justify-center
					items-center
					py-6
					px-3
				"
			>
				<div class="suelo font-extrabold text-xl">
					<p id="error-msg" v-if="errorMessage">{{ errorMessage }}</p>

					<h1 v-if="groupName" class="mb-4">
						Grupo de clasificación:
						<span class="yellow-text">
							{{ group }} ({{ indexGroup }})</span
						>
					</h1>
					<!-- <h1 v-else>Necesito más datos para clasificar 🧐...</h1> -->
				</div>
				<div v-if="groupName" class="suelo text-lg text-center">
					<h3>
						El material que está siendo clasificado es
						<span class="yellow-text">{{ esGranular }}</span
						>.
					</h3>
					<p>Este tipo de suelos consta usualmente de {{ groupName }}</p>
				</div>
			</div>
		</div>

		<buttons v-if="groupName" :isAashto="isAashto"></buttons>
	</div>
</template>

<script>
import granulometria from './granulometria.vue';
import plasticidad from '@/components/plasticidad';
import soilData from '@/soilData';
import curvaGranulometrica from '@/components/curvaGranulometrica';
import buttons from '@/components/buttons';

export default {
	name: 'Aashto',

	components: { granulometria, plasticidad, curvaGranulometrica, buttons },

	data() {
		return {
			clasificando: false,
			// graphicData: [],
			group: null,
			groupName: null,
			indexGroup: null,
			errorMessage: null,
			isAashto: true,
		};
	},

	methods: {
		scrollToResult() {
			let resultBox = document.querySelector('.result-container');
			resultBox.scrollIntoView({
				block: 'center',
				behavior: 'smooth',
			});
		},

		checkInputs() {
			if (!this.tamiz10) {
				this.errorMessage = '🧐 Ingresa el % pasante tamiz 10';
				this.clasificando = false;
				this.scrollToResult();

				return;
			}

			if (!this.tamiz40) {
				this.errorMessage = '🧐 Ingresa el % pasante tamiz 40';
				this.clasificando = false;
				this.scrollToResult();

				return;
			}

			if (!this.tamiz200) {
				this.errorMessage = '🧐 Ingresa el % pasante tamiz 200';
				this.clasificando = false;
				this.scrollToResult();

				return;
			}

			if (this.plastico) {
				if (!this.limiteLiquido || !this.limitePlastico) {
					this.errorMessage =
						'🧐 Ingresa valores de consistencia del material';
					this.clasificando = false;
					this.scrollToResult();

					return;
				}
			}
		},

		getIndexGroup() {
			const A = this.tamiz200 - 35;
			const B = 0.2 + 0.005 * (this.limiteLiquido - 40);
			const C = 0.01 * (this.tamiz200 - 15) * (this.indicePlasticidad - 10);

			this.indexGroup = Math.round(A * B + C);

			if (
				this.indexGroup < 0 ||
				this.group == 'A-1-a' ||
				this.group == 'A-1-b' ||
				this.group == 'A-2-4' ||
				this.group == 'A-2-5' ||
				this.group == 'A-3'
			) {
				this.indexGroup = 0;
			}

			if (this.group == 'A-2-6' || this.group == 'A-2-7') {
				this.indexGroup = Math.round(C);
			}
		},

		getResult() {
			this.clasificando = true;
			this.errorMessage = '';
			this.group = null;
			this.groupName = null;

			this.checkInputs();

			if (this.errorMessage === '') {
				this.group = 'A-';

				if (this.esGranular == 'granular' && this.granulometria) {
					this.group += '2';
					this.groupName = 'gravas con limo o arcilla y arena';

					if (this.tamiz40 <= 50) {
						this.groupName = 'fragmentos petreos, grava y arena';

						if (this.tamiz200 <= 25 && this.indicePlasticidad <= 6) {
							this.group = 'A-1-b';
						}

						if (
							this.tamiz10 <= 50 &&
							this.tamiz200 <= 15 &&
							this.indicePlasticidad <= 6
						) {
							this.group = 'A-1-a';
						}
					} else {
						if (this.tamiz200 <= 10 && this.indicePlasticidad === null) {
							this.group = 'A-3';
							this.groupName = 'arena fina';
						}
					}
				}

				if (this.indicePlasticidad) {
					if (this.esGranular == 'granular') {
						this.group += '-';
					}

					if (this.limiteLiquido <= 40) {
						if (this.indicePlasticidad <= 10) {
							this.group += '4';
							if (this.esGranular === 'limo-arcilloso') {
								this.groupName = 'suelos limosos';
							}
						} else {
							this.group += '6';
							if (this.esGranular === 'limo-arcilloso') {
								this.groupName = 'suelos arcillosos';
							}
						}
					} else {
						if (this.indicePlasticidad <= 10) {
							this.group += '5';
							if (this.esGranular === 'limo-arcilloso') {
								this.groupName = 'suelos limosos';
							}
						} else {
							this.group += '7';
							if (this.esGranular === 'limo-arcilloso') {
								this.groupName = 'suelos arcillosos';
								if (this.indicePlasticidad <= this.limiteLiquido - 30) {
									this.group += '-5';
								} else {
									this.group += '-6';
								}
							}
						}
					}
				}
			}
			this.getIndexGroup();

			this.scrollToResult();
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

		granulometria() {
			return soilData.data.granulometria;
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

		indicePlasticidad() {
			return soilData.indicePlasticidad;
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
