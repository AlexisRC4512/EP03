import logo from './logo.svg';
import './App.css';
import { ListTodo } from './components/ListTodo';
import { ConstextListProvider } from './context/ConstextList';

function App() {
  return (
    <div className="App">
      <ConstextListProvider>
        <ListTodo/>
      </ConstextListProvider>
     
    </div>
  );
}

export default App;
