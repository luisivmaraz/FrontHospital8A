<template>
    <div>
      <form class="surgery-form" @submit.prevent="registerSurgery"> <!--FORMULARIO CIRUGIAS-->
        <center>
          <strong>
            <h1>Registro de Cirugía</h1>
          </strong>
        </center>
  
        <h3>Información del Paciente</h3>
        <div class="form-group">
          <label for="patientName">Nombre Completo:</label>
          <input type="text" id="patientName" v-model="form.patientName" required />
        </div>
  
        <div class="form-group">
          <label for="patientId">ID del Paciente:</label>
          <input type="text" id="patientId" v-model="form.patientId" required />
        </div>
  
        <div class="form-group">
          <label for="dob">Fecha de Nacimiento:</label>
          <input type="date" id="dob" v-model="form.dob" required />
        </div>
  
        <div class="form-group">
          <label for="gender">Sexo:</label>
          <select id="gender" v-model="form.gender" required>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="contact">Número de Contacto:</label>
          <input type="text" id="contact" v-model="form.contact" required />
        </div>
  
        <div class="form-group">
          <label for="address">Dirección:</label>
          <input type="text" id="address" v-model="form.address" required />
        </div>
  
        <h3>Información de la Cirugía</h3>
        <div class="form-group">
          <label for="surgeryDate">Fecha de la Cirugía:</label>
          <input type="date" id="surgeryDate" v-model="form.surgeryDate" required />
        </div>
  
        <div class="form-group">
          <label for="surgeryTime">Hora de la Cirugía:</label>
          <input type="time" id="surgeryTime" v-model="form.surgeryTime" required />
        </div>
  
        <div class="form-group">
          <label for="surgeryType">Tipo de Cirugía:</label>
          <input type="text" id="surgeryType" v-model="form.surgeryType" required />
        </div>
  
        <div class="form-group">
          <label for="preDiagnosis">Diagnóstico Preoperatorio:</label>
          <input type="text" id="preDiagnosis" v-model="form.preDiagnosis" required />
        </div>
  
        <div class="form-group">
          <label for="surgeryDescription">Descripción de la Cirugía:</label>
          <textarea id="surgeryDescription" v-model="form.surgeryDescription" required></textarea>
        </div>
  
        <h3>Información del Médico</h3>
        <div class="form-group">
          <label for="surgeonName">Nombre del Cirujano:</label>
          <input type="text" id="surgeonName" v-model="form.surgeonName" required />
        </div>
  
        <div class="form-group">
          <label for="surgeonId">ID del Cirujano:</label>
          <input type="text" id="surgeonId" v-model="form.surgeonId" required />
        </div>
  
        <div class="form-group">
          <label for="anesthesiologistName">Nombre del Anestesiólogo:</label>
          <input type="text" id="anesthesiologistName" v-model="form.anesthesiologistName" required />
        </div>
  
        <div class="form-group">
          <label for="anesthesiologistId">ID del Anestesiólogo:</label>
          <input type="text" id="anesthesiologistId" v-model="form.anesthesiologistId" required />
        </div>
  
        <h3>Información del Procedimiento</h3>
        <div class="form-group">
          <label for="operatingRoom">Sala de Operaciones:</label>
          <input type="text" id="operatingRoom" v-model="form.operatingRoom" required />
        </div>
  
        <div class="form-group">
          <label for="estimatedDuration">Duración Estimada de la Cirugía:</label>
          <input type="text" id="estimatedDuration" v-model="form.estimatedDuration" required />
        </div>
  
        <div class="form-group">
          <label for="anesthesiaType">Técnica Anestésica:</label>
          <input type="text" id="anesthesiaType" v-model="form.anesthesiaType" required />
        </div>
  
        <div class="form-group">
          <label for="additionalStaff">Equipo Médico Adicional:</label>
          <input type="text" id="additionalStaff" v-model="form.additionalStaff" required />
        </div>
  
        <h3>Información Adicional</h3>
        <div class="form-group">
          <label for="allergies">Alergias del Paciente:</label>
          <input type="text" id="allergies" v-model="form.allergies" required />
        </div>
  
        <div class="form-group">
          <label for="medicalHistory">Antecedentes Médicos Relevantes:</label>
          <textarea id="medicalHistory" v-model="form.medicalHistory" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="consent">Consentimiento Informado:</label>
          <input type="checkbox" id="consent" v-model="form.consent" required />
          <span>He leído y acepto el consentimiento informado</span>
        </div>
  
        <div class="form-group">
          <label for="additionalComments">Comentarios Adicionales:</label>
          <textarea id="additionalComments" v-model="form.additionalComments"></textarea>
        </div>
  
        <button type="submit">Registrar Cirugía</button>
        <button type="button" @click="showData">Mostrar Datos</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          patientName: '',
          patientId: '',
          dob: '',
          gender: '',
          contact: '',
          address: '',
          surgeryDate: '',
          surgeryTime: '',
          surgeryType: '',
          preDiagnosis: '',
          surgeryDescription: '',
          surgeonName: '',
          surgeonId: '',
          anesthesiologistName: '',
          anesthesiologistId: '',
          operatingRoom: '',
          estimatedDuration: '',
          anesthesiaType: '',
          additionalStaff: '',
          allergies: '',
          medicalHistory: '',
          consent: false,
          additionalComments: '',
        },
      };
    },
    methods: {
      registerSurgery() {
        console.log('Registro de Cirugía:', this.form);
        alert('Cirugía registrada con éxito');
        // Aquí puedes agregar la lógica para manejar el registro de la cirugía (e.g., enviar datos a un servidor)
      },
      showData() {
        console.log(this.form);
        alert(JSON.stringify(this.form, null, 2));
      },
    },
  };
  </script>
  
  <style scoped>
  .surgery-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .surgery-form h1,
  .surgery-form h3 {
    margin-bottom: 10px;
    color: #333;
  }
  
  .surgery-form .form-group {
    margin-bottom: 15px;
  }
  
  .surgery-form label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #000000;
  }
  
  .surgery-form input,
  .surgery-form select,
  .surgery-form textarea {
    width: calc(100% - 16px);
    padding: 8px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .surgery-form input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
  }
  
  .surgery-form textarea {
    height: 100px;
  }
  
  .surgery-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .surgery-form button:hover {
    background-color: #0056b3;
  }
  </style>
  
