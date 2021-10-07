<template>
	<div class="graph-paper">
		<h1 class="font-extrabold text-2xl mb-4">
			Cómo funciona esta aplicación?
		</h1>
		<p class="mb-4">
			Esta webapp contempla la clasificación de suelos para uso en Ingeniería
			Civil.
		</p>

		<p class="mb-4">
			Se encuentran disponibles el
			<span class="italic">
				Sistema Unificado de Clasificación de Suelos
			</span>
			(<span class="yellow-text">SUCS</span>), también conocido como
			clasificación modificada de Casagrande. También se puede realizar la
			clasificación mediante el metódo de la
			<span class="italic">
				American Association of State Highway and Transportation Officials
			</span>
			(<span class="yellow-text">AASHTO</span>), mayormente utilizado en el
			ámbito vial.
		</p>

		<p class="mb-4">
			Como dato de entrada deberá introducirse la granulometría del suelo,
			proporcionando los porcentajes de material pasante por cada uno de los
			tamices de la serie ASTM E11. Si bien según el método que se esté
			utilizando podrían no ser completados todos los porcentajes pasantes de
			la serie, esto es recomendable ya que las interpolaciones brindarán
			resultados más precisos (especialmente para el SUCS).
		</p>

		<p class="mb-4">
			En caso de corresponder, se deberán introducir también los datos de
			consistencia del suelo, correspondientes a la fracción pasante por el
			tamiz Nº 40 conocidos como límites de Atterberg: límite líquido y
			límite plástico.
		</p>

		<p class="mb-4">La app graficará la curva granulometríca.</p>

		<div>
			<h2 class="font-extrabold italic text-xl mb-4">
				Sistema Unificado de Clasificación de Suelos
			</h2>

			<p class="mb-4">
				Este método se utiliza para predecir las características del suelo,
				a partir de su textura y el tamaño de sus partículas. La norma ASTM
				D2487 – 06 describe este proceso de clasificación.
				<!-- https://lauwtjunnji.weebly.com/uploads/1/0/1/7/10171621/astm_d-2487_classification_of_soils_for_engineering_purposes_unified_soil_classification_system.pdf -->
			</p>
			<p class="mb-4">
				En este caso, no se han contemplado suelos orgánicos, por lo tanto
				están fuera del alcance de esta app.
			</p>
			<p class="mb-4">
				Cada suelo será representado utilizando un simbolo de grupo,
				compuesto por dos letras. En algunos casos muy particulares, con
				finos entre el 5% y 12% o determinadas combinaciones de valores de
				plasticidad, hay que recurrir a una combinación entre dos tipos de
				suelos, lo cual resulta en un símbolo de cuatro letras.
			</p>
			<div id="simbol-description" class="flex">
				<div class="flex mb-4">
					<span class="mr-2">Las letras pueden ser:</span>
					<ul class="font-bold mr-2">
						<li>G <span class="font-normal">(gravas)</span></li>
						<li>S <span class="font-normal">(arenas)</span></li>
						<li>M <span class="font-normal">(limos)</span></li>
						<li>C <span class="font-normal">(arcillas)</span></li>
					</ul>
				</div>
				<div class="flex mb-4">
					<span class="mr-2">en combinación con:</span>
					<ul class="font-bold mr-2">
						<li>
							P <span class="font-normal">(pobremente graduada)</span>
						</li>
						<li>W <span class="font-normal">(bien graduada)</span></li>
						<li>
							H <span class="font-normal">(de alta plasticidad)</span>
						</li>
						<li>
							L <span class="font-normal">(de baja plasticidad)</span>
						</li>
					</ul>
				</div>
			</div>
			<p class="mb-4">
				En este método son impresindibles los datos de los porcentajes de
				pasante tamiz Nº 4 (4,75mm) y tamiz Nº 200 (0,075mm), ya que estos
				dos tamices establecen los límites entre grava y arena y, arena y
				finos respectivamente.
			</p>
			<p class="mb-4">
				A partir de los datos de granulometría, se calculan los porcentajes
				de Grava, Arena y Finos que contiene el suelo, así como también los
				coeficientes de Uniformidad (C<span class="subindice">u</span>) y
				Curvatura (C<span class="subindice">c</span>).
			</p>

			<p class="mb-4">
				En caso de un suelo con plasticidad, se podrá obtener el punto que
				representa el suelo que se está analizando, sobre la
				<span class="font-bold">carta de plasticidad de Casagrande </span>
				y podrá verse en relación a la línea A (que divide suelos arcillosos
				de suelos limosos) y a la línea B (que divide suelos de alta y baja
				plasticidad).
			</p>
		</div>
		<h2 class="font-extrabold italic text-xl mb-4">AASHTO</h2>
		<p class="mb-4">
			El método de la American Association of State Highway and
			Transportation Officials, es mucho más sencillo. La norma ASTM D3282 -
			15 describe este proceso de clasificación. Se utiliza para
			clasificación de suelos para el ámbito vial y aeroportuario, sobretodo
			para determinar las características de un suelo y predecir su
			comportamiento como material de subrasante.
		</p>

		<p class="mb-4">
			Los suelos se clasifican en 7 grupos. Los suelos correspondientes a los
			grupos A-1, A-2 y A-3 son suelos granulares. Mientras que los grupos
			A-4, A-5, A-6 y A-7 corresponden a materiales limoarcillosos. Algunos
			grupos presentan subgrupos.
		</p>

		<p class="mb-4">
			En este caso, los porcentajes de material pasante por los tamices Nº 10
			(2mm), Nº 40 (0,425mm) y Nº 200 (0,075mm) son requeridos.
		</p>

		<p class="mb-4">
			Para evaluar la calidad del suelo para ser utilizado en la contrucción
			de carreteras o aeropuertos como material de terraplenes, subrasantes,
			sub-bases y bases, este método incorporá el
			<span class="font-bold">Índice de Grupo (IG)</span>. En terminos
			generales, la calidad del comportamiento de un suelo es inversamente
			proporcional al índice de grupo. Este número se obtiene en función de
			los valores de plasticidad (límite líquido e índice de plasticidad) y
			el porcentaje pasante tamiz Nº 200 de clasificación. En el resultado de
			la clasificación el IG se indica entre parentesis a continuación del
			grupo obtenido.
		</p>
	</div>
</template>


<style lang="scss" scoped>
@import '@/assets/scss/components';

.subindice {
	vertical-align: sub;
	font-size: 0.8em;
}
</style>
