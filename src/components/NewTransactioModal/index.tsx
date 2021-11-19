import { FormEvent, useState, useContext } from 'react';

import * as C from './styles'
import Modal from 'react-modal';

import closeImg from '../../assets/btn-fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import { useTransactions } from '../../hooks/useTransactions';

// import { TransactionContext } from '../../hooks/useTransactions';


interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } =  useTransactions();

    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle('');
        setAmount(0);
        setType('');
        setCategory('');

        onRequestClose()
    }


    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                onClick={onRequestClose} 
                type="button" 
                className="react-modal-close" 
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <C.Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar nova transação</h2>
                
                <input 
                    type="text" 
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}  
                />
                
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))} 
                />

                <C.TransactionTypeContainer>
                    
                    <C.RadioBox 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </C.RadioBox>
                    
                    <C.RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw')}} 
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saída</span>
                    </C.RadioBox>

                </C.TransactionTypeContainer>
                
                <input 
                    type="text" 
                    placeholder="Categoria"
                    value={category}
                    onChange={e => setCategory(e.target.value)} 
                />
                
                <button 
                    type="submit" 
                >
                    Cadastrar
                </button>

            </C.Container>
        </Modal>
    );
}