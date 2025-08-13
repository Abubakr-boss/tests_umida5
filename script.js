const questions=[


{q:"Sayyohlik infratuzilmasini barqaror qilish uchun qanday usullar qo‘llaniladi?",opts:["Energiya va suv tejovchi qurilmalar o‘rnatish, chiqindilarni qayta ishlash tizimlarini joriy etish","Zamonaviy joylashtiruv vositalari va yangi mehmonxonalar qurish","Transport yo‘llarini kengaytirish va elektromobillar sonini ko‘paytirish","Reklama kampaniyalarini oshirish va barqaror rivojlanish maqsadlariga erishish"],a:"A"},
{q:"Barqaror turizmda madaniy merosni saqlashning iqtisodiy foydasi nimadan iborat?",opts:["Turistlar oqimlarini oshirish va mahalliy iqtisodiyotni qo‘llab-quvvatlash","Davlat byudjetiga soliq tushumlarini oshirish va mahalliy iqtisodiyotni qo‘llab-quvvatlash","Davlat byudjetiga soliq tushumlarini oshirish va turistlarni rag‘batlantirish tizimini joriy etish","Xalqaro tadbirlarga e’tibor berish va madaniy merosning iqtisodiy samarasini ishlab chiqish"],a:"A"},
{q:"Barqaror turizmda chiqindilarni boshqarishning samarali tizimi qanday tashkil etiladi?",opts:["Chiqindilarni ajratib yig‘ish, qayta ishlash va chiqindilarni kamaytirish strategiyalarini joriy etish","Chiqindilarni yig‘ib, yondirib tashlash va o‘g‘it sifatida ekinlar uchun ishlatish","Chiqindilarni yoqish va ularni kamaytirish strategiyalarini joriy etish","Chiqindilarni tabiiy ravishda yo‘q bo‘lishiga maxsus joy ajratish"],a:"A"},
{q:"Barqaror turizmni rivojlantirishda davlat va xususiy sektorning hamkorligi qanday bo‘lishi kerak?",opts:["Siyosatlarni birgalikda ishlab chiqish, infratuzilmani rivojlantirish va investitsiyalarni jalb qilish","Har ikki sektor mustaqil faoliyat yuritishi maqsadga muvofiq bo‘ladi","Davlat sektorining boshqaruvini kuchaytirish va investitsiyalarni jalb qilish","Xususiy sektor ulushini g‘arb mamlakatlari singari oshirish"],a:"A"},
{q:"Barqaror turizmda sayyohlarning ekologik xabardorligini oshirish qanday amalga oshiriladi?",opts:["Ma’lumot berish, targ‘ibot kampaniyalari va ekoturizm qoidalarini tushuntirish orqali","Ekologik qat’iy chora-tadbirlar va qoidalarni joriy etish orqali","Sayyohlar oqimini cheklash va ekoturizm qoidalarini tushuntirish orqali","Ekologik marshrutlarni reklama qilish va rivojlantirish orqali"],a:"A"},
{q:"Ekoturizmda barqarorlikni ta’minlash uchun qaysi tamoyillar amal qiladi?",opts:["Tabiatni muhofaza qilish, mahalliy jamoalar manfaatlarini hisobga olish va iqtisodiy foydani taqsimlash","Daromad ko‘paytirish, mahalliy jamoalar manfaatlarini hisobga olish va iqtisodiy foydani taqsimlash","Sayyohlar ehtiyojlarini inobatga olish va mahalliy jamoalar manfaatlarini hisobga olish va iqtisodiy foydani taqsimlash","Atrof-muhitga e’tiborni kuchaytirib, samarali monitoringni olib borish"],a:"A"},
{q:"Barqaror turizmda suv resurslarini samarali boshqarish uchun qanday choralar qo‘llaniladi?",opts:["Suv tejovchi texnologiyalarni joriy etish, suvni qayta ishlash va toza suv manbalarini muhofaza qilish","Suv iste’molini oshirish, suvni qayta ishlash va toza suv manbalarini muhofaza qilish","Yomg‘ir va qor suvini yig‘ish va samarali foydalanish","Suv resurslarini nazoratini kuchaytirish va toza suv manbalarini muhofaza qilish"],a:"A"},
{q:"Barqaror turizmda transportning ekologik ta’sirini kamaytirish uchun qaysi strategiya samarali hisoblanadi?",opts:["Jamoat transporti, velosiped yo‘llari va elektromobillarni rivojlantirish","Avtobus va shaxsiy avtomobillarni ko‘paytirish","Transport infratuzilmasini kengaytirish holda ekologik choralarni kengaytirish","Piyoda yurishni rag‘batlantirish va keng targ‘ib qilish"],a:"A"},
{q:"Barqaror turizmni rivojlantirishda mahalliy aholining roli qanday?",opts:["Turizm faoliyatida faol ishtirok etish, qaror qabul qilishda qatnashish va madaniy merosni himoya qilish","Mehmonlarga xizmat ko‘rsatish va daromad olish","Mahalliy aholini turizmni tashkiliy jarayonlaridan chetlatish","Iqtisodiy jihatdan foyda ko‘rish va madaniy merosni himoya qilish"],a:"A"},
{q:"Barqaror turizmda chiqindilarni kamaytirishning muhim tamoyili nima?",opts:["Chiqindilarni hosil bo‘lishining oldini olish va qayta ishlashni rag‘batlantirish","Chiqindilarni yig‘ish va qayta ishlashni rag‘batlantirish","Chiqindilarni yoqish va qayta ishlashni rag‘batlantirish","Chiqindilarni tabiatga tashlab qo‘yish va tabiiy chirish jarayonini rag‘batlantirish"],a:"A"},


]

