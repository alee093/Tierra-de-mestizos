import './App.css'
import Rooms from './Components/Rooms/Rooms'
import Location from './Components/Location/Location'
import Reviews from './Components/Reviews/Reviews'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import FaqSection from './Components/FaqSection/FaqSection'


function App() {

  return (
    <>
      <Header />
      <Rooms />
      <Location />
      <Reviews />
      <FaqSection />
      <Footer />
    </>
  )
}

export default App
