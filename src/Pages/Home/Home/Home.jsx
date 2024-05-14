import { useState } from "react";
import { MoneyContext } from "../../../Context/MoneyContext";
import Banner from "../Banner/Banner";
import About from "../../About/About";
import Services from "./Services/Services";

const Home = () => {
    const [money, setMoney] = useState(1000);
  return (
    <MoneyContext.Provider value={[money, setMoney]} >
      <div>
        <Banner></Banner>
        <h2 className="text-3xl">This is home</h2>
        Money:{money}
      </div>
      <About></About>
      <Services></Services>
    </MoneyContext.Provider>
  );
};

export default Home;
