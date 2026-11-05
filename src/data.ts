import type {Booking,Professional,Service} from './types';
export const professionals:Professional[]=['Camila','Martina','Lucas'];
export const services:Service[]=[
 {id:'clasico',name:'Corte clásico',duration:30,price:12000},{id:'lavado',name:'Corte y lavado',duration:45,price:16000},
 {id:'color',name:'Coloración',duration:90,price:32000},{id:'peinado',name:'Peinado',duration:60,price:20000},{id:'tratamiento',name:'Tratamiento capilar',duration:60,price:24000}
];
export const seedBookings:Booking[]=[];
export const members=[
 {slug:'emilio-guzman',name:'Emilio Guzmán',initials:'EG',area:'Contexto y problemática',summary:'Los canales dispersos y sus consecuencias.',accent:'01',detail:'Analiza cómo WhatsApp, llamadas y cuadernos fragmentan la información y generan superposiciones, vacíos y pérdida de datos.',link:'/problema'},
 {slug:'josefina-alcaraz',name:'Josefina Alcaraz',initials:'JA',area:'Fundamentación y visión',summary:'Por qué centralizar mejora la organización.',accent:'02',detail:'Fundamenta la necesidad de digitalizar sin perder la cercanía del salón: una única agenda, reglas visibles y mejor consulta.',link:'/solucion'},
 {slug:'federico-montoro',name:'Federico Montoro',initials:'FM',area:'Objetivos y metas',summary:'Del relevamiento a la validación.',accent:'03',detail:'Conecta el objetivo general con cuatro metas: relevar, definir, diseñar y evaluar una prueba piloto.',link:'/investigacion'},
 {slug:'fiorella-castillo',name:'Fiorella Castillo',initials:'FC',area:'Acciones y cronograma',summary:'Cuatro semanas, cuatro entregables.',accent:'04',detail:'Organiza actividades y entregables en una secuencia de cuatro semanas, diferenciando lo previsto de lo validado.',link:'/cronograma'},
 {slug:'marcelo-raspo',name:'Marcelo Raspo',initials:'MR',area:'Producto final y comunidad',summary:'Entregables y divulgación.',accent:'05',detail:'Presenta diagnóstico, requerimientos, propuesta técnica, prototipo y una infografía conceptual para redes.',link:'/impacto'},
 {slug:'emmanuel-gillio',name:'Emmanuel Gillio',initials:'EM',area:'Mundo laboral y cierre',summary:'El proyecto como experiencia profesional.',accent:'06',detail:'Vincula el proyecto con roles laborales, requerimientos, selección y portfolio. La mención tributaria es académica, no asesoramiento.',link:'/arquitectura'}
];
export const objectives=['Relevar y documentar el funcionamiento actual','Definir requerimientos funcionales y de usabilidad','Diseñar la propuesta técnica y su arquitectura','Evaluar viabilidad y aceptación mediante una prueba piloto'];
export const weeks=[
 {n:'01',title:'Escuchar',body:'Relevamiento del proceso actual y diagnóstico.',out:'Informe de diagnóstico · previsto'},
 {n:'02',title:'Definir',body:'Problemas, usuarios, reglas y requerimientos.',out:'Documento de requerimientos · desarrollado'},
 {n:'03',title:'Diseñar',body:'Arquitectura conceptual, flujos y prototipo.',out:'Propuesta técnica · desarrollada'},
 {n:'04',title:'Validar',body:'Plan de prueba piloto y criterios de aceptación.',out:'Informe de validación · previsto'}
];
