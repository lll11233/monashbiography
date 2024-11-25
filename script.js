// var context = document.querySelector(".context");
// var obj = new Mark(context);
// obj.mark(searchkeyword [, options]);



// obj.unmark(options);


function changeTitle(){
    if (document.getElementById("titlec").textContent = "Lauren Ames"){
      document.getElementById("titlec").textContent = "Lorenzo";
  
    } else if (document.getElementById("titlec").textContent="Lorenzo"){
      document.getElementById("titlec").textContent = "Lauren Ames";
  
    }
};
  
  
  const observer = new IntersectionObserver((entries)=>{
  
  
    entries.forEach((entry)=>{
  
  
      if(entry.isIntersecting){
  
        entry.target.classList.add('show');
      }
      // else if (entry.isIntersecting && entry.target.classList('musicnote')){
      //   entry.target.classList.add('show');
      // }
      else{
        entry.target.classList.remove('show');
      }
    })
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=>observer.observe(el));
  
  var i = 0;
  var txt = 'Lorem ipsum typing effect!'; /* The text */
  var speed = 60; /* The speed/duration of the effect in milliseconds */
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}
  
  
//   var i = 0;
//   var lyrics = "We'll dance and play till the stars fade, across the sky we're writing our names, got no regrets we want it all"; /* The text */
//   var speed = 80; /* The speed/duration of the effect in milliseconds */
  
  
//   function changeText() {
  
//     document.getElementById("carpediem").innerHTML = "";
  
//     function typeWriterc() {
//       if (i < lyrics.length) {
//         document.getElementById("carpediem").innerHTML += lyrics.charAt(i);
//         i++;
//         setTimeout(typeWriterc, speed);
//       }
//     }
//     typeWriterc();
// }
  
function goToBiography(targetId) {
  // Redirect to the biography page and scroll to the target section
  window.location.href = `bio.html#${targetId}`;
}

// function highlightText(element) {
//   // Redirect to the biography page and scroll to the target section
//   const textElement = element;
//   textElement.innerHTML = textElement.innerHTML.replace(element,'<mark>""<mark>');

// }



// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("returnMelbourne");
//   button.addEventListener("click", () => {
//     goToBiography('event8');
//     highlightText('highlight8');
//   });
// });

// function handleClick(event) {
//   // Get the text content of the clicked element

//   const clickedText =  document.getElementById;
//   clickedText = clickedText.target.textContent
//   // .target.textContent;
//   console.log("Clicked text:", clickedText);

//   // Example: Highlight the clicked element
//   event.target.style.backgroundColor = "yellow";
// }


document.querySelectorAll('.highlight-link').forEach(link => {
  link.addEventListener('click', function (event) {
      // Remove previous highlights
      document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

      // Add highlight to the target section
      const targetId = this.getAttribute('href').substring(1); // Extract ID
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
          targetElement.classList.add('highlight');

          // Optional: Automatically remove highlight after some time
          setTimeout(() => targetElement.classList.remove('highlight'), 2000);
      }
  });
});