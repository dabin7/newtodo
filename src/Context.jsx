import React, {
  createContext,
  useReducer,
  useContext,
  useRef,
  Children,
} from 'react';

const TodoStateContext = createContext(null);
const TodoDispatch = createContext(null);
const TodoNextIdContext = createContext(null);

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

const TodoProvider = ({ children }) => {
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatch.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatch.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
