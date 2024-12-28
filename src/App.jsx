
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Encrypt from './components/Encrypt';
import { Blog } from './components/Blog';
import { Feature } from './components/Body1';
import Des from './components/Des.jsx'
import WalletComponent from './components/Wallet.jsx'
// import { Web3Auth } from "./components/Web3Auth/Auth.jsx";  // Import Web3Auth component


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/home' element={<Landing />} />
          <Route path='/' element={<WalletComponent />} />
          <Route path='/encryption' element={<Encrypt />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/des' element={<Des />} />
          {/* <Route path='/connect-wallet' element={<Web3Auth />} /> */}
          {/* Add wallet connection route */}
        </Routes>
      </div>
    </Router>
  )
}
