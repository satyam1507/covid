import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountryList } from './components/countrylist';
import { CountrywiseData } from './components/countrywisedata';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-5">
          <Link to="/" className="navbar-brand">
            <div className="d-inline-block align-middle">Covid Data</div>
          </Link>
          <Link to="/countrywisedata" className="navbar-brand">
            <div className="d-inline-block align-middle">Country-Wise Data</div>
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/countrywisedata" element={<CountrywiseData />} />
      </Routes>
    </div>
  );
}
export default App;
