
/*habilidades*/ 
const habilidades = [
  { nome: "HTML5", nivel: "Avançado", icone: "bi bi-filetype-html" },
  { nome: "CSS3", nivel: "Avançado", icone: "bi bi-filetype-css" },
  { nome: "JavaScript", nivel: "Básico", icone: "bi bi-filetype-js" },
  { nome: "Java", nivel: "Intermediário", icone: "bi bi-cup-hot" },
  { nome: "MySQL", nivel: "Básico", icone: "bi bi-database" }
];


const container = document.getElementById("lista-habilidades");

habilidades.forEach(hab => {
  const card = document.createElement("div");
  card.classList.add("card-habilidade");
  
  card.innerHTML = `
    <i class="${hab.icone}"></i>
    <h3>${hab.nome}</h3>
    <p>Nível: ${hab.nivel}</p> 
  `;
  
  container.appendChild(card);
});

/*Contato com Email JS*/

emailjs.init("SnfuqXUltn3DY_bwK"); 

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  console.log("passei aqui!");

 
  emailjs.sendForm("service_iqho1ks", "template_2f68fyc", form)
    .then((response) => {
      alert("Mensagem enviada com sucesso!");
      form.reset(); 
    })
    .catch((error) => {
      console.log(error);
      alert("Ocorreu um erro com o envio do seu e-mail");
    });
});
