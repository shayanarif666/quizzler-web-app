/* =========================
   Quizzler — OOP only for Questions
   ========================= */

/* ===== OOP: Questions handling ===== */
class Question {
  #text; #options; #answerIndex;
  constructor(text, options, answerIndex) {
    this.#text = text;
    this.#options = options;
    this.#answerIndex = answerIndex;
  }
  get text(){ return this.#text; }
  get options(){ return this.#options; }
  isCorrect(choiceIndex){
    if (!Number.isFinite(choiceIndex)) return false;
    return choiceIndex === this.#answerIndex;
  }
  correctIndex(){ return this.#answerIndex; }           // <-- NEW (for feedback)
}

class Quiz {
  constructor({ id, key, title, questions }) {
    this.id = id;       // unique per language+category (e.g., "JavaScript:encapsulation")
    this.key = key;     // category key (general/abstraction/exceptions/encapsulation/inheritance/polymorphism)
    this.title = title;
    this.questions = questions.map(q => new Question(q.text, q.options, q.answer));
  }
}

/* ===== Data: Language Banks (short samples — extend freely) ===== */
const BANK = {
  'JavaScript': [
    {key:'general', title:'General OOP Questions', questions:[
      {text:'Which is NOT an OOP pillar?', options:['Encapsulation','Polymorphism','Recursion','Inheritance'], answer:2},
      {text:'Class is a…', options:['Blueprint','Object','Function','Package'], answer:0},
      {text:'Constructor runs…', options:['On object creation','On page load','Never','On click'], answer:0},
    ]},
    {key:'abstraction', title:'Abstraction Questions', questions:[
      {text:'Abstraction focuses on…', options:['Hiding complexity','Hiding data','Iteration','Caching'], answer:0},
      {text:'Best construct for abstraction?', options:['Interface/Abstract','Loop','Array','Pointer'], answer:0},
    ]},
    {key:'exceptions', title:'Exception Handling in OOP Questions', questions:[
      {text:'try/catch is for…', options:['Error handling','CSS','Loop','Import'], answer:0},
      {text:'finally runs…', options:['Always','Never','Only on error','Only on success'], answer:0},
    ]},
    {key:'encapsulation', title:'Encapsulation Questions', questions:[
      {text:'Encapsulation is…', options:['Binding data & methods','Copy-paste','Recursion','None'], answer:0},
      {text:'Private field symbol?', options:['private','_','#','seal'], answer:2},
      {text:'Use … to access private data.', options:['Getters/Setters','Globals','Console','Magic'], answer:0},
      {text:'Closures help with…', options:['Encapsulation','Polymorphism','Compilation','None'], answer:0},
    ]},
    {key:'inheritance', title:'Inheritance Questions', questions:[
      {text:'Keyword to call base ctor?', options:['base','parent','super','this'], answer:2},
      {text:'Prefer … over inheritance.', options:['Composition','Globals','Recursion','None'], answer:0},
      {text:'JS uses … inheritance.', options:['Prototypal','Multiple','None','Diamond'], answer:0},
    ]},
    {key:'polymorphism', title:'Polymorphism Questions', questions:[
      {text:'Polymorphism means…', options:['Many forms','One form','Copy','None'], answer:0},
      {text:'Strategy pattern uses…', options:['Polymorphism','CSS','DOM','SQL'], answer:0},
    ]},
  ],

  'C++': [
    {key:'general', title:'General OOP Questions', questions:[
      {text:'Which is NOT an OOP pillar?', options:['Abstraction','Encapsulation','Inheritance','Pointers'], answer:3},
      {text:'Class in C++ is a…', options:['Blueprint','Template specialization','Package','Macro'], answer:0},
    ]},
    {key:'abstraction', title:'Abstraction Questions', questions:[
      {text:'Pure virtual function creates…', options:['Abstract class','Template','Namespace','Struct'], answer:0},
      {text:'Interface-like behavior via…', options:['Abstract base class','Union','Friend','Macro'], answer:0},
    ]},
    {key:'exceptions', title:'Exception Handling in OOP Questions', questions:[
      {text:'Exception base type?', options:['std::exception','std::error','std::fault','std::panic'], answer:0},
    ]},
    {key:'encapsulation', title:'Encapsulation Questions', questions:[
      {text:'Private members declared with…', options:['private:','secret:','hide:','internal:'], answer:0},
      {text:'Access through…', options:['Getters/Setters','Global vars','Macros','Friends only'], answer:0},
    ]},
    {key:'inheritance', title:'Inheritance Questions', questions:[
      {text:'Keyword for inheritance?', options:['extends','inherits','public/private/protected','baseof'], answer:2},
      {text:'Base ctor called in…', options:['Member initializer list','Body','Destructor','main'], answer:0},
    ]},
    {key:'polymorphism', title:'Polymorphism Questions', questions:[
      {text:'Runtime polymorphism via…', options:['virtual functions','templates','macros','typedef'], answer:0},
    ]},
  ],

  'C#': [
    {key:'general', title:'General OOP Questions', questions:[
      {text:'Which is NOT an OOP pillar?', options:['Abstraction','Inheritance','Encapsulation','LINQ'], answer:3},
      {text:'Constructor in C# is…', options:['Method with same class name','Static method','Property','Event'], answer:0},
    ]},
    {key:'abstraction', title:'Abstraction Questions', questions:[
      {text:'C# abstraction via…', options:['abstract class / interface','delegate only','unsafe','record'], answer:0},
    ]},
    {key:'exceptions', title:'Exception Handling in OOP Questions', questions:[
      {text:'All exceptions derive from…', options:['System.Exception','System.Error','System.Fault','System.Panic'], answer:0},
    ]},
    {key:'encapsulation', title:'Encapsulation Questions', questions:[
      {text:'Encapsulation using…', options:['Properties (get/set)','public fields','goto','dynamic'], answer:0},
    ]},
    {key:'inheritance', title:'Inheritance Questions', questions:[
      {text:'Base class call keyword?', options:['super','this','base','root'], answer:2},
    ]},
    {key:'polymorphism', title:'Polymorphism Questions', questions:[
      {text:'Override keyword?', options:['override','virtualize','rebase','poly'], answer:0},
    ]},
  ],

  'Java': [
    {key:'general', title:'General OOP Questions', questions:[
      {text:'Which is NOT an OOP pillar?', options:['Inheritance','Encapsulation','Abstraction','JVM'], answer:3},
    ]},
    {key:'abstraction', title:'Abstraction Questions', questions:[
      {text:'Abstract method…', options:['Has no body','Is static','Is final','Is native only'], answer:0},
    ]},
    {key:'exceptions', title:'Exception Handling in OOP Questions', questions:[
      {text:'Checked exceptions example?', options:['IOException','NullPointerException','Error','AssertionError'], answer:0},
    ]},
    {key:'encapsulation', title:'Encapsulation Questions', questions:[
      {text:'Use … for data hiding.', options:['private fields + getters/setters','public fields','packages','Thread'], answer:0},
    ]},
    {key:'inheritance', title:'Inheritance Questions', questions:[
      {text:'Keyword to call base ctor?', options:['super','base','parent','root'], answer:0},
    ]},
    {key:'polymorphism', title:'Polymorphism Questions', questions:[
      {text:'Runtime polymorphism via…', options:['method overriding','generics','packages','imports'], answer:0},
    ]},
  ],
};

/* Title text → category key (HTML cards already have these titles) */
const TITLE_TO_KEY = {
  'General OOP Questions':'general',
  'Abstraction Questions':'abstraction',
  'Exception Handling in OOP Questions':'exceptions',
  'Encapsulation Questions':'encapsulation',
  'Inheritance Questions':'inheritance',
  'Polymorphism Questions':'polymorphism'
};

/* ===== Simple storage (no OOP, vanilla) ===== */
const STORE = {
  key: 'quizzler_store_v1',
  get(){
    try { return JSON.parse(localStorage.getItem(this.key)) || {plays:{}, lastScore:{}, theme:'light'}; }
    catch { return {plays:{}, lastScore:{}, theme:'light'}; }
  },
  set(data){ localStorage.setItem(this.key, JSON.stringify(data)); },
  record(quizId, percent){
    const s = this.get();
    s.plays[quizId] = (s.plays[quizId] || 0) + 1;
    s.lastScore[quizId] = percent;
    this.set(s);
  },
  last(quizId){
    const s = this.get();
    return s.lastScore[quizId] ?? 0;
  },
  playsByCategory(quizzes){
    const s = this.get();
    const agg = { general:0, encapsulation:0, inheritance:0, polymorphism:0 };
    const bucket = k => (k==='abstraction'||k==='exceptions') ? 'general' : k;
    for(const q of quizzes){ agg[bucket(q.key)] += (s.plays[q.id] || 0); }
    return agg;
  },
  theme(){ return this.get().theme || 'light'; },
  setTheme(mode){
    const s = this.get(); s.theme = mode; this.set(s);
  }
};

/* ===== Vanilla DOM state ===== */
let CURRENT_LANG = 'JavaScript';
let QUIZZES = [];                 // current language’s Quiz[]
const CARD_REFS = new Map();      // key -> {sub, score, bar, btn}

/* ===== Helpers ===== */
function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

/* ===== Wire cards (once) ===== */
function cacheCards(){
  qsa('.quiz-card.v2').forEach(card=>{
    const title = qs('.qc-title', card).textContent.trim();
    const key = TITLE_TO_KEY[title];
    if(!key) return;
    CARD_REFS.set(key, {
      sub: qs('.qc-sub', card),
      score: qs('.qc-value', card),
      bar: qs('.qc-progress > span', card),
      btn: qs('.play-btn', card)
    });
  });
}

/* ===== Language switch ===== */
function updateLanguage(lang){
  CURRENT_LANG = lang;
  // build quizzes (OOP only here for questions)
  const bank = BANK[lang] || [];
  QUIZZES = bank.map(item => new Quiz({
    id: `${lang}:${item.key}`,
    key: item.key,
    title: item.title,
    questions: item.questions
  }));

  // set per-card counts / last score / click handler — vanilla DOM
  for(const quiz of QUIZZES){
    const refs = CARD_REFS.get(quiz.key);
    if(!refs) continue;
    refs.sub.textContent = `${quiz.questions.length} Questions`;
    const last = STORE.last(quiz.id);
    refs.score.textContent = `${last}%`;
    refs.bar.style.width = `${last}%`;
    refs.btn.onclick = () => startQuiz(quiz);
  }

  // analytics counters (plays) per current language — vanilla DOM
  const agg = STORE.playsByCategory(QUIZZES);
  const aVals = qsa('.a-card .a-value');
  if(aVals.length>=4){
    aVals[0].textContent = String(agg.general);
    aVals[1].textContent = String(agg.encapsulation);
    aVals[2].textContent = String(agg.inheritance);
    aVals[3].textContent = String(agg.polymorphism);
  }
}

/* ===== Tabs (vanilla) ===== */
function wireTabs(){
  qsa('.lang-tabs .tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      qsa('.lang-tabs .tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      updateLanguage(btn.textContent.trim());
    });
  });
}

