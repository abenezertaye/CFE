const hiddenElements = document.querySelectorAll('.hidden-one');
const secondHiddenElements = document.querySelectorAll('.hidden-two');
const modes = document.querySelectorAll('.modes');
const header = document.getElementById('header');
const heroSection = document.getElementById('hero-section');
const submitBtn = document.getElementById('submit-btn');
const inputs = document.querySelectorAll('.data');

const observer = new IntersectionObserver(entries=>{

  entries.forEach(entry=>{
    console.log(entry);

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
});

const secondObserver = new IntersectionObserver(entries=>{

  entries.forEach(entry=>{
    console.log(entry);

    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
    }
  })
});

const modeChoice = (mode) => {
  mode.addEventListener('click', () => {
    modes.forEach(mode=>mode.style.borderBottom = '4px solid salmon');
    mode.style.borderBottom = '4px solid rgb(20, 109, 204)';
  });
};

modes.forEach(mode => modeChoice(mode));


hiddenElements.forEach(el=>observer.observe(el));
secondHiddenElements.forEach(el=>observer.observe(el));


window.addEventListener('scroll',()=>{
    if( window.scrollY>=600){
      header.style.background = '#fff';
    }else{
       header.style.background = 'none';
    }
});


submitBtn.addEventListener('click',()=>{
  inputs.forEach(el=>console.log(el.value));
})