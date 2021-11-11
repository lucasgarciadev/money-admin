import * as C from './styles';

import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return(
        <C.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>1,000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="entradas" />
                </header>
                <strong>500.00</strong>
            </div>
            <div className="highlight-background" >
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="entradas" />
                </header>
                <strong>1,000</strong>
            </div>
        </C.Container>
    );
}