/* ===== Modal (vanilla) ===== */
function ensureModal(){
  if (qs('#quiz-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'quiz-modal';
  modal.innerHTML = `
    <div class="qm-backdrop"></div>
    <div class="qm-dialog">
      <div class="qm-head">
        <div class="qm-title">Quiz</div>
        <button class="qm-close" aria-label="Close"><i class="ri-close-line"></i></button>
      </div>
      <div class="qm-body">
        <div class="qm-meta"><span class="qm-qc"></span><span class="qm-progress"></span></div>
        <div class="qm-question"></div>
        <div class="qm-options"></div>
      </div>
      <div class="qm-foot">
        <button class="qm-prev" disabled>Previous</button>
        <button class="qm-next">Next</button>
        <button class="qm-submit" style="display:none">Submit</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  qs('.qm-backdrop', modal).addEventListener('click', hideModal);
  qs('.qm-close', modal).addEventListener('click', hideModal);
}

let RUN = null; // { quiz, index, answers[] }

function startQuiz(quiz){
  RUN = { quiz, index:0, answers:new Array(quiz.questions.length).fill(undefined) };
  showModal();
  renderStep();
}

function renderStep(){
  const modal = qs('#quiz-modal');
  const { quiz, index, answers } = RUN;
  const q = quiz.questions[index];

  qs('.qm-title', modal).textContent = `[${CURRENT_LANG}] ${quiz.title}`;
  qs('.qm-qc', modal).textContent = `Question ${index+1} of ${quiz.questions.length}`;
  qs('.qm-progress', modal).textContent = `${Math.round((index/quiz.questions.length)*100)}%`;
  qs('.qm-question', modal).textContent = q.text;

  const opts = qs('.qm-options', modal);
  opts.innerHTML = '';
  q.options.forEach((opt, i)=>{
    const label = document.createElement('label');
    label.className = 'qm-opt';
    label.innerHTML = `<input type="radio" name="q_${index}" value="${i}" ${answers[index]===i?'checked':''}/><span>${opt}</span>`;
    opts.appendChild(label);
  });

  // buttons
  const last = index === quiz.questions.length - 1;
  const prevBtn = qs('.qm-prev', modal);
  const nextBtn = qs('.qm-next', modal);
  const submitBtn = qs('.qm-submit', modal);

  prevBtn.textContent = 'Previous';
  nextBtn.textContent = 'Next';
  submitBtn.textContent = 'Submit';

  prevBtn.disabled = index === 0;
  nextBtn.style.display = last ? 'none' : 'inline-flex';
  submitBtn.style.display = last ? 'inline-flex' : 'none';

  prevBtn.onclick = () => move(-1);
  nextBtn.onclick = () => move(1);
  submitBtn.onclick = () => finishQuiz();

  // ---- selection feedback + locking
  const inputs = qsa('input[type=radio]', opts);

  function lockCurrent() {
    inputs.forEach(i => i.disabled = true);
    opts.classList.add('locked');
  }

  inputs.forEach(inp=>{
    inp.addEventListener('change', ()=>{
      RUN.answers[index] = Number(inp.value);
      applyFeedback(q, index);
      lockCurrent();                 // <-- lock after first pick
    });
  });

  // If already answered earlier: re-apply feedback and keep locked
  if (Number.isFinite(answers[index])) {
    applyFeedback(q, index);
    lockCurrent();
    // also restore the "checked" state (already set in HTML above)
  }
}

function applyFeedback(question, qIdx){
  // clear old states
  qsa('.qm-opt', qs('#quiz-modal')).forEach(el=>{
    el.classList.remove('correct','wrong');
  });

  const correct = question.correctIndex();
  const chosen = RUN.answers[qIdx];

  // mark correct option green
  const optLabels = qsa('.qm-opt', qs('#quiz-modal'));
  if (optLabels[correct]) optLabels[correct].classList.add('correct');

  // if user chose wrong, mark that one red
  if (Number.isFinite(chosen) && chosen !== correct && optLabels[chosen]) {
    optLabels[chosen].classList.add('wrong');
  }
}

function move(dir){
  const sel = qs('#quiz-modal input[type=radio]:checked');
  if (sel) RUN.answers[RUN.index] = Number(sel.value);
  const next = RUN.index + dir;
  if (next < 0 || next >= RUN.quiz.questions.length) return;
  RUN.index = next;
  renderStep();
}

function finishQuiz(){
  const sel = qs('#quiz-modal input[type=radio]:checked');
  if (sel) RUN.answers[RUN.index] = Number(sel.value);

  // pure scoring (no OOP side-effects)
  let correct = 0;
  RUN.quiz.questions.forEach((question, i)=>{
    if (question.isCorrect(RUN.answers[i])) correct++;
  });
  const pct = Math.round((correct / RUN.quiz.questions.length) * 100);

  // store + update card
  STORE.record(RUN.quiz.id, pct);
  const refs = CARD_REFS.get(RUN.quiz.key);
  if (refs) {
    refs.score.textContent = `${pct}%`;
    refs.bar.style.width = `${pct}%`;
  }
  // refresh analytics counters for current language
  updateLanguage(CURRENT_LANG);

  // show result view with progress bar
  const body = qs('#quiz-modal .qm-body');
  body.innerHTML = `
    <div class="qm-result">
      <h3>Result</h3>
      <p><strong>${correct}</strong> correct out of <strong>${RUN.quiz.questions.length}</strong></p>
      <div class="result-bar"><span style="width:${pct}%"></span></div>
      <div class="result-pct">${pct}%</div>
    </div>
  `;

  // foot: show only Close
  const prevBtn = qs('.qm-prev', qs('#quiz-modal'));
  const nextBtn = qs('.qm-next', qs('#quiz-modal'));
  const submitBtn = qs('.qm-submit', qs('#quiz-modal'));
  prevBtn.style.display='none';
  nextBtn.style.display='none';
  submitBtn.textContent='Close';
  submitBtn.onclick = hideModal;
}

function showModal(){ qs('#quiz-modal').classList.add('open'); }
function hideModal(){
  const modal = qs('#quiz-modal');
  modal.classList.remove('open');
  // restore content for next run
  qs('.qm-body', modal).innerHTML = `
    <div class="qm-meta"><span class="qm-qc"></span><span class="qm-progress"></span></div>
    <div class="qm-question"></div>
    <div class="qm-options"></div>
  `;
  // restore foot buttons
  const prevBtn = qs('.qm-prev', modal);
  const nextBtn = qs('.qm-next', modal);
  const submitBtn = qs('.qm-submit', modal);
  prevBtn.style.display='';
  nextBtn.style.display='';
  submitBtn.textContent='Submit';
  submitBtn.onclick = finishQuiz;
}

/* ===== Dark Mode (vanilla) ===== */
function applyTheme(mode){
  document.body.setAttribute('data-theme', mode);
  // swap icon
  const btn = qs('.actions .icon-btn[title="Toggle Theme"]');
  if(btn){
    const i = btn.querySelector('i');
    i.className = (mode === 'dark') ? 'ri-sun-line' : 'ri-moon-line';
  }
}

function initTheme(){
  const mode = STORE.theme();
  applyTheme(mode);
  const btn = qs('.actions .icon-btn[title="Toggle Theme"]');
  if(btn){
    btn.addEventListener('click', ()=>{
      const next = (document.body.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      STORE.setTheme(next);
      applyTheme(next);
    });
  }
}

/* ===== Mobile fly search (optional) ===== */
function wireMobileSearch(){
  const mobileSearchBtn = qs('.search-mobile');
  if(!mobileSearchBtn) return;
  mobileSearchBtn.addEventListener('click', ()=>{
    let fly = qs('#fly-search');
    if(!fly){
      fly = document.createElement('div');
      fly.id = 'fly-search';
      fly.innerHTML = `<input type="text" placeholder="Search Quiz…" autofocus />`;
      qs('.topbar-inner').appendChild(fly);
      setTimeout(()=>fly.classList.add('open'),10);
      qs('#fly-search input').addEventListener('blur',()=>fly.remove());
    }
  });
}

/* ===== Boot ===== */
document.addEventListener('DOMContentLoaded', ()=>{
  cacheCards();
  wireTabs();
  ensureModal();
  updateLanguage(CURRENT_LANG);
  initTheme();
  wireMobileSearch();
});
