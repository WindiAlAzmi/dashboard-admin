import { Provider } from 'react-redux';
import './App.css'
import MainLayout from './components/common/MainLayout';
import Router from './datas/Router'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './stores/stores';

function App() {

  let publicRouters = Router();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {publicRouters.map((item, index) => (
              <Route key={index} path={item.path} element={item.component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
