// JS code here
const couleurs = [ 'var(--jaune)', 'var(--bleu)', 'var(--rouge)', 'var(--vert)', 'var(--blanc)', 'var(--noir)'];
//récupération du choix de l'ordi
let choixOrdi;


function initialize() {
  //initialise les choix en gris clair
  document.getElementById('choix1').style.backgroundColor = 'lightgray';
  document.getElementById('choix2').style.backgroundColor = 'lightgray';
  document.getElementById('choix3').style.backgroundColor='lightgray';
  document.getElementById('choix4').style.backgroundColor='lightgray';
  document.getElementById('choix5').style.backgroundColor='lightgray';
  //randomization du choix de l'ordi
  const solution = [];  
  for (i = 0; i < couleurs.length - 1; i++) {
      const random = Math.floor(Math.random() * couleurs.length);
      solution.push(couleurs[random]);
  }
  //console.log(solution);
  return solution;
}

function setChoice(event) {
  //console.log('setChoice');
 
  let couleur = event.target.className;
  
  switch (couleur) {
    case 'jaune':
      couleur = 'var(--jaune)';
      break;
    case 'bleu':
      couleur = 'var(--bleu)';
      break;
    case 'rouge':
      couleur = 'var(--rouge)';
      break;
    case 'vert':
      couleur = 'var(--vert)';
      break;
    case 'blanc':
      couleur = 'var(--blanc)';
      break;
    case 'noir':
      couleur = 'var(--noir)';
      break;
  }
    
  const parentId = event.target.parentNode.getAttribute('id');
  const tentative1 = document.getElementById('choix1');
  const tentative2 = document.getElementById('choix2');
  const tentative3 = document.getElementById('choix3');
  const tentative4 = document.getElementById('choix4');
  const tentative5 = document.getElementById('choix5');

  switch (parentId) {
    case 'couleur1':
      tentative1.style.backgroundColor = couleur;
      break;
    case 'couleur2':
      tentative2.style.backgroundColor = couleur;
      break;
    case 'couleur3':
      tentative3.style.backgroundColor = couleur;
      break;
    case 'couleur4':
      tentative4.style.backgroundColor = couleur;
      break;
    case 'couleur5':
      tentative5.style.backgroundColor = couleur;
      break;
  }

}

function compare() {
  //console.log("compare");
  const tentative1 = document.getElementById('choix1').style.backgroundColor;
  const tentative2 = document.getElementById('choix2').style.backgroundColor;
  const tentative3 = document.getElementById('choix3').style.backgroundColor;
  const tentative4 = document.getElementById('choix4').style.backgroundColor;
  const tentative5 = document.getElementById('choix5').style.backgroundColor;
  
  const tentative = [tentative1, tentative2, tentative3, tentative4, tentative5];
  let border = [];
  //console.log(tentative, choixOrdi);
  
  if (tentative.includes('lightgray')) {
    alert ('Merci de sélectionner une couleur pour chaque emplacement.');
    return null;
  }
  
  if (isWinner(tentative, choixOrdi)) {
    alert("vous avez gagné !");
  } else {
    //alert("vous avez perdu !");
    for (let i = 0; i < tentative.length; i++) {
      if (tentative[i] !== choixOrdi[i]) {
        if (choixOrdi.includes(tentative[i])) {
          border[i] = '🤔';
        } else {
          border[i] = '🤡';
        }
      } else {
        border[i] = '👌';
      }
    }
    document.getElementById('result').innerHTML += `<section class=\"results\"><div style=\"background-color:${tentative1};\">${border[0]}</div><div style=\"background-color:${tentative2};\">${border[1]}</div><div style=\"background-color:${tentative3};\">${border[2]}</div><div style=\"background-color:${tentative4};\">${border[3]}</div><div style=\"background-color:${tentative5};\">${border[4]}</div></section>`;
  }  
}

function isWinner(utilisateur, ordi) {
  return utilisateur.join() === ordi.join();
}


function reset() {
  location.reload();
}

window.onload = () => {
    choixOrdi = initialize();
    //déclaration des eventlisteners
    const list = document.querySelectorAll('#wrapperChoix section div');
    list.forEach(element => element.addEventListener('click', setChoice));
};