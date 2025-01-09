import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { todoType } from './types/todoType';
import TodoList from './components/TodoList';

function App() {
  
  const [items, setitems] = useState<todoType[]>([])

  const addInTodo = (text: string)=>{
    const tempId = Math.random().toString()
    setitems([...items , {id: tempId, text} ])
  }

  const removeTodo = (toDoId: string)=>{
    const newToDo = items.filter((todoItem: todoType)=>{
      return todoItem.id !== toDoId
    })
    setitems(newToDo)
  }

  return (
    <>
      <main className="max-w-8xl mx-auto">
        {/* Using Button component from ShadCN UI */}
        <AddTodo onAddTodo={addInTodo} />
        <TodoList items={items} onRemoveTodo={removeTodo} />
      </main>
    </>
  );
}

export default App;
