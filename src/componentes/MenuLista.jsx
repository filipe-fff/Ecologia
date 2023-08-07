import '../JS/MenuLista'

export default function MenuLista(){

    const links_botao = [
        ["colônia", "colonia.html"],
        ["competição", "competicao.html"],
        ["canibarismo", "canibalismo.html"],
        ["mutualismo", "mutualismo.html"],
        ["comensarismo", "comensalismo.html"],
        ["amensarismo", "amensarismo.html"],
        ["parasitismo", "parasitismo.html"],
        ["predação", "predacao.html"]
    ]

    return <nav className="menuListaNav">
        <div className="menuListaSeta">{'>>>'}</div>
        <ul className="menuLista">{
            links_botao.map((nome, index) => (
                <li key={index} className="menuListaBotao"><a href={nome[1]}>{nome[0]}</a></li>
            ))
            
        }</ul>
    </nav>
}