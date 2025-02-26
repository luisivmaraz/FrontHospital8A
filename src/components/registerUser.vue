import router from '@/router';
<template>
<div class="py-16">
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">

				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">PRIVILAGE CARE HOSPITAL</h3>

					<Usuario></Usuario>
					<Personas></Personas>						<div class="mb-6 text-center">
							<button
                                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                type="button"
                            >
                                Registrar Cuenta
                            </button>
				</div>
			</div>
		</div>
</div>
</template>
<script>
import Personas from './personas.vue'
import Usuario from './usuario.vue'
export default{
	components:{
		Personas,
		Usuario
	}
}
</script>