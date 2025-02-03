import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
