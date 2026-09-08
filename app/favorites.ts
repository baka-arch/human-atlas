// Tiny localStorage-backed favorites store shared across components.
import {useSyncExternalStore} from 'react';

export interface Favorite {key:string;organ:string;pathology?:string}
const KEY='bhms-exam-favorites';
let cached:Favorite[]|null=null;
const listeners=new Set<()=>void>();

function read():Favorite[]{try{return JSON.parse(localStorage.getItem(KEY)??'[]') as Favorite[];}catch{return[];}}
function get():Favorite[]{if(!cached)cached=read();return cached;}
function write(next:Favorite[]){cached=next;try{localStorage.setItem(KEY,JSON.stringify(next));}catch{}listeners.forEach(l=>l());}
export function toggleFavorite(f:Favorite){const cur=get();write(cur.some(x=>x.key===f.key)?cur.filter(x=>x.key!==f.key):[...cur,f]);}
export function isFavorite(key:string){return get().some(x=>x.key===key);}
function subscribe(l:()=>void){listeners.add(l);return()=>listeners.delete(l);}
export function useFavorites():Favorite[]{return useSyncExternalStore(subscribe,get,get);}
