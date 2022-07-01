
import './App.css';
import { ListTodo } from './components/ListTodo';
import { ConstextListProvider } from './context/ConstextList';
import { ListDone } from './components/ListDone';

function App() {
  return (
    <div className="App">
      <ConstextListProvider>
        <ListTodo/>
        <ListDone/>
      </ConstextListProvider>
     
    </div>
  );
}

export default App;
