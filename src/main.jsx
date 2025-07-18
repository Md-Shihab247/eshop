import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import store from './store/Store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
)
