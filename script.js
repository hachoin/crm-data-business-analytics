const aiCourses=document.getElementById("aiCourses");
const dsCourses=document.getElementById("dsCourses");

for(let i=1;i<=10;i++){
aiCourses.innerHTML+=`<div class="course-card">
<h3>Salesforce CPQ Course ${i}</h3>
<p>Duration: 6 Months</p>
<p>Price: INR 700</p>
</div>`;
}

for(let i=1;i<=13;i++){
dsCourses.innerHTML+=`<div class="course-card">
<h3>Salesforce Admin Course ${i}</h3>
<p>Duration: 5 Months</p>
<p>Price: INR 450</p>
</div>`;
}

function showCategory(category){
document.querySelectorAll(".course-category").forEach(el=>el.style.display="none");
document.getElementById(category).style.display="block";
document.querySelectorAll(".tabs button").forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");
}

document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click",()=>{
const answer=btn.nextElementSibling;
answer.style.display=answer.style.display==="block"?"none":"block";
});
});

const aiCoursesData = [
    {title:"Salesforce CPQ Course", level:"Beginner", duration:"6 Weeks", price:"$350", image:"salesforce-cpq-course.png"},
  {title:"Salesforce Admin", level:"Intermediate", duration:"6 Weeks", price:"$350", image:"salesforce-admin-course.png"},
  {title:"Salesforce Development", level:"Advanced", duration:"6 Weeks", price:"$350", image:"salesforce-development-course.png"},
  {title:"Salesforce Admin+Development", level:"Advanced", duration:"6 Weeks", price:"$350", image:"salesforce-combo-course.png"},
     {title:"Salesforce Advanced", level:"Advanced", duration:"6 Weeks", price:"$350", image:"Salesforce Advanced Admin.png"},
  {title:"ServiceNow Admin", level:"Intermediate", duration:"6 Weeks", price:"$350", image:"servicenow-admin-course.png"},
 
  {title:"Salesforce Business", level:"Beginner",  duration:"6 Weeks", price:"$350", image:"salesforce-ba-course.png"},
  {title:"Salesforce AI", level:"Advanced", duration:"6 Weeks", price:"$350", image:"salesforce-ai-course.png"},
  {title:"Workflow Automation", level:"Intermediate", duration:"6 Weeks", price:"$350", image:"workflow-automation-course.png"},
  {title:"ServiceNow Development", level:"Advanced", duration:"6 Weeks", price:"$350", image:"ServiceNow Development.png"}

];

const dsCoursesData = [
  {title:"Data Science with Python", level:"Beginner", duration:"6 Weeks", price:"$350", image:"data-science-with-python-course.png"},
  {title:"Data Analytics", level:"Beginner", duration:"6 Weeks", price:"$350", image:"data-analytics-course.png"},
  {title:"SQL", level:"Intermediate", duration:"6 Weeks", price:"$350", image:"sql-course.png"},
  {title:"Power BI", level:"Intermediate", duration:"8 Weeks", price:"$1100", image:"power-bi-course.png"},
 
  {title:"Data Analytics Capstone Project", level:"Intermediate", duration:"6 Weeks", price:"$360", image:"data-analytics-capstone-project-course.png"},
  {title:"Data Analytics with python", level:"Intermediate", duration:"6 Weeks", price:"$350", image:"Data-analytics-with-python-course.png"},
  {title:"Pyspark certifcation", level:"Advanced", duration:"10 Weeks", price:"$320", image:"pyspark-certification-course.png"},
  {title:"SQL with Python", level:"Advanced", duration:"12 Weeks", price:"$300", image:"SQL with Python.png"},
  {title:"Teradata", level:"Advanced", duration:"12 Weeks", price:"$360", image:"teradata-course.png"},
  {title:"PL SQL", level:"Intermediate", duration:"8 Weeks", price:"$3400", image:"pl-sql-course.png"},
  {title:"Data Warehousing", level:"Advanced", duration:"8 Weeks", price:"$300", image:"data-warehousing-course.png"}

];

function createCard(course){
  let levelClass = course.level.toLowerCase();
  return `
  <div class="course-card">
 

    <div class="course-content">
      <span class="badge ${levelClass}">${course.level}</span>
      <h3>${course.title}</h3>
      <div class="course-meta">
        <span>${course.duration}</span>
        <span class="price">${course.price}</span>
      </div>
      <a href="#" class="btn">Enroll Now</a>
    </div>
  </div>`;
}

document.getElementById("aiCourses").innerHTML =
  aiCoursesData.map(createCard).join("");

document.getElementById("dsCourses").innerHTML =
  dsCoursesData.map(createCard).join("");

function showCategory(id, btn){
  document.querySelectorAll('.category').forEach(el=>el.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function searchCourse(value){
  value = value.toLowerCase();
  document.querySelectorAll('.course-card').forEach(card=>{
    card.style.display =
      card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
}

window.addEventListener("scroll", function() {
  const roadmap = document.querySelector(".roadmap-section");
  const steps = document.querySelectorAll(".roadmap-step");
  const line = document.querySelector(".progress-line");

  const position = roadmap.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if(position < screenPosition){
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add("active");
      }, index * 400);
    });

    line.style.width = "100%";
  }
});

/* Sticky background change */
window.addEventListener("scroll", function(){
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/* Mobile toggle */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

/* Active menu highlight */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }
  });
});

function animateSalary(){
  const counters = document.querySelectorAll(".salary-amount");

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace(/\D/g,'');
      const increment = target / 100;

      if(current < target){
        counter.innerText = "$" + Math.ceil(current + increment).toLocaleString();
        setTimeout(update, 20);
      } else {
        counter.innerText = "$" + target.toLocaleString();
      }
    };
    update();
  });
}

window.addEventListener("scroll", function(){
  const section = document.querySelector(".salary-section");
  const position = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if(position < screenPosition){
    animateSalary();
  }
});


document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    document.querySelectorAll(".faq-item").forEach(faq => {
      if(faq !== item){
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

function createCard(course){
  let levelClass = course.level.toLowerCase();

  return `
  <div class="course-card">

    <div class="course-image">
      <img src="${course.image}" alt="${course.title}">
    </div>

    <div class="course-content">
      <span class="badge ${levelClass}">${course.level}</span>
      <h3>${course.title}</h3>
      <div class="course-meta">
        <span>${course.duration}</span>
        <span class="price">${course.price}</span>
      </div>
      <a href="#" class="btn">Enroll Now</a>
    </div>

  </div>`;
}
