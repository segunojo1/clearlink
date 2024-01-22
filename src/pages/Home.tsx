import Companies from "../components/Companies"
import FAQs from "../components/FAQs"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Testimonials from "../components/Testimonials"
import WhyClearlink from "../components/WhyClearlink"

const Home = () => {
    return (
        <div className="pt-[40px] mx-auto ">
            <div className="bgg">
                <Nav />
                <Hero />
            </div>
            <Companies />
            <WhyClearlink />
            <Testimonials />
            <FAQs />
            <Features />
            <Footer />
        </div>
    )
}

export default Home