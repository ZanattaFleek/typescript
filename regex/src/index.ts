let texto: string = `

A Fleek Cursos é uma escola de Tech & English.

Tech pois tem tecnologia. Cursos de Informática básica, Formação Completa em Excel, Design Gráfico, Programação WebAPP, Marketing Digital, Robótica (a partir de 8 anos), Jovem Aprendiz Digital, Auxiliar Administrativo.

CEP: 35.500-010

English porque tem curso completo de inglês com 3 (três) anos de duração com conteúdo digital, professores com experiência internacional além de material completo incluso no curso.

CEP: 35.500-010

Trabalhamos com cursos online (Ao vivo com Professor) e presenciais.

A Fleek fica na Av. 21 de Abril, 504 - Centro - Divinópolis-MG
CEP: 35.500-010

email Geral da Fleek: secretaria@fleekcursos.com.br

email SAC da Fleek: sac@fleekcursos.com.br

email Coordenacao Pedagógica: coordenacao@fleekcursos.com.br

Obrigado!

`

let emails: Array<string> | null = texto.match(/\b[a-z|0-9]*@[a-z|0-9]*\.(com.br|br|com)/gi)

console.log('Emails: ', emails)

let ceps: Array<string> | null = texto.match(/\b[0-9][0-9].[0-9]{3}-[0-9]{3}\b/gi)

console.log('CEPs: ', ceps)
