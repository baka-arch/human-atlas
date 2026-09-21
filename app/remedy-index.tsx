import {useMemo,useState} from 'react';
import {ArrowLeftRight,Search} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {BHMS_PATHOLOGY,REMEDY_RELATIONSHIPS,type Remedy} from './bhms-pathology-data';
import {ALLEN_REMEDIES,type AllenRemedy} from './allen-remedies';

interface Entry{remedy:Remedy;organ:string;pathology:string}

const ALL_ENTRIES:Entry[]=BHMS_PATHOLOGY.flatMap(e=>e.pathologies.flatMap(p=>p.remedies.map(r=>({remedy:r,organ:e.organ,pathology:p.name}))));
const BHMS_NAMES=new Set(ALL_ENTRIES.map(e=>e.remedy.name));
const REMEDY_NAMES=[...new Set([...ALL_ENTRIES.map(e=>e.remedy.name),...ALLEN_REMEDIES.map(r=>r.name)])].sort();

function AllenCard({remedy}:{remedy:AllenRemedy}){
 const regions=useMemo(()=>{
  const groups=new Map<string,string[]>();
  for(const s of remedy.symptoms){const list=groups.get(s.region)??[];list.push(s.symptom);groups.set(s.region,list);}
  return [...groups.entries()];
 },[remedy]);
 return <div className="remedy-card compare-card compare-active">
  <div className="remedy-head"><h4>{remedy.name}</h4><Badge variant="secondary" className="clinical-grade">Allen's Keynotes</Badge></div>
  {(remedy.common||remedy.family)&&<p className="compare-context"><b>{remedy.common}</b>{remedy.family&&` · ${remedy.family}`}</p>}
  {remedy.modalities&&<p className="remedy-modalities"><span>Modalities</span>{remedy.modalities}</p>}
  {regions.map(([region,syms])=><div className="allen-region" key={region}><h5>{region}</h5><ul className="remedy-keynotes">{syms.map(s=><li key={s}>{s}</li>)}</ul></div>)}
  {remedy.relations&&<p className="remedy-modalities"><span>Relations</span>{remedy.relations}</p>}
 </div>;
}

function RemedyColumn({name,onPick,active}:{name:string;onPick:(n:string)=>void;active:boolean}){
 const entries=ALL_ENTRIES.filter(e=>e.remedy.name===name);
 const rel=REMEDY_RELATIONSHIPS[name];
 return <div className={`remedy-card compare-card ${active?'compare-active':''}`} onClick={()=>onPick(name)}>
  <div className="remedy-head"><h4>{name}</h4><Badge variant="secondary" className="clinical-grade">{entries.length} indication{entries.length===1?'':'s'}</Badge></div>
  {rel&&<div className="remedy-relationships">{([['Complementary',rel.complementary],['Inimical',rel.inimical],['Antidotes',rel.antidotes]] as const).filter(([,l])=>l&&l.length>0).map(([label,list])=><p key={label}><span>{label}</span>{list!.join(' · ')}</p>)}</div>}
  <div className="compare-entries">{entries.map(e=><div key={e.pathology} className="compare-entry"><p className="compare-context"><b>{e.pathology}</b> · {e.organ}</p><ul className="remedy-keynotes">{e.remedy.keynotes.slice(0,4).map(k=><li key={k}>{k}</li>)}</ul><p className="remedy-modalities"><span>Modalities</span>{e.remedy.modalities}</p></div>)}</div>
 </div>;
}

export default function RemedyIndex(){
 const [query,setQuery]=useState('');
 const [mode,setMode]=useState<'index'|'compare'>('index');
 const [left,setLeft]=useState('Nux Vomica'),[right,setRight]=useState('Pulsatilla');
 const names=useMemo(()=>REMEDY_NAMES.filter(n=>n.toLowerCase().includes(query.toLowerCase())),[query]);
 const allenFor=(n:string)=>ALLEN_REMEDIES.find(r=>r.name===n);
 return <div className="remedy-index">
  <div className="repertory-input-wrap"><Search size={16}/><input className="repertory-input" value={query} placeholder="Look up a remedy…" onChange={e=>setQuery(e.target.value)} aria-label="Search remedies"/></div>
  <div className="remedy-index-mode">
   <button type="button" className={mode==='index'?'active':''} onClick={()=>setMode('index')}>Index</button>
   <button type="button" className={mode==='compare'?'active':''} onClick={()=>setMode('compare')}><ArrowLeftRight size={13}/>Compare</button>
  </div>
  {mode==='index'?<div className="repertory-results remedy-index-list">
   {names.map(n=>{const inDictionary=BHMS_NAMES.has(n);const allen=allenFor(n);const count=inDictionary?ALL_ENTRIES.filter(e=>e.remedy.name===n).length:(allen?.symptoms.length??0);return <button type="button" className="remedy-index-row" key={n} onClick={()=>{setMode('compare');setLeft(n);}}>
    <span>{n}{!inDictionary&&<i className="allen-tag">Allen's</i>}</span><span className="small-number">{inDictionary?`${count} indication${count===1?'':'s'}`:`${count} keynotes`}</span></button>;})}
   {names.length===0&&<p className="favorites-empty">No remedy matches “{query}”.</p>}
  </div>:<div className="compare-wrap">
   <div className="compare-pickers">
    <select value={left} onChange={e=>setLeft(e.target.value)} aria-label="First remedy">{REMEDY_NAMES.map(n=><option key={n} value={n}>{n}</option>)}</select>
    <button type="button" className="compare-swap" aria-label="Swap remedies" onClick={()=>{setLeft(right);setRight(left);}}><ArrowLeftRight size={14}/></button>
    <select value={right} onChange={e=>setRight(e.target.value)} aria-label="Second remedy">{REMEDY_NAMES.map(n=><option key={n} value={n}>{n}</option>)}</select>
   </div>
   <div className="compare-columns">
    {BHMS_NAMES.has(left)?<RemedyColumn name={left} active onPick={()=>{}}/>:allenFor(left)?<AllenCard remedy={allenFor(left)!}/>:null}
    {BHMS_NAMES.has(right)?<RemedyColumn name={right} active onPick={()=>{}}/>:allenFor(right)?<AllenCard remedy={allenFor(right)!}/>:null}
   </div>
  </div>}
 </div>;
}
