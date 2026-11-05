export type Professional='Camila'|'Martina'|'Lucas';
export type Service={id:string;name:string;duration:number;price:number};
export type Booking={id:string;client:string;professional:Professional;serviceId:string;date:string;time:string;status:'confirmado'|'cancelado'};
