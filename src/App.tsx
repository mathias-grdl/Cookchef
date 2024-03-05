import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import s from './App.module.scss';

function App() {

  return (
    <div className={`d-flex flex-column ${s.appContainer}`}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
