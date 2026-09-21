import {useMemo,useState} from 'react';
import {Check,X,Plus,Search,SlidersHorizontal} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {BHMS_PATHOLOGY,type Remedy} from './bhms-pathology-data';
import {ALLEN_REMEDIES} from './allen-remedies';

const SUGGESTIONS=['burning pain','worse at night','thirst for small sips','worse from motion','better from warmth','craves sugar','restlessness','after midnight','sticky discharge','red sand in urine','left-sided','craves salt','better from cold applications','bloating after eating','tearful disposition'];

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

interface MultiHit{organ:string;pathology:string;remedy:Remedy;covered:boolean[];source:'BHMS dictionary'|'Allen\'s Keynotes';symptoms?:string[]}

// Multi-symptom search: a remedy qualifies only if EVERY selected symptom
// phrase is found in its keynotes or modalities — first across the curated
// BHMS dictionary, then the full Allen's Keynotes materia medica.
function searchMulti(symptoms:string[]):MultiHit[]{
 const phrases=symptoms.map(s=>s.toLowerCase().trim()).filter(Boolean);
 if(!phrases.length)return[];
 const hits:MultiHit[]=[];
 for(const entry of BHMS_PATHOLOGY)for(const p of entry.pathologies)for(const r of p.remedies){
  const haystack=[r.name,r.modalities,...r.keynotes].join(' ').toLowerCase();
  const covered=phrases.map(ph=>haystack.includes(ph));
  if(covered.every(Boolean))hits.push({organ:entry.organ,pathology:p.name,remedy:r,covered,source:'BHMS dictionary'});
 }
 for(const a of ALLEN_REMEDIES){
  const haystack=[a.name,a.common,a.modalities,...a.symptoms.map(s=>s.symptom)].join(' ').toLowerCase();
  const covered=phrases.map(ph=>haystack.includes(ph));
  if(covered.every(Boolean))hits.push({organ:'Materia Medica',pathology:a.common||'Keynotes',remedy:{name:a.name,keynotes:a.symptoms.map(s=>s.symptom),modalities:a.modalities},covered,source:'Allen\'s Keynotes',symptoms:a.symptoms.map(s=>s.symptom)});
 }
 return hits;
}

const STOP=new Set(['pain','worse','better','with','from','the','and','for','after','before','much','very']);
function autocomplete(term:string,symptoms:string[]):string[]{
 const words=term.toLowerCase().split(/[^a-z0-9']+/).filter(w=>w.length>2&&!STOP.has(w));
 if(!words.length)return[];
 const pool=new Set<string>();
 const collect=(keys:string[],extra:string[])=>{
  for(const k of keys)for(const w of words)if(k.toLowerCase().includes(w)){pool.add(w);pool.add(k.length<=70?k.trim():k.trim());}
 };
 for(const entry of BHMS_PATHOLOGY)for(const p of entry.pathologies)for(const r of p.remedies)collect([...r.keynotes,r.modalities,r.name],[]);
 for(const a of ALLEN_REMEDIES)collect([a.name,a.common,a.modalities],[]),a.symptoms.forEach(s=>collect([s.symptom],[]));
 return [...pool].filter(p=>!symptoms.includes(p)).slice(0,10);
}

export default function RepertoryMatcher(){
 const [mode,setMode]=useState<'keywords'|'multi'>('multi');
 const [query,setQuery]=useState('');
 const hits=useMemo(()=>search(query),[query]);
 // Multi-symptom state
 const [symptoms,setSymptoms]=useState<string[]>([]);
 const [draft,setDraft]=useState('');
 const [requireAll,setRequireAll]=useState(true);
 const multiHits=useMemo(()=>searchMulti(symptoms),[symptoms]);
 const suggestions=useMemo(()=>autocomplete(draft,symptoms),[draft,symptoms]);
 const addSymptom=(s:string)=>{
  const clean=s.trim();
  if(!clean||symptoms.includes(clean))return;
  setSymptoms(list=>[...list,clean]);
  setDraft('');
 };
 return <div className="repertory-panel">
  <div className="remedy-index-mode">
   <button type="button" className={mode==='multi'?'active':''} onClick={()=>setMode('multi')}><SlidersHorizontal size={13}/>Multi-Symptom</button>
   <button type="button" className={mode==='keywords'?'active':''} onClick={()=>setMode('keywords')}><Search size={13}/>Keywords</button>
  </div>
  {mode==='keywords'?<div className="repertory-panel">
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
  </div>:<div className="repertory-panel">
   <div className="symptom-builder">
    <div className="repertory-input-wrap"><Plus size={16}/><input className="repertory-input" value={draft} placeholder="Add a symptom — e.g. thirst for small sips" onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();addSymptom(draft);}}} aria-label="Add a symptom to match"/></div>
    {suggestions.length>0&&<div className="symptom-suggest">{suggestions.map(s=><button type="button" key={s} onClick={()=>addSymptom(s)}>{s}</button>)}</div>}
    {symptoms.length>0&&<div className="symptom-chips">{symptoms.map(s=><span key={s} className="symptom-chip"><button type="button" className="symptom-chip-x" aria-label={`Remove ${s}`} onClick={()=>setSymptoms(list=>list.filter(x=>x!==s))}><X size={12}/></button>{s}</span>)}</div>}
    {symptoms.length>0&&<p className="repertory-count">{multiHits.length?`${multiHits.length} remed${multiHits.length===1?'y covers':'ies cover'} ALL ${symptoms.length} symptom${symptoms.length===1?'':'s'} — searched the BHMS dictionary + Allen's Keynotes (201 remedies)`:`No remedy covers all ${symptoms.length} symptoms — try removing one chip.`}</p>}
   </div>
   <div className="repertory-results">
    {multiHits.map(h=><div className="remedy-card" key={`${h.source}-${h.organ}-${h.pathology}-${h.remedy.name}`}>
     <div className="remedy-head"><h4>{h.remedy.name}</h4><Badge variant="secondary" className="clinical-grade">{h.source}</Badge></div>
     <p className="repertory-organ">{h.organ} · covers {h.covered.filter(Boolean).length}/{h.covered.length} symptoms</p>
     <ul className="remedy-keynotes">{h.remedy.keynotes.map(k=><li key={k}>{k}</li>)}</ul>
     {h.remedy.modalities&&<p className="remedy-modalities"><span>Modalities</span>{h.remedy.modalities}</p>}
    </div>)}
    {symptoms.length>0&&multiHits.length===0&&<p className="favorites-empty">Try a broader phrasing — e.g. “burning pain” instead of “burning epigastric pain at 3 a.m.”. The Keywords tab ranks by best partial match if nothing covers every symptom.</p>}
   </div>
  </div>}
 </div>;
}
