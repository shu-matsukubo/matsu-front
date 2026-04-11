import { useState } from 'react';

import './App.css';
import { CreatePage } from './pages/expenses/CreatePage';
import SummaryIndex from './pages/expenses/SummaryIndex';
import './styles/utilities/index.css';
import './styles/index.css';
import { IconSample } from './components/icons';
import { Button } from './components/common/Button';

function App() {
  const [page, setPage] = useState<'summary' | 'create'>('summary');

  return (
    <div className="flex flex-col items-center p-4">
      {page === 'summary' && <SummaryIndex />}
      {page === 'create' && <CreatePage onBack={() => setPage('summary')} />}

      {page === 'summary' && (
        <>
          <Button onClick={() => setPage('create')} leftIcon={<IconSample />}>
            追加
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
