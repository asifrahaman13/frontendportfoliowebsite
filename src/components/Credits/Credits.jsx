import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./Credits.css";

const Credits = () => {
  const data = require("./credits.json");
  useEffect(() => {
    main();
  }, []);

  const [creditdata, setCreditdata] = useState([]);

  const main = async () => {
    const p = await contract.getCredits();
    console.log(p);
    setCreditdata(await contract.getCredits());
    return;
  };
  const provider = new ethers.providers.JsonRpcProvider(
    `https://goerli.infura.io/v3/5f1919e74ef0420ca8348dfab3af6bdc`
  );
  const contractAddress = "0x8B7D297a15844415AC7F51fe90C659006F18de2b";
  const ABI = data;
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  return (
    <>
      <center>
        <h2 class="skill" id="credits">
          <a href="#scroll">CREDITS</a>
        </h2>
      </center>
      <div className="credit-container">
        <div class="credit-serv">
          <ul>
            {creditdata.map((item, idx) => {
              return (
                <>
                  <li> {item}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Credits;
