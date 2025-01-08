import React from 'react';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Delete } from 'lucide-react';

type TodoListProps = {
  items: { id: string; text: string }[];
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div className='m-4'>
      <h2 className="text-2xl font-bold text-center text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
        Current To-Do List
      </h2>
      <div className="m-4 grid grid-cols-3">


      {props.items.map((item) => (
          <Card key={item.id} className="m-2">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-lg font-medium">{item.text}</CardTitle>
            <Button variant="destructive" size="icon" className="ml-4">
              <Delete />
            </Button>
          </CardHeader>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default TodoList;
