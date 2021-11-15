import * as C from './styles';
import logo from '../../assets/logo.svg';


interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return(
        <C.Container>
            <C.Content>
                <img src={logo} alt="dt money" />
                <button onClick={onOpenNewTransactionModal} type="button" > Nova Transação</button>
            </C.Content>
        </C.Container>
    );
}