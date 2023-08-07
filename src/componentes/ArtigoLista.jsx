export default function ArtigoLista(){

    

    const artigos_lista = [
        ['Relações Ecologicas', 10],
        ['Colônia', 10],
        ['Competição', 10],
        ['Canibarismo', 10],
        ['Mutualismo', 10],
        ['Comensarismo',10],
        ['Comensarismo [Vídeo]', 10],
        ['Amensarismo', 10],
        ['Parasitismo', 10],
        ['Predação', 10],
        ['Competição', 10],
        ['Tabela', 10],
        ['Rodapé', 10]
    ]

    return<nav className="artigo_menu">
        <ul>{
            artigos_lista.map((artigo, index) => (
                <li key={index} >{artigo[0]}</li>
            ))
        }</ul>
        <div>click</div>
    </nav>
}