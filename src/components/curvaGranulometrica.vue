<template>
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
</template>

<script>
import soilData from '@/soilData';
export default {
	name: 'CurvaGranulometria',

	computed: {
		graphicData() {
			return soilData.data.graphicData;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components';
</style>