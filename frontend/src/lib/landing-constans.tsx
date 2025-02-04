import { Box } from 'lucide-react'

export const HEADER_LINKS = [
  {
    name: 'Inicio',
    href: '#home',
  },
  {
    name: 'Funcionalidades',
    href: '#features',
  },
  {
    name: 'Testimonios',
    href: '#testimonials',
  },
  {
    name: '¡Contáctanos!',
    href: '#contact',
  },
]

export const FAQs = [
  {
    id: 1,
    question: '¿Qué es ClassRun?',
    answer:
      'Es una plataforma web diseñada para facilitar el seguimiento académico de estudiantes de nivel primario y secundario. Permite a instituciones, docentes, padres y estudiantes acceder a herramientas avanzadas de gestión y comunicación en tiempo real.',
  },
  {
    id: 2,
    question: '¿Cómo funciona la demo?',
    answer:
      'Te damos acceso a una versión funcional de nuestra plataforma para que explores sus beneficios por 14 días.',
  },
  {
    id: 3,
    question: '¿Cómo protegemos los datos escolares?',
    answer:
      'Cumplimos con estándares internacionales de seguridad y garantizamos la privacidad de la información.',
  },
  {
    id: 4,
    question: '¿Cómo puede beneficiar a las instituciones educativas?',
    answer:
      'Nuestra plataforma centraliza la gestión académica en un solo lugar. Facilita el registro de calificaciones, la gestión de asistencia, y la comunicación con padres y estudiantes, optimizando procesos administrativos y ahorrando tiempo',
  },
  {
    id: 5,
    question: '¿Qué dispositivos son compatibles con la plataforma?',
    answer:
      'La plataforma es accesible desde cualquier dispositivo con conexión a internet, ya sea una computadora, tablet o smartphone.',
  },
]

export const SERVICES = [
  {
    id: 1,
    title: 'Seguimiento Completo',
    description: 'Accede al historial académico de cada estudiante.',
    icon: Box,
    src: '/services/seguimiento-completo.svg',
  },
  {
    id: 2,
    title: 'Comunicación Directa',
    description:
      'Conecta docentes, estudiantes y familias con mensajes instantáneos.',
    icon: Box,
    src: '/services/comunicacion-directa.svg',
  },
  {
    id: 3,
    title: 'Reportes Automatizados',
    description: 'Genera informes detallados sobre el progreso.',
    icon: Box,
    src: '/services/reportes-automatizados.svg',
  },
  {
    id: 4,
    title: 'Fácil de Usar',
    description: 'Interfaz intuitiva diseñada para todo público.',
    icon: Box,
    src: '/services/facil-de-usar.svg',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'María Gongzález',
    review:
      '“Con esta plataforma, gestionamos las calificaciones y el desempeño estudiantil de forma más eficiente. Ahorramos tiempo cada semana.”',
    position: 'Directora en Colegio Educare',
    image: '/testimonials-avatar/maria.jpg',
  },
  {
    id: 2,
    name: 'Carlos López',
    review:
      '“Ahora puedo gestionar tareas y reportes con facilidad. La comunicación con los padres es más fluida que nunca.”',
    position: 'Profesor de Matemáticas',
    image: '/testimonials-avatar/carlos.jpg',
  },
  {
    id: 3,
    name: 'Sofia Rodríguez',
    review:
      '"Es increíble tener acceso inmediato a las calificaciones de mis hijos. Me siento más conectada con su educación."',
    position: 'Madre de familia',
    image: '/testimonials-avatar/sofia.jpg',
  },
]
