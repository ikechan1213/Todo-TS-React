import React ,{useState}from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState<Todo[]>([]);
    {/*Todo型の空の配列を作成した*/}


  type Todo = {
    
    inputValue: string;
    id: number;
    checked: Boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    // スプレット構文→「...todos」
    // newTodoを先ほど作成した空の配列に入れる

    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <form onSubmit={(e) => handlesubmit(e)}>
          <input type='text' onChange={(e) => handleChange(e)} className='inputText' />
          <input type='submit' value="作成" className='submitButton'/>

        </form>
        {/*onSubmitはformにタスクを打ち込んでEnterを押したときにどういう動きをするのかを指定すること*/}


        <ul className='todoList'>
          {todos.map(todo => (
            <li key={todo.id}>
            <input type='text' onChange={(e) => handleEdit(todo.id, e.target.value)} className='inputText' value={todo.inputValue}/>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
