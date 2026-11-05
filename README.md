<div align="center">

# ✂️ TurnoLink

### Conectamos clientes, profesionales y horarios.

**Una agenda más clara para pequeñas peluquerías.**

[![React](https://img.shields.io/badge/React-Interfaz-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Tipado-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Desarrollo-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![ISPC](https://img.shields.io/badge/ISPC-Proyecto%20acad%C3%A9mico-C7A253?style=for-the-badge)](#-contexto-académico)

**[Explorar el código](https://github.com/Frederick1824/TurnoLink)** · **[Probar la demo en localhost](#-ejecución-local)**

</div>

---

## 💈 Un salón dinámico necesita una agenda a la altura

En muchos salones pequeños, los turnos llegan por **WhatsApp, llamadas y anotaciones en papel**. Cuando la información queda repartida entre diferentes canales, aparecen reservas superpuestas, espacios desaprovechados y datos incompletos.

**TurnoLink** es una propuesta académica y un prototipo interactivo que explora cómo centralizar las reservas y hacer visibles las reglas de disponibilidad. No pretende reemplazar un sistema comercial en producción: demuestra, de forma concreta, qué problemas se pueden prevenir y cómo podría funcionar una solución digital.

> **Idea central:** menos tiempo reconstruyendo mensajes; más tiempo atendiendo personas.

## ✨ La experiencia

| Experiencia | Qué permite explorar |
| --- | --- |
| ✂️ **Bienvenida animada** | Apertura de marca con una tijera de peluquería y transición de entrada. |
| 🎨 **Cinco paletas** | Obsidiana, Terracota, Esmeralda, Borgoña y Océano, con cambios suaves y selección persistente. |
| 📞 **El problema** | Tres escenarios ilustrativos: doble reserva, cancelación no registrada e información incompleta. |
| 📅 **Agenda interactiva** | Crear, editar, cancelar y consultar reservas ficticias por profesional, servicio, fecha y horario. |
| 🧠 **Reglas de disponibilidad** | Detectar superposiciones, considerar la duración de servicios y respetar el horario de atención. |
| 📊 **Impacto y validación** | Indicadores de la demo, comparación conceptual y propuesta de prueba piloto. |
| 🎓 **Defensa académica** | Recorrido por investigación, objetivos, arquitectura y contribuciones de los seis integrantes. |

La demo incluye **tres profesionales**, **cinco servicios** y un horario de atención ficticio de **09:00 a 19:00**. Diferentes profesionales pueden atender simultáneamente, pero un mismo profesional no puede recibir turnos que se superpongan.

### 🗺️ Secciones disponibles

| Ruta | Contenido |
| --- | --- |
| `/` | Portada e identidad de TurnoLink |
| `/problema` | Problemas de la gestión fragmentada |
| `/solucion` | Propuesta de centralización |
| `/demo` | Simulador de reservas |
| `/investigacion` | Objetivos y cronograma de cuatro semanas |
| `/arquitectura` | Arquitectura conceptual y requerimientos |
| `/impacto` | Indicadores y plan de validación |
| `/equipo` | Equipo y recorrido de exposición |
| `/equipo/:slug` | Página individual de cada integrante |

Desde **Equipo** se puede iniciar un recorrido secuencial de exposición con navegación entre las seis participaciones.

## 🧪 Cómo funciona la demo

1. Ingresá el nombre ficticio del cliente.
2. Elegí profesional, servicio y fecha.
3. Seleccioná un horario disponible y confirmá la reserva.
4. Consultá el turno registrado en la agenda.
5. Probá editarlo, cancelarlo o reiniciar los datos.

Las validaciones consideran la **duración del servicio**, la **disponibilidad del profesional** y el **cierre del salón**. La lógica de reservas está separada de la interfaz y tiene pruebas automatizadas.

**Importante:** los datos se conservan mediante `localStorage`, exclusivamente en el navegador utilizado. No existe autenticación, sincronización multiusuario, API ni base de datos remota en esta versión. Los indicadores reflejan operaciones de la demo o cálculos expresamente identificados como ilustrativos, **no resultados medidos en peluquerías reales**.

## 🛠️ Tecnologías

- **React** para la interfaz y sus componentes.
- **TypeScript** para el tipado del código.
- **Vite** para el entorno de desarrollo y la compilación.
- **React Router** para la navegación.
- **Lucide React** para iconografía.
- **CSS personalizado** para la identidad editorial, las paletas y las animaciones.
- **Vitest** para pruebas de la lógica de turnos.
- **localStorage** para la persistencia local de la demostración.

### 📂 Organización principal

```text
TurnoLink/
├── src/
│   ├── App.tsx            # Páginas, navegación y componentes principales
│   ├── booking.ts        # Reglas de reservas y disponibilidad
│   ├── booking.test.ts   # Pruebas automatizadas
│   ├── data.ts           # Equipo, profesionales, servicios y contenidos
│   ├── types.ts          # Tipos compartidos
│   ├── styles.css        # Diseño, paletas y animaciones
│   └── main.tsx          # Entrada de la aplicación
├── index.html
├── package.json
└── vite.config.ts
```

## 🚀 Ejecución local

**Requisitos:** Node.js y npm instalados.

```bash
git clone https://github.com/Frederick1824/TurnoLink.git
cd TurnoLink
npm install
npm run dev
```

Abrí en el navegador la dirección local que indique Vite.

### Comandos disponibles

```bash
npm run dev       # Iniciar entorno local
npm run build     # Comprobar TypeScript y generar build
npm run test      # Ejecutar pruebas con Vitest
```

La carpeta de salida del build es `dist/`. No se incluye en el repositorio.

## 🎓 Contexto académico

**Institución:** Instituto Superior Politécnico Córdoba (ISPC)  
**Espacio curricular:** Aproximación al Mundo del Trabajo  
**Año:** 2026  
**Proyecto:** Gestión digital de turnos para pequeñas peluquerías

La propuesta parte del relevamiento de un problema cotidiano y plantea cuatro objetivos:

1. **Relevar** el proceso actual y sus dificultades.
2. **Definir** requerimientos funcionales y de usabilidad.
3. **Diseñar** una solución y su arquitectura conceptual.
4. **Evaluar** viabilidad y aceptación mediante una futura prueba piloto.

Los entregables contemplados son un diagnóstico, un documento de requerimientos, una propuesta técnica y un prototipo con informe de validación. La web permite explorar la propuesta y **distingue lo demostrado de lo que aún requiere validación con usuarios reales**.

## 👥 El equipo

Cada integrante cuenta con una página dentro de la aplicación que relaciona su intervención en la defensa oral con una parte del proyecto.

| Integrante | Eje de exposición |
| --- | --- |
| **Emilio Guzmán** | Contexto y problemática de los turnos gestionados manualmente |
| **Josefina Alcaraz** | Fundamentación y visión de la transformación digital |
| **Federico Montoro** | Objetivos generales, específicos y metas |
| **Fiorella Castillo** | Acciones, organización y cronograma |
| **Marcelo Raspo** | Producto final, entregables y vinculación comunitaria |
| **Emmanuel Gillio** | Mundo laboral, requerimientos y proyección profesional |

## 🔭 Alcance y evolución

Esta versión es un **prototipo demostrativo del lado del cliente**. Una evolución hacia un producto operativo podría contemplar API, base de datos centralizada, acceso por roles, sincronización en tiempo real y validación con peluquerías.

Esas características **no se presentan como implementadas** en el estado actual.

---

<div align="center">

### ✂️ TurnoLink
*Conectamos clientes, profesionales y horarios.*

**Proyecto académico · ISPC · 2026**

Diseño y desarrollo de la experiencia web: **FTK Lab**

</div>
