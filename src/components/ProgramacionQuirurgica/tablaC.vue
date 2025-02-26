<template>
  <div>
    <!-- Título centrado y con letra más grande -->
    <h1 class="titulo-centrado">Tabla de Cirugías</h1>
    <div class="contenedor-superior">
      <!-- Botón para crear cirugía alineado a la derecha y más grande -->
      <button @click="irACrearCirugia" class="boton-crear">Crear Cirugía</button>
      <!-- Barra de búsqueda centrada y con color verde -->
      <div class="barra-busqueda">
        <input v-model="busqueda" placeholder="Buscar cirugía..." />
        <i class="fas fa-search"></i>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Id de la Cirugía</th>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Nivel de Urgencia</th>
          <th>Horario</th>
          <th>Observaciones</th>
          <th>Estatus</th>
          <th>Consumible</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cirugia in cirugiasFiltradas" :key="cirugia.ID">
          <td>{{ cirugia.ID }}</td>
          <td>{{ cirugia.Tipo }}</td>
          <td>{{ cirugia.Nombre }}</td>
          <td>{{ cirugia.Descripcion }}</td>
          <td>{{ cirugia.Nivel_Urgencia }}</td>
          <td>{{ cirugia.Horario }}</td>
          <td>{{ cirugia.Observaciones }}</td>
          <td>{{ cirugia.Estatus }}</td>
          <td>{{ cirugia.Consumible }}</td>
          <td>
            <button @click="eliminarCirugia(cirugia.ID)">
              <i class="fas fa-trash-alt"></i> Eliminar
            </button>
            <button @click="editarCirugia(cirugia.ID)">
              <i class="fas fa-edit"></i> Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cirugias: [],
      busqueda: '', // Variable para almacenar el texto de búsqueda
    };
  },
  computed: {
    cirugiasFiltradas() {
      // Filtra las cirugías basadas en el texto de búsqueda
      return this.cirugias.filter(cirugia => {
        return (
          cirugia.Tipo.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          cirugia.Nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          cirugia.Descripcion.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          cirugia.Nivel_Urgencia.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          cirugia.Estatus.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          cirugia.Consumible.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      });
    },
  },
  mounted() {
    // Hacer la solicitud a la API y obtener los datos de cirugías
    fetch('http://127.0.0.1:8000/hospital/api/v1/cirugias/')
      .then(response => response.json())
      .then(data => {
        this.cirugias = data; // Asignar los datos a la variable cirugias
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  },
  methods: {
    irACrearCirugia() {
      // Redirige a la página de crear cirugía
      window.location.href = 'http://localhost:5173/crearC';
    },
    eliminarCirugia(id) {
      fetch(`http://127.0.0.1:8000/hospital/api/v1/cirugias/${id}/`, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Hubo un problema al eliminar la cirugía.');
          }
          // Si la eliminación es exitosa, actualizar la lista de cirugías
          this.obtenerCirugias();
        })
        .catch(error => console.error('Error al eliminar la cirugía:', error));
      console.log("Eliminar cirugía con ID:", id);
    },
    editarCirugia(id) {
      // Aquí debes implementar la lógica para editar la cirugía con el ID proporcionado
      console.log("Editar cirugía con ID:", id);
    },
  }
};
</script>

<style scoped>
/* Estilos para iconos de Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>

<style>
/* Estilos para el título centrado y más grande */
.titulo-centrado {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
}

/* Contenedor superior con botón y barra de búsqueda */
.contenedor-superior {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

/* Estilos para el botón de crear cirugía más grande y alineado a la derecha */
.boton-crear {
  background-color: #239a9e;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: auto;
}

.boton-crear:hover {
  background-color: #14901a;
}

/* Estilos para la barra de búsqueda centrada y con color verde */
.barra-busqueda {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.barra-busqueda input[type="text"] {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 5px;
  background-color: #2ecc71; /* Color verde */
  color: white; /* Texto en blanco para contraste */
}

.barra-busqueda i.fas.fa-search {
  color: #239a9e; /* Color verde oscuro */
}

/* Estilos para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

th,
td {
  border: 1px solid #920d0d;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

/* Estilos para los botones dentro de la tabla */
button {
  background-color: #239a9e;
  color: white;
  border: none;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 5px;
}

button:hover {
  background-color: #14901a;
}

/* Estilos para el ícono */
.fas.fa-trash-alt {
  margin-right: 5px;
}
</style>
