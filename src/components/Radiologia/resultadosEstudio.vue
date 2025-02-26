
<template>
	<div class="py-16">
		<div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
					<!-- Col -->
					<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://plustatic.com/6371/conversions/pruebas-diagnostico-por-imagen-square.jpg')"></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Resultados de Estudios</h3>
<form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
    <!-- Paciente -->
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="paciente">
            Paciente
        </label>
        <input
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="paciente"
            type="text"
            placeholder="Paciente"
        />
    </div>
    <!-- Personal Médico -->
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="personal_medico">
            Personal Médico
        </label>
        <input
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="personal_medico"
            type="text"
            placeholder="Personal Médico"
        />
    </div>
    <!-- Estudio -->
 <div class="mb-4">
    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="estudio">
        Estudio
    </label>
    <select id="estudio"
        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
        <option selected>Estudio</option>
        <option>Radiografía convencional</option>
        <option>Tomografía computarizada (TC)</option>
        <option>Resonancia magnética (RM)</option>
        <option>Ecografía</option>
        <option>Mamografía</option>
        <!-- Puedes agregar más opciones de estudios de radiología aquí -->
    </select>
</div>

    <!-- Observaciones -->
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="observaciones">
            Observaciones
        </label>
        <textarea
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="observaciones"
            placeholder="Observaciones"></textarea>
    </div>
    <!-- Folio -->
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="folio">
            Folio
        </label>
        <input
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="folio"
            type="text"
            placeholder="Folio"
        />
    </div>
    <!-- Estatus -->
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="estatus">
            Estatus
        </label>
        <select id="estatus"
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option selected>Estatus</option>
                <option value="pendiende">Pendiente</option>
                <option value="enProces">En Proceso</option>
                <option value="completado">Completado</option>
                <option value="aprobado">Aprobado</option>
                <option value="rechazado">Rechazado</option>

            <!-- Agrega opciones de estatus aquí -->
        </select>
    </div>
</form>

          							<button
                                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                type="button"
                            >
                                Registrar Resultado
                            </button>

				</div>
			</div>
	</div>
	</template>