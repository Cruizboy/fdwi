function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  hamburger.classList.toggle("active");
  menu.classList.toggle("show-menu");
}

function change(){
  document.getElementById("donationForm").innerHTML = "Thanks for your donation!";
  alert("Thanks for your donation!");
  addEventListener("submit", function(event){
    event.preventDefault();
  });
console.log("Form submitted");
StopPropagation();


}

document.getElementById("donationForm").addEventListener("submit", change);

