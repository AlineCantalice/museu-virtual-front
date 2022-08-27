import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QrCodePage from './pages/QrCodePage';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<QrCodePage />}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
