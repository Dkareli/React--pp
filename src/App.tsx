import React from 'react';
import Info from './components/info'
import {QueryClient, QueryClientProvider} from 'react-query'
import Test from './components/test'
import Test1 from './components/test1'
import Homeland from './XD/homeland';
import Auto from './components/auto'

const queryClient=new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Auto/>
    </QueryClientProvider>
  );
}

export default App;
