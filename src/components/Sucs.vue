<template>
	<div class="">
		<div class="box flex justify-evenly">
			<form
				novalidate
				class="inputs text-center"
				action="/"
				@submit.prevent="getGroup"
			>
				<h2 class="font-bold text-lg mb-4 text-left">
					Ingresa los parámetros del suelo a clasificar:
				</h2>

				<fieldset class="granulometria">
					<h3 class="underline mb-4 text-left">Granulometría:</h3>
					<ul>
						<li class="">
							<label class="item-granulometria" for="tamiz1-1/2">
								<span>% que pasa tamiz 1 1/2" </span>
								<input
									id="tamiz112"
									@change="addDataToGranulometry"
									v-model="tamiz112"
									name="tamiz1-1/2"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="">
							<label class="item-granulometria" for="tamiz1">
								<span>% que pasa tamiz 1"</span>
								<input
									id="tamiz1"
									@change="addDataToGranulometry"
									v-model="tamiz1"
									name="tamiz1"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="">
							<label class="item-granulometria" for="tamiz3/4">
								<span>% que pasa tamiz 3/4"</span>
								<input
									id="tamiz34"
									@change="addDataToGranulometry"
									v-model="tamiz34"
									name="tamiz3/4"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz1/2">
								<span>% que pasa tamiz 1/2"</span>
								<input
									id="tamiz12"
									@change="addDataToGranulometry"
									v-model="tamiz12"
									name="tamiz1/2"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz3/8">
								<span>% que pasa tamiz 3/8"</span>
								<input
									id="tamiz38"
									@change="addDataToGranulometry"
									v-model="tamiz38"
									name="tamiz3/8"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz4">
								<span>
									% que pasa tamiz 4
									<span class="yellow-text">*</span>
								</span>
								<input
									id="tamiz4"
									@change="addDataToGranulometry"
									v-model="tamiz4"
									name="tamiz4"
									pattern="[0-9,]+"
									step="any"
									required
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz10">
								<span>% que pasa tamiz 10</span>
								<input
									id="tamiz10"
									@change="addDataToGranulometry"
									v-model="tamiz10"
									name="tamiz10"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz40">
								<span>% que pasa tamiz 40</span>
								<input
									id="tamiz40"
									@change="addDataToGranulometry"
									v-model="tamiz40"
									name="tamiz40"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz100">
								<span>% que pasa tamiz 100</span>
								<input
									id="tamiz100"
									@change="addDataToGranulometry"
									v-model="tamiz100"
									name="tamiz100"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
						<li class="mb-4">
							<label class="item-granulometria" for="tamiz200">
								<span>
									% que pasa tamiz 200
									<span class="yellow-text">*</span>
								</span>
								<input
									id="tamiz200"
									@change="addDataToGranulometry"
									v-model="tamiz200"
									required
									name="tamiz200"
									pattern="[0-9,]+"
									step="any"
									min="0"
									max="100"
									type="number"
									class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
									placeholder="entre 0 y 100%"
								/>
								<p class="error text-red-400"></p>
							</label>
						</li>
					</ul>
					<p class="text-left text-sm">
						<span class="yellow-text">(*)</span> Campos requeridos
					</p>
				</fieldset>

				<fieldset class="pasa-tamiz40">
					<h3 class="underline mt-8 mb-4 text-left">
						Consistencia del material que pasa el tamiz 40 (Límites de
						Atterberg)
					</h3>
					<p v-if="tamiz40 > 0" class="italic mb-4 text-left">
						El material pasante tamiz 40 corresponde al {{ tamiz40 }}%
					</p>

					<div>
						<div>
							<label for="no-plastico" class="block text-left">
								<input
									class="w-1/12"
									v-model="plastico"
									type="radio"
									name="plastico"
									id="no-plastico"
									:value="false"
								/><span>Suelo no plástico</span></label
							>
						</div>
						<div>
							<label for="plastico" class="block text-left mb-6">
								<input
									class="w-1/12"
									v-model="plastico"
									type="radio"
									name="plastico"
									id="plastico"
									:value="true"
								/>
								<span>Ingresar valores de plasticidad</span>
							</label>
						</div>
					</div>

					<div v-if="plastico" class="consistencia">
						<ul>
							<li class="mb-3">
								<label class="" for="limite-liquido"
									>Límite líquido
									<input
										id="limite-liquido"
										v-model="limiteLiquido"
										pattern="[0-9,]+"
										step="any"
										min="0"
										max="100"
										type="number"
										class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
										placeholder="Límite líquido"
									/>
								</label>
							</li>
							<li class="mb-4">
								<label class="" for="limite-plastico"
									>Límite plástico
									<input
										id="limite-plastico"
										v-model="limitePlastico"
										pattern="[0-9,]+"
										step="any"
										min="0"
										max="100"
										type="number"
										class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
										placeholder="Límite Plástico"
									/>
								</label>
							</li>
						</ul>
						<p
							v-show="indicePlasticidad > 0"
							class="ip text-center font-bold border-4 px-4 py-2 bg-white"
						>
							{{
								indicePlasticidad > 0
									? `Índice de plásticidad ${indicePlasticidad} `
									: indicePlasticidad
							}}
						</p>
					</div>
				</fieldset>
				<button
					class="button submit mt-5 hover:bg-white hover:text-black text-white font-bold py-2 px-5 uppercase"
					type="submit"
				>
					Clasificar <span class="emoji">🤓</span>
				</button>
			</form>
			<div class="data" id="data">
				<h2 class="font-bold text-lg my-4">Características del suelo:</h2>

				<div class="data-list">
					<ul class="text-left">
						<li class="mb-1">
							Grava:
							<span class="yellow-text pl-2" v-show="tamiz4 && tamiz200">
								{{ gravas }}%</span
							>
						</li>
						<li class="mb-1">
							Arena:
							<span class="yellow-text pl-2" v-show="tamiz4 && tamiz200"
								>{{ arenas }}%</span
							>
						</li>
						<li class="mb-1">
							Finos (limos y arcillas):
							<span class="yellow-text pl-2" v-show="tamiz4 && tamiz200"
								>{{ finos }}%</span
							>
						</li>
						<li class="mb-1">
							Coeficiente uniformidad:
							<span class="yellow-text pl-2">{{ coefUniformidad }}</span>
						</li>
						<li class="mb-1">
							Coeficiente curvatura:
							<span class="yellow-text pl-2">{{ coefCurvatura }}</span>
						</li>
						<li v-if="plastico" class="mb-1">
							Límite Líquido:
							<span class="yellow-text pl-2" v-show="limiteLiquido"
								>{{ limiteLiquido }}%</span
							>
						</li>
						<li v-if="plastico" class="mb-1">
							Límite Plástico:
							<span class="yellow-text pl-2" v-show="limitePlastico">
								{{ limitePlastico }}%</span
							>
						</li>
					</ul>
				</div>
				<div class="graphic-box mt-8 bg-white granulometria">
					<h2 class="underline mb-4">Curva Granulométrica</h2>
					<div class="graphic relative">
						<line-chart
							:data="graphicData"
							width="400"
							:download="true"
							:curve="false"
							:ymin="0"
							:ymax="100"
							xtitle="Diametro de partículas [esc. logarítmica]"
							ytitle="% pasante"
							:colors="['#ffb400']"
							:responsive="true"
							:maintainAspectRatio="false"
							aspectRatio="3"
						></line-chart>
					</div>
				</div>
				<div v-if="plastico" class="graphic-box plasticidad mt-8 bg-white">
					<h2 class="underline mb-4">Carta de plasticidad</h2>
					<div class="graphic relative">
						<line-chart
							:data="plasticityChart"
							:xmin="0"
							:xmax="100"
							:download="true"
							:curve="false"
							:library="{
								legend: {
									position: 'bottom',
									align: 'center',
									labels: {
										boxWidth: 5,
										boxHeight: 5,
										padding: 15,
										pointStyle: true,
										usePointStyle: true,
									},
								},
							}"
							xtitle="Límite Líquido"
							ytitle="Indice de Plasticidad"
							:colors="[
								'#FC8F82',
								'#7CBFFC',
								'#559A79',
								'#BBBBBB',
								'#555555',
								'#FFB400',
							]"
							:responsive="true"
							:maintainAspectRatio="false"
							aspectRatio="1"
							:points="false"
						></line-chart>
					</div>
				</div>
			</div>
		</div>
		<div class="results-container">
			<div
				v-show="clasificando"
				class="results bg-white border-4 flex flex-col justify-center items-center py-6 px-3"
			>
				<div class="suelo font-extrabold text-xl text-center">
					<p id="error-msg" v-if="errorMessage">{{ errorMessage }}</p>
					<div v-else>
						<h1 v-if="group">
							Grupo de clasificación:
							<span class="yellow-text">{{ group }}</span>
						</h1>
						<h1 v-else>Necesito más datos para clasificar 🧐...</h1>
					</div>
				</div>
				<div v-if="groupName" class="text-lg">
					<h3>
						El material que está siendo clasificado es
						<span class="yellow-text font-bold lowercase italic">
							{{ groupName }}</span
						>.
					</h3>
				</div>
			</div>
			<div class="text-right mr-8 pb-8 text-xs">
				<button
					class="print mt-5 hover:text-white text-grey-500 font-bold py-2 px-5 uppercase"
					v-if="groupName"
					@click="print"
				>
					Imprimir
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sucs',

	data() {
		return {
			group: null,
			groupName: null,
			clasificando: false,
			fineGroup: null,
			coarseGroup: null,
			errorMessage: null,
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
			coefUniformidad: null,
			coefCurvatura: null,
			isAashto: true,
			granulometria: null,
			graphicData: [],
			tamices: {
				tamiz112: 37.5,
				tamiz1: 25,
				tamiz34: 19,
				tamiz12: 12.5,
				tamiz38: 9.5,
				tamiz4: 4.75,
				tamiz10: 2,
				tamiz40: 0.425,
				tamiz100: 0.15,
				tamiz200: 0.075,
			},
		};
	},

	props: {
		soilParams: {
			type: Object,
			default: () => {},
		},
	},

	created() {
		this.tamiz10 = this.soilParams.tamiz10;
		this.tamiz40 = this.soilParams.tamiz40;
		this.tamiz200 = this.soilParams.tamiz200;
		this.limiteLiquido = this.soilParams.limiteLiquido;
		this.limitePlastico = this.soilParams.limitePlastico;
		this.granulometria = new Map();
	},

	computed: {
		plasticityChart() {
			if (this.plastico) {
				let plasticityChart = [
					{
						name: 'Línea A',
						data: [
							[16, 0],
							[16, 4],
							[25.5, 4],
							[29.589, 0.73 * (29.589 - 20)],
							[100, 0.73 * (100 - 20)],
						],
						drawTicks: true,
					},
					{
						name: 'Línea U',
						data: [
							[16, 7],
							[100, 0.9 * (100 - 8)],
						],
					},
					{
						name: 'CL-ML',
						data: [
							[16, 4],
							[16, 7],
							[29.589, 0.73 * (29.589 - 20)],
						],
					},
					{
						name: 'LL = IP',
						data: [
							[0, 0],
							[100, 100],
						],
					},
					{
						name: 'Línea B',
						data: [
							[50, 0],
							[50, 100],
						],
					},
				];

				if (this.indicePlasticidad) {
					plasticityChart.push({
						name: 'Suelo a clasificar',
						data: [
							[
								parseFloat(this.limiteLiquido),
								parseFloat(this.indicePlasticidad),
							],
						],
						points: true,
					});
				}

				return plasticityChart;
			}

			return null;
		},

		indicePlasticidad() {
			if (this.plastico) {
				let indicePlasticidad =
					this.limiteLiquido && this.limitePlastico
						? (this.limiteLiquido - this.limitePlastico).toFixed(1)
						: null;

				if (indicePlasticidad < 0 || indicePlasticidad == 0) {
					indicePlasticidad = 'Material no plástico';
				}

				return indicePlasticidad;
			}
			return null;
		},

		IPTeorico() {
			//Expresion de la Linea A --> horizontal IP = 4 hasta LL= 25.5, después IP = 0.73 ( LL - 20);
			if (this.plastico) {
				if (this.limiteLiquido >= 16 && this.limiteLiquido <= 25.5) {
					return 4;
				} else {
					return 0.73 * (this.limiteLiquido - 20);
				}
			}
			return null;
		},

		lineaU() {
			//Verifica que estás ingresando un suelo real, pues en la naturaleza no existen suelos con LL < 16 y sobre la linea U
			if (this.plastico) {
				if (this.limiteLiquido >= 16) {
					return 0.9 * (this.limiteLiquido - 8);
				} else {
					return undefined;
				}
			}
			return null;
		},

		lineaA() {
			if (this.plastico) {
				return this.IPTeorico <= this.indicePlasticidad ? 'arriba' : 'debajo';
			}
			return null;
		},

		gravas() {
			let retenidoTamiz4 = 100 - this.tamiz4;
			return retenidoTamiz4.toFixed(1);
		},

		arenas() {
			let retenidoTamiz200 = 100 - this.tamiz200;
			let retenidoTamiz4 = 100 - this.tamiz4;

			return (retenidoTamiz200 - retenidoTamiz4).toFixed(1);
		},

		finos() {
			return this.tamiz200;
		},
	},

	methods: {
		print() {
			window.print();
		},

		getGroup() {
			this.clasificando = true;
			let resultBox = document.querySelector('.results');

			resultBox.scrollIntoView({ block: 'center', behavior: 'smooth' });

			this.errorMessage = '';
			this.group = null;

			if (this.granulometria.size < 3) {
				this.errorMessage =
					'🧐 Ingresa al menos 3 valores para la granulometría.';
				return;
			}

			if (!this.tamiz4) {
				this.errorMessage = '🧐 Ingresa el % pasante tamiz 4.';
				return;
			}

			if (!this.tamiz200) {
				this.errorMessage = '🧐 Ingresa el % pasante tamiz 200.';
				return;
			}

			if (this.plastico) {
				if (!this.limiteLiquido || !this.limitePlastico) {
					this.errorMessage =
						'🧐 Ingresa valores de consistencia del material.';
					return;
				}
			}

			this.getCoeficents();

			this.clasificarFinos();

			if (this.finos < 50) {
				this.clasificarGruesos();
				this.group = this.coarseGroup;
			} else {
				this.group = this.fineGroup;
			}

			if (this.plastico && !this.lineaU) {
				this.errorMessage =
					'Revisa los valores ingresados, los suelos de en la naturaleza no pueden representar puntos sobre la línea U.';
			}

			this.getGroupName();
		},

		getGroupName() {
			this.groupName = null;
			let retenidoTamiz200 = 100 - this.tamiz200;

			switch (this.group) {
				case 'GW':
					this.groupName =
						this.arenas < 15
							? 'Grava bien graduada'
							: 'Grava bien graduada con arena';
					break;

				case 'GP':
					this.groupName =
						this.arenas < 15
							? 'Grava mal graduada'
							: 'Grava mal graduada con arena';
					break;

				case 'GW-GM':
					this.groupName =
						this.arenas < 15
							? 'Grava bien graduada con limo'
							: 'Grava bien graduada con limo y arena';
					break;

				case 'GW-GC':
					this.groupName =
						this.arenas < 15
							? 'Grava bien graduada con arcilla (o arcilla limosa)'
							: 'Grava bien graduada con arcilla y arena (o arcilla limosa y arena)';
					break;

				case 'GP-GM':
					this.groupName =
						this.arenas < 15
							? 'Grava mal graduada con limo'
							: 'Grava mal graduada con limo y arena';
					break;

				case 'GP-GC':
					this.groupName =
						this.arenas < 15
							? 'Grava mal graduada con arcilla (o arcilla limosa)'
							: 'Grava mal graduada con arcilla y arena (o arcilla limosa y arena)';
					break;

				case 'GM':
					this.groupName =
						this.arenas < 15 ? 'Grava limosa' : 'Grava limosa con arena';
					break;

				case 'GC':
					this.groupName =
						this.arenas < 15 ? 'Grava arcillosa' : 'Grava arcillosa con arena';
					break;

				case 'GC-GM':
					this.groupName =
						this.arenas < 15
							? 'Grava limosa-arcillosa'
							: 'Grava limosa-arcillosa con arena';
					break;

				case 'SW':
					this.groupName =
						this.gravas < 15
							? 'Arena bien graduada'
							: 'Arena bien graduada con arena';
					break;

				case 'SP':
					this.groupName =
						this.gravas < 15
							? 'Arena mal graduada'
							: 'Arena mal graduada con arena';
					break;

				case 'SW-SM':
					this.groupName =
						this.gravas < 15
							? 'Arena bien graduada con limo'
							: 'Arena bien graduada con limo y grava';
					break;

				case 'SW-SC':
					this.groupName =
						this.gravas < 15
							? 'Arena bien graduada con arcilla (o arcilla limosa)'
							: 'Arena bien graduada con arcilla y grava (o arcilla limosa y grava)';
					break;

				case 'SP-SM':
					this.groupName =
						this.gravas < 15
							? 'Arena mal graduada con limo'
							: 'Arena mal graduada con limo y grava';
					break;

				case 'SP-SC':
					this.groupName =
						this.gravas < 15
							? 'Arena mal graduada con arcilla (o arcilla limosa)'
							: 'Arena mal graduada con arcilla y grava (o arcilla limosa y grava)';
					break;

				case 'SM':
					this.groupName =
						this.gravas < 15 ? 'Arena limosa' : 'Arena limosa con grava';
					break;

				case 'SC':
					this.groupName =
						this.gravas < 15 ? 'Arena arcillosa' : 'Arena arcillosa con grava';
					break;

				case 'SC-SM':
					this.groupName =
						this.gravas < 15
							? 'Arena limosa-arcillosa'
							: 'Arena limosa-arcillosa con grava';
					break;

				case 'CL':
					if (retenidoTamiz200 < 30) {
						if (retenidoTamiz200 < 15) {
							this.groupName = 'Arcilla fina';
						} else {
							this.groupName =
								this.arenas < this.gravas
									? 'Arcilla fina con grava'
									: 'Arcilla fina con arena';
						}
					} else {
						if (this.arenas < this.gravas) {
							this.groupName =
								this.arenas < 15
									? 'Arcilla fina gravosa'
									: 'Arcilla fina gravosa con arena';
						} else {
							this.groupName =
								this.gravas < 15
									? 'Arcilla fina arenosa'
									: 'Arcilla fina arenosa con grava';
						}
					}
					break;

				case 'CL-ML':
					if (retenidoTamiz200 < 30) {
						if (retenidoTamiz200 < 15) {
							this.groupName = 'Arcilla limosa';
						} else {
							this.groupName =
								this.arenas < this.gravas
									? 'Acilla limosa con grava'
									: 'Arcilla limosa con arena';
						}
					} else {
						if (this.arenas < this.gravas) {
							this.groupName =
								this.arenas < 15
									? 'Arcilla gravosa-limosa'
									: 'Arcilla gravosa-limosa con arena';
						} else {
							this.groupName =
								this.gravas < 15
									? 'Arcilla arenosa-limosa '
									: 'Arcilla arenosa-limosa con grava';
						}
					}
					break;

				case 'ML':
					if (retenidoTamiz200 < 30) {
						if (retenidoTamiz200 < 15) {
							this.groupName = 'Limo';
						} else {
							this.groupName =
								this.arenas < this.gravas ? 'Limo con grava' : 'Limo con arena';
						}
					} else {
						if (this.arenas < this.gravas) {
							this.groupName =
								this.arenas < 15 ? 'Limo gravoso' : 'Limo gravoso con arena';
						} else {
							this.groupName =
								this.gravas < 15 ? 'Limo arenoso' : 'Limo arenoso con grava';
						}
					}
					break;

				case 'CH':
					if (retenidoTamiz200 < 30) {
						if (retenidoTamiz200 < 15) {
							this.groupName = 'Arcilla gruesa';
						} else {
							this.groupName =
								this.arenas < this.gravas
									? 'Arcilla gruesa con grava'
									: 'Arcilla gruesa con arena';
						}
					} else {
						if (this.arenas < this.gravas) {
							this.groupName =
								this.arenas < 15
									? 'Arcilla gruesa gravosa'
									: 'Arcilla gruesa gravosa con arena';
						} else {
							this.groupName =
								this.gravas < 15
									? 'Arcilla gruesa arenosa'
									: 'Arcilla gruesa arenosa con grava';
						}
					}
					break;

				case 'MH':
					if (retenidoTamiz200 < 30) {
						if (retenidoTamiz200 < 15) {
							this.groupName = 'Limo elástico';
						} else {
							this.groupName =
								this.arenas < this.gravas
									? 'Limo elástico con grava'
									: 'Limo elástico con arena';
						}
					} else {
						if (this.arenas < this.gravas) {
							this.groupName =
								this.arenas < 15
									? 'Limo elástico gravoso'
									: 'Limo gravoso con arena';
						} else {
							this.groupName =
								this.gravas < 15
									? 'Limo elástico arenoso'
									: 'Limo elástico arenoso con grava';
						}
					}
					break;
			}
		},

		clasificarFinos() {
			if (this.limiteLiquido < 50) {
				if (this.indicePlasticidad < 4 || this.lineaA == 'debajo') {
					this.fineGroup = 'ML';
				} else if (this.indicePlasticidad <= 7 && this.lineaA == 'arriba') {
					this.fineGroup = 'CL-ML';
				} else if (this.indicePlasticidad > 7 && this.lineaA == 'arriba') {
					this.fineGroup = 'CL';
				}
			} else {
				if (this.lineaA == 'debajo') {
					this.fineGroup = 'MH';
				} else {
					this.fineGroup = 'CH';
				}
			}

			console.log(this.indicePlasticidad, this.lineaA, this.fineGroup);
		},

		clasificarGruesos() {
			if (this.tamiz4 < 50) {
				//Gravas: más de la mitad es retenido por el tamiz4
				if (this.finos > 12) {
					if (this.fineGroup == 'ML' || this.fineGroup == 'MH') {
						this.coarseGroup = 'GM';
					} else if (this.fineGroup == 'CL' || this.fineGroup == 'CH') {
						this.coarseGroup = 'GC';
					} else if (this.fineGroup == 'CL-ML') {
						this.coarseGroup = 'GC-GM';
					}
				} else if (this.finos >= 5) {
					if (
						this.coefUniformidad >= 4 &&
						1 <= this.coefCurvatura &&
						this.coefCurvatura <= 3
					) {
						if (this.fineGroup == 'ML' || this.fineGroup == 'MH') {
							this.coarseGroup = 'GW-GM';
						} else if (
							this.fineGroup == 'CL' ||
							this.fineGroup == 'CH' ||
							this.fineGroup == 'CL-ML'
						) {
							this.coarseGroup = 'GW-GC';
						}
					} else {
						if (this.fineGroup == 'ML' || this.fineGroup == 'MH') {
							this.coarseGroup = 'GP-GM';
						} else if (
							this.fineGroup == 'CL' ||
							this.fineGroup == 'CH' ||
							this.fineGroup == 'CL-ML'
						) {
							this.coarseGroup = 'GP-GC';
						}
					}
				} else if (this.finos < 5) {
					if (
						this.coefUniformidad >= 4 &&
						1 <= this.coefCurvatura &&
						this.coefCurvatura <= 3
					) {
						this.coarseGroup = 'GW';
					} else {
						this.coarseGroup = 'GP';
					}
				}
			} else {
				//Arenas
				if (this.finos > 12) {
					if (this.fineGroup == 'ML' || this.fineGroup == 'MH') {
						this.coarseGroup = 'SM';
					} else if (this.fineGroup == 'CL' || this.fineGroup == 'CH') {
						this.coarseGroup = 'SC';
					} else if (this.fineGroup == 'CL-ML') {
						this.coarseGroup = 'SC-SM';
					}
				} else if (this.finos >= 5) {
					if (
						this.coefUniformidad >= 6 &&
						1 <= this.coefCurvatura &&
						this.coefCurvatura <= 3
					) {
						if (this.fineGroup == 'ML' || this.fineGroup == 'MH') {
							this.coarseGroup = 'SW-SM';
						} else if (
							this.fineGroup == 'CL' ||
							this.fineGroup == 'CH' ||
							this.fineGroup == 'CL-ML'
						) {
							this.coarseGroup = 'SW-SC';
						}
					} else {
						if (this.fineGroup == 'ML' || this.fineGroup == 'MH') {
							this.coarseGroup = 'SP-SM';
						} else if (
							this.fineGroup == 'CL' ||
							this.fineGroup == 'CH' ||
							this.fineGroup == 'CL-ML'
						) {
							this.coarseGroup = 'SP-SC';
						}
					}
				} else if (this.finos < 5) {
					if (
						this.coefUniformidad >= 6 &&
						1 <= this.coefCurvatura &&
						this.coefCurvatura <= 3
					) {
						this.coarseGroup = 'SW';
					} else {
						this.coarseGroup = 'SP';
					}
				}
			}
		},

		getCoeficents() {
			let diam10 = this.setDn(10);
			let diam30 = this.setDn(30);
			let diam60 = this.setDn(60);

			this.coefUniformidad = (diam60 / diam10).toFixed(2);
			this.coefCurvatura = (Math.pow(diam30, 2) / (diam10 * diam60)).toFixed(2);
		},

		addDataToGranulometry(e) {
			let tamiz = e.target.id;
			let pasante = e.target.value;

			const inputMsgError = document.querySelector(`#${tamiz} + p.error`);
			const itemsGranulometria = document.querySelectorAll(
				`label.item-granulometria`
			);

			itemsGranulometria.forEach((item) => {
				let message = item.querySelector('p.error');
				let input = item.querySelector('input');

				message.innerHTML = '';
				input.classList.remove('invalid');
			});

			if (pasante < 0) {
				inputMsgError.innerHTML = `🙄 Ingresa un valor positivo`;
				e.target.focus();
				e.target.classList.add('invalid');
			}

			if (pasante > 100) {
				inputMsgError.innerHTML = `😳 El valor ingresado debe ser menor que 100%`;
				e.target.focus();
				e.target.classList.add('invalid');
			}

			this.granulometria.set(this.tamices[tamiz], parseFloat(pasante));
			// this.graphicData = Array.from(this.granulometria.entries());

			this.graphicData = Array.from(this.granulometria.entries()).map(
				(element) => {
					return [Math.log10(element[0]), element[1]];
				}
			);

			let granulometriaOrd = this.sortGranulometry();

			if (granulometriaOrd.length > 1) {
				granulometriaOrd.forEach((element, index) => {
					if (index >= 1) {
						let indexAnterior = index - 1 >= 0 ? index - 1 : 0;
						let indexSiguiente = granulometriaOrd.length - 1;

						if (index + 1 && index + 1 < granulometriaOrd.length) {
							indexSiguiente = index + 1;
						}

						let diametroMayor = granulometriaOrd[indexAnterior][1]
							? granulometriaOrd[indexAnterior][1]
							: null;
						let diametroMenor = granulometriaOrd[indexSiguiente][1]
							? granulometriaOrd[indexSiguiente][1]
							: null;

						if (diametroMayor) {
							if (element[1] > diametroMayor) {
								inputMsgError.innerHTML = `<p>🤨 Revisa el valor ${pasante}%.</p>
															<p>Los porcentajes deben ser decrecientes a medida que la abertura de los tamices disminuye.</p>`;
								e.target.select();
								e.target.focus();
								e.target.classList.add('invalid');
							}
						}

						if (diametroMenor) {
							if (element[1] < diametroMenor) {
								inputMsgError.innerHTML = `<p>🤨 Revisa el valor ${pasante}%.</p>
															<p>Los porcentajes deben ser decrecientes a medida que la abertura de los tamices disminuye.</p>`;
								e.target.select();
								e.target.focus();
								e.target.classList.add('invalid');
							}
						}
					}
				});
			}
		},

		sortGranulometry() {
			return Array.from(this.granulometria.entries()).sort(
				(a, b) => b[0] - a[0]
			);
		},

		getParametersDiameter(n) {
			let granulometriaOrd = this.sortGranulometry();
			let pasantes = granulometriaOrd.map((e) => e[1]);
			let diametros = granulometriaOrd.map((e) => e[0]);

			let porcentajeComparacion = pasantes.reduce((acc, cur) => {
				console.log(cur, n); // return cur - n < acc - n ? cur : acc;
				return cur >= n && cur < acc ? cur : acc;
			});

			let indice = pasantes.indexOf(porcentajeComparacion);

			return {
				parametrosD: {
					diametro: diametros[indice],
					pasante: pasantes[indice],
				},
				parametrosDInferior: {
					diametro: diametros[indice + 1] ? diametros[indice + 1] : 0.001,
					pasante: pasantes[indice + 1] ? pasantes[indice + 1] : 0.001,
				},
			};
		},

		setDn(n) {
			let parametros = this.getParametersDiameter(n);

			let {
				parametrosD: { diametro: diametro1, pasante: porcentaje1 },
				parametrosDInferior: { diametro: diametro2, pasante: porcentaje2 },
			} = parametros;

			if (porcentaje1 < n) {
				let indexExtrap = Object.values(this.tamices).indexOf(diametro1) - 1;

				porcentaje2 = 100;
				diametro2 = Object.values(this.tamices)[indexExtrap];
			}

			let dn =
				((diametro2 - diametro1) * (Math.log10(n) - Math.log10(porcentaje1))) /
					(Math.log10(porcentaje2) - Math.log10(porcentaje1)) +
				diametro1;
			return dn;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components';
$primary-color: #ffb400;

.print {
	text-align: center;
	border: 2px solid #555;
	background-color: #fff;
}

.print:hover {
	background-color: $primary-color;
	border-color: transparent;
}
</style>