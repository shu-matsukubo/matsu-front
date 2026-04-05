import { useState } from 'react';

import './App.css';
import { CreatePage } from './pages/CreatePage';
import SummaryIndex from './pages/SummaryIndex';
import './styles/base.css';
import './styles/utilities/colors.css';
import './styles/utilities/layout.css';
import './styles/utilities/spacing.css';
import './styles/utilities/typography.css';

function App() {
  const [page, setPage] = useState<'summary' | 'create'>('summary');

  return (
    <div>
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
