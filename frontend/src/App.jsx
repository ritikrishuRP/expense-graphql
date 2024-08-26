import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import TransactionPage from "./pages/TransactionPage"
import NotFoundPage from "./pages/NotFoundPage"
// import SignUpPage from "./pages/SignUpPage.jsx"
import SignUp from "./pages/SignUp.jsx"
import Header from "./components/ui/Header.jsx"


function App() {
  const authUser = true;
  return (
    <>
      {authUser && <Header />}
      <Routes>
				<Route path='/' element={ <HomePage /> } />
				<Route path='/login' element={<LoginPage /> } />
				<Route path='/signup' element={<SignUp />} />
				<Route
					path='/transaction/:id'
					element={<TransactionPage />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
    </>
  )
}

export default App
