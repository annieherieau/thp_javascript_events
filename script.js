// Fonctionnalité 1 :

function Exo1() {
  console.log("coucou");
}
let footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", Exo1);

// Fonctionnalité 1-bis : Afficher lr nombre de click
let number_of_clicks = 0;
function Exo1Bis() {
  number_of_clicks++;
  console.log(`clic numéro ${number_of_clicks}`);
}

footer.addEventListener("click", Exo1Bis);

// Fonctionnalité 2 : toggle Menu hamberger
function ToggleMenu() {
  navbarMenu.classList.toggle("collapse");
}
let navbarMenu = document.getElementById("navbarHeader");
let hamburger_icon = document.querySelector(".navbar-toggler");

hamburger_icon.addEventListener("click", ToggleMenu);

// Fonctionnalité 3 : mettre le text du bouton en rouge
let first_card = document.querySelectorAll(".card")[0];
let edit_btn = first_card.getElementsByTagName("button")[1];
function RedText() {
  edit_btn.style.color = "red";
}

edit_btn.addEventListener("click", RedText);

// Fonctionnalité 4 : mettre le text en vert
let second_card = document.querySelectorAll(".card")[1];
let edit_btn2 = second_card.getElementsByTagName("button")[1];
let card_text = second_card.getElementsByClassName("card-text")[0];
card_text.style.color = "";
function GreenText() {
  card_text.style.color === "green"
    ? (card_text.style.color = "")
    : (card_text.style.color = "green");
}

edit_btn2.addEventListener("click", GreenText);

// Fonctionnalité 5 : toggle le lien vers bootstrap
let link = document.getElementsByTagName("link")[0];
let header = document.querySelector("header");
let bootstrap_url = link.href;

function ToggleBootstrap() {
  if (link.href) {
    link.removeAttribute("href");
  } else {
    link.setAttribute("href", bootstrap_url);
  }
}

header.addEventListener("dblclick", ToggleBootstrap);

// Fonctionnalité 6 : reduire/afficher la carte
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  let btn = card.querySelector("button");
  btn.addEventListener("mouseover", () => {
    // text disparait (toggle)
    let text = card.querySelector(".card-text");
    text.classList.toggle("collapse");

    // image 20%
    let img = card.querySelector("img");
    img.style.width === "20%"
      ? (img.style.width = "")
      : (img.style.width = "20%");
  });
});

// Fonctionnalité 7 : déplacer la derniere carte en premier
let album = document.querySelector(".album .row");
let next_btn = document.querySelector("section .btn-secondary");
next_btn.addEventListener("click", MoveLastCard);
let div_cards = album.children;

function MoveLastCard() {
  album.insertBefore(div_cards[div_cards.length - 1], div_cards[0]);
}

// Fonctionnalité 8: déplacer la premiere carte en dernier
let previous_btn = document.querySelector("section .btn-primary");
// désactiver la redirection au click:
previous_btn.addEventListener("click", (event) => {
  event.preventDefault();
});
previous_btn.addEventListener("click", MoveFirstCard);

function MoveFirstCard() {
  album.insertBefore(div_cards[0], div_cards[div_cards.length - 1].nextSibling);
}

// Fonctionnalité 9:
// selection du logo
let logo = document.querySelector(".navbar-brand");
logo.addEventListener("mouseover", ChangeDisplay);
let container = album.parentNode;
// container.classList.add("justify-content-center");
// Touche clavier

function ChangeDisplay() {
  document.addEventListener("keydown", (event) => {
    let container_class = container.classList[1];
    switch (event.key) {
      case "a":
        // 4 colonnes / start
        ChangeClassName(div_cards, "col-md-3");
        container.style.marginLeft = "0px";
        break;
      case "y":
        // 4 colonnes / center
        ChangeClassName(div_cards, "col-md-3");
        container.style.marginLeft = "auto";
        container.style.marginRight = "auto";
        break;

      case "p":
        // 4 colonnes / end
        ChangeClassName(div_cards, "col-md-3");
        container.style.marginLeft = "auto";
        container.style.marginRight = "0px";
        break;
      case "b":
        // 3 colonnes / center
        ChangeClassName(div_cards, "col-md-4");
        container.style.marginLeft = "auto";
        container.style.marginRight = "auto";
        break;
      default:
        break;
    }
  });
  console.log();
}

function ChangeClassName(HTMLcollection, class_name) {
  for (let card of HTMLcollection) {
    card.className = class_name;
  }
}
