import nextId from "react-id-generator";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const initialState = {
  input: "hello",
  todos: [
    {
      id: 1,
      title: "Transfer to redux",
      isDone: false
    }
  ]
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    default: {
      return state;
    }
  }
};

export const actions = {
  addTodo: todo => {
    return {
      type: ADD_TODO,
      todo
    };
  },
  deleteTodo: index => {
    return {
      type: DELETE_TODO,
      index
    };
  },
  toggleTodo: index => {
    return {
      type: TOGGLE_TODO,
      index
    };
  }
};
