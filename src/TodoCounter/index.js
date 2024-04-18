import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return totalTodos === 0 ? (
    <h1 className="TodoCounter">Aun no tienes TODOs</h1>
  ) : totalTodos === completedTodos ? (
    <h1 className="TodoCounter">
      ¡Felicidades por completar todos tus TODOs! 🎉👏
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{' '}
      TODOs
    </h1>
  );
}

export { TodoCounter };
