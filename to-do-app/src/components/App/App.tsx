import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { AppContainer } from './styled-app';
import AppContent from './AppContent';
import { getCollection } from '../../api/api';

export default function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getCollection('lists').then((lists: any) => setLists(lists));
    console.log(lists);
  }, []);

  return (
    <AppContainer>
      <Sidebar lists={lists} />
      <AppContent />
    </AppContainer>
  );
}
