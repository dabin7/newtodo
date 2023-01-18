import React, {
  createContext,
  useReducer,
  useContext,
  useRef,
  useEffect,
} from 'react';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const initialTodos = [
  {
    id: 1,
    text: '아침 산책',
    done: true,
  },
  {
    id: 2,
    text: '오늘의 뉴스 읽기',
    done: true,
  },
  { id: 3, text: '샌드위치 사 먹기', done: false },
  { id: 4, text: '리액트 공부하기', done: false },
];

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialTodos;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  return useContext(TodoStateContext);
};
export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};
export const useTodoNextId = () => {
  return useContext(TodoNextIdContext);
};
