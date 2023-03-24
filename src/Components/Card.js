import React, { useState, useEffect, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function DynamicCard (props) {
    // Define a state variable to store whether the element is a div or a textarea
    const [isTextarea, setIsTextarea] = useState(false);

    //Array of tasks
    const [tasks, createTask] = usePersistedState(props.type, []);

    //Setting the task
    const [task, setTask] = useState("");

    function handleOnDrag(e, itemType) {
        e.dataTransfer.setData("itemType", itemType);
    }

    function handleOnDrop(e) {
        const itemType = e.dataTransfer.getData("itemType");
        console.log(typeof(itemType));
        createTask([...tasks, itemType]);
    }

    // const removeElement = (element) => {
    //     createTask(tasks.filter(item => item !== element));
    // };

    function deleteTask(item) {
        const key = props.type;
        const persistedState = localStorage.getItem(key);
        const tasks = persistedState ? JSON.parse(persistedState) : [];
        
        const updatedTasks = [...tasks];
        const index = updatedTasks.indexOf(item);
        if (index > -1) {
            updatedTasks.splice(index, 1);
        }

        localStorage.setItem(key, JSON.stringify(updatedTasks));
        // createTask(updatedTasks);
      
        // You can also return the updated tasks array if needed
        // return updatedTasks;
        // createTask(updatedTasks);

        setTimeout(() => {
            window.location.reload();
        }, 1000);
      }

      React.useEffect(() => {
            createTask(tasks);
      }, []);

    function handleDragOver(e, item) {
        e.preventDefault();
        // const item = e.dataTransfer.getData("itemType");
        // console.log(item)
        // removeElement(item);
        deleteTask(item);
    }

    function usePersistedState(key, defaultValue) {
        const [state, setState] = React.useState(() => {
          const persistedState = window.localStorage.getItem(key);
          return persistedState ? JSON.parse(persistedState) : defaultValue;
        });
        React.useEffect(() => {
          window.localStorage.setItem(key, JSON.stringify(state));
        }, [state, key]);
        return [state, setState];
    }

    function onSubmit(e) {
        e.preventDefault();
        setTask(e.target.value);
        createTask([...tasks, task]);
        setIsTextarea(false);
        setTask("");
    }
    console.log(task)

    // Define a function to handle click events on the element
    const handleClick = () => {
        // Toggle between div and textarea
        setIsTextarea(!isTextarea);
    };

    const handleClose = () => {
        setIsTextarea(!isTextarea);
        setTask("");
    }

    // Define a function to handle change events on the textarea
    const handleChange = (e) => {
        // Update the text content with the textarea value
        setTask(e.target.value);
    };

    return (   
        <div class="card">
            <div href="#" class="indiv-card block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <h5 class="task-type mb-2 text-s font-bold tracking-tight text-gray-900 dark:text-white">{props.type}</h5>
                {tasks.map((item) => (
                    <center><button><div class="item" draggable onDragStart={(e) => {
                        handleOnDrag(e, item);
                        e.target.className = "dragging item";
                    }}
                    onDrop={handleOnDrop}
                    onDragOver={(e) => handleDragOver(e, item)}>{item}</div></button></center>
                ))}
                <div class="add-task">
                    <div class="item-add">
                        {isTextarea ? (
                            <>
                            <form className="create-task-form" onSubmit={onSubmit}>
                            <input
                            type="text"
                            name="task"
                            value={task}
                            onChange={handleChange}
                            placeholder="Enter a title for this card..."
                            style={{ height: "70px", width: "250px", textAlign: "center", borderRadius: "2px" }}
                            />
                            {/* <button type="submit" class="add-button">Add Card</button>
                                */}
                                <button type="button" onClick={onSubmit} class="add-button px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-100 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add card</button>
                            <button onClick={handleClose} class="close-button"><CloseIcon /></button>
                            </form>
                            </>
                        ) : (
                            <button onClick={handleClick} class="add"><AddIcon />Add a task</button>
                        )}
                    </div>
                </div>             
            </div>
        </div>
    )
  }

export default DynamicCard;