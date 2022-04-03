import { Header } from '../components/Header'
import * as S from './styles'
import { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'

const Routes = () => {
  return (
    <HashRouter>
      <Header />
      <S.Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map(({ path, component, exact }) => (
              <Route
                key={path}
                path={path}
                component={component}
                exact={exact}
              />
            ))}
          </Switch>
        </Suspense>
      </S.Container>
    </HashRouter>
  )
}

export default Routes
