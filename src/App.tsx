import { useState } from 'react';

import './App.css';
import { CreatePage } from './pages/expenses/CreatePage';
import SummaryIndex from './pages/expenses/SummaryIndex';
import './styles/utilities/index.css';

function App() {
  const [page, setPage] = useState<'summary' | 'create'>('summary');

  return (
    <div className="flex flex-col items-center p-4">
      {page === 'summary' && <SummaryIndex />}
      {page === 'create' && <CreatePage onBack={() => setPage('summary')} />}

      {page === 'summary' && (
        <>
          <button onClick={() => setPage('create')}>＋追加</button>
        </>
      )}
    </div>
  );
}

export default App;
