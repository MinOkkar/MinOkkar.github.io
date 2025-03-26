function openTab(tabId) {
  // Hide main menu
  document.getElementById("main-menu").style.display = "none";

  // Hide all tabs
  document.querySelectorAll(".terminal-tab").forEach((tab) => {
    tab.style.display = "none";
    if (tabId === "about") {
      about();
    } else if (tabId === "projects") {
      projects();
    } else if (tabId === "contact") {
      contact();
    }
  });

  // Show selected tab
  document.getElementById(tabId).style.display = "block";
}

function closeTab() {
  // Hide all tabs
  document.querySelectorAll(".terminal-tab").forEach((tab) => {
    tab.style.display = "none";
  });

  // Show main menu
  document.getElementById("main-menu").style.display = "block";
}
// main section
let i1 = 0;
let i2 = 0;
let navIndex = 0;
const text1 =
  "Passionate about understanding systems,finding vulnerabilities, and building secure applications.";
const navLinks = ["about", "projects", "contact"];
function typeWriter1() {
  if (i1 < text1.length) {
    document.getElementById("typing1").innerHTML += text1.charAt(i1);
    i1++;
    setTimeout(typeWriter1, 20);
  } else {
    document.getElementById("guesttem").innerHTML = ">> ls";
    typeNav();
  }
}
function typeNav() {
  if (navIndex < navLinks.length) {
    let navItem = document.createElement("li");
    navItem.innerHTML = navLinks[navIndex];
    navItem.setAttribute("onclick", "openTab('" + navLinks[navIndex] + "')");
    document.getElementById("navtem").appendChild(navItem);
    navIndex++;
    setTimeout(typeNav, 500);
  }
}
window.onload = function () {
  typeWriter1();
};
window.onload = typeWriter1;
//----------------------------------------- //

// about
let text2 = ">> about_me -al";
let i3 = 0;

function about() {
  if (i3 < text2.length) {
    document.getElementById("typingCommand").innerHTML += text2.charAt(i3);
    i3++;
    setTimeout(about, 100);
  } else {
    setTimeout(() => {
      document.getElementById("aboutMeOutput").style.display = "block";
    }, 500);
  }
}
//----------------------------------------//

//projects
let text3 = ">> projects";
let i4 = 0;
function projects() {
  if (i4 < text3.length) {
    document.getElementById("typingCommand2").innerHTML += text3.charAt(i4);
    i4++;
    setTimeout(projects, 100);
  } else {
    setTimeout(() => {
      document.getElementById("projectsOutput").style.display = "block";
    }, 500);
  }
}
//----------------------------------------//

//contact
let text4 = ">> contact --show-all";
let i5 = 0;
function contact() {
  if (i5 < text4.length) {
    document.getElementById("typingCommand3").innerHTML += text4.charAt(i5);
    i5++;
    setTimeout(contact, 100);
  } else {
    setTimeout(() => {
      document.getElementById("contactOutput").style.display = "block";
    }, 500);
  }
}
