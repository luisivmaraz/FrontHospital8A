import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '@/components/registerUser.vue'
import LoginView from '@/components/login.vue'
import DashboardView from '@/components/dashboard.vue'
import PersonasView from '@/components/personas.vue'
import UsuarioView from '@/components/usuario.vue'
import PiePaginaView from '@/components/pie-pagina.vue'

// Seccion Radiologia
import ResultadosEstudioView from '@/components/Radiologia/resultadosEstudio.vue'
import EstudioView from '@/components/Radiologia/estudio.vue'
import TablaResutadoEstudioView from '@/components/Radiologia/tablaResultadoEstudio.vue'
import TablaEstudiosView from '@/components/Radiologia/tablaEstudios.vue'
// Seccion de Solicitudes
import RegistroSolicitudes from '@/components/Comite-Transplantes/RegistroSolicitudes.vue'
import TablaSolicitudes from '@/components/Comite-Transplantes/Tabla-Solicitudes.vue'
import UpdateSolucitud from '@/components/Comite-Transplantes/Update-Solucitud.vue'
// Seccion de Registros Medicos
import citasLista from '../components/registrosM/citas.vue'
import expedientes from '../components/registrosM/expedientesM.vue'
import recetaMedica from '../components/registrosM/recetaMedica.vue'
// Seccion de ProgramacionQuirurgica
import Calendar from '@/components/ProgramacionQuirurgica/calendar.vue'
import RegisterC from '@/components/ProgramacionQuirurgica/RegisterC.vue'
import TablaC from '@/components/ProgramacionQuirurgica/tablaC.vue'
import GraficasC from '@/components/ProgramacionQuirurgica/graficasC.vue'
import CrearC from '@/components/ProgramacionQuirurgica/CrearC.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: '/personas',
          name: 'personas',
          component: PersonasView
        },
        {
          path: '/usuario',
          name: 'usuario',
          component: UsuarioView
        },
        {
          path: '/resultadosEstudio',
          name: 'resultadosEstudio',
          component: ResultadosEstudioView
        },
        {
          path: '/tablaResultadoEstudio',
          name: 'tablaResultadoEstudio',
          component: TablaResutadoEstudioView
        },
        {
          path: '/estudio',
          name: 'estudio',
          component: EstudioView
        },
        {
          path: '/tablaEstudios',
          name: 'tablaEstudios',
          component: TablaEstudiosView
        },
      // Seccion de Solicitudes
        {
          path: '/RegistroSolicitudes',
          name: 'RegistroSolicitudes',
          component: RegistroSolicitudes
        },
        {
          path: '/TablaSolicitudes',
          name: 'TablaSolicitudes',
          component: TablaSolicitudes
        },
        {
          path: '/UpdateSolicitudes',
          name: 'UpdateSolicitudes',
          component: UpdateSolucitud
        },
        {
          path: '/pie-pagina',
          name: 'piePagina',
          component: PiePaginaView
        },
      // Seccion de Registros Medicos
        {
          path:'/citas',
          name:'citasLista', 
          component:citasLista
        },
        {
          path:'/expediente',
          name:'expediente', 
          component:expedientes
        },
        {
          path:'/receta',
          name:'receta',
          component: recetaMedica 
        }
    ]
  },
      // Seccion de ProgramacionQuirurgica
      {
        path: '/calendar',
        name: 'calendar',
        component: Calendar
      },
      {
        path: '/registerC',
        name:'registerC',
        component: RegisterC
      },
      {
        path: '/tablaC',
        name: 'tablaC',
        component: TablaC
      },
      {
        path: '/graficasC',
        name: 'graficasC',
        component: GraficasC
      },
      {
        path: '/CrearC',
        name: 'CrearC',
        component: CrearC
      }
    
      ]
    })

export default router
