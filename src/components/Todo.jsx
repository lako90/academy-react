import { useReducer } from "react";

const defaultTodos = [{
  id: 1,
  label: 'Uno Lorem ipsum',
  done: false,
}, {
  id: 2,
  label: 'Due Lorem ipsum',
  done: false,
}, {
  id: 3,
  label: 'Tre Lorem ipsum',
  done: false,
}, {
  id: 4,
  label: 'Quattro Lorem ipsum',
  done: false,
}, {
  id: 5,
  label: 'Cinque Lorem ipsum',
  done: false,
}];


const reducer = (state, { type, id }) => {
  if (type === 'DONE') {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
  }

  return state;
};


const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, defaultTodos);
  console.log('todos:', todos)

  return todos.map(({ id, label, done }) => (
    <div key={id}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => { dispatch({ type: 'DONE', id }); }}
      />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{label}</span>
    </div>
  ));
}

export default Todo
