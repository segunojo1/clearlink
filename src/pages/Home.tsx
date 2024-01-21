import Companies from "../components/Companies"
import Hero from "../components/Hero"
import Nav from "../components/Nav"

const Home = () => {
    return (
        <div className=" pt-[40px] mx-auto ">
            <div className="px-[88px] pb-[96px] bgg">
                <Nav />
                <Hero />
            <Companies />
            </div>
        </div>
    )
}

export default Home