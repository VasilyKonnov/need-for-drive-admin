import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  )
}

export default App
