import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import TransactionPage from "./pages/TransactionPage"
import NotFoundPage from "./pages/NotFoundPage"
// import SignUpPage from "./pages/SignUpPage.jsx"
import SignUp from "./pages/SignUp.jsx"
import Header from "./components/ui/Header.jsx"
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query.js"
import { useQuery } from "@apollo/client"
import { Toaster } from "react-hot-toast"


function App() {
  const authUser = true;
  const {loading, data} = useQuery(GET_AUTHENTICATED_USER);

  
  if(loading) return null;

  return (
    <>
      {data?.authUser && <Header />}
      <Routes>
				<Route path='/' element={data.authUser ? <HomePage /> : <Navigate to='/login' />} />
				<Route path='/login' element={!data.authUser ? <LoginPage /> : <Navigate to='/' />} />
				<Route path='/signup' element={!data.authUser ? <SignUp /> : <Navigate to='/' />} />
				<Route
					path='/transaction/:id'
					element={data.authUser ? <TransactionPage /> : <Navigate to='/login' />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Toaster/>
    </>
  )
}

export default App
