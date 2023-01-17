import './App.css'
import ClassComponent from './component/ClassComponent'
import PuresComponent  from './component/PureComponent'

function App() {

  return (
    <div className="App">
    <h1>ClassComponent</h1>
      <ClassComponent/>
    <h1>PureComponent</h1>
      <PuresComponent/>
    </div>
  )
}

export default App
