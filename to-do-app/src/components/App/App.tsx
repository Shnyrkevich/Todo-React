import React, { useEffect } from 'react';
import { db } from '../../firebase';
import './App.css';

export default function App() {
  
  useEffect(() => {
    db.collection('todos')
    .get()
    .then((some: any) => {
      some.forEach((doc: any) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((er) => {
      console.log(er);
    });
  }, []);

  return (
    <div className="App">
      React
    </div>
  );
}
