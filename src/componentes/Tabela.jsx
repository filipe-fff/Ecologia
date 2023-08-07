export default function Tabela(){
    return <table>
        <tbody>
            <tr>
                <th>Classificações das relações ecológicas</th>
                <th>Tipos de relações ecológicas</th>
            </tr>
            <tr>
                <th rowSpan={2}>Relações intraespecíficas harmônicas</th>
                <td>Sociedade</td>
            </tr>
            <tr>
                <td>Colônia</td>
            </tr>
            <tr>
                <th rowSpan={2}>Relações intraespecifica desarmônica</th>
                <td>Competição</td>
            </tr>
            <tr>
                <td>Canibarismo</td>
            </tr>
            <tr>
                <th rowSpan={2}>Relações interespecíficas harmônicas</th>
                <td>Mutualismo</td>
            </tr>
            <tr>
                <td>Comensarismo</td>
            </tr>
            <tr>
                <th rowSpan={4}>Relações interespecíficas desarmônicas</th>
                <td>Amensalismo</td>
            </tr>
            <tr>
                <td>
                    Parasitismo
                </td>
            </tr>
            <tr>
                <td>
                    Predação
                </td>
            </tr>
            <tr>
                <td>
                    Competição
                </td>
            </tr>
        </tbody>
    </table>
}