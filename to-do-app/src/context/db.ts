import { createContext } from 'react';

type ContextType = {
  //todos: any[],
  lists: any[],
};

export default createContext<ContextType>({
  //todos: [],
  lists: [],
});