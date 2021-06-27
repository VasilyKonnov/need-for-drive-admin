import { Route, Switch } from 'react-router-dom'
import { LoginPage, AddCar, Orders, CarList } from './pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/add-car" component={AddCar} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/list-cars" component={CarList} />
    </Switch>
  )
}

export default App
