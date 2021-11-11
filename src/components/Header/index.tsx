import * as C from './styles';

import logo from '../../assets/logo.svg';


export function Header() {
    return(
        <C.Container>
            <C.Content>
                <img src={logo} alt="dt money" />
                <button type="button" > Nova Transação</button>
            </C.Content>
        </C.Container>
    );
}