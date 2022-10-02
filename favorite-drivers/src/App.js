import "./App.css";
import { Provider } from "react-redux";
import { Routes, Link, Route } from "react-router-dom";
import DriversPage from "./pages/driversPage/driversPage";
import FavoritesPage from "./pages/favoritesPage/favoritesPage";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducer/reducer"
const driverStore = createStore(reducers, applyMiddleware(thunk));
function App() {
  const ul_style={
    display:"flex",
    justifyContent:"space-evenly",
}
  return (
    <Provider store={driverStore}>
        <div>
        <ul style={ul_style}>
          <Link to="/drivers">
            <li>Customers</li>
          </Link>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
        </ul>
       
      </div>
      <Routes>
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
