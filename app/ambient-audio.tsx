import {useEffect,useRef,useState} from 'react';
import {CloudRain,BookOpen,Music,X} from 'lucide-react';

// Free public streams — swap URLs here if any goes offline.
const STREAMS=[
 {id:'rain',label:'Soft rain',icon:CloudRain,url:'https://stream.relaxfm.world/rain'},
 {id:'library',label:'Library',icon:BookOpen,url:'https://ice1.somafm.com/dronezone-128-mp3'},
 {id:'lofi',label:'Lofi beats',icon:Music,url:'https://play.streamafrica.net/lofi'},
] as const;
type StreamId=typeof STREAMS[number]['id'];

export default function AmbientAudio(){
 const audioRef=useRef<HTMLAudioElement|null>(null);
 const [active,setActive]=useState<StreamId|null>(null),[open,setOpen]=useState(false),[failed,setFailed]=useState<StreamId|null>(null);
 useEffect(()=>{if(!active){audioRef.current?.pause();audioRef.current=null;return;}
  if(audioRef.current)return;
  const url=STREAMS.find(s=>s.id===active)!.url;
  const a=new Audio(url);a.volume=.6;a.preload='none';
  a.play().catch(()=>setFailed(active));
  audioRef.current=a;
  return()=>{a.pause();};
 },[active]);
 const pick=(id:StreamId)=>{setFailed(null);setActive(cur=>cur===id?null:id);};
 if(!open)return <button type="button" className="ambient-toggle glass" aria-label="Ambient study sound" onClick={()=>setOpen(true)}>{active?STREAMS.find(s=>s.id===active)!.icon({size:16}):<Music size={16}/>}</button>;
 return <div className="ambient-widget glass" role="region" aria-label="Ambient study sound player">
  <div className="ambient-head"><span>Study ambience</span><button type="button" onClick={()=>setOpen(false)} aria-label="Hide ambience widget"><X size={14}/></button></div>
  {STREAMS.map(s=><button type="button" key={s.id} className={active===s.id?'active':''} onClick={()=>pick(s.id)} aria-pressed={active===s.id}>
   <s.icon size={15}/><span>{s.label}</span>{failed===s.id&&active===s.id?<em>stream offline</em>:active===s.id?<i className="ambient-eq"><b/><b/><b/></i>:null}
  </button>)}
 </div>;
}
