
let tabLinks = document.getElementsByClassName('tab-link');
let tabConts = document.getElementsByClassName("tab-kontent");

let egn = document.getElementById('egnes').addEventListener("click", function() {
    filterContent('egeneskaper');
});

let utdn = document.getElementById('utdan').addEventListener("click", function() {
    filterContent('utdanning');
});

let venner = document.getElementById('venn').addEventListener("click", function() {
    filterContent('venner');
});



function filterContent(category) {
    for (let i = 0; i < tabConts.length; i++) {
      tabConts[i].style.display = "none";
      if (tabConts[i].id === category) {
        tabConts[i].style.display = "block";
      }
    }
  
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active-tab');
      if (tabLinks[i].textContent === category) {
        tabLinks[i].classList.add('active-tab');
      }
    }
  }
  
  // Add active class to the current button (highlight it)
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active-link");
      current[0].classList.remove("active-link");
      this.classList.add("active-link");
    });
  }
  


let sideMen = document.getElementById('sidemenu');
let close = document.getElementById('close').addEventListener("click", closemenu);
let open = document.getElementById('open').addEventListener("click", openmenu);

function openmenu() {
    sideMen.style.right = "0";
}

function closemenu() {
    sideMen.style.right = "-200px";
}

