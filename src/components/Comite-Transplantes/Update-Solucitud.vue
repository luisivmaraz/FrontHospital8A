<template>
    <form>
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg overflow-hidden">
            <!-- Done Information -->
            <div class="flex justify-between  flex-col items-center">
                <label class="block text-gray-700 text-3xl font-normal mb-2">Informacion del Solicitante</label>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Seleccione a un Paciente</label>
                </div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center">
                    <option value="">-- Selecciona una Opcion --</option>
                </select>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Seleccione a un Medico</label>
                </div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center">
                    <option value="">-- Selecciona una Opcion --</option>
                </select>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Seleccione un Servicio</label>
                </div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center">
                    <option value="">-- Selecciona una Opcion --</option>
                </select>
            </div>
            <!-- Doner Information -->
            <div class="flex justify-between  flex-col items-center mt-5">
                <label class="block text-gray-700 text-3xl font-normal mb-2">Detalles de la Solicitud</label>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Prioridad</label>
                </div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center">
                    <option value="">-- Selecciona una Opcion --</option>
                </select>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Descripcion</label>
                </div>
                <textarea
                    class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="text"  />
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Situacion o Estatus</label>
                </div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center">
                    <option value="">-- Selecciona una Opcion --</option>
                </select>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Aprobacion</label>
                </div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center">
                    <option value="">-- Selecciona una Opcion --</option>
                </select>
            </div>

            <!-- Send Form -->
            <div class="mt-8">
                <RouterLink to="/TableTransplante">
                    <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-500 mb-5">Actualizar
                        Solicitud</button>
                </RouterLink>
            </div>
        </div>
    </form>
</template>