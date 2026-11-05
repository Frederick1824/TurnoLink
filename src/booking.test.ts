import {describe,it,expect} from 'vitest';
import {canBook,availableSlots} from './booking';
import type {Booking} from './types';
const base:Booking={id:'1',client:'Ana',professional:'Camila',serviceId:'color',date:'2026-11-06',time:'10:00',status:'confirmado'};
describe('booking rules',()=>{
 it('blocks overlap considering duration',()=>expect(canBook({client:'B',professional:'Camila',serviceId:'clasico',date:base.date,time:'11:00'},[base])).toBe(false));
 it('allows simultaneous professionals',()=>expect(canBook({client:'B',professional:'Lucas',serviceId:'clasico',date:base.date,time:'10:30'},[base])).toBe(true));
 it('allows editing the same booking',()=>expect(canBook({...base,client:'Ana',time:'10:30'},[base],'1')).toBe(true));
 it('frees slots after cancellation',()=>expect(availableSlots(base.date,'Camila','clasico',[{...base,status:'cancelado'}])).toContain('10:00'));
 it('respects business close',()=>expect(canBook({client:'B',professional:'Camila',serviceId:'color',date:base.date,time:'18:00'},[])).toBe(false));
});
