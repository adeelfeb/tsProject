import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { ChangeEvent, FormEvent, useState } from "react";
import { text } from "stream/consumers";

type AddTodoProp = {
  onAddTodo: (todoText: string)=> void
}

const AddTodo = ({onAddTodo}: AddTodoProp) => {
  const [toText, setToText] = useState<string>("")
  const getTodoText = (event: ChangeEvent<HTMLInputElement>)=>{
    setToText(event.target.value)
  }

  const onSubmit = (event: FormEvent)=>{
    event.preventDefault()
    onAddTodo(toText)

  }
  return (
    <Card className="p-8">
      <form onSubmit={onSubmit} className="flex items-center gap-4">
        <Input onChange={getTodoText} placeholder="Enter here" type="text" className="flex-grow" />
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
