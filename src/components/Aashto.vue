<template>
  <div class="flex justify-around">
    <form class="inputs ml-10">
      <h2 class="font-bold text-lg">
        Ingresa los parámetros del suelo a clasificar:
      </h2>
      <fieldset class="granulometria">
        <h3 class="underline mb-4">Granulometría:</h3>
        <ul class="ml-6">
          <li>
            <label class="" for="tamiz10"
              >% que pasa tamiz 10
              <input
                id="tamiz10"
                @input="getResult"
                v-model="tamiz10"
                min="0"
                max="100"
                type="number"
                class="text-center bg-white focus:outline-none w-6/12 focus:shadow-outline border border-gray-300 mb-4 rounded-lg py-2 px-4 block appearance-none leading-normal"
                placeholder="entre 0 y 100"
              />
            </label>
          </li>
          <li>
            <label class="" for="tamiz40"
              >% que pasa tamiz 40
              <input
                id="tamiz40"
                @input="getResult"
                v-model="tamiz40"
                min="0"
                max="100"
                type="number"
                class="text-center bg-white focus:outline-none w-6/12 focus:shadow-outline border border-gray-300 mb-4 rounded-lg py-2 px-4 block appearance-none leading-normal"
                placeholder="entre 0 y 100"
              />
            </label>
          </li>
          <li>
            <label class="" for="tamiz200"
              >% que pasa tamiz 200
              <input
                id="tamiz200"
                @input="getResult"
                v-model="tamiz200"
                min="0"
                max="100"
                type="number"
                class="text-center bg-white focus:outline-none w-6/12 focus:shadow-outline border border-gray-300 mb-4 rounded-lg py-2 px-4 block appearance-none leading-normal"
                placeholder="entre 0 y 100"
              />
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset class="pasa-tamiz40">
        <h3 class="underline mt-8">
          Consistencia del material que pasa el tamiz 40 (Límites de Atterberg)
        </h3>
        <p v-if="tamiz40 > 0" class="italic mb-4">
          El material pasante por el tamiz 40 es {{ tamiz40 }}%
        </p>

        <div class="flex items-center">
          <ul class="ml-6 flex-grow">
            <li>
              <label class="" for="limite-liquido"
                >Límite líquido
                <input
                  id="limite-liquido"
                  @input="getResult"
                  v-model="limiteLiquido"
                  min="0"
                  max="100"
                  type="number"
                  class="text-center bg-white focus:outline-none w-6/12 focus:shadow-outline border border-gray-300 mb-4 rounded-lg py-2 px-4 block appearance-none leading-normal"
                  :placeholder="`Límite líquido`"
                />
              </label>
            </li>
            <li>
              <label class="" for="limite-plastico"
                >Límite plástico
                <input
                  id="limite-plastico"
                  @input="getResult"
                  v-model="limitePlastico"
                  min="0"
                  max="100"
                  type="number"
                  class="text-center bg-white focus:outline-none w-6/12 focus:shadow-outline border border-gray-300 mb-4 rounded-lg py-2 px-4 block appearance-none leading-normal"
                  placeholder="valor tipico"
                />
              </label>
            </li>
          </ul>
          <p
            v-show="indicePlastico > 0"
            class="ip font-bold border-4 px-4 py-2 bg-white"
          >
            {{
              indicePlastico > 0
                ? `Índice de plásticidad ${indicePlastico}`
                : indicePlastico
            }}
          </p>
        </div>
      </fieldset>
    </form>
    <div>
      <div class="data ml-8">
        <h2 class="underline">Datos:</h2>
        <ul class="text-left">
          <li>
            Pasa tamiz 10:
            <span class="yellow-text" v-show="tamiz10"> {{ tamiz10 }}%</span>
          </li>
          <li>
            Pasa tamiz 40:
            <span class="yellow-text" v-show="tamiz40">{{ tamiz40 }}%</span>
          </li>
          <li>
            Pasa tamiz 200:
            <span class="yellow-text" v-show="tamiz200">{{ tamiz200 }}%</span>
          </li>

          <li>
            Límite Líquido:
            <span class="yellow-text" v-show="limiteLiquido"
              >{{ limiteLiquido }}%</span
            >
          </li>
          <li>
            Límite Plástico:
            <span class="yellow-text" v-show="limitePlastico">
              {{ limitePlastico }}%</span
            >
          </li>
        </ul>
      </div>
      <div
        class="results bg-white m-8 border-4 flex flex-col justify-center items-center p-12"
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
            {{ esGranular }}.
          </h3>
          <p v-if="errorMessage">{{ errorMessage }}</p>
          <p>Este tipo de suelos consta usualmente de {{ groupName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aashto',

  data() {
    return {
      group: null,
      groupName: null,
      errorMessage: null,
      tamiz10: null,
      tamiz40: null,
      tamiz200: null,
      limiteLiquido: null,
      limitePlastico: null,
      isAashto: true,
    };
  },

  props: {
    soilParams: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    getResult() {
      this.group = null;
      this.groupName = null;

      this.$emit('update-soil-params', {
        tamiz10: this.tamiz10,
        tamiz40: this.tamiz40,
        tamiz200: this.tamiz200,
        limitePlastico: this.limitePlastico,
        limiteLiquido: this.limiteLiquido,
      });

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
          if (this.tamiz200 <= 10 && typeof this.indicePlastico === 'string') {
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

  created() {
    this.tamiz10 = this.soilParams.tamiz10;
    this.tamiz40 = this.soilParams.tamiz40;
    this.tamiz200 = this.soilParams.tamiz200;
    this.limiteLiquido = this.soilParams.limiteLiquido;
    this.limitePlastico = this.soilParams.limitePlastico;
  },

  computed: {
    systemName() {
      let systemName = this.isAashto ? 'AASHTO' : 'SUCS';
      return systemName;
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

    granulometria() {
      let granulometria =
        this.tamiz10 && this.tamiz40 && this.tamiz200 ? true : false;
      return granulometria;
    },

    esGranular() {
      let esGranular = this.tamiz200 <= 35 ? 'granular' : 'limo-arcilloso';
      return esGranular;
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #ffb400;

input {
  border-color: $primary-color;
}

.results {
  border-color: $primary-color;
}

.yellow-text {
  color: $primary-color;
}

.ip {
  border-color: $primary-color;
}
</style>
