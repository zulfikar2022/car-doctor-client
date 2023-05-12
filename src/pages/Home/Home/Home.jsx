import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Team from "../Team/Team";


const Home = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services allData={allData}></Services>
            <Team></Team>
        </div>
    );
};

export default Home;