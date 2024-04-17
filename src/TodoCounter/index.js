import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return total === 0 ? (
    <h1 className="TodoCounter">Aun no tienes TODOs</h1>
  ) : total === completed ? (
    <h1 className="TodoCounter">
      ¡Felicidades por completar todos tus TODOs! 🎉👏
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
