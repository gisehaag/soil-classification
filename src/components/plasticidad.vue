<template>
	<fieldset class="pasa-tamiz40">
		<h3 class="underline mt-8 mb-4 text-left">
			Consistencia del material que pasa el tamiz 40 (Límites de Atterberg)
		</h3>
		<p v-if="data.tamiz40 > 0" class="italic mb-4 text-left">
			El material pasante tamiz 40 corresponde al {{ data.tamiz40 }}%
		</p>
		<div>
			<div>
				<label for="no-plastico" class="block text-left">
					<input
						class="w-1/12"
						v-model="data.plastico"
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
						v-model="data.plastico"
						type="radio"
						name="plastico"
						id="plastico"
						:value="true"
					/>
					<span>Ingresar valores de plasticidad</span>
				</label>
			</div>
		</div>
		<div v-if="data.plastico" class="consistencia">
			<ul>
				<li class="mb-3">
					<label class="" for="limite-liquido"
						>Límite líquido
						<input
							id="limite-liquido"
							v-model="data.limiteLiquido"
							@input="sendData"
							pattern="[0-9,]+"
							step="any"
							min="0"
							max="100"
							type="number"
							class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
							placeholder="Límite líquido"
						/>
						<p class="error text-red-400"></p>
					</label>
				</li>
				<li class="mb-4">
					<label class="" for="limite-plastico"
						>Límite plástico
						<input
							id="limite-plastico"
							v-model="data.limitePlastico"
							@input="sendData"
							pattern="[0-9,]+"
							step="any"
							min="0"
							max="100"
							type="number"
							class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg leading-normal"
							placeholder="Límite Plástico"
						/>
						<p class="error text-red-400"></p>
					</label>
				</li>
			</ul>
			<p
				v-show="indicePlasticidad"
				class="ip text-center font-bold border-4 px-4 py-2 bg-white"
			>
				{{
					indicePlasticidad > 0
						? `Índice de plasticidad ${indicePlasticidad}`
						: 'Material no plástico'
				}}
			</p>
		</div>
	</fieldset>
</template>

<script>
import soilData from '@/soilData';

export default {
	name: 'Plasticidad',

	data() {
		return {
			data: null,
			indicePlasticidad: null,
		};
	},

	created() {
		//proceso lo que me viene del state(soilData)
		this.data = soilData.data;
		this.indicePlasticidad = soilData.indicePlasticidad;

		soilData.$on('getData', () => {
			this.indicePlasticidad = soilData.indicePlasticidad;
		});
	},

	methods: {
		sendData(e) {
			const porcentaje = e.target.value;
			const id = e.target.id;
			const msgError = document.querySelector(`#${id} + p.error`);
			e.target.classList.remove('invalid');
			msgError.innerHTML = '';

			if (porcentaje < 0) {
				msgError.innerHTML = `🙄 Ingresa un valor positivo`;
				e.target.focus();
				e.target.classList.add('invalid');
			}
			if (porcentaje > 100) {
				msgError.innerHTML = `😳 El valor ingresado debe ser menor que 100%`;
				e.target.focus();
				e.target.classList.add('invalid');
			}

			soilData.$emit('getData', this.data);
		},
	},
};
</script>



<style lang="scss" scoped>
@import '@/assets/scss/components';
</style>
