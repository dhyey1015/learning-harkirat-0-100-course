
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  console.log(todo)
  return (
    <div>
      {todo.title}
      {todo.title}
      <br />
    </div>
  )
}

export default App