import {professionals,services} from './data';
import type {Booking,Professional} from './types';
export const OPEN=9*60,CLOSE=19*60;
export const toMin=(t:string)=>{const [h,m]=t.split(':').map(Number);return h*60+m};
export const fromMin=(m:number)=>`${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
export const overlaps=(aStart:number,aDuration:number,bStart:number,bDuration:number)=>aStart<bStart+bDuration&&bStart<aStart+aDuration;
export function canBook(candidate:Omit<Booking,'id'|'status'>,bookings:Booking[],ignoreId?:string){
 const service=services.find(s=>s.id===candidate.serviceId); if(!service)return false;
 const start=toMin(candidate.time); if(start<OPEN||start+service.duration>CLOSE)return false;
 return !bookings.some(b=>b.id!==ignoreId&&b.status==='confirmado'&&b.date===candidate.date&&b.professional===candidate.professional&&overlaps(start,service.duration,toMin(b.time),services.find(s=>s.id===b.serviceId)!.duration));
}
export function availableSlots(date:string,professional:Professional,serviceId:string,bookings:Booking[]){
 const duration=services.find(s=>s.id===serviceId)?.duration??30; const out:string[]=[];
 for(let m=OPEN;m+duration<=CLOSE;m+=30){const time=fromMin(m);if(canBook({client:'x',date,professional,serviceId,time},bookings))out.push(time)} return out;
}
export const capacity=professionals.length*((CLOSE-OPEN)/30);
