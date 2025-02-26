<template>
  <section class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="bg-[#D2E8E3] rounded-2xl p-10 flex flex-col items-center max-w-2xl w-full">
      <div class="w-full px-8">
        <h2 class="font-bold text-3xl text-[#0F6466] mb-4">Registro de Cirugía</h2>
        <p class="text-sm mb-8 text-[#002D74]">Bienvenido al registro de Cirugía</p>

        <form @submit.prevent="registerSurgery" class="flex flex-col gap-4">
          <!-- Sección de Datos de la Cirugía -->
          <div class="flex flex-wrap gap-4">
            <h3 class="font-bold text-xl text-[#0F6466] w-full mb-2">Detalles de la Cirugía</h3>
            <input class="p-2 mt-2 rounded-xl border flex-1" type="text" v-model="nombreCirugia" placeholder="Nombre de la Cirugía" required>
            <input class="p-2 mt-2 rounded-xl border flex-1" type="text" v-model="descripcion" placeholder="Descripción" required>
          </div>
          <div class="flex flex-wrap gap-4">
            <select class="p-2 mt-2 rounded-xl border flex-1" v-model="nivelUrgencia" required>
              <option value="" disabled>Nivel de Urgencia</option>
              <option value="Bajo">Bajo</option>
              <option value="Medio">Medio</option>
              <option value="Alto">Alto</option>
            </select>
            <input class="p-2 mt-2 rounded-xl border flex-1" type="datetime-local" v-model="horario" placeholder="Horario" required>
          </div>
          <div class="flex flex-wrap gap-4">
            <textarea class="p-2 mt-2 rounded-xl border flex-1" v-model="observaciones" placeholder="Observaciones"></textarea>
            <textarea class="p-2 mt-2 rounded-xl border flex-1" v-model="valoracionMedica" placeholder="Valoración Médica"></textarea>
          </div>
          <div class="flex flex-wrap gap-4">
            <select class="p-2 mt-2 rounded-xl border flex-1" v-model="estatus" required>
              <option value="" disabled>Estatus</option>
              <option value="Programada">Programada</option>
              <option value="EnCurso">En Curso</option>
              <option value="Completada">Completada</option>
              <option value="Cancelada">Cancelada</option>
            </select>
            <input class="p-2 mt-2 rounded-xl border flex-1" type="text" v-model="consumible" placeholder="Consumible" required>
          </div>
          <div class="w-full">
            <button class="bg-[#0593A2] text-white py-2 rounded-xl w-full hover:scale-105 duration-300 hover:bg-[#002c7424] font-medium" type="submit">Registrar</button>
          </div>
          <div class="w-full">
            <button class="bg-[#0593A2] text-white py-2 rounded-xl w-full hover:scale-105 duration-300 hover:bg-[#002c7424] font-medium" type="button" @click="goToSurgeryList">Lista de Cirugías</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nombreCirugia: '',
      descripcion: '',
      nivelUrgencia: '',
      horario: '',
      observaciones: '',
      valoracionMedica: '',
      estatus: '',
      consumible: ''
    };
  },
  methods: {
    registerSurgery() {
      const nuevaCirugia = {
        nombreCirugia: this.nombreCirugia,
        descripcion: this.descripcion,
        nivelUrgencia: this.nivelUrgencia,
        horario: this.horario,
        observaciones: this.observaciones,
        valoracionMedica: this.valoracionMedica,
        estatus: this.estatus,
        consumible: this.consumible
      };

      console.log("Cirugía registrada:", nuevaCirugia);

      // Aquí puedes agregar la lógica para enviar los datos al backend
    },
    goToSurgeryList() {
      window.location.href = 'http://localhost:5173/tablaC';
    }
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para tu componente */
</style>
