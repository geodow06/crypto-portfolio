import './App.css';
import PortfolioOverview from './class/PortfolioOverview';
import {Route} from 'react-router';
import NavBar from './functional/NavBar';
import ExchangeOverview from './class/ExchangeOverview';
import coinbaseService from './service/coinbaseService';

const linkedServices = {coinbase:coinbaseService};
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/' render={(props) => <PortfolioOverview {...props} linkedServices={linkedServices}/>} />
      <Route path='/:exchangeName/exchange-overview' render={(props) => <ExchangeOverview {...props} linkedServices={linkedServices}/>} />
    </div>
  );
}

export default App;
