import {useMemo,useState} from 'react';
import {Search} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {BHMS_PATHOLOGY,type Remedy} from './bhms-pathology-data';

const SUGGESTIONS=['burning pain','worse at night','thirst for small sips','worse from motion','better from warmth','craves sugar','restlessness','after midnight','sticky discharge','red sand in urine'];

interface Hit{organ:string;pathology:string;remedy:Remedy;score:number}

function search(term:string):Hit[]{
 const words=term.toLowerCase().split(/[^a-z0-9']+/).filter(w=>w.length>2);
 if(!words.length)return[];
 const hits:Hit[]=[];
 for(const entry of BHMS_PATHOLOGY)for(const p of entry.pathologies)for(const r of p.remedies){
  const haystack=[r.name,r.modalities,...r.keynotes].join(' ').toLowerCase();
  let score=0;
  for(const w of words){const n=haystack.split(w).length-1;if(n)score+=n;}
  if(score>0)hits.push({organ:entry.organ,pathology:p.name,remedy:r,score});
 }
 return hits.sort((a,b)=>b.score-a.score).slice(0,24);
}

export default function RepertoryMatcher(){
 const [query,setQuery]=useState('');
 const hits=useMemo(()=>search(query),[query]);
 return <div className="repertory-panel">
  <div className="repertory-input-wrap"><Search size={16}/><input autoFocus className="repertory-input" value={query} placeholder='e.g. "burning pain worse at night"…' onChange={e=>setQuery(e.target.value)} aria-label="Repertory keywords"/></div>
  <div className="repertory-chips">{SUGGESTIONS.map(s=><button key={s} type="button" className={query===s?'active':''} onClick={()=>setQuery(query===s?'':s)}>{s}</button>)}</div>
  {query&&<p className="repertory-count">{hits.length?`${hits.length} matching remed${hits.length===1?'y':'ies'}`:'No remedies match those keywords — try fewer or broader terms.'}</p>}
  <div className="repertory-results">
   {hits.map(h=><div className="remedy-card" key={`${h.organ}-${h.pathology}-${h.remedy.name}`}>
    <div className="remedy-head"><h4>{h.remedy.name}</h4><Badge variant="secondary" className="clinical-grade">{h.pathology}</Badge></div>
    <p className="repertory-organ">{h.organ} · match score {h.score}</p>
    <ul className="remedy-keynotes">{h.remedy.keynotes.slice(0,4).map(k=><li key={k}>{k}</li>)}</ul>
    <p className="remedy-modalities"><span>Modalities</span>{h.remedy.modalities}</p>
   </div>)}
  </div>
 </div>;
}
