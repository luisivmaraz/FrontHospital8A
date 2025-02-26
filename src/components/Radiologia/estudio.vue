
<template>
	<div class="py-16">
		<div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
					<!-- Col -->
					<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://5061633.fs1.hubspotusercontent-na1.net/hubfs/5061633/check-up-medico-hubspot.jpg')"></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">REGISTRAR ESTUDIO</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
            <!-- Nombre y apellidos -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="nombreEstudio">
                  Nombre del Estudio 
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nombreEstudio"
                  type="text"
                  placeholder="Nombre Estudio"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="tipoEstudio">
                  Tipo Estudio
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="tipoEstudio"
                  type="text"
                  placeholder="Tipo Estudio"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="fechaRegistro">
                  Fecha Registro
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fechaRegistro"
                  type="date"
                  placeholder="Segundo Apellido"
                />
              </div>
            </div>
            <!-- CURP, Género, Tipo de Sangre -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="fechaActualizacion">
                  Fecha Actualizacion
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fechaActualizacion"
                  type="date"
                  placeholder="fechaActualizacion"
                />
              </div>
              <!-- <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="genero">
                  Género
                </label>
                <select id="genero"
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                  <option selected>Género</option>
                  <option value="H">Hombre</option>
                  <option value="M">Mujer</option>
                  <option value="O">Otro</option>
                </select>
              </div> -->
            
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="totalCosto">
                  Total Costo 
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="totalCosto"
                  type="text"
                  placeholder="Total Costo"
                />
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="estatus">
                  Estatus
                </label>
                <select id="estatus"
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                  
                  <option value="A1">Activo</option>
                  <option value="A2">Inactivo</option>
                
                </select>
              </div>
            </div>
            <!-- Fecha de Nacimiento, Teléfono y Correo Electrónico -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label for="dirigidoA" 
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Dirigido a</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="dirigidoA" name="dirigidoA" type="text" placeholder="Dirifido a" required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="Observaciones">
                  Observaciones
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="Observaciones"
                  type="text"
                  placeholder="Observaciones"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="Consumible">
                  Consumible
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="correo"
                  type="email"
                  placeholder="Consumible" />
              </div>
              
            </div>

            <!-- Fecha de Nacimiento, Teléfono y Correo Electrónico -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label for="nivelUrgencia"
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Nivel de Urgencia</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="nivelUrgencia" name="nivelUrgencia" type="text" placeholder= "Nivel de urgencia" 
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="Solicitud">
                  Solicitud
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="Solicitud"
                  type="tex"
                  placeholder="Solicitud"
                />
              </div>
              
              </div>

          </form>
<button
                                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                type="button"
                            >
                                Registrar Estudio
                            </button>
				</div>
			</div>
	</div>
	</template>
