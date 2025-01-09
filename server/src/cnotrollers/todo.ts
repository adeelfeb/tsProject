import { TodoSchema } from "../models/todo";
import { RequestHandler } from "express";


const todoArray: TodoSchema[] = []
export const todoHandler: RequestHandler = (req, res)=>{
    const text = (req.body as {text: string}).text;
    const text2 = (<{text: string}>req.body).text ///another way of typecasting in typescript 
    const newId = Math.floor(Math.random() * 10000).toString();
    const newTodo = new TodoSchema(newId    , text)
    todoArray.push(newTodo)

    res.status(201).json({message: "Successfully Added", newTodo})
}


export const getTodos: RequestHandler = (req, res)=>{
    res.status(200).json({todoArray})
}




export const deletTodo: RequestHandler<{ todoId: string }> = (req, res) => {
    const idToRemove = (req.body as { id: string }).id;
    
    // Check if the ID exists in the array
    const todoToDelete = todoArray.find((todo) => todo.id === idToRemove);
    if (!todoToDelete) {
        // If not found, return a 404 response
        res.status(404).json({ message: "Todo with the given ID not found" });
        
    }
    else{

    
    
    // Filter out the item with the given ID
    // const updatedArray = todoArray.filter((todo) => todo.id !== idToRemove);
    
    // // Update the array (this assumes you're working with a mutable global array for simplicity)
    // todoArray.length = 0; // Clear the array
    // todoArray.push(...updatedArray); // Push updated items



    //other method to update the array  since it is more space efficient
    const indexToRemove = todoArray.findIndex((todo) => todo.id === idToRemove);
    if (indexToRemove !== -1) {
        todoArray.splice(indexToRemove, 1); // Remove the item directly
    }

    

    res.status(200).json({ message: "Successfully removed todo", todoArray });
}
};



export const updateTodo: RequestHandler<{ todoId: string }> = (req, res) => {
    const todoId = req.params.todoId; // Extract the todoId from the route parameters
    const newText = (req.body as { text: string }).text; // Extract the new text from the request body

    // Find the todo item with the given ID
    const todoToUpdate = todoArray.find((todo) => todo.id === todoId);

    if (!todoToUpdate) {
        // Send an error response if the todo is not found
        res.status(404).json({ message: "Todo with the given ID not found" });
    } else {
        // Update the text of the found todo item
        todoToUpdate.text = newText;
        console.log(todoArray)
        // Send a success response
        res.status(200).json({ message: "Todo successfully updated", updatedTodo: todoToUpdate });
    }
};
