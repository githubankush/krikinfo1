import { useState } from "react";

export const List = () =>{

    const [task, setTask] = useState("");
    const [todos, setAllTodos] = useState([]);
    const [edit, setEdit] = useState(false);
    const handleChange = (e) =>{
        console.log(e.target.value)
        setTask(e.target.value)
        console.log(task);
    }

    const handleSubmit = ()=>{
        if(task === "")
        {
            alert("Please Enter the Task")
        }
        else{
            setAllTodos([...todos,task]);
            setTask("");
        }
    }
    
    // delete
    const onDelete = (index)=>{
    const updatedTodo = todos.filter((_,i)=> i !== index);
    console.log(updatedTodo)
    
    setAllTodos(updatedTodo);

    }

    // edit
    const onEdit = (index)=>{
        const updatedTodo = todos.map((elem,id)=> id === index);
        if(updatedTodo)
        {
            console.log("INSide");
            const elem = prompt("Enter the task");
            setAllTodos([elem])

        }
        console.log("ALL: ", todos)
       
    }

    return <>
        <div className="container w-full h-full bg-gray-300 ">
            <div className="heading bg-gray-400 text-center font-bold p-5 text-2xl">TODO List</div>
            <div className="content bg-gray-300 flex flex-col items-center">
                <div className="inputField p-5 w-full h-full flex justify-center items-center bg-black">
                    <input 
                    type="text"
                    className="p-2 m-2 rounded-lg "
                    placeholder="Enter your task"
                    value={task}
                    onChange={handleChange} 
                    required
                     />
                    <button 
                    className="border-2 rounded-lg p-2 bg-blue-400 text-white hover:bg-blue-500"
                    onClick={handleSubmit}
                    >ADD</button>
                </div>
                <div className="todos w-full bg-black p-5">
                    <div className="data w-full bg-black flex flex-col gap-2 items-center justify-center">
                        {
                            todos.map((elem,index)=>{
                                return (
                                    <div key={index} className="list w-2/3 flex justify-between  p-5 bg-white border-b-2 border-black rounded-lg">
                                        <div className="list_data w-full p-1 m-1 overflow-hidden text-ellipsis whitespace-nowrap line-clamp-3">{index+1}. {elem}</div>
                                        <div className="buttons flex gap-5">
                                            <button className="border-2 rounded-lg px-2 py-1 bg-blue-400 text-white" 
                                            onClick={()=>onEdit(index)}
                                            >Edit</button>
                                            <button className="border-2 rounded-lg px-2 py-1 bg-red-400 text-white "
                                            onClick={()=>onDelete(index)}
                                            >Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}