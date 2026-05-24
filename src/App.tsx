import { useEffect, useState } from 'react';

import './App.css';
import CreateIndex from './pages/expenses/CreateIndex';
import SummaryIndex from './pages/expenses/SummaryIndex';
import './styles/utilities/index.css';
import './styles/index.css';
import { IconSample } from './components/icons';
import { Button } from './components/common/Button';
import { clearAuthTokens, getAccessToken } from './auth/session';
import { LoginPage } from './pages/auth/LoginPage';
import { LogOut } from 'lucide-react';

function App() {
  const [page, setPage] = useState<'summary' | 'create'>('summary');
  const [authenticated, setAuthenticated] = useState(() => Boolean(getAccessToken()));

  useEffect(() => {
    const handleExpired = () => {
      setAuthenticated(false);
      setPage('summary');
    };

    window.addEventListener('kakeibo:auth-expired', handleExpired);

    return () => {
      window.removeEventListener('kakeibo:auth-expired', handleExpired);
    };
  }, []);

  const handleLogout = () => {
    clearAuthTokens();
    setAuthenticated(false);
    setPage('summary');
  };

  if (!authenticated) {
    return <LoginPage onAuthenticated={() => setAuthenticated(true)} />;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="app-toolbar">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleLogout}
          leftIcon={<LogOut size={16} />}
        >
          ログアウト
        </Button>
      </div>

      {page === 'summary' && <SummaryIndex />}
      {page === 'create' && <CreateIndex onBack={() => setPage('summary')} />}

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
