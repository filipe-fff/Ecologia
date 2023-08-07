export default function MenuBotao(){


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

    return (
        <nav className="menu">
            <ul>{
                links_botao.map((nome, index) => (
                    <li key={index}>
                        <a href={nome[1]}>{nome[0]}</a>
                    </li>
                ))
            }</ul>
        </nav>
    )
}