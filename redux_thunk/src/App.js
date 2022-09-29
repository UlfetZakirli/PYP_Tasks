import { CustomersList } from './pages/customersPage';
import AddCustomer from "./pages/addcustomersPage"
import { Provider } from "react-redux";
import { Routes, Link, Route } from "react-router-dom";
import { HomePage } from './pages/homePage';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";
import { Reducer } from './redux/reducer';
const store = createStore(Reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store} >
      <HomePage />
      <Routes>
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
      </Routes>
    </Provider>
 
  );
}

export default App;
