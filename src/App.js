import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="gridContainer">
        <div className="address">
          <div className="svg">
            <svg
              viewBox="0 0 272 272"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="136"
                cy="136"
                r="136"
                fill="url(#paint0_linear_411_13)"
                id="circle"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_411_13"
                  x1="136"
                  y1="0"
                  x2="136"
                  y2="272"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1CE69D" />
                  <stop offset="0.683824" stop-color="#FFD8AB" />
                </linearGradient>
              </defs>

              <text fill="black" fontSize="40px">
                <textPath href="#circle"> SEOUL SEOUL SEOUL</textPath>
              </text>
            </svg>
          </div>
          <div className="details">
            <h3>604-1102</h3>
            <h3>CENTREVILLE</h3>
            <h3>SINBONG I-RO 216</h3>
            <h3>GYEONGGI-DO</h3>
          </div>
        </div>

        {/* <h1 className="wordOne">TRANQUIL</h1> */}
        <h1 className="wordTwo">TO: gugu 🐭</h1>
        <h1 className="wordThree">
          Guji! (small Hammie voice) We no no 💋before going sleep, so Mugu send
          this postcard from Rochester to Sinbong Dong. Hopefully it will arrive
          before gugu wake up, so can read. 🐹 come to gugu dream and keep 🐭
          cozy cozy. Nightmare goo awayyy~ 🥊
        </h1>

        <h1 className="wordSeven">FROM: Mugu, aka hammie 🐹</h1>
      </div>
    </div>
  );
}

export default App;
