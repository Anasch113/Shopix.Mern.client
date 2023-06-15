import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context"
import Login from './components/Home/Login';
import SignUp from './components/Home/SignUp';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
         setAlert({
             msg: message,
             type: type
 
         })
         setTimeout(() => {
             setAlert(null)
         }, 1780);
     }
   
    return (

        <BrowserRouter>
            <AppContext>
                <Header showAlert= {showAlert} />
              <Alert alert={alert}/>
         
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct showAlert={showAlert} />} />
                    <Route path="/login" element={<Login showAlert= {showAlert}/>} />
                    <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
                </Routes>
         
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
