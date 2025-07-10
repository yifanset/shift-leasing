import './App.css'
import MainPage from "./pages/main/MainPage.tsx";
import Header from "./widgets/header/Header.tsx";
import {Routes, Route} from "react-router-dom";
import ProfilePage from "./pages/profile/ProfilePage.tsx";
import OrdersPage from "./pages/orders/OrdersPage.tsx";
import CarsDetails from "./pages/cars/[id].tsx";
import FormalizationFirstPage from "./progress/formalization-first/FormalizationFirstPage.tsx";
import FormalizationSecondPage from "./progress/formalization-second/FormalizationSecondPage.tsx";
import DataVerificationPage from "./progress/data-verification/DataVerificationPage.tsx";
import SuccessPage from "./progress/success/SuccessPage.tsx";


function App() {

  return (
      <div className="app">
          <Header/>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/cars/:carId" element={<CarsDetails />} />

              <Route path="/reservation" element={<FormalizationFirstPage />} />
              <Route path="/your-data" element={<FormalizationSecondPage />} />
              <Route path="/verification" element={<DataVerificationPage />} />
              <Route path="/success" element={<SuccessPage />} />
          </Routes>

      </div>

  )
}

export default App
