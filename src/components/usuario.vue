

<template>
	<div class="py-16">
		<div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
					<!-- Col -->
					<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://i.pinimg.com/originals/ec/0e/69/ec0e690e32f7c84e714886136a2f6469.jpg')"></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
						<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Registro Usuario</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">

<div class="mb-2 md:flex md:justify-between">
							<div class="mt-6">
		<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="usuario">
			Usuario
		</label>
		<input
			class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			id="usuario"
			type="text"
			placeholder="Usuario"
		/>
	</div>
	</div>
	<div class="mb-2 md:flex md:justify-between">

	<div class="mt-6">
		<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
			Contraseña
		</label>
		<input
			class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			id="password"
			type="password"
			placeholder="******"
		/>
	</div>
</div>
<div class="mb-2 md:flex md:justify-between">

<div class="mt-6">
<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="repetirContrasena">
Repetir Contraseña
</label>
<input
class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
id="repetirContrasena"
type="password"
placeholder="******"
/>
</div>
</div>


</form>

				</div>
			</div>
	</div>
	</template>