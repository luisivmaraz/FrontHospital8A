<template>
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="w-max md:w-2/4 p-8">
        <div class="border rounded-lg shadow-md p-6">
          <form action="">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Receta Médica</h1>
  
            <!-- Información del Paciente -->
            <div class="mb-6">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="nombre" class="block text-gray-700 dark:text-white mb-1">Nombre</label>
                  <input type="text" id="nombre" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none "placeholder="Introduce tu nombre" required>
                </div>
                <div>
                  <label for="fecha" class="block text-gray-700 dark:text-white mb-1">Fecha</label>
                  <input type="date" id="fecha" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                </div>
              </div>
  
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="peso" class="block text-gray-700 dark:text-white mb-1">Peso (kg)</label>
                  <input type="number" id="peso" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                </div>
                <div>
                  <label for="talla" class="block text-gray-700 dark:text-white mb-1">Talla (m)</label>
                  <input type="number" id="talla" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                </div>
              </div>
  
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="edad" class="block text-gray-700 dark:text-white mb-1">Edad</label>
                  <input type="number" id="edad" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                </div>
                <div>
                  <label for="presion_arterial" class="block text-gray-700 dark:text-white mb-1">Presión Arterial</label>
                  <input type="text" id="presion_arterial" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                </div>
              </div>
  
              <div class="mb-4">
                <label for="diagnostico" class="block text-gray-700 dark:text-white mb-1">Diagnóstico</label>
                <input type="text" id="diagnostico" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
              </div>
  
              <div class="mb-4">
                <label for="prescripcion" class="block text-gray-700 dark:text-white mb-1">Prescripción Médica</label>
                <textarea id="prescripcion" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"></textarea>
              </div>
            </div>
  
            <div class="mt-8 flex justify-start">
              <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Generar Receta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  