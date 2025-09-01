import { content } from "./content.constants.js";

//Constantes para manipulação do DOM
const pageContent = document.getElementById('pageContent');
const title = document.getElementById('pageTitle');

//Função para obter o conteúdo da página baseado na rota
function getPageContent(route) {
    if (route === "/") {
        return {
            title: content[0].home,
            content: content[0].homeContent
        };
    } else if (route === "/sobre-mim") {
        return {
            title: content[1].aboutMe,
            content: content[1].aboutMeContent
        };
    } else if (route === "/formacao") {
        return {
            title: content[2].academicFormation,
            content: content[2].academicFormationContent
        };
    } else if (route === "/portfolio") {
        const link = "https://github.com/JucieleGomes";
        return {
            title: content[3].Portfolio,
            content: `${content[3].PortfolioLink}<br><br><a id="link" href="${link}" target="_blank">${link}</a>`
        };
    }
    else if (route === "/contato") {
        return {
            title: content[4].contact,
            content: content[4].form
        };
    }
}

//Função de roteamento para ataulzar o conteúdo da página
function router() {
    const hash = location.hash.replace('#', '') || '/';
    pageContent.innerHTML = getPageContent(hash).content;
    title.innerText = getPageContent(hash).title;
}

//Eventos para decetar mudanças e carregar o conteúdo inicial da página
window.addEventListener('hashchange', router);
window.addEventListener('load', router);