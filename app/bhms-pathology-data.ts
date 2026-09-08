// Clinical companion data for 2nd-year BHMS pathology study.
// Remedy keynotes and differentiation compiled from William Boericke's Pocket
// Manual of Homeopathic Materia Medica and H.C. Allen's Keynotes; organ
// pathology framed per Samuel Hahnemann (R.E. Dudgeon translation) with
// anatomy/physiology grounding from BD Chaurasia and Guyton & Hall.
// Educational reference only — not a prescribing guide.

export interface Remedy {
  name: string;
  keynotes: string[];
  modalities: string;
}

export interface Pathology {
  name: string;
  summary: string;
  remedies: Remedy[];
}

export interface OrganClinical {
  organ: string;
  aliases: string[];
  pathologies: Pathology[];
}

export const BHMS_PATHOLOGY: OrganClinical[] = [
  {
    organ: 'Stomach',
    aliases: ['stomach', 'gastric'],
    pathologies: [
      {
        name: 'Acute Gastritis',
        summary:
          'Inflammation of the gastric mucosa with epigastric burning, nausea, vomiting and loss of appetite, commonly after dietary indiscretion, alcohol or irritants.',
        remedies: [
          {
            name: 'Nux Vomica',
            keynotes: [
              'Gastritis from heavy food, alcohol, stimulants or mental strain',
              'Weight and pain in the stomach an hour or two after eating',
              'Nausea, ineffectual retching; tongue coated white',
              'Irresistible drowsiness after meals',
            ],
            modalities: 'Worse in the morning, after eating, mental exertion; better from a short nap, warm drinks.',
          },
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Gastritis from cold drinks, spoiled food or vomiting of matter',
              'Violent burning pain relieved by heat',
              'Great prostration out of proportion to gastric symptoms',
              'Thirst for small sips of water at frequent intervals',
            ],
            modalities: 'Worse after midnight, from cold and cold drinks; better from warmth and warm drinks.',
          },
          {
            name: 'Antimonium Crudum',
            keynotes: [
              'Gastritis from overeating or from a heated meal',
              'Thick milky-white coated tongue — the grand keynote',
              'Constant belching, nausea and loathing of food',
              'Irritable, cross child; cannot bear to be touched or looked at',
            ],
            modalities: 'Worse in the evening, from cold bathing, acids; better in open air, from rest.',
          },
          {
            name: 'Pulsatilla',
            keynotes: [
              'Gastritis after rich, fatty or pastry food',
              'Tongue covered with a thick white fur, mouth dry yet no thirst',
              'Nausea with tightness over the stomach, worse lying down',
              'Mild, tearful disposition, seeks sympathy and open air',
            ],
            modalities: 'Worse from rich food, warmth, lying down; better from cold food, open air, gentle motion.',
          },
        ],
      },
      {
        name: 'Chronic Gastritis / Dyspepsia',
        summary:
          'Long-standing gastric irritation with heaviness after meals, flatulence, heartburn and irregular bowel function, often in sedentary or high-strung patients.',
        remedies: [
          {
            name: 'Nux Vomica',
            keynotes: [
              'Dyspepsia of sedentary, high-livers who abuse tea, coffee or alcohol',
              'Sour and bitter eructations, pyrosis an hour after eating',
              'Frequent ineffectual desire for stool — portal congestion',
              'Bad effects of modern hectic life and drug suppression',
            ],
            modalities: 'Worse early morning, after eating, spices; better from short sleep, in the evening.',
          },
          {
            name: 'Lycopodium',
            keynotes: [
              'Dyspepsia with bloating — everything turns to gas',
              'Can satisfy his appetite with very little food; fills quickly',
              'Sour eructations, heartburn with sweetish water rising in the mouth',
              'Weak digestion with much flatulence in the lower abdomen',
            ],
            modalities: 'Worse from 4–8 p.m., cold drinks, cabbage, beans; better from warm drinks, loose clothing.',
          },
          {
            name: 'China Officinalis',
            keynotes: [
              'Dyspepsia after debilitating disease or loss of body fluids',
              'Bitter taste, food lies undigested like a load in the stomach',
              'Bloating of the abdomen not relieved by belching',
              'Periodicity of complaints and recurring fevers',
            ],
            modalities: 'Worse at night, after eating, light touch; better from hard pressure, warmth.',
          },
        ],
      },
      {
        name: 'Peptic Ulcer (Gastric & Duodenal)',
        summary:
          'Mucosal defect with periodic gnawing or burning epigastric pain related to meals, water-brash and sometimes occult bleeding; typically a chronic relapsing course.',
        remedies: [
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Ulcer pain with intense burning, gnawing as from coals of fire',
              'Pain immediately after swallowing food (gastric ulcer)',
              'Vomiting of blood or coffee-ground matter, great weakness',
              'Restlessness and anxiety with fastidiousness',
            ],
            modalities: 'Worse after midnight, cold drinks; better from warm drinks and warmth.',
          },
          {
            name: 'Kali Bichromicum',
            keynotes: [
              'Round (punched-out) ulceration of the gastric mucosa',
              'Pain immediately after eating, relieved by vomiting',
              'Stringy, ropy, tenacious discharges or vomitus',
              'Dyspepsia after beer; nausea with aversion to food',
            ],
            modalities: 'Worse in the morning, from beer; better from heat.',
          },
          {
            name: 'Argentum Nitricum',
            keynotes: [
              'Duodenal ulcer — pain and gnawing relieved by eating',
              'Splinter-like pains, radiating pains in streaks',
              'Craving for sugar which aggravates; flatulence',
              'Hurried, anxious, apprehensive — time passes too slowly',
            ],
            modalities: 'Worse from sweets, at 5 p.m., anticipation; better from cold, eructations.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Lungs',
    aliases: ['lung', 'lungs', 'pulmonary', 'bronch', 'trachea', 'respiratory'],
    pathologies: [
      {
        name: 'Bronchial Asthma',
        summary:
          'Paroxysmal reversible airway obstruction with wheezing, dyspnoea, chest tightness and cough, often allergic or emotional in origin; attacks worse at night and early morning.',
        remedies: [
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Asthmatic attacks after midnight (1–3 a.m.)',
              'Great dyspnoea with wheezing and restlessness',
              'Must sit bent forward; worse on lying down',
              'Anxiety and fear of death during the attack; burning pains',
            ],
            modalities: 'Worse after midnight, lying down, cold; better from warmth, sitting up, warm drinks.',
          },
          {
            name: 'Antimonium Tartaricum',
            keynotes: [
              'Coarse rattling of mucus in the airways with little expectoration',
              'Dyspnoea relieved by eructations; patient must sit up',
              'Drowsiness, sinking strength, cyanotic face',
              'Suitable to the elderly and to children with chest congestion',
            ],
            modalities: 'Worse in the evening, lying down, warmth of the room; better sitting up, expectoration.',
          },
          {
            name: 'Ipecacuanha',
            keynotes: [
              'Asthma with incessant, violent, dry cough and nausea',
              'Chest seems full of mucus, yet nothing is raised',
              'Difficulty in breathing with wheezing, worse with every motion',
              'Persistent nausea unrelieved by vomiting',
            ],
            modalities: 'Worse from motion, overeating, humid weather; better in open air.',
          },
          {
            name: 'Natrum Sulphuricum',
            keynotes: [
              'Asthma in children, worse in damp weather or living near water',
              'Must hold the chest when coughing; greenish sputum',
              'Dyspnoea on ascending stairs',
              'Ill effects of head injury; sadness worsened by consolation',
            ],
            modalities: 'Worse in damp weather, morning on waking; better in dry weather, open air.',
          },
          {
            name: 'Blatta Orientalis',
            keynotes: [
              'Asthma with much rattling mucus and difficulty in raising it',
              'Dyspnoea with copious frothy, whitish sputum',
              'Especially suitable in overweight patients',
              'Well-indicated in bronchial asthma with secondary cardiac stress',
            ],
            modalities: 'Worse from dust, exertion; better from expectoration.',
          },
        ],
      },
      {
        name: 'Acute Bronchitis',
        summary:
          'Acute inflammation of the bronchial tree following a URI: cough with mucopurulent sputum, retrosternal soreness and scattered rhonchi.',
        remedies: [
          {
            name: 'Bryonia Alba',
            keynotes: [
              'Dry, hard, racking cough after a cold; soreness in the chest',
              'Cough worse in warm rooms and on entering them',
              'Stitching pains in the chest worse on breathing or motion',
              'Dryness of mucous membranes; thirst for large quantities of cold water',
            ],
            modalities: 'Worse from motion, warmth, eating; better lying on the painful side, rest, cold drinks.',
          },
          {
            name: 'Hepar Sulphuris',
            keynotes: [
              'Cough ending in choking with rattling of mucus (loose cough)',
              'Sore, hypersensitive airway — the slightest cold air triggers cough',
              'Cough worse toward morning (3 a.m.)',
              'Irritability, oversensitivity to pain, cannot bear to be touched',
            ],
            modalities: 'Worse from cold, dry wind, uncovering; better from warmth, damp weather.',
          },
          {
            name: 'Pulsatilla',
            keynotes: [
              'Loose cough in the evening with thick, greenish, bland sputum',
              'Cough dry at night, loose in the morning',
              'Must sit up in bed for breath; no thirst with chill',
              'Weeps easily; desires open air and cool rooms',
            ],
            modalities: 'Worse in a warm room, evening, lying down; better from cool open air, gentle motion.',
          },
        ],
      },
      {
        name: 'Pneumonia',
        summary:
          'Acute consolidation of lung tissue — typically lobar — with high fever, rusty sputum, pleuritic stitch and dullness on percussion; a 2nd-year pathology classic.',
        remedies: [
          {
            name: 'Phosphorus',
            keynotes: [
              'Pneumonia of the right lower lobe with rusty sputum',
              'Burning in the chest, oppression worse lying on the left side',
              'Craving for cold drinks, vomited when warm in the stomach',
              'Tall, slender, sensitive patients who fear thunderstorms and the dark',
            ],
            modalities: 'Worse lying on the left side, cold, evening; better sleeping on the right side, cold food.',
          },
          {
            name: 'Bryonia Alba',
            keynotes: [
              'Right-sided pneumonia with stitching pleuritic pains',
              'Fever with intense thirst for large drinks at long intervals',
              'Delirium — wants to go home although at home',
              'Dry cough with stitch in the side, must hold the chest',
            ],
            modalities: 'Worse from motion, warmth, eating; better rest, lying on the painful side.',
          },
          {
            name: 'Antimonium Tartaricum',
            keynotes: [
              'Pneumonia of the aged or of children with extreme congestion',
              'Fine rattling crackles, air cells loaded but expectoration scanty',
              'Drowsiness, sweat, cyanosis, extreme weakness',
              'Face pale, cold sweat on the forehead — threatening paralysis of the lungs',
            ],
            modalities: 'Worse lying down, warmth of the room; better sitting up, from eructations.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Heart',
    aliases: ['heart', 'cardiac', 'coronary', 'myocard'],
    pathologies: [
      {
        name: 'Hypertensive & Ischaemic Heart Disease (Angina Pectoris)',
        summary:
          'Myocardial ischaemia presenting as retrosternal compressive pain radiating to the left arm or jaw on exertion, relieved by rest; underlying atheroma and hypertension.',
        remedies: [
          {
            name: 'Crataegus Oxyacantha',
            keynotes: [
              'The heart tonic of homeopathy — acts on the myocardial muscle',
              'Irregularity of pulse, extreme breathlessness on least exertion',
              'Aneurysmatic tendency; pain in the region of the heart under the left nipple',
              'Known as a "heart sedative" in tachycardia and cardiac dropsy',
            ],
            modalities: 'Worse from exertion and emotional strain.',
          },
          {
            name: 'Cactus Grandiflorus',
            keynotes: [
              'Sensation of the heart grasped by an iron band — constriction',
              'Periodicity of attacks; pains shoot to the left arm and finger tips',
              'Palpitation with low-spiritedness and fear of death',
              'Constriction of the chest as if a cord were tied around',
            ],
            modalities: 'Worse lying on the left side, at 11 p.m.; better in open air.',
          },
          {
            name: 'Latrodectus Mactans',
            keynotes: [
              'Violent precordial pain radiating to the left arm and numbness of the arm',
              'Restless and unable to stay in bed; feels as if death is approaching',
              'Anginal pain with feeble, rapid pulse',
              'Most violent of the angina remedies — clutching at the chest',
            ],
            modalities: 'Better from steady hard pressure; worse from motion.',
          },
          {
            name: 'Digitalis Purpurea',
            keynotes: [
              'Bradycardia — the slightest emotion makes the heart feel it would stop',
              'Weak, irregular intermittent pulse; bluish skin',
              'Sensation that the heart must still be still or death results',
              'Dropsy of cardiac origin; oppressed breathing on exertion',
            ],
            modalities: 'Worse from exertion, excitement, drinking; better from rest.',
          },
        ],
      },
      {
        name: 'Palpitation & Tachyarrhythmia',
        summary:
          'Awareness of forcible, rapid or irregular heart action, aggravated by emotion, caffeine or thyrotoxicosis; includes paroxysmal tachycardia.',
        remedies: [
          {
            name: 'Ignatia Amara',
            keynotes: [
              'Palpitation from grief, emotion or silent worrying',
              'Feeling of a lump in the throat (globus hystericus)',
              'Sighing, sobbing respiration with a light transient cough',
              'Contradictory and changeable mood — hysteria of grief',
            ],
            modalities: 'Worse from grief, coffee, tobacco, touch; better from changing position, eating.',
          },
          {
            name: 'Lachesis Mutus',
            keynotes: [
              'Palpitation with fainting, worse on waking or before menses',
              'Cannot bear anything tight around the neck or waist',
              'Left-sided complaints; surging of blood upward',
              'Loquacious, suspicious, jealous — worse after sleep',
            ],
            modalities: 'Worse after sleep, warmth, pressure of clothes; better in open air.',
          },
          {
            name: 'Aconitum Napellus',
            keynotes: [
              'Tachycardia with great anxiety, fear of death, restlessness',
              'Sudden onset after fright or exposure to dry cold wind',
              'Feeling as if the heart would jump out at every step',
              'Tension, anguish, cold sweat, numbness and tingling',
            ],
            modalities: 'Worse in a warm room, in the evening, from fright; better in the open air.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Liver',
    aliases: ['liver', 'hepatic', 'bil'],
    pathologies: [
      {
        name: 'Acute Viral Hepatitis',
        summary:
          'Acute hepatic inflammation with prodromal malaise, anorexia and nausea, then jaundice, dark urine, tender hepatomegaly and raised transaminases.',
        remedies: [
          {
            name: 'Chelidonium Majus',
            keynotes: [
              'The liver remedy — jaundice with pain under the inferior angle of the right scapula',
              'Yellow tongue with tooth imprints; bitter taste',
              'Desire for very hot drinks, milk and cheese',
              'Constipation with round ball-like stools',
            ],
            modalities: 'Worse from 4 a.m. to 8 p.m., motion, right side; better from hot drinks.',
          },
          {
            name: 'Carduus Marianus',
            keynotes: [
              'Liver region painful, tender, worse from lying on the left side',
              'Jaundice with clay-coloured stools and dark urine',
              'Bitter taste, nausea, vomiting of greenish fluid',
              'Especially suited to cirrhosis and portal congestion with dropsy',
            ],
            modalities: 'Worse lying on the left side; better from warmth.',
          },
          {
            name: 'Phosphorus',
            keynotes: [
              'Hepatitis with jaundice and fatty degeneration of the liver',
              'Longing for cold water — vomited when it becomes warm',
              'Burning pains; haemorrhagic tendency (haematemesis)',
              'Sensitive, sympathetic, fearful temperament',
            ],
            modalities: 'Worse lying on the left side, warm food; better cold food, sleep on the right side.',
          },
          {
            name: 'Nux Vomica',
            keynotes: [
              'Hepatitis from alcohol, highly seasoned food or quinine',
              'Bruised soreness in the liver region; portal congestion',
              'Sour, bitter taste; nausea in the morning',
              'Zealous, angry, sedentary, drug-abusing patients',
            ],
            modalities: 'Worse in the morning, after eating, stimulants; better after a short sleep.',
          },
        ],
      },
      {
        name: 'Fatty Liver & Cirrhosis (Portal Hypertension)',
        summary:
          'Chronic hepatic disease — steatosis progressing to fibrosis and nodular regeneration — presenting with ascites, spider naevi, splenomegaly, oesophageal varices and coagulopathy.',
        remedies: [
          {
            name: 'Lycopodium',
            keynotes: [
              'Liver affections with bloating; the whole abdomen is tympanitic',
              'Pain in the back below the right shoulder blade',
              'Atonic dyspepsia; fills up quickly after a few mouthfuls',
              'Red sand in the urine; impotence; fear of failure in public',
            ],
            modalities: 'Worse 4–8 p.m., cold drinks, right side; better from warm drinks, loose garments.',
          },
          {
            name: 'Carduus Marianus',
            keynotes: [
              'Cirrhosis with ascites — dropsy of alcoholic patients',
              'Tenderness and enlargement of the liver',
              'Haemorrhoids and varices from portal obstruction',
              'Bilious complications after typhoid or influenza',
            ],
            modalities: 'Worse lying on the left side; better from warmth and hot drinks.',
          },
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Ascites and cirrhosis with great prostration and restlessness',
              'Burning pains relieved by heat; thirst for small sips',
              'Oedema of the ankles, wasting despite appetite',
              'Anxiety, fastidiousness, fear of being alone',
            ],
            modalities: 'Worse after midnight, cold; better from warmth, elevated head.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Kidney',
    aliases: ['kidney', 'nephron', 'ureter'],
    pathologies: [
      {
        name: 'Acute Nephritis / Nephrotic Syndrome',
        summary:
          'Post-infectious glomerular inflammation with periorbital oedema, hypertension, smoky urine and oliguria; nephrotic syndrome adds heavy proteinuria and hypoalbuminaemia.',
        remedies: [
          {
            name: 'Apis Mellifica',
            keynotes: [
              'Oedema of the eyelids and face, especially the lower lids',
              'Scanty, high-coloured urine with thirstlessness',
              'Stinging, burning pains; extreme sensitivity to touch',
              'Nephritis with drowsiness, suffocation on lying down',
            ],
            modalities: 'Worse from heat, touch, after sleeping; better from cold, open air.',
          },
          {
            name: 'Terebinthina',
            keynotes: [
              'Nephritis with haematuria — urine smells of violets',
              'Burning, strangury; pain in the kidneys down the ureters',
              'Oedema of the genitals and lower limbs',
              'Especially in post-scarlatinal nephritis of childhood',
            ],
            modalities: 'Worse at night, from cold; better from warmth.',
          },
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Renal dropsy with waxy pallor and great weakness',
              'Scanty, burning urine with restlessness',
              'General anasarca; dyspnoea worse after midnight',
              'Anxious fastidious patient, fear of death',
            ],
            modalities: 'Worse from cold, after midnight; better from warmth.',
          },
        ],
      },
      {
        name: 'Renal Calculus (Urolithiasis)',
        summary:
          'Stone disease with agonising colic radiating from the flank to the groin, haematuria and strangury; attacks triggered by dehydration or dietary oxalates.',
        remedies: [
          {
            name: 'Berberis Vulgaris',
            keynotes: [
              'Renal colic — pain radiating from the kidney down the ureter to the bladder and thigh',
              'Urine with reddish, sandy sediment; mucus in the urine',
              'Bubbling, stitching pains in the renal region, worse on motion',
              'Sensation of a cap of lead on the head is a confirmatory oddity',
            ],
            modalities: 'Worse from motion, jarring, fatigue; better from rest, standing.',
          },
          {
            name: 'Lycopodium',
            keynotes: [
              'Right-sided renal colic with red sand in the urine',
              'Pain in the back before urination, relieved after passing it',
              'Much flatulence; urine turbid on standing',
              'Renal and vesical calculi with digestive weakness',
            ],
            modalities: 'Worse 4–8 p.m. and from cold; better from warm drinks.',
          },
          {
            name: 'Cantharis',
            keynotes: [
              'Violent burning, cutting pains before, during and after urination',
              'Constant urging to urinate with intolerable strangury',
              'Urine passed in drops with bloody tinge (haemorrhagic cystitis)',
              'Renal colic with furious delirium in severe cases',
            ],
            modalities: 'Worse from urination, coffee, cold; better from warmth.',
          },
          {
            name: 'Ocimum Canum',
            keynotes: [
              'Left-sided renal colic with red, brick-dust urine',
              'Nausea, vomiting and crampy pain with the calculus attack',
              'Constant urging to urinate; strangury',
              'Bad breath accompanies the attack',
            ],
            modalities: 'Worse from motion, cold drinks; better from warmth.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Intestine',
    aliases: ['intestine', 'intestinal', 'colon', 'duodenum', 'ileum', 'bowel', 'digestive', 'appendix'],
    pathologies: [
      {
        name: 'Irritable Bowel Syndrome & Mucous Colitis',
        summary:
          'Functional bowel disorder with abdominal cramping, bloating and alternating diarrhoea–constipation related to stress; no structural pathology on investigation.',
        remedies: [
          {
            name: 'Nux Vomica',
            keynotes: [
              'Alternating constipation and diarrhoea of sedentary persons',
              'Frequent, ineffectual urging for stool — never-done feeling',
              'Bloating after the least food; spasmodic colic',
              'Over-stimulated modern lifestyle: stimulants, drugs, late nights',
            ],
            modalities: 'Worse early morning, after eating, mental exertion; better from short sleep, warmth.',
          },
          {
            name: 'Argentum Nitricum',
            keynotes: [
              'Spluttering, explosive diarrhoea with much flatus',
              'Diarrhoea from anticipation — stage fright, examinations',
              'Frequent urging; green, shreddy stools like chopped spinach',
              'Hurried, anxious, impulsive; craves sugar and salt',
            ],
            modalities: 'Worse from sweets, anticipation, 5 p.m.; better from cold, firm pressure.',
          },
          {
            name: 'Aloes Socotrina',
            keynotes: [
              'Insecurity of the rectum — unsure whether flatus or stool will escape',
              'Diarrhoea with jelly-like, mucous lumps in the stool',
              'Bearing down; better from passing flatus',
              'Piles that itch and burn, worse in hot dry weather',
            ],
            modalities: 'Worse early morning, after eating, in hot weather; better from cold.',
          },
        ],
      },
      {
        name: 'Amoebiasis & Dysentery',
        summary:
          'Protozoal colitis with griping pain, tenesmus and mucoid, blood-stained stools; chronic carriers may develop amoebic hepatitis or liver abscess.',
        remedies: [
          {
            name: 'Nux Vomica',
            keynotes: [
              'Dysentery with constant, ineffectual tenesmus',
              'Scanty, mucous or bloody stool with retching and straining',
              'Worse after food or drink; irritable, chilly patient',
              'The great remedy for spasmodic straining at stool',
            ],
            modalities: 'Worse in the morning, after eating; better from short sleep, warmth.',
          },
          {
            name: 'Mercerium Solubile (Mercurius Solubilis)',
            keynotes: [
              'Dysentery with blood and mucus — never-get-done tenesmus',
              'Stool hot, offensive, followed by chilliness and shivering',
              'Profuse offensive saliva; moist, flabby tongue with imprints',
              'Symptoms worse at night with sweat without relief',
            ],
            modalities: 'Worse at night, in bed, warmth of the bed; better from moderate temperature.',
          },
          {
            name: 'Ipecacuanha',
            keynotes: [
              'Dysentery with persistent nausea unrelieved by vomiting',
              'Stool frothy, mucous, greenish, with cutting griping',
              'Haemorrhage from the bowels — bright red blood',
              'Clean or slightly coated tongue despite nausea',
            ],
            modalities: 'Worse from overeating, motion; better in open air.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Brain',
    aliases: ['brain', 'cerebr', 'nervous'],
    pathologies: [
      {
        name: 'Migraine',
        summary:
          'Recurrent unilateral throbbing headache with photophobia, nausea and visual aura, lasting 4–72 hours; often familial and triggered by stress, food or hormonal change.',
        remedies: [
          {
            name: 'Belladonna',
            keynotes: [
              'Violent throbbing, congestive headache, worse in the right temple',
              'Sudden onset; pain beats like a hammer or pulse',
              'Worse from light, noise, jar, lying down; red face, dilated pupils',
              'Pain worse in the afternoon and from hair-cut or washing',
            ],
            modalities: 'Worse from light, noise, jar, lying down; better from pressure, semi-erect posture.',
          },
          {
            name: 'Glonoine',
            keynotes: [
              'Congestive sun-headaches; worse from heat and sun exposure',
              'Pulsating like a pump; head feels enormously enlarged',
              'Better in open air or by elevating the head',
              'Confusion, cannot remember where he lives',
            ],
            modalities: 'Worse from heat, sun, stooping; better from cold applications, open air.',
          },
          {
            name: 'Natrum Muriaticum',
            keynotes: [
              'Blinding headache as if little hammers beat in the skull',
              'Anaemic (schoolgirl) migraine — like a thousand needles in the eyes',
              'Headache from grief, eye-strain or sunrise to sunset periodicity',
              'Craves salt; consolation aggravates; reserved and tearful',
            ],
            modalities: 'Worse 10–11 a.m., from grief, sun; better from sweating, in the evening.',
          },
          {
            name: 'Iris Versicolor',
            keynotes: [
              'Sick-headache with blurred vision (aura) before the attack',
              'Headache worse on rest, at night, and weekends',
              'Acid, sour vomiting with burning of the whole GI tract',
              'Periodic migraines (weekly, every two weeks) — the classic periodicity keynote',
            ],
            modalities: 'Worse from rest, at night; better from continuous gentle motion.',
          },
        ],
      },
      {
        name: 'Epilepsy',
        summary:
          'Paroxysmal neuronal discharge with seizures — tonic-clonic convulsions, absence or focal patterns — often with aura, post-ictal confusion and characteristic EEG changes.',
        remedies: [
          {
            name: 'Cicuta Virosa',
            keynotes: [
              'Violent convulsions with opisthotonos — body bent backward',
              'Trismus, frightful distortions of the face and limbs',
              'Aura like a mouse running up the arm, or cold wind on the limb',
              'Convulsions after head injury or fright; meningeal symptoms',
            ],
            modalities: 'Worse from touch, noise, cold; better from warmth.',
          },
          {
            name: 'Cuprum Metallicum',
            keynotes: [
              'Spasms begin in the fingers and toes and spread to the whole body',
              'Violent contractions with cyanosis and biting of the tongue',
              'Aura in the knees or epigastrium ascending upward',
              'Whooping-cough convulsions; cramping pains everywhere',
            ],
            modalities: 'Worse from touch, emotions, cold; better from cold drinks (paradoxical).',
          },
          {
            name: 'Bufo Rana',
            keynotes: [
              'Epilepsy with aura felt in the sexual organs or epigastrium',
              'Seizures during sleep; may cry out or utter obscene words',
              'Low-minded, foolish, indifferent to surroundings',
              'Suited to self-abuse and defective development cases',
            ],
            modalities: 'Worse during sleep, from emotions; better in open air.',
          },
          {
            name: 'Stramonium',
            keynotes: [
              'Convulsions with violent delirium — terror and hallucinations',
              'Sees ghosts, fears the dark, wants a light in the room',
              'Jerking of muscles, especially of the face and hands',
              'Epilepsy after fright; wakes terrified, clings to those near',
            ],
            modalities: 'Worse in the dark, alone, after sleep; better from light and company.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Urinary Bladder',
    aliases: ['urinary bladder', 'cyst'],
    pathologies: [
      {
        name: 'Cystitis & Urinary Tract Infection',
        summary:
          'Bacterial inflammation of the bladder with urgency, frequency, dysuria, suprapubic pain and turbid or bloody urine; far commoner in women.',
        remedies: [
          {
            name: 'Cantharis',
            keynotes: [
              'The head remedy — intolerable constant urging with cutting before, during and after urination',
              'Urine passed in drops; feels like scalding water',
              'Bloody urine with violent straining and spasmodic pain',
              'Restless frenzy from the intensity of the burning',
            ],
            modalities: 'Worse from urination, coffee, cold; better from warmth.',
          },
          {
            name: 'Sarsaparilla',
            keynotes: [
              'Severe pain at the close of urination — must scream',
              'Can pass urine better standing than sitting (children)',
              'Urine dribbles while sitting, flows freely standing',
              'Renal and vesical calculi; sand in the urine',
            ],
            modalities: 'Worse while sitting, at night; better while standing.',
          },
          {
            name: 'Mercurius Solubilis',
            keynotes: [
              'Burning in the urethra during urination with tenesmus',
              'Urine hot, dark, offensive; greenish mucus threads',
              'Nightly urging and enuresis with turbid urine',
              'Bilious, salivating, sweaty patient',
            ],
            modalities: 'Worse at night, in bed, sweating; better from moderate warmth.',
          },
          {
            name: 'Equisetum',
            keynotes: [
              'Bladder pains with frequent urging and distress in the hypogastrium',
              'Incontinence — enuresis of children with dreams of urination',
              'Painful urination without haematuria or much tenesmus',
              'Feeling of fullness that is not relieved by urinating',
            ],
            modalities: 'Worse at night and when excited; better from passing urine.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Pancreas',
    aliases: ['pancrea', 'insulin', 'glyc'],
    pathologies: [
      {
        name: 'Diabetes Mellitus (Type 1 & 2)',
        summary:
          'Chronic hyperglycaemia from insulin deficiency or resistance: polyuria, polydipsia, polyphagia with weight loss, and long-term micro- and macro-vascular complications.',
        remedies: [
          {
            name: 'Syzygium Jambolanum',
            keynotes: [
              'The great remedy for diabetes — marked diminution of sugar in the urine',
              'Old ulcers of the skin associated with diabetes',
              'Excessive thirst and profuse urination of glucose-laden urine',
              'Persistent boily and prickling-itching skin eruptions',
            ],
            modalities: 'Worse from any sugar or starch intake.',
          },
          {
            name: 'Phosphoric Acid',
            keynotes: [
              'Diabetes of nervous origin — from grief, worry or mental debility',
              'Urine milky, turbid, with much sugar; profuse and pale',
              'Apathetic, listless, answers slowly; hair turns grey early',
              'Milky urine with mental prostration — the keynote pair',
            ],
            modalities: 'Worse from grief, emotions; better from short sleep, warmth.',
          },
          {
            name: 'Uranium Nitricum',
            keynotes: [
              'Diabetes with degenerative changes in the pancreatic islets',
              'Enormous appetite with emaciation — the paradoxical pair',
              'Urine profuse, pale, of low gravity; great thirst',
              'Burning in the stomach with gastric derangement',
            ],
            modalities: 'Worse from exertion, cold; better from warmth, gentle motion.',
          },
          {
            name: 'Cephalandra Indica',
            keynotes: [
              'Blood sugar lowering — dryness of mouth with great thirst',
              'Weakness, fatigue and burning in the palms and soles',
              'Profuse urination with high urine sugar',
              'Useful adjunct in insulin-dependent and maturity-onset cases',
            ],
            modalities: 'Worse from sugar intake and fatigue.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Uterus',
    aliases: ['uterus', 'uterine', 'cervix', 'endometr', 'vagina', 'womb'],
    pathologies: [
      {
        name: 'Dysmenorrhoea (Painful Menses)',
        summary:
          'Cyclic spasmodic or congestive pelvic pain at menstruation, often with backache, nausea and irradiation to the thighs; primary cases are commonest in young women.',
        remedies: [
          {
            name: 'Pulsatilla',
            keynotes: [
              'Periods late, scanty, changeable — flow fits and starts',
              'Dysmenorrhoea relieved by cold applications and open air',
              'Wandering pains that shift from part to part',
              'Mild, gentle, tearful disposition; craves sympathy',
            ],
            modalities: 'Worse from warmth, rich food, rest; better from cold, open air, gentle motion.',
          },
          {
            name: 'Sepia Officinalis',
            keynotes: [
              'Bearing-down sensation as if everything would escape the vulva',
              'Menses irregular, late, scanty, with foul odour',
              'Pelvic pain better from violent exertion (the paradox)',
              'Indifferent to loved ones, sad, weepy from odd things',
            ],
            modalities: 'Worse standing, before menses, cold; better from vigorous exercise, warmth of the bed.',
          },
          {
            name: 'Magnesia Phosphorica',
            keynotes: [
              'The neuralgic/spasmodic remedy — cramping uterine pain',
              'Pain better from firm pressure and doubling up',
              'Menses dark, stringy, early with cramps before the flow',
              'Better from warmth — hot drinks relieve the spasm',
            ],
            modalities: 'Worse from cold, touch, right side; better from warmth, pressure, bending double.',
          },
          {
            name: 'Caulophyllum',
            keynotes: [
              'Spasmodic uterine pains that fly about (wandering) from part to part',
              'Dysmenorrhoea with weakness and prostration',
              'Rheumatic pains in small joints with uterine complaints',
              'Erratic pains seeking change of place',
            ],
            modalities: 'Worse from cold, motion; better from rest, warmth.',
          },
        ],
      },
      {
        name: 'Uterine Fibroids & Prolapse',
        summary:
          'Benign myometrial tumours causing menorrhagia, pressure symptoms and heaviness; prolapse presents as bearing-down and a lump at the introitus, commoner after multiparity.',
        remedies: [
          {
            name: 'Lilium Tigrinum',
            keynotes: [
              'Bearing-down as if the pelvis would burst; must support the parts',
              'Congestion, uterine displacement — sensation of a lump in the pelvis',
              'Menses dark, clotted, offensive, worse from excitement',
              'Frantic, alternately religious and cursing; hurried',
            ],
            modalities: 'Worse from warmth, standing, excitement; better from fresh cool air.',
          },
          {
            name: 'Sepia Officinalis',
            keynotes: [
              'Prolapse with bearing-down and pelvic heaviness',
              'Menorrhagia with pelvic congestion; faintness from least motion',
              'Chronic vaginal discharge, yellowish, excoriating',
              'Atony of the pelvic organs after childbirth or miscarriage',
            ],
            modalities: 'Worse standing, washing, cold; better from vigorous exercise, warmth.',
          },
          {
            name: 'Fraxinus Americanus',
            keynotes: [
              'Uterine tumours — specific for fibroids with bearing-down pain',
              'Enlargement of the uterus, weight in the pelvis',
              'Painful menstruation with heaviness of the pelvic organs',
              'Chronic laxity of the uterine ligaments',
            ],
            modalities: 'Worse from exertion; better from rest.',
          },
          {
            name: 'Aurum Muriaticum Natronatum',
            keynotes: [
              'Uterine induration and enlargement; chronic metritis',
              'Bearing-down with sadness and suicidal despair (Aurum thread)',
              'Menses profuse, dark, foul; ovaries indurated and painful',
              'Fibroid degeneration of the uterus in sycotic constitutions',
            ],
            modalities: 'Worse at night, from cold; better from warmth, in the day.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Ovaries',
    aliases: ['ovar', 'fallopian', 'adnexa'],
    pathologies: [
      {
        name: 'Polycystic Ovarian Syndrome (PCOS)',
        summary:
          'Hyperandrogenic anovulation with oligomenorrhoea/amenorrhoea, hirsutism, acne, weight gain and polycystic ovarian morphology on ultrasound; a modern 2nd-year gynaecology staple.',
        remedies: [
          {
            name: 'Sepia Officinalis',
            keynotes: [
              'Late, scanty, irregular menses with pelvic heaviness',
              'Indifference to family, weeping without cause',
              'Hirsutism with sallow complexion and saddle across the nose',
              'Bearing-down sensation better from vigorous exercise',
            ],
            modalities: 'Worse standing, before menses, cold; better from exercise, warmth.',
          },
          {
            name: 'Lachesis Mutus',
            keynotes: [
              'Menses scanty, dark, stringy, worse at the flow starts and ceases',
              'Left ovarian pains; cannot bear tight clothing',
              'Symptoms worse after sleep; surging of blood',
              'Loquacious, suspicious, passionate temperament',
            ],
            modalities: 'Worse after sleep, warmth, pressure of clothes; better in open air.',
          },
          {
            name: 'Apis Mellifica',
            keynotes: [
              'Right ovarian pain with stinging, burning character',
              'Ovarian cysts with tenderness over the right abdomen',
              'Thirstlessness with oedema; stinging pains',
              'Ovarian region sensitive to the least touch',
            ],
            modalities: 'Worse from heat, touch, after sleep; better from cold, open air.',
          },
          {
            name: 'Calcarea Carbonica',
            keynotes: [
              'Obese, flabby patients who sweat on the head at night',
              'Menses too early, too profuse, too long',
              'Late or obstructed menses in chubby, cold constitutions',
              'Craves eggs; fears people, of losing reason, overwhelmed',
            ],
            modalities: 'Worse from cold, exertion, ascending; better from dry weather, lying on the painful side.',
          },
        ],
      },
      {
        name: 'Ovarian Cyst & Pelvic Inflammatory Disease',
        summary:
          'Cystic ovarian enlargements with dull ache and menstrual disturbance; PID adds lower abdominal pain, cervical motion tenderness, fever and discharge, often ascending after infection.',
        remedies: [
          {
            name: 'Lachesis Mutus',
            keynotes: [
              'Left-sided ovarian affection; pain through the pelvis to the thighs',
              'Aggravation of all symptoms from the onset of the flow',
              'Cystic ovaries with tenderness over the left side',
              'Cannot tolerate anything tight around the waist',
            ],
            modalities: 'Worse after sleep, warmth, touch; better from open air.',
          },
          {
            name: 'Apis Mellifica',
            keynotes: [
              'Right ovarian cyst with stinging-burning pains',
              'Sore, highly sensitive abdomen — cannot bear touch',
              'Thirstless; oedema of the dependent parts',
              'Pelvic inflammation with retching and scanty urine',
            ],
            modalities: 'Worse from heat, pressure; better from cold applications.',
          },
          {
            name: 'Mercurius Solubilis',
            keynotes: [
              'Pelvic inflammation with acrid, corrosive leucorrhoea',
              'Burning in the ovaries; worse at night with sweat',
              'Glandular swelling and tendency to suppuration',
              'Profuse offensive saliva; moist flabby tongue',
            ],
            modalities: 'Worse at night, warmth of the bed; better from moderate temperature.',
          },
          {
            name: 'Belladonna',
            keynotes: [
              'Acute pelvic inflammation — sudden, violent onset',
              'Throbbing, congested ovaries with red face and heat',
              'Hypersensitivity to light, noise and jar',
              'Right-sidedness with bursting, shooting pains',
            ],
            modalities: 'Worse from jar, light, lying down; better from semi-erect posture, warmth.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Breast',
    aliases: ['breast', 'mammary', 'mamma', 'nipple', 'mast'],
    pathologies: [
      {
        name: 'Mastitis & Fibrocystic Breast Disease',
        summary:
          'Lactational mastitis: painful, hot, hardened, wedge-shaped segment with fever — may suppurate; fibrocystic change gives cyclic nodularity and tenderness before menses.',
        remedies: [
          {
            name: 'Bryonia Alba',
            keynotes: [
              'Mastitis with hard, heavy, pale-red, stony-hard breast',
              'Stitching pains worse from the least motion and jar',
              'Fever with intense thirst for large cold drinks at long intervals',
              'Breast pale-red rather than bright red',
            ],
            modalities: 'Worse from motion, warmth; better from rest, lying on the painful side.',
          },
          {
            name: 'Belladonna',
            keynotes: [
              'Mastitis with bright-red, hot, throbbing breast',
              'Sudden violent onset; radiating pains',
              'Skin shining and tense; hypersensitivity to touch',
              'Dry heat with flushed face and dilated pupils',
            ],
            modalities: 'Worse from jar, touch, lying down; better from warm wrapping, semi-erect posture.',
          },
          {
            name: 'Hepar Sulphuris',
            keynotes: [
              'Mastitis threatening suppuration — splinter-like pains',
              'Breast sore and hypersensitive to the least touch or cold',
              'Suppuration where the part is hot and painful (early abscess)',
              'Irritable, oversensitive, cannot bear to be touched',
            ],
            modalities: 'Worse from cold, uncovering, touch; better from warmth, wrapping up.',
          },
          {
            name: 'Phytolacca',
            keynotes: [
              'The head remedy — breast hard, painful, purple-red when nursing',
              'Pain radiates from nipple to the whole body when the child nurses',
              'Nipples cracked and excoriated; patient dreads nursing',
              'Glandular affections with hard, painful lumps',
            ],
            modalities: 'Worse from cold, motion, nursing; better from warmth.',
          },
          {
            name: 'Conium Maculatum',
            keynotes: [
              'Fibrocystic breasts — hard, painful lumps worse before menses',
              'Mammary tumours of stony hardness with prickling pains',
              'Injuries of the breast from a blow leading to induration',
              'Suppression of sexual desire; weakness from its excess',
            ],
            modalities: 'Worse lying on the painful side, at night, from touch; better from warmth, motion.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Skin',
    aliases: ['skin', 'integument', 'cutan', 'derm'],
    pathologies: [
      {
        name: 'Psoriasis & Eczema',
        summary:
          'Chronic dermatoses — psoriasis with silvery, scaly plaques on extensor surfaces and the scalp; eczema with itching, erythema and vesiculation that may exude and crust.',
        remedies: [
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Dry, rough, scaly eruptions worse from scratching and cold',
              'Itching burns violently; skin like burnt paper',
              'Eruptions alternate with internal complaints (asthma)',
              'Anxious, restless, fastidious; worse after midnight',
            ],
            modalities: 'Worse from cold, scratching, after midnight; better from warmth.',
          },
          {
            name: 'Graphites',
            keynotes: [
              'Eczema with thick, honey-like, glutinous sticky discharge',
              'Skin cracks, especially in the folds and behind the ears',
              'Obstinate dryness; the skin will not heal — every injury suppurates',
              'Sad, weeps at trifles; Klopfen — hears music and weeps',
            ],
            modalities: 'Worse from warmth, at night; better in the dark, from wrapping up.',
          },
          {
            name: 'Sulphur',
            keynotes: [
              'The great skin remedy — dry, scaly, unhealthy skin',
              'Itching worse from the warmth of the bed, must scratch to bleeding',
              'Eruptions suppressed by ointments return with internal disease',
              'Standing is the worst position; philosophical, ragged philosopher',
            ],
            modalities: 'Worse from bathing, warmth of the bed, at 11 a.m.; better from dry warm weather.',
          },
          {
            name: 'Mezereum',
            keynotes: [
              'Eczema with thick, leathery crusts and pus beneath',
              'Itching intolerable, worse from the warmth of the bed',
              'Cradle cap with matting of the hair',
              'Pains lightning-like — shoot like electric shocks',
            ],
            modalities: 'Worse at night, from warmth, touch; better from cold air.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Pharynx & Tonsils',
    aliases: ['pharyn', 'tonsil', 'throat'],
    pathologies: [
      {
        name: 'Acute Tonsillitis & Pharyngitis',
        summary:
          'Acute inflammation of the tonsils and pharyngeal wall — sore throat, odynophagia, congestion with follicular or exudative patches, fever and tender cervical nodes; quinsy is the suppurative complication.',
        remedies: [
          {
            name: 'Belladonna',
            keynotes: [
              'Sudden violent onset with high fever, red face and bounding pulse',
              'Tonsils bright-red, glistening, hot — dryness with constriction',
              'Worse from jar, light, swallowing empty (not liquids)',
              'Vascular excitement — the eyes sparkle, pupils dilated',
            ],
            modalities: 'Worse 3 p.m., lying down, cold drafts, swallowing; better semi-erect, warm wraps.',
          },
          {
            name: 'Hepar Sulphuris',
            keynotes: [
              'Splinter-like pain as if a fish bone were lodged in the throat',
              'Threatening suppuration — quinsy with pus formation',
              'Chilly, hypersensitive — the least cold draft or touch aggravates',
              'Irritable, cross, cannot bear to be touched or looked at',
            ],
            modalities: 'Worse cold, uncovering, dry wind; better warmth, wrapping the throat.',
          },
          {
            name: 'Mercurius Solubilis',
            keynotes: [
              'Tonsils swollen, ulcerated with filthy membrane and foetid breath',
              'Profuse acrid saliva — moist, flabby tongue with teeth imprints',
              'Nightly aggravation with sweat that does not relieve',
              'Trembling of the body; thirst for cold water',
            ],
            modalities: 'Worse at night, warmth of the bed, damp; better moderate temperature.',
          },
          {
            name: 'Phytolacca',
            keynotes: [
              'Tonsils dark-red or slate-coloured, almost gangrenous looking',
              'Pain shoots to the ears on swallowing; hot drink worse',
              'Every swallow feels like a red-hot iron down the throat',
              'Glandular remedy — cervical nodes hard and painful',
            ],
            modalities: 'Worse from hot drinks, cold, damp; better cold drinks, rest.',
          },
          {
            name: 'Baryta Carbonica',
            keynotes: [
              'Chronic tonsillitis of children and dwarfish, backward patients',
              'Every cold settles in the tonsils; quinsy tendency',
              'Cervical and parotid glands enlarged and hard',
              'Shy, awkward, irresolute — hides behind the mother',
            ],
            modalities: 'Worse from cold, damp, lying on the painful side; better in open air.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Larynx',
    aliases: ['larynx', 'vocal'],
    pathologies: [
      {
        name: 'Laryngitis & Voice Disorders',
        summary:
          'Inflammation of the laryngeal mucosa and vocal folds — hoarseness, aphonia, dry irritating cough and stridor in children (croup) after viral infection or voice abuse.',
        remedies: [
          {
            name: 'Argentum Nitricum',
            keynotes: [
              'Hoarseness of singers and public speakers — high notes lost',
              'Papillomatous-looking granulations on the vocal cords',
              'Hurried, anxious, apprehensive; time passes too slowly',
              'Splinter-like pains and mucoid patchy laryngitis',
            ],
            modalities: 'Worse from sweets, 5 p.m., overuse; better cold, eructation.',
          },
          {
            name: 'Phosphorus',
            keynotes: [
              'Laryngitis with violent tickling that provokes coughing',
              'Hoarse, dry voice worse in the morning and cold air',
              'Craves cold drinks — vomited when they warm in the stomach',
              'Tall, slender, sensitive; fears thunderstorms and being alone',
            ],
            modalities: 'Worse speaking, cold air, lying on left side; better sleep on right side, cold food.',
          },
          {
            name: 'Hepar Sulphuris',
            keynotes: [
              'Croup — dry, hoarse, barking cough with choked voice',
              'Rattling mucus, anxious sweat; croup worse toward morning',
              'The slightest cold draft enters the larynx and provokes cough',
              'Over-sensitive to pain, touch, and cold',
            ],
            modalities: 'Worse from cold, uncovering, 3–4 a.m.; better warmth, damp weather.',
          },
          {
            name: 'Spongia Tosta',
            keynotes: [
              'Croup with dry, sawing, crowing cough — sounds like a saw through wood',
              'Wakes at midnight with fear and suffocation',
              'Dryness of the airways; holds head up to breathe',
              'Guiding key: cough better from eating and drinking warm things',
            ],
            modalities: 'Worse before midnight, cold dry wind, talking; better warm food and drink, bending forward.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Nose & Sinuses',
    aliases: ['nose', 'nasal', 'nose ', 'sinus', 'smell'],
    pathologies: [
      {
        name: 'Allergic Rhinitis & Sinusitis',
        summary:
          'Paroxysmal sneezing, watery nasal discharge with itching and obstruction; sinusitis adds facial pressure/pain over the affected sinus, post-nasal drip and mucopurulent discharge.',
        remedies: [
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Thin, acrid, watery discharge that excoriates the upper lip',
              'Sneezing in cold dry air without relief; nose obstructed',
              'Hay fever alternating with asthma; burning pains',
              'Fastidious, restless, anxious — prostration out of proportion',
            ],
            modalities: 'Worse after midnight, cold and cold drinks; better warmth, warm drinks, head elevated.',
          },
          {
            name: 'Allium Cepa',
            keynotes: [
              'Acrid nasal discharge with bland lachrymation (opposite of Euphrasia)',
              'Copious watery flow that burns and reddens nose and lip',
              'Sneezing worse in warm room, better open air',
              'Hay fever every August (rose cold); itching in the nose',
            ],
            modalities: 'Worse warm room, evening; better open air, cool room.',
          },
          {
            name: 'Natrum Muriaticum',
            keynotes: [
              'Violent sneezing with fluent coryza like egg-white; loss of smell',
              'Alternating discharge — blocked nose and fluent coryza',
              'Frontal sinus headache; cold sores at the onset',
              'Craves salt; consolation aggravates; reserved and tearful',
            ],
            modalities: 'Worse 10–11 a.m., heat, sun; better open air, sweating, evening.',
          },
          {
            name: 'Kali Bichromicum',
            keynotes: [
              'Sinusitis with thick, ropy, stringy, greenish-yellow discharge',
              'Plug-like clinkers that cannot be blown out',
              'Pain at the root of the nose and over the sinuses',
              'Pain shifts abruptly — one spot remits as another begins',
            ],
            modalities: 'Worse morning, cold, beer; better warmth.',
          },
          {
            name: 'Pulsatilla',
            keynotes: [
              'Thick, bland, yellow-green discharge, worse in a warm room',
              'Nose blocked at night, fluent in the open air',
              'Loss of smell; itching inside the nose and eyes',
              'Mild tearfulness, craves open air and coolness',
            ],
            modalities: 'Worse warm room, evening, lying down; better open air, gentle motion, cool.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Ear',
    aliases: ['ear', 'tympanic', 'cochlea', 'acoustic', 'eustach'],
    pathologies: [
      {
        name: 'Otitis Media & Ear Conditions',
        summary:
          'Middle-ear infection with deep earache, conductive deafness, fever and a bulging drum that may perforate and discharge; chronic cases leave dullness, tinnitus and vertigo.',
        remedies: [
          {
            name: 'Belladonna',
            keynotes: [
              'Acute otitis with intense throbbing, boring earache',
              'Drum pearly-white and bulging; face flushed, pupils dilated',
              'Hypersensitivity to noise and jar',
              'Right side, sudden violent onset',
            ],
            modalities: 'Worse 3 p.m., cold drafts, jar; better warmth, semi-erect posture.',
          },
          {
            name: 'Chamomilla',
            keynotes: [
              'Earache with unbearable, frantic pain — child screams and wants to be carried',
              'Hot sweat on the head, one cheek red the other pale',
              'Otitis after dentition or cold anger suppressed',
              'Oversensitive to pain, nothing pleases',
            ],
            modalities: 'Worse night, heat, teething; better being carried, cold weather.',
          },
          {
            name: 'Hepar Sulphuris',
            keynotes: [
              'Otorrhoea with foul, cheesy-smelling discharge',
              'Hypersensitive — cold air entering the ear aggravates',
              'Suppuration with sticking pains in the throat-ear axis',
              'Chilly, irritable, oversensitive patient',
            ],
            modalities: 'Worse cold, uncovering, touch; better warmth, wrapping up.',
          },
          {
            name: 'Mercurius Solubilis',
            keynotes: [
              'Discharge thick, yellow-green, offensive with blood',
              'Worse at night with sweat and salivation',
              'Deafness with wet sticking sensation in the ears',
              'Bilious, trembling, sycotic taint',
            ],
            modalities: 'Worse night, warmth of the bed, damp; better moderate temperature.',
          },
          {
            name: 'Kali Muriaticum',
            keynotes: [
              'Deafness from Eustachian catarrh — blocked, snapping ears',
              'Middle-ear effusion; drum retracted with effusion behind it',
              'White or grey, thick, gluey secretion',
              'The biochemic remedy of subacute catarrhal stages',
            ],
            modalities: 'Worse cold, damp, motion; better warmth, dry weather.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Eye',
    aliases: ['eye', 'iris', 'cornea', 'optic part', 'eyeball', 'eyelid', 'tarsal', 'conjunctiva'],
    pathologies: [
      {
        name: 'Conjunctivitis, Stye & Eye Strain',
        summary:
          'Inflammation of the conjunctiva — redness, grittiness, discharge and photophobia; styes are acute glandular infections of the lid margin; strain adds aching around the eyes with headache.',
        remedies: [
          {
            name: 'Euphrasia',
            keynotes: [
              'Bland lachrymation with acrid nasal discharge (opposite of Allium Cepa)',
              'Eyes water constantly — discharge excoriates the cheeks',
              'Photophobia; better in the dark, worse in the light',
              'Catarrhal conjunctivitis of the superficial kind',
            ],
            modalities: 'Worse light, evening, open air; better dark room, wiping.',
          },
          {
            name: 'Belladonna',
            keynotes: [
              'Violent throbbing pain, fiery red conjunctiva, dry heat',
              'Photophobia with dilated pupils and sparkling eyes',
              'Sudden onset — worse from jar and light',
              'Retinal congestion, iritis with ciliary pain',
            ],
            modalities: 'Worse light, 3 p.m., touching; better warmth, semi-erect posture.',
          },
          {
            name: 'Hepar Sulphuris',
            keynotes: [
              'Recurrent styes — every cold brings a new stye',
              'Eyelids inflamed, painful to the least touch or cold',
              'Fissures at the canthi with sticking pains',
              'Hypersensitive to cold and pain',
            ],
            modalities: 'Worse cold, touch; better warmth.',
          },
          {
            name: 'Ruta Graveolens',
            keynotes: [
              'Eye strain from fine work — aching, red, hot eyes after over-use',
              'Headache from overworked eyes; wants gentle pressure',
              'Hot tears flow with the ache',
              'Bruised soreness of the eyeball itself',
            ],
            modalities: 'Worse over-use of the eyes, cold, exertion; better warmth, rest, lying on the face.',
          },
          {
            name: 'Natrum Muriaticum',
            keynotes: [
              'Eyestrain with aching in and over the eyes',
              'Throbbing like little hammers — schoolgirl headache',
              'Eyes feel bruised, stiff, moving them aggravates',
              'Migrainous streak with salty craving and silent grief',
            ],
            modalities: 'Worse 10–11 a.m., reading, sun; better open air, sleep.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Tongue & Mouth',
    aliases: ['tongue', 'lip', 'salivary', 'parotid', 'mouth', 'buccal'],
    pathologies: [
      {
        name: 'Aphthous Stomatitis & Glossitis',
        summary:
          'Painful round or oval oral ulcers on the tongue and mucosa — white slough with a red halo; includes gum disease and glossitis with soreness, burning and altered taste.',
        remedies: [
          {
            name: 'Borax',
            keynotes: [
              'Aphthae with hot, tender mouth — child refuses to nurse',
              'White fungus-like patches bleed on touching',
              'Fear of downward motion — being laid down aggravates',
              'Timid, anxious, easily startled',
            ],
            modalities: 'Worse warm food, touch, downward motion; better cold things.',
          },
          {
            name: 'Mercurius Solubilis',
            keynotes: [
              'Ulcerations of the tongue and gums with foetid breath',
              'Profuse watery saliva — moist mouth yet great thirst',
              'Tongue flabby with tooth imprints and trembling',
              'Loose teeth, spongy bleeding gums',
            ],
            modalities: 'Worse night, warmth of bed, damp; better moderate temperature.',
          },
          {
            name: 'Nitricum Acidum',
            keynotes: [
              'Aphthae with sticking pains like splinters',
              'Ulcerated, bleeding gums; sharp corners of the mouth crack',
              'Salty saliva, offensive breath; urine smells like horse urine',
              'Anxious, hopeless, fretful with fear of death',
            ],
            modalities: 'Worse touch, evening, cold and damp; better warmth, riding in a carriage.',
          },
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Ulcerated, gangrenous-looking patches with burning pains',
              'Mucosa dry, red, hot as if scalded',
              'Great prostration, restlessness and thirst for small sips',
              'Fastidious anxiety with fear of dirt and germs',
            ],
            modalities: 'Worse after midnight, cold; better warmth, warm drinks.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Esophagus',
    aliases: ['esophag', 'oesoph'],
    pathologies: [
      {
        name: 'GERD & Esophagitis',
        summary:
          'Retrosternal heartburn and acid/food regurgitation after meals or lying down, with water-brash and nocturnal cough; chronic cases develop ulceration or stricture.',
        remedies: [
          {
            name: 'Robinia Pseudacacia',
            keynotes: [
              'The acid remedy — most violent acidity with burning in the throat',
              'Sour belching and vomiting, especially at night',
              'Vomiting of sour fluid wakes the patient',
              'Acidity with frontal headache',
            ],
            modalities: 'Worse lying down at night, fat foods; better walking in open air.',
          },
          {
            name: 'Nux Vomica',
            keynotes: [
              'Heartburn from late suppers, alcohol, sedentary lifestyle',
              'Sour bitter eructations an hour after food',
              'Constipation with frequent ineffectual urging',
              'Modern-life dyspepsia — drugs, stimulants, hurry',
            ],
            modalities: 'Worse early morning, after eating, spices; better short sleep, warmth.',
          },
          {
            name: 'Phosphorus',
            keynotes: [
              'Burning esophagitis — food swallowed with a hot-splash sensation',
              'Longs for cold drinks, vomited when warm in the stomach',
              'Burning pains and haemorrhagic tendency',
              'Sensitive, sympathetic, fearful temperament',
            ],
            modalities: 'Worse warm food, lying on left side; better cold food, sleep on the right side.',
          },
          {
            name: 'Lycopodium',
            keynotes: [
              'Acidity with bloating — everything turns to gas',
              'Sour eructations rising after a small meal',
              'Fullness after a few mouthfuls; 4–8 p.m. aggravation',
              'Weak digestion, craves warm drinks and sweets',
            ],
            modalities: 'Worse 4–8 p.m., cold drinks, cabbage; better warm drinks, loose clothing.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Thyroid',
    aliases: ['thyroid', 'parathyroid', 'pituitary', 'endocrine'],
    pathologies: [
      {
        name: 'Hypothyroidism & Goitre',
        summary:
          'Underactive thyroid — weight gain, cold intolerance, sluggishness, dry skin, constipation and bradycardia; goitre presents as diffuse or nodular neck swelling with pressure symptoms.',
        remedies: [
          {
            name: 'Calcarea Carbonica',
            keynotes: [
              'Chilly, flabby, obese patient — sweats on the head at night',
              'Sluggish mind and body; fears people and losing reason',
              'Goitre in the Calcarea constitution',
              'Craves eggs and indigestible things',
            ],
            modalities: 'Worse cold, exertion, ascending; better dry weather, lying on the painful side.',
          },
          {
            name: 'Fucus Vesiculosus',
            keynotes: [
              'The goitre remedy — thyroid enlargement with obesity',
              'Thyroid under-activity with obstinate constipation',
              'Flatulence with weight gain despite eating little',
              'Best in non-toxic goitre of the young',
            ],
            modalities: 'Better from warmth and gentle motion; worse cold and damp.',
          },
          {
            name: 'Graphites',
            keynotes: [
              'Obesity with skin eruptions and constipation — no urging at all',
              'Skin cracks and oozes honey-like sticky fluid',
              'Sad, weeps at trifles; hears music and must weep',
              'Hypothyroid dryness, scanty late menses',
            ],
            modalities: 'Worse warmth, night; better in the dark, cold bathing, wrapping up.',
          },
          {
            name: 'Thyroidinum',
            keynotes: [
              'Hypothyroid states with odd cravings — soup, salt, sweets',
              'Obesity with muscular weakness and dry skin',
              'Aggravation from emotion and cold',
              'Sarcode prepared from thyroid tissue — proven clinical remedy',
            ],
            modalities: 'Worse cold, emotions; better warmth, rest.',
          },
        ],
      },
      {
        name: 'Hyperthyroidism (Graves\' Disease)',
        summary:
          'Thyrotoxicosis with exophthalmos, tachycardia, tremor, weight loss despite appetite, heat intolerance, anxiety and a diffuse vascular goitre.',
        remedies: [
          {
            name: 'Iodum',
            keynotes: [
              'Thyrotoxic, thin despite a ravenous appetite',
              'Must eat often — anxious if not fed at meal time',
              'Hot patient who wants cool air, cannot tolerate warmth',
              'Restless, hurried, always busy while exhausted',
            ],
            modalities: 'Worse warmth, rest, fasting; better eating, open air, cold.',
          },
          {
            name: 'Lachesis Mutus',
            keynotes: [
              'Left-sided goitre, bluish-red, with constriction',
              'Cannot bear anything tight at the throat or waist',
              'Worse after sleep; symptoms surge on waking',
              'Loquacious, suspicious, passionate',
            ],
            modalities: 'Worse after sleep, warmth, tight clothes; better open air.',
          },
          {
            name: 'Natrum Muriaticum',
            keynotes: [
              'Graafian/Graves\' picture with silent grief background',
              'Throbbing headaches, fluttering heart with weakness',
              'Craves salt; consolation aggravates',
              'Emaciation with the goitre of thyroid imbalance',
            ],
            modalities: 'Worse 10–11 a.m., heat, sun; better open air, sweating.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Adrenal Gland',
    aliases: ['adrenal', 'suprarenal'],
    pathologies: [
      {
        name: 'Addisonian states & Stress Adaptation',
        summary:
          'Adrenal insufficiency picture — deep pigmentation of skin and mucosae, profound fatigue, hypotension with salt craving, weight loss and gastrointestinal symptoms.',
        remedies: [
          {
            name: 'Arsenicum Album',
            keynotes: [
              'Profound prostration with restlessness and burning pains',
              'Wasting, waxy pallor, oedema; thirst for small sips',
              'Anxiety about health, fastidious, fear of being alone',
              'Anasarca and progressive weakness',
            ],
            modalities: 'Worse after midnight, cold; better warmth, warm drinks.',
          },
          {
            name: 'Phosphoricum Acidum',
            keynotes: [
              'Debility from long worry, grief or rapid loss of fluids',
              'Apathetic — answers slowly, hair greys early',
              'Milky urine with sugar; diabetes of nervous origin',
              'Mild weakness rather than violent disease',
            ],
            modalities: 'Worse from emotions, mental exertion; better short sleep, warmth.',
          },
          {
            name: 'Argentum Nitricum',
            keynotes: [
              'Anticipation anxiety with hurried impulsiveness',
              'Craves sugar and salt which both aggravate',
              'Splinter-like pains, flatulence, spluttering diarrhoea',
              'Time passes too slowly — always hurried',
            ],
            modalities: 'Worse sweets, anticipation, 5 p.m.; better cold, firm pressure.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Spleen',
    aliases: ['spleen', 'splen'],
    pathologies: [
      {
        name: 'Splenomegaly & Chronic Malaria',
        summary:
          'Enlarged spleen from chronic malarial or haemolytic disease — left hypochondrial fullness, dragging pain and periodic fevers; a tropical 2nd-year pathology staple.',
        remedies: [
          {
            name: 'China Officinalis',
            keynotes: [
              'The remedy of periodicity — fevers return every 2nd or 7th day',
              'Spleen enlarged, hard with periodicity of symptoms',
              'Debility from loss of vital fluids; bloating not relieved by belching',
              'Discouraged, indifferent to surroundings',
            ],
            modalities: 'Worse at night, light touch, alternate days; better hard pressure, warmth.',
          },
          {
            name: 'Ceanothus Americanus',
            keynotes: [
              'The spleen remedy — deep pain in the left hypochondrium',
              'Splenic enlargement with inability to lie on the left side',
              'Chronic malaria with waxy skin and shallow breathing',
              'Pain extends to the shoulder on deep breathing',
            ],
            modalities: 'Worse motion, lying on the left side; better pressure and rest.',
          },
          {
            name: 'Natrum Muriaticum',
            keynotes: [
              'Chronic malarial states after quinine abuse',
              'Spleen enlarged with mapping-tongue and herpes',
              'Intermittent fever with thirst at long intervals',
              'Silent grief; craves salt, consolation aggravates',
            ],
            modalities: 'Worse 10–11 a.m., sun, heat; better open air, sweating.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Gallbladder',
    aliases: ['gallbladder', 'gall bladder', 'bile', 'biliary', 'cholecyst'],
    pathologies: [
      {
        name: 'Cholelithiasis & Cholecystitis',
        summary:
          'Biliary colic — severe right hypochondrial pain radiating to the right scapula after fatty meals, with nausea/vomiting, Murphy positivity and possible jaundice if a stone obstructs.',
        remedies: [
          {
            name: 'Chelidonium Majus',
            keynotes: [
              'The liver-gallbladder keynote: pain under the right scapula',
              'Yellow tongue with tooth imprints; bitter taste',
              'Desire for very hot drinks and milk',
              'Constipation with round ball-like stools',
            ],
            modalities: 'Worse 4 a.m. to 8 p.m., motion, right side; better hot drinks.',
          },
          {
            name: 'Lycopodium',
            keynotes: [
              'Biliary and liver troubles with chronic bloating',
              'Red sand in the urine; right-sided preference',
              'Sour eructations, sweetish water rising',
              'Weak digestion with 4–8 p.m. aggravation',
            ],
            modalities: 'Worse 4–8 p.m., cold drinks, cabbage; better warm drinks, loose garments.',
          },
          {
            name: 'Carduus Marianus',
            keynotes: [
              'Tender, painful gallbladder region worse lying on the left side',
              'Clay stools, dark urine, jaundice of portal congestion',
              'Bitter taste and vomiting of greenish fluid',
              'Especially suited to alcoholic and cirrhotic livers',
            ],
            modalities: 'Worse lying on the left side, motion; better warmth.',
          },
          {
            name: 'Nux Vomica',
            keynotes: [
              'Biliary colic after heavy, rich food or alcohol',
              'Bruised soreness of the liver region with retching',
              'The sedentary, stimulant-abusing constitution',
              'Portal congestion with constipation and urging',
            ],
            modalities: 'Worse morning, after eating, stimulants; better short sleep, warmth.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Rectum & Anus',
    aliases: ['rectum', 'anal', 'anus', 'haemorrhoid'],
    pathologies: [
      {
        name: 'Haemorrhoids & Anal Fissure',
        summary:
          'Haemorrhoidal piles — internal or external vascular cushions that bleed, itch, or prolapse; fissure adds severe tearing pain during and after defecation with sentinel tag.',
        remedies: [
          {
            name: 'Aesculus Hippocastanum',
            keynotes: [
              'Piles with the characteristic pain — sticks like a splinter',
              'Dry, painful piles with little bleeding; sacro-iliac backache',
              'Sensation of full of small sticks in the rectum',
              'Purple, bleeding piles with rectal weight',
            ],
            modalities: 'Worse standing, morning; better cold, walking gently.',
          },
          {
            name: 'Hamamelis',
            keynotes: [
              'Profuse dark venous bleeding — the venous congestion remedy',
              'Piles with soreness and raw feeling at the anus',
              'Passive haemorrhage with weakness',
              'Varicose veins anywhere with bruised soreness',
            ],
            modalities: 'Worse warmth, motion, standing; better cold, rest.',
          },
          {
            name: 'Nitricum Acidum',
            keynotes: [
              'Fissure with sticking, splinter-like pain — like glass',
              'Bleeding with every stool; cracks at the anal orifice',
              'Offensive urine and saliva; salty taste',
              'Stool passed with straining and splinter pain',
            ],
            modalities: 'Worse touch, evening, cold and damp; better warmth.',
          },
          {
            name: 'Sulphur',
            keynotes: [
              'Itching, burning piles worse with heat and standing',
              'Flushes of heat with the ragged philosopher look',
              'Morning diarrhoea driving out of bed at 6 a.m.',
              'Suppressed skin eruptions return as piles',
            ],
            modalities: 'Worse warmth of bed, standing, 11 a.m.; better dry warm weather, lying on the right side.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Prostate',
    aliases: ['prostate'],
    pathologies: [
      {
        name: 'BPH & Prostatitis',
        summary:
          'Prostatic enlargement — frequency, nocturia, weak stream, hesitancy and retention; prostatitis adds pelvic/perineal pain, fever and dysuria.',
        remedies: [
          {
            name: 'Sabal Serrulata',
            keynotes: [
              'Prostate remedy — enlarged gland with urinary difficulties',
              'Retention with constant urging at night',
              'Wasted testes with loss of sexual power',
              'Cold hands and feet; aversion to sympathy',
            ],
            modalities: 'Worse cold, exertion; better warmth, rest.',
          },
          {
            name: 'Conium Maculatum',
            keynotes: [
              'Hard, nodular prostate of the elderly',
              'Interrupted flow — stops and starts of urine',
              'Suppressed desire with hard glandular swellings',
              'Worse lying on the left side, from celibacy',
            ],
            modalities: 'Worse lying on the painful side, night, touch; better warmth, motion, light pressure.',
          },
          {
            name: 'Thuja Occidentalis',
            keynotes: [
              'Prostatic enlargement with split, forked urinary stream',
              'Sycotic background with history of suppressed gonorrhoea',
              'Sensation of a fragile bubble at the meatus',
              'Fixed ideas, as if something alive in the abdomen',
            ],
            modalities: 'Worse 3 a.m., cold, damp, onions; better warmth, dry weather.',
          },
          {
            name: 'Cannabis Sativa',
            keynotes: [
              'Acute prostatitis with burning, cutting urethral pains',
              'Urine dropped hot and scalding; must squeeze to void',
              'Retention with painful urging',
              'Gonorrhoeal thread with yellow thick discharge',
            ],
            modalities: 'Worse urinating, cold, coffee; better warmth.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Joints & Muscles',
    aliases: ['joint', 'arthritis', 'rheumat', 'femur', 'tibia', 'humerus', 'shoulder', 'knee', 'elbow', 'wrist', 'hip', 'bursa', 'tendon', 'ligament'],
    pathologies: [
      {
        name: 'Rheumatoid Arthritis, Gout & Low-Back Pain',
        summary:
          'Inflammatory polyarthritis with morning stiffness, swelling and deformity; gout with acute monoarticular podagra; lumbago with muscular strain worse on initial motion.',
        remedies: [
          {
            name: 'Rhus Toxicodendron',
            keynotes: [
              'The restless remedy — first motion painful, continued motion better',
              'Stiff on rising, limbers up with movement',
              'Better from warmth and rubbing; damp cold weather aggravates',
              'Trembling weakness with the triangular wrist tip',
            ],
            modalities: 'Worse rest, cold damp, first motion; better continued motion, warmth, dry weather.',
          },
          {
            name: 'Bryonia Alba',
            keynotes: [
              'Stitching pains worse from the least motion — must hold still',
              'Joints hot, swollen, pale-red; better hard pressure',
              'Irritable, wants to be left alone; thirst for large cold drinks',
              'Delirium of going home; white tongue with thirst',
            ],
            modalities: 'Worse motion, warmth, eating; better rest, lying on the painful side, cold drinks.',
          },
          {
            name: 'Ledum Palustre',
            keynotes: [
              'Gout of the small joints — begins in the feet, may travel upward',
              'Pain better from cold applications (paradoxical)',
              'Punctured wounds — small joints hot, swollen',
              'Ankle and first-metatarsal gouty nodosities',
            ],
            modalities: 'Worse warmth of the bed, motion, night; better cold bathing, rest.',
          },
          {
            name: 'Colchicum Autumnale',
            keynotes: [
              'Gout migrating joint to joint — shifts with the season',
              'Odour of the urine unbearable to the patient',
              'Autumnal gouty dyspepsia — smells offend the stomach',
              'Tiny joints swollen, intolerant of touch',
            ],
            modalities: 'Worse motion, cold damp, evening; better warmth, rest.',
          },
          {
            name: 'Causticum',
            keynotes: [
              'Chronic arthritis with tendon shortening and contracture',
              'Paralytic weakness of single parts; involuntary urination coughing',
              'Better from damp wet weather (paradoxical guide)',
              'Melancholy hopelessness with sympathetic tearfulness',
            ],
            modalities: 'Worse dry cold clear weather, motion; better damp wet weather, warmth.',
          },
        ],
      },
    ],
  },
  {
    organ: 'Spine & Vertebrae',
    aliases: ['vertebr', 'spine', 'spinal', 'sacrum', 'intervertebral'],
    pathologies: [
      {
        name: 'Cervical & Lumbar Spondylosis, Sciatica',
        summary:
          'Degenerative spine disease — cervical pain with stiffness and radicular arm symptoms, lumbar spondylosis with discogenic and sciatic radiation to the leg; worse on rising and prolonged posture.',
        remedies: [
          {
            name: 'Kalmia Latifolia',
            keynotes: [
              'Pain and stiffness shooting down from the neck between the scapulae',
              'Rheumatic pains shift suddenly and travel downward',
              'Pulse soft and quick with heart symptoms alternating',
              'Pains worse on the right side, better lying on the back',
            ],
            modalities: 'Worse motion, cold, night; better lying on the back, warmth.',
          },
          {
            name: 'Cimicifuga Racemosa',
            keynotes: [
              'Stiff neck and back — sensation of a vise around the neck',
              'Pain shoots up and down the spine like an electric current',
              'Rheumatism worse during menses; chorea-like contractions',
              'Dark forebodings — thinks she is under a black cloud',
            ],
            modalities: 'Worse cold, during menses; better warmth, open air, eating.',
          },
          {
            name: 'Gnaphalium Polycephalum',
            keynotes: [
              'Sciatica with intense cramping pain alternating with numbness',
              'Cramps and sleeplessness from the pain',
              'Sensation as if the leg were numb then painful by turns',
              'Pain down the back of the thigh to the calf',
            ],
            modalities: 'Worse motion, night; better sitting, flexing the limb.',
          },
          {
            name: 'Hypericum Perforatum',
            keynotes: [
              'Spinal injuries — coccyx pain after falls, coccygodynia',
              'Nerve injuries with sharp shooting pain along the spine',
              'Tetanus-like rigidity after spinal trauma',
              'Pain worse in damp weather and from jar',
            ],
            modalities: 'Worse damp, jar, cold; better warmth, lying on the face.',
          },
        ],
      },
    ],
  },
];

// Organ entries are matched to atlas parts/concepts by alias (see clinicalForOrgan).
// Keep new entries above this marker and aliases in sync with the atlas part names.
export function clinicalForOrgan(name: string | undefined): OrganClinical | null {
  if (!name) return null;
  const needle = name.toLowerCase().trim();
  for (const entry of BHMS_PATHOLOGY) {
    if (entry.aliases.some(a => needle === a || needle.includes(a))) return entry;
  }
  return null;
}
