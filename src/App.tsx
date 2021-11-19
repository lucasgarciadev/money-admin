import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from './components/Dashboard';
import { TransactionsTable } from './components/TransactionsTable';

import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactioModal";

import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');


function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionsTable />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
