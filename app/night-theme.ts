import {useEffect,useState} from 'react';

// Night-study theme: toggles html.night, persisted in localStorage,
// defaults to the OS preference.
export function useNightTheme(){
 const [night,setNight]=useState<boolean>(()=>{try{const saved=localStorage.getItem('bhms-theme');if(saved)return saved==='night';}catch{}return matchMedia('(prefers-color-scheme: dark)').matches;});
 useEffect(()=>{document.documentElement.classList.toggle('night',night);try{localStorage.setItem('bhms-theme',night?'night':'day');}catch{}},[night]);
 return {night,toggle:()=>setNight(n=>!n)};
}
