import uuid from 'uuid';

const addTodo = (task) => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuid(),
      task: task,
      completed: false
    }
  };
};
