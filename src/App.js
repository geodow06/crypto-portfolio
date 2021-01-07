import './App.css';
import PortfolioOverview from './components/class/PortfolioOverview';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import NavBar from './components/functional/NavBar';
import ExchangeOverview from './components/class/ExchangeOverview';
import coinbaseService from './services/coinbaseService';
import NotFoundPage from './components/functional/page/NotFoundPage';

const linkedServices = {coinbase:coinbaseService};
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <PortfolioOverview {...props} linkedServices={linkedServices}/>} />
          <Route path='/:exchangeName/exchange-overview' render={(props) => <ExchangeOverview {...props} linkedServices={linkedServices}/>} />
          {/* <Route path='/:exchangeName/link' render={(props) => <LinkPage {...props}/>}/> */}
          <Route path='*' component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
