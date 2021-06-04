<template>
	<div class="theoric-frame flex">
		<div class="left-box w-2/3 py-20 px-24">
			<div class="inner-left-box text-lg">
				<h1 class="font-bold text-5xl px-4 pb-2">
					Clasificación de suelos<br />
					en Ingeniería civil
				</h1>
				<p class="pb-3">
					En ingeniería civil, clasificamos los suelos de acuerdo a sus
					propiedades, en relación a su uso en fundaciones o como
					materiales de construcción de distintos tipos de infraestrctura,
					edificios, carreteras, etc.
				</p>
				<p class="pb-3">
					Los sistemas modernos de clasificación de suelos que usamos en
					ingeniería se diseñan para permitir una fácil transición de las
					observaciones de campo a las predicciones básicas de propiedades
					y de conductas que presentan esos suelos.
				</p>

				<button class="uppercase font-bold text-white">
					<router-link to="/about">Marco Teórico</router-link>
				</button>
			</div>
		</div>
		<div class="bg-primary w-1/3 p-12">
			<h2 class="font-bold text-3xl">Sistemas disponibles</h2>
			<ul>
				<li>
					<div class="flex items-center">
						<span class="icon icon-road text-4xl mr-4"></span>
						<div>
							<h4 class="font-bold text-2xl">AASHTO</h4>
							<p class="text-base">
								American Association of State Highway and Transportation
								Officials
							</p>
						</div>
					</div>

					<button class="uppercase font-bold text-sm">
						<router-link
							:to="{
								name: 'classificator',
								params: { system: 'aashto' },
							}"
							>Según AASHTO
						</router-link>
					</button>
				</li>
				<li>
					<div class="flex items-center">
						<span class="icon icon-filter text-4xl mr-4"></span>
						<div>
							<h4 class="font-bold text-2xl">SUCS</h4>
							<p class="text-base">
								Sistema Unificado de Clasificación de Suelos
							</p>
						</div>
					</div>
					<button class="uppercase font-bold text-sm">
						<router-link
							:to="{ name: 'classificator', params: { system: 'sucs' } }"
							>Según SUCS
						</router-link>
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheoricFrame',

	data() {
		return {};
	},

	props: {
		isAashto: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style lang="scss" scoped>
$primary-color: #ffb400;

.theoric-frame {
	min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
}

.left-box {
	background-image: var(--background-img);
	color: white;
	position: relative;

	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(#333, 0.7);
	}
}

.inner-left-box {
	position: relative;
}

h1 {
	border-left-color: $primary-color;
	border-left-width: 15px;
	margin-bottom: 10px;
	line-height: 1.1em;
}

button {
	background-color: $primary-color;
	padding: 10px 25px;
	margin: 30px 0 auto;
}

.icon {
	color: white;
}

ul {
	li {
		margin: 20px 0;
	}

	p {
		color: white;
	}

	& button {
		border-color: white;
		color: #333;
		border-width: 5px;
		padding: 10px 25px;
		margin: 1em auto;
	}
}

@media screen and (max-width: 500px) {
	.theoric-frame {
		flex-direction: column;
	}

	.left-box,
	.bg-primary {
		width: 100vw !important;
		padding: 30px !important;
	}

	.inner-left-box h1 {
		font-size: 2rem !important;
	}

	button {
		width: 100%;
	}
}
</style>
