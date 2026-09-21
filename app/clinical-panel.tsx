import {useMemo,useState} from 'react';
import {BookOpen,Pill,Stethoscope,Star,Brain,Check,X,Eye} from 'lucide-react';
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from '@/components/ui/accordion';
import {Badge} from '@/components/ui/badge';
import {REMEDY_RELATIONSHIPS,clinicalForOrgan,type Pathology,type Remedy} from './bhms-pathology-data';
import {allenRemedy} from './allen-remedies';
import {isFavorite,toggleFavorite} from './favorites';

function Relationships({remedy}:{remedy:Remedy}){
 const r=REMEDY_RELATIONSHIPS[remedy.name];
 const allen=allenRemedy(remedy.name);
 if(!r&&!allen)return null;
 return <div className="allen-block">
  {r&&<div className="remedy-relationships">{([['Complementary',r.complementary],['Inimical',r.inimical],['Antidotes',r.antidotes]] as const).filter(([,list])=>list&&list.length>0).map(([label,list])=><p key={label}><span>{label}</span>{list!.join(' · ')}</p>)}</div>}
  {allen&&<details className="allen-details"><summary>Allen's Keynotes ({allen.symptoms.length} symptoms)</summary><ul className="remedy-keynotes">{allen.symptoms.map(s=><li key={s.symptom}>{s.region!=='General'&&<b>{s.region}: </b>}{s.symptom}</li>)}</ul></details>}
 </div>;
}

function StarButton({organ,pathology}:{organ:string;pathology?:string}){
 const key=`${organ}::${pathology??''}`;
 const active=isFavorite(key);
 return <button type="button" className={`fav-star ${active?'active':''}`} aria-label={active?'Remove from exam favorites':'Add to exam favorites'} aria-pressed={active} onClick={()=>toggleFavorite({key,organ,pathology})}><Star size={14} fill={active?'currentColor':'none'}/></button>;
}

function QuizMode({pathologies}:{pathologies:Pathology[]}){
 const questions=useMemo(()=>pathologies.flatMap(p=>p.remedies.map(r=>({pathology:p.name,remedy:r}))),[pathologies]);
 const [i,setI]=useState(0),[revealed,setRevealed]=useState(false),[score,setScore]=useState({right:0,wrong:0});
 const q=questions[i];
 const answer=(ok:boolean)=>{setScore(s=>({right:s.right+ +ok,wrong:s.wrong+ +!ok}));setRevealed(false);setI(n=>(n+1)%questions.length);};
 if(!q)return null;
 const total=score.right+score.wrong;
 return <div className="quiz-mode">
  <div className="quiz-score"><Brain size={15}/><span>Score {score.right}/{total||0}</span>{total>0&&<em>{Math.round(score.right/total*100)}% · {total}/{questions.length} done</em>}</div>
  <div className="quiz-card">
   <p className="quiz-pathology">{q.pathology}</p>
   <h4 className="quiz-question">Which remedy fits these keynotes?</h4>
   <ul className="remedy-keynotes">{q.remedy.keynotes.slice(0,3).map(k=><li key={k}>{k}</li>)}</ul>
   {revealed?<div className="remedy-card quiz-answer">
    <div className="remedy-head"><Pill size={14}/><h4>{q.remedy.name}</h4></div>
    <p className="remedy-modalities"><span>Modalities</span>{q.remedy.modalities}</p>
   </div>:<button type="button" className="quiz-reveal" onClick={()=>setRevealed(true)}><Eye size={14}/>Reveal answer</button>}
   {revealed&&<div className="quiz-actions">
    <button type="button" className="got-it" onClick={()=>answer(true)}><Check size={14}/>Got it</button>
    <button type="button" className="missed-it" onClick={()=>answer(false)}><X size={14}/>Missed it</button>
   </div>}
   <p className="quiz-progress">Question {i+1} of {questions.length}</p>
  </div>
 </div>;
}

export default function ClinicalPanel({organName}:{organName:string|undefined}){
 const clinical=clinicalForOrgan(organName);
 const [quiz,setQuiz]=useState(false);
 if(!clinical)return <div className="clinical-empty"><Stethoscope size={22}/><p>No BHMS clinical data mapped to <strong>{organName??'this structure'}</strong> yet.</p><p>Try the heart, lungs, stomach, liver, kidneys, intestines, brain, bladder, pancreas or skin.</p></div>;
 return <div className="clinical-panel">
  <div className="clinical-intro">
   <div className="clinical-intro-row"><Badge variant="secondary" className="clinical-grade">2nd Year BHMS</Badge><div className="clinical-intro-actions"><button type="button" className={`quiz-toggle ${quiz?'active':''}`} aria-pressed={quiz} onClick={()=>setQuiz(q=>!q)}><Brain size={13}/>{quiz?'Exit Quiz Mode':'Quiz Mode'}</button><StarButton organ={clinical.organ}/></div></div>
   <p>Pathology &amp; indicated remedies for the <strong>{clinical.organ.toLowerCase()}</strong>, keyed to Boericke's Materia Medica and Allen's Keynotes. Educational study aid — not a prescribing guide.</p>
  </div>
  {quiz?<QuizMode pathologies={clinical.pathologies}/>:<Accordion multiple>
   {clinical.pathologies.map((p,i)=><AccordionItem key={p.name} value={p.name}>
    <AccordionTrigger><span className="clinical-disease"><span className="clinical-index">{String(i+1).padStart(2,'0')}</span>{p.name}</span><span onClick={e=>e.stopPropagation()} role="presentation"><StarButton organ={clinical.organ} pathology={p.name}/></span></AccordionTrigger>
    <AccordionContent>
     <p className="clinical-summary">{p.summary}</p>
     <div className="remedy-list">
      {p.remedies.map(r=><div className="remedy-card" key={r.name}>
       <div className="remedy-head"><Pill size={14}/><h4>{r.name}</h4></div>
       <ul className="remedy-keynotes">{r.keynotes.map(k=><li key={k}>{k}</li>)}</ul>
       <p className="remedy-modalities"><span>Modalities</span>{r.modalities}</p>
       <Relationships remedy={r}/>
      </div>)}
     </div>
    </AccordionContent>
   </AccordionItem>)}
  </Accordion>}
  <p className="clinical-foot"><BookOpen size={12}/> Sources: W. Boericke, Pocket Manual of Homeopathic Materia Medica · H.C. Allen, Keynotes and Characteristics.</p>
 </div>;
}
