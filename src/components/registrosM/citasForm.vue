<template>
    <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="w-max md:w-2/4 p-8">
            <div class="border rounded-lg shadow-md p-6"> <!-- Nuevo div con borde y sombreado -->
                <form action="">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Registrar Expediente Medico:</h1>

                    <div class="mb-6">
                        <div class="mt-4 py-2">
                            <div>
                                <label for="id_busqueda" class="block text-gray-700 dark:text-white mb-1">Buscar ID</label>
                                <input type="text" id="id_busqueda" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" placeholder="Introduce el ID a buscar" required>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="fechaCita" class="block text-gray-700 dark:text-white mb-1">Fecha de la cita</label>
                                <input type="date" id="fechaCita" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="horaCita" class="block text-gray-700 dark:text-white mb-1">Hora de la cita</label>
                                <input type="time" id="horaCita" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="numeroTelefono" class="block text-gray-700 dark:text-white mb-1">Número de Teléfono</label>
                                <input type="tel" id="numeroTelefono" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="email" class="block text-gray-700 dark:text-white mb-1">Correo Electronico</label>
                                <input type="email" id="email" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                        </div>
                        <div class="mt-4">
                            <label for="motivo" class="block text-gray-700 dark:text-white mb-1">Motivo de la cita</label>
                            <textarea id="motivo" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required></textarea>
                        </div>

                        <div class="mt-8 flex justify-start">
                            <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Agendar Cita</button>
                        </div>
                    </div>

                </form>
            </div> <!-- Cierre del nuevo div con borde y sombreado -->
        </div>
    </div>

</template>
