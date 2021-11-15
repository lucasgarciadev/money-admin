import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions:[ 
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          amount: 3000,
          category: 'dev',
          createdAt: new Date('2021-02-21 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1200,
          category: 'casa',
          createdAt: new Date('2021-04-13 11:00:00')
        }
    
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data =  JSON.parse(request.requestBody)
      
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

