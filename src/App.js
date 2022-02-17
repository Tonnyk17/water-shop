import './App.css';
import { Main } from './views/pages/Main/Main';
import {Provider} from 'react-redux'
import { generateStore } from './redux/store';

function App() {
  const store = generateStore()
  return (
    <>
      <Provider store={store}>
          <Main/>
      </Provider>
    </>
  );
}

export default App;
