// ✏️ EDITA ESTE ARCHIVO: aquí está toda la información del portafolio.
// Los textos marcados con "TODO" son datos que debes completar con los tuyos.

export const perfil = {
  nombre: 'Diego Luna Gonzalez',
  titulo: 'Desarrollador de Software',
  resumen:
    'Desarrollador de software apasionado por crear aplicaciones web, de escritorio y móviles. Me interesa la arquitectura limpia y construir herramientas útiles.', // TODO: ajusta tu presentación
  foto: 'foto.jpg', // public/foto.jpg
  github: 'https://github.com/Diegoutfv',
  email: 'sf117off@gmail.com',
  datos: [
    { etiqueta: 'Edad', valor: '24 años' },
    { etiqueta: 'Ubicación', valor: 'Estado de México, México' },
    { etiqueta: 'Idiomas', valor: 'Español (nativo), Inglés (C1)' },
    { etiqueta: 'Correo', valor: 'sf117off@gmail.com' },
  ],
};

export const estudios = [
  {
    titulo: 'Desarrollo y Gestión de Software',
    institucion: 'Universidad Tecnológica Fidel Velázquez',
    periodo: '2023 – Actualidad',
    detalle: 'Cursando el último periodo. Egreso estimado: abril de 2027.',
  },
];

export const lenguajes = ['JavaScript', 'Python', 'Kotlin', 'Rust', 'HTML', 'CSS'];
export const basesDatos = ['Room (SQLite)']; // TODO: añade las que uses
export const tecnologias = [
  'Astro',
  'Jetpack Compose',
  'Hilt',
  'Tauri',
  'GitHub',
  'Git',
];

export const proyectos = [
  {
    nombre: 'InputDeck',
    imagen: 'proyectos/inputdeck.png', // las imágenes van en public/proyectos/
    descripcion:
      'Visor de entradas multiplataforma para OBS: muestra control (Xbox, DualSense, Switch 2 Pro), teclado y mouse con estilo minimalista.',
    tecnologias: ['Python', 'SDL', 'OBS'],
    enlace: 'https://github.com/Diegoutfv/inputdeck',
  },
  {
    nombre: 'Spotify Inmortalizado',
    imagen: 'proyectos/spotify.png',
    descripcion:
      'Reproductor de escritorio ligero para Spotify Premium con OAuth PKCE, playlists, búsqueda y teclas multimedia. Pesa pocos MB y usa poca RAM.',
    tecnologias: ['Tauri', 'Rust', 'JavaScript', 'HTML', 'CSS'],
    enlace: 'https://github.com/Diegoutfv/Spotify-Inmortalizado',
  },
  {
    nombre: 'Delivery App',
    imagen: 'proyectos/delivery.png',
    descripcion:
      'App Android de delivery con catálogo, carrito, persistencia local y estado reactivo, siguiendo Clean Architecture.',
    tecnologias: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt'],
    enlace: 'https://github.com/Diegoutfv/DeliveryApp-Clean',
  },
];
