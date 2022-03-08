import React from "react";
import { Header, NewProduct, Products, EditProduct } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
function App() {
  //Redux
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/productos/nuevo" element={<NewProduct />} />
            <Route
              exact
              path="/productos/editar/:id"
              element={<EditProduct />}
            />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
