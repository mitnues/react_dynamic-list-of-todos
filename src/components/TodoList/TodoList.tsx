import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  selectedTodoId: number | null;
  onSelect: (todo: Todo) => void;
};

export const TodoList: React.FC<Props> = ({ todos, selectedTodoId, onSelect }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr key={todo.id} data-cy="todo" className={todo.completed ? 'has-background-info-light' : ''}>
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed ? (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            ) : null}
          </td>
          <td className={`is-vcentered is-expanded ${todo.completed ? 'has-text-success' : 'has-text-danger'}`}>
            <p>{todo.title}</p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => onSelect(todo)}
            >
              <span className="icon">
                <i className={`far ${selectedTodoId === todo.id ? 'fa-eye-slash' : 'fa-eye'}`} />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
