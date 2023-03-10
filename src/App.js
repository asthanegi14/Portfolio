import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Clg from "./components/Clg";
import Footer from "./components/Footer";
function Porth() {
    return (
        <div className="Porth">
            {/* <h1 className='text-10px font-bold font-signature'>आस्था</h1>
            <h2>Astha negi</h2> */}
            <Navbar />
            <Home />
            {/* <Skills /> */}
            <Projects/>
            <Clg/>
            <Contact/>
            <Social />
            <Footer/>
        </div>
    );
}

export default Porth;