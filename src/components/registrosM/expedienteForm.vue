<template>
    <div>
        <div class="flex flex-col md:flex-row justify-center items-center">
            <div class="w-max md:w-2/4 p-8">
                <div class="border rounded-lg shadow-md p-6"> <!-- Nuevo div con borde y sombreado -->
                    <form action="">
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Registrar Expediente Médico:</h1>

                        <div class="mb-6">
                            <div class="mt-4 py-2">
                                <div>
                                    <label for="id_paciente" class="block text-gray-700 dark:text-white mb-1">ID del Paciente</label>
                                    <input type="text" id="id_paciente" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" placeholder="Introduce el ID del paciente" required>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label for="fecha_consulta" class="block text-gray-700 dark:text-white mb-1">Fecha de la Consulta</label>
                                    <input type="date" id="fecha_consulta" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                                </div>
                                <div>
                                    <label for="hora_consulta" class="block text-gray-700 dark:text-white mb-1">Hora de la Consulta</label>
                                    <input type="time" id="hora_consulta" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                                </div>
                                <div>
                                    <label for="diagnostico" class="block text-gray-700 dark:text-white mb-1">Diagnóstico</label>
                                    <input type="text" id="diagnostico" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" placeholder="Escribe el diagnóstico" required>
                                </div>
                                <div>
                                    <label for="tratamiento" class="block text-gray-700 dark:text-white mb-1">Tratamiento Recomendado</label>
                                    <textarea id="tratamiento" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" placeholder="Describe el tratamiento recomendado" required></textarea>
                                </div>
                            </div>

                            <div class="mt-4">
                                <label for="observaciones" class="block text-gray-700 dark:text-white mb-1">Observaciones</label>
                                <textarea id="observaciones" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" placeholder="Añade observaciones adicionales si es necesario"></textarea>
                            </div>

                            <div class="mt-8 flex justify-start">
                                <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Registrar Expediente Médico</button>
                            </div>
                        </div>

                    </form>

                </div> <!-- Cierre del nuevo div con borde y sombreado -->
            </div>
        </div>

    </div>
    

</template>
