import { useState } from "react";
import { MoneyContext } from "../../../Context/MoneyContext";
import Banner from "../Banner/Banner";

const Home = () => {
    const [money, setMoney] = useState(1000);
  return (
    <MoneyContext.Provider value={[money, setMoney]} >
      <div>
        <Banner></Banner>
        <h2 className="text-3xl">This is home</h2>
        Money:{money}
      </div>
    </MoneyContext.Provider>
  );
};

export default Home;
