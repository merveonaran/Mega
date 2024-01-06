import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
import { EditTodoForm } from "./EditTodoForm"
uuidv4();


export const TodoWrapper = () => {
  
  const [todos,setTodos] = useState([])
  // setTodos fonksiyonu çağrıldığında, todos state'i güncellenir ve bileşen yeniden render edilir, böylece güncel değer ekranda görüntülenir.

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task:todo,
    completed: false,isEditing:false}])
     console.log(todos)
    //  addTodo, bir önceki todos durumunu kullanarak yeni bir todo öğesi eklemek için kullanılıyor 

  }
  const toggleComplete = id => {
    setTodos(todos.map(todo =>todo.id === id ? {...todo,completed: !todo.completed} :todo))

    // toggleComplete fonksiyonu, belirli bir id'ye sahip olan todo öğesinin tamamlanma durumunu (completed) tersleyerek günceller. Bu şekilde, todo listesindeki bir öğenin tamamlanma durumu(true veya false) değiştirilebilir.


  }
  const deleteTodo = id=> {
    setTodos(todos.filter(todo=>todo.id !== id))
    // deleteTodo fonksiyonu, belirtilen id'ye sahip todo öğesini todos dizisinden filtreleyerek, o öğeyi listeden kaldırır. Sonuç olarak, belirtilen id'ye sahip todo öğesi silinmiş olur ve güncellenmiş todo listesi setTodos ile ana bileşen state'ine atanır. Bu sayede, listeden bir todo öğesinin silinmesi sağlanır.  
  }
  const editTodo = id=>{
    setTodos(todos.map(todo=>todo.id === id ? {...todo ,isEditing : !todo.isEditing} : todo))
    // editTodo fonksiyonu, belirli bir id'ye sahip olan todo öğesinin düzenleme durumunu tersleyerek günceller. Bu sayede, todo öğesinin düzenleme moduna geçişi veya çıkışı kontrol edilebilir.
  }
  const editTask = (task,id)=>{
    setTodos(todos.map(todo=>todo.id === id ? {...todo,task,isEditing: !todo.isEditing} : todo))
    // editTask fonksiyonu, belirli bir id'ye sahip olan todo öğesinin görevini günceller ve aynı zamanda düzenleme durumunu kontrol ederek düzenleme moduna geçişi veya çıkışı yönetebilir.
  }

  return (
    <div className='TodoWrapper'>
      <h1>Haydi Başlayalım!</h1>
      <TodoForm addTodo={addTodo}/>
      {/* addTodo fonksiyonunu prop olarak alıyor, yani bu form, yeni todo eklemek için addTodo fonksiyonunu çağırabilir. */}
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ):(
           <Todo task={todo} key={index}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}/>
        )
       
      ))}
      
    </div>
  )
}
