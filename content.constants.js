//Arquivo de constantes do conteúdo
export const content = [
    {
        home: "Olá, seja bem-vindo ao meu portfólio",
        homeContent: "Me chamo Juciele Gomes e aqui você encontrará informações sobre mim, minha formação acadêmica, meus projetos e como entrar em contato comigo.",
    },
    {
        aboutMe: "Sobre mim",
        aboutMeContent: "Tenho 30 anos, moro em Santos litoral de São Paulo, tenho 3 gatinhos, adoro assistir séries e ler livros, sou uma dev que fez transição de carreira da área da saúde para a área de desenvolvimento web.",
    },
    {
        academicFormation: "Formação Acadêmica",
        academicFormationContent: "Sou formada em biomedicina pela Unimonte, especialista em diagnnóstico por imagem pela FMU, após 7 anos atuando na área de diagnóstico de imagem como biomédica fiz transição de carreira, me formei no bootcamp de desenvolvimento frontEnd pela Laboratória e hoje estou cursando Análise e desenvolvimento de sistemas pela Uninter.",
    },
    {
        Portfolio: "Portfólio",
        PortfolioLink: "Para mais informações sobre projetos anteriores, acesse minha página no Github, lá você encontrará meu portfólio completo.",
    },

    {
        contact: "",
        form: `
            <form id="contactForm" class="contact-form">
                <label id="labelTitle" for="contactTitle">Deixe sua</label><br><br>
                <label for="nome">Nome:</label><br>
                <input type="text" id="nome" name="nome" required><br><br>
                <label for="telefone">Telefone:</label><br>
                <input type="tel" id="telefone" name="telefone" required><br><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                <label for="mensagem">Mensagem:</label><br>
                <textarea id="mensagem" name="mensagem" rows="4" required></textarea><br><br>
                <button type="submit">Enviar</button>
            </form>
        `
    }
]