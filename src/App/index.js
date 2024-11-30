import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  console.log('Log 1');

  // React.useEffect(() => {
  //   console.log('Loooooooog 2');
  // });

  // React.useEffect(() => {
  //   console.log('Loooooooog 2');
  // }, []);
  
  // React useEffect hook with a dependency array
  // Dependencies are the second argument of the useEffect hook
  // It can be an empty array, an array with values or variables
  // If the dependency array is empty, the useEffect hook will only run once
  // If the dependency array has variables, the useEffect hook will run every time the variables change
  // For example, if the dependency array has a variable called totalTodos, the useEffect hook will run every time the totalTodos variable changes
  
  React.useEffect(() => {
    console.log('Loooooooog 2');
  }, []);

  console.log('Log 3');

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
