<template>
	<fieldset class="granulometria">
		<h3 class="underline mb-4 text-left">Granulometría:</h3>
		<ul>
			<div>
				<label
					for="serie-gruesa"
					class="text-left mb-4 justify-start items-center"
				>
					<span> Mostrar serie gruesa </span>
					<input
						class="w-1/12"
						v-model="serieGruesa"
						type="checkbox"
						name="serie-gruesa"
						id="serie-gruesa"
						:value="true"
					/>
				</label>
			</div>

			<div v-if="serieGruesa" class="serie-gruesa">
				<li class="">
					<label class="item-granulometria" for="tamiz3">
						<span>% que pasa tamiz 3" </span>
						<input
							id="tamiz3"
							@change="addDataToGranulometry"
							v-model="data.tamiz3"
							name="tamiz3"
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
					<label class="item-granulometria" for="tamiz2-1/2">
						<span>% que pasa tamiz 2 1/2" </span>
						<input
							id="tamiz212"
							@change="addDataToGranulometry"
							v-model="data.tamiz212"
							name="tamiz2-1/2"
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
					<label class="item-granulometria" for="tamiz2">
						<span>% que pasa tamiz 2" </span>
						<input
							id="tamiz2"
							@change="addDataToGranulometry"
							v-model="data.tamiz2"
							name="tamiz2"
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
					<label class="item-granulometria" for="tamiz1-1/2">
						<span>% que pasa tamiz 1 1/2" </span>
						<input
							id="tamiz112"
							@change="addDataToGranulometry"
							v-model="data.tamiz112"
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
							v-model="data.tamiz1"
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

				<!-- <div>
					<label
						for="serie-gruesa"
						class="text-left mb-4 justify-start items-center"
					>
						<span>Ocultar serie gruesa</span>
						<input
							class="w-1/12"
							v-model="serieGruesa"
							type="checkbox"
							name="serie-gruesa"
							id="serie-gruesa"
							:value="false"
						/>
					</label> -->
				<!-- </div> -->
			</div>
			<li class="">
				<label class="item-granulometria" for="tamiz3/4">
					<span>% que pasa tamiz 3/4"</span>
					<input
						id="tamiz34"
						@change="addDataToGranulometry"
						v-model="data.tamiz34"
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
						v-model="data.tamiz12"
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
						v-model="data.tamiz38"
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
						<span v-if="!isAashto" class="yellow-text">*</span>
					</span>
					<input
						id="tamiz4"
						@change="addDataToGranulometry"
						v-model="data.tamiz4"
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
					<span>
						% que pasa tamiz 10
						<span v-if="isAashto" class="yellow-text">*</span>
					</span>

					<input
						id="tamiz10"
						@change="addDataToGranulometry"
						v-model="data.tamiz10"
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
					<span>
						% que pasa tamiz 40
						<span v-if="isAashto" class="yellow-text">*</span>
					</span>

					<input
						id="tamiz40"
						@change="addDataToGranulometry"
						v-model="data.tamiz40"
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
						v-model="data.tamiz100"
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
						v-model="data.tamiz200"
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
</template>


<script>
import soilData from '@/soilData';

export default {
	name: 'Granulometria',

	data() {
		return {
			serieGruesa: false,
			tamices: {
				tamiz3: 75,
				tamiz212: 63,
				tamiz2: 50,
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
			data: null,
		};
	},

	props: {
		isAashto: {
			type: Boolean,
			default: false,
		},
	},

	created() {
		//proceso lo que me viene del state(soilData)
		this.data = soilData.data;
	},

	methods: {
		sortGranulometry() {
			return Array.from(this.data.granulometria.entries()).sort(
				(a, b) => b[0] - a[0]
			);
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
			this.data.granulometria.set(this.tamices[tamiz], parseFloat(pasante));

			// console.log(this.data.granulometria);

			// this.graphicData = Array.from(this.granulometria.entries());

			this.data.graphicData = Array.from(
				this.data.granulometria.entries()
			).map((element) => {
				return [Math.log10(element[0]), element[1]];
			});

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
			soilData.$emit('getData', this.data);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components';
</style>
