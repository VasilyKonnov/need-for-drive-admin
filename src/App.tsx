import { Route, Switch } from 'react-router-dom'
import {
  LoginPage,
  AddCar,
  Orders,
  CarList,
  CarCategory,
  CitiesAndStreetsList,
  OrderStatus,
  Tariffs,
  ErrorPage,
  OrderEdit,
} from './pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/orders" component={Orders} />
      <Route path="/edit-order/:id" component={OrderEdit} />
      <Route path="/create-car" component={AddCar} />
      <Route path="/add-car/:id" component={AddCar} />
      <Route path="/list-cars" component={CarList} />
      <Route path="/list-cars-category" component={CarCategory} />
      <Route path="/list-cities-and-streets" component={CitiesAndStreetsList} />
      <Route path="/list-order-status" component={OrderStatus} />
      <Route path="/list-tariffs" component={Tariffs} />
      <Route path="/error-500" component={ErrorPage} />
    </Switch>
  )
}

export default App
