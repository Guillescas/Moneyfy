import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyles } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(): void {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(): void {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}
