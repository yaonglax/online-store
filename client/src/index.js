import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductStore from './store/ProductStore';
import UserStore from './store/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null);

const RootComponent = () => {
    const [userId, setUserId] = useState(null);
    console.log(process.env);

    return (
        <Context.Provider value={{
            user: new UserStore(),
            product: new ProductStore(),
            userId,    
            setUserId 
        }}>
            <App />
        </Context.Provider>
    );
}

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<RootComponent />);
