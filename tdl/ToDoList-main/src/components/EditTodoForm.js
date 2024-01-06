import React, {useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue] = useState(task.task)
  // bir form içindeki bir input alanının değerini saklamak için kullanılacak.
  const handleSubmit = e => {
    // Bu bir form gönderme işlemi için oluşturulan fonksiyon. e.preventDefault() ile formun varsayılan gönderme davranışı engelleniyor.
    e.preventDefault();
    // bu işlev, todo öğesinin düzenleme işlemini gerçekleştiriyor.
    editTodo(value,task.id);
    // form gönderildikten sonra form alanını temizlemek için yapılıyor.
    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Görevi Güncelle'
   
    onChange={(e)=>setValue(e.target.value)}
      ></input>
      <button type='submit' className='todo-btn'>Görevi Güncelle</button>
      </form>
  )
}
