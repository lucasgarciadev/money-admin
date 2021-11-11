import * as C from './styles';

export function TransactionsTable() {
    return(
        <C.Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw" >-R$ 1,200.00</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit" >R$ 12,000.00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburger</td>
                        <td className="withdraw" >-R$ 25.00</td>
                        <td>Alimentação</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </C.Container>
    );
}