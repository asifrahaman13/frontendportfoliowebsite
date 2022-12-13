
import React from "react";
import { useEffect, useState } from "react";
import "./Projects.css";


const Hackathons = () => {
  useEffect(() => {
    getHackathons();
  });
  const [hackathons, setHackathons] = useState([]);

  const getHackathons = async () => {
    var response = await fetch("https://backendportfolio.adaptable.app//hackathon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setHackathons(response);
  };

  const style1={backgroundSize: '100% 100%'};
  const title1={fontWeight: 'bold'};
  const title2={fontSize: '2rem'}

  return (
    <>
      <div className="hack-container">
        <div class="hack">
          <ul>
            {hackathons.map((item, idx) => {
              return (
                <>
                  <li><center style={{color:'purple',...title1,...title2}}>{item.title}</center>
                    <br />{item.name}</li>
                  <li style={{backgroundImage:`url(${item.image})`,...style1}} className="hackathonimg"></li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hackathons;
