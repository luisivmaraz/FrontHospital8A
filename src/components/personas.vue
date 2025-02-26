
<template>
	<div class="py-16">
		<div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
					<!-- Col -->
					<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://i.pinimg.com/originals/ec/0e/69/ec0e690e32f7c84e714886136a2f6469.jpg')"></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Registro Persona</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
            <!-- Nombre y apellidos -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="nombre">
                  Nombre
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="apellido1">
                  Primer Apellido
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="apellido1"
                  type="text"
                  placeholder="Primer Apellido"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="apellido2">
                  Segundo Apellido
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="apellido2"
                  type="text"
                  placeholder="Segundo Apellido"
                />
              </div>
            </div>
            <!-- CURP, Género, Tipo de Sangre -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="CURP">
                  CURP
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="CURP"
                  type="text"
                  placeholder="CURP"
                />
              </div>
              <div class="mt-4">
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
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="sangre">
                  Tipo de Sangre
                </label>
                <select id="sangre"
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                  <option selected>Tipo de Sangre</option>
                  <option value="A1">A+</option>
                  <option value="A2">A-</option>
                  <option value="B1">B+</option>
                  <option value="B2">B-</option>
                  <option value="AB1">AB+</option>
                  <option value="AB2">AB-</option>
                  <option value="O1">O+</option>
                  <option value="O2">O-</option>
                </select>
              </div>
            </div>
            <!-- Fecha de Nacimiento, Teléfono y Correo Electrónico -->
            <div class="mb-4 md:flex md:justify-between">
              <div class="mt-4">
                <label for="fechaNacimiento"
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Fecha de Nacimiento</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="fechaNacimiento" name="fechaNacimiento" type="date" required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="telefono">
                  Teléfono
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="telefono"
                  type="tel"
                  placeholder="Teléfono"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="correo">
                  Correo Electrónico
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="correo"
                  type="email"
                  placeholder="Correo Electrónico" />
              </div>
              
            </div>

          </form>
          							<button
                                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                type="button"
                            >
                                Registrar Persona
                            </button>
				</div>
			</div>
	</div>
	</template>