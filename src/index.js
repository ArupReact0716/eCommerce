import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client';

// redux toolkit
import { Provider } from 'react-redux'
import Store from './redux/Store';

// spinner or loader
import Spinner from './component/spinner/Spinner'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Provider store={Store}>
         <Suspense fallback={<Spinner />}>
            <App />
         </Suspense>
      </Provider>
   </BrowserRouter>
);