let idx = 0;
let correct = 0;
let wrong = 0;
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const form = document.getElementById('quizForm');
const typed = document.getElementById('typedAnswer');
const progress = document.getElementById('progress');
const resultBox = document.getElementById('resultBox');
const submitBtn = document.getElementById('submitBtn');

function renderQuestion() {
  if (idx >= questions.length) return;
  const q = questions[idx];
  qnumEl.textContent = `Savol ${idx + 1} / ${questions.length}`;
  qtextEl.textContent = q.q;
  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const id = `opt${i}`;
    const div = document.createElement('label');
    div.className = 'option';
    div.innerHTML = `<input name='choice' type='radio' value='${letters[i]}' id='${id}' /><span>${letters[i]}. ${opt}</span>`;
    optionsEl.appendChild(div);
  });
  progress.textContent = `${idx + 1} / ${questions.length}`;
  typed.value = '';
}

function showResults() {
  resultBox.style.display = 'block';
  resultBox.innerHTML = `<strong>Test yakunlandi</strong><div class='small' style='margin-top:8px'>To'g'ri javoblar: ${correct}<br> Noto'g'ri javoblar: ${wrong}<br> Umumiy: ${questions.length}</div>`;
  submitBtn.disabled = true;
  form.style.display = 'none';
  progress.textContent = `${questions.length} / ${questions.length}`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const chosenRadio = document.querySelector("input[name='choice']:checked");
  let answer = chosenRadio ? chosenRadio.value : typed.value.trim().toUpperCase();
  if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
    alert('Iltimos A, B, C yoki D variantidan birini tanlang yoki yozing');
    return;
  }
  const correctAnswer = questions[idx].a;
  if (answer === correctAnswer) correct++; else wrong++;
  idx++;

  if (idx >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

typed.addEventListener('input', e => {
  const v = e.target.value.trim().toUpperCase();
  if (['A', 'B', 'C', 'D'].includes(v)) {
    const radio = document.querySelector(`input[value='${v}']`);
    if (radio) radio.checked = true;
  }
});

optionsEl.addEventListener('click', e => {
  const input = e.target.closest('label')?.querySelector('input');
  if (input) {
    typed.value = input.value;
  }
});

renderQuestion();
