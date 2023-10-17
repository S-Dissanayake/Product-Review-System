<div className="container-column-landing-grid">
          <Tooltip leaveDelay={200} title="Click Here to Add Players">
            <Link to={"/players"} className="link">
              <div className="box-title">
                <h5 style={{ color: "red" }}>Step 02</h5>
                <h3 className="box-title">ADD Players</h3>
              </div>
              <div>
                <p className="sub-title">
                  Add Players details and register your Players
                </p>
              </div>
              <div className="image-container">
                <img
                  className="image-size"
                  alt="teams"
                  src={require("../../assets/images/cricket.png")}
                />
              </div>
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="container-row">
        <div className="container-column-landing-grid">
          <Tooltip leaveDelay={200} title="Click Here to Add Fixtures">
            <Link to={"/fixtures"} className="link">
              <div className="box-title">
                <h5 style={{ color: "red" }}>
                  Step 03 (If You Haven't Already)
                </h5>
                <h3 className="box-title">ADD fixtures </h3>
              </div>
              <div>
                <p className="sub-title">
                  Add fixture details and register your fixture
                </p>
              </div>
              <div className="image-container">
                <img
                  className="image-size"
                  alt="teams"
                  src={require("../../assets/images/match.png")}
                />
              </div>
            </Link>
          </Tooltip>
        </div>
        <div className="container-column-landing-grid">
          <Tooltip leaveDelay={200} title="Click Here to Start Broadcast">
            <Link to={"/live_scoring"} className="link">
              <div className="box-title">
                <h5 style={{ color: "red" }}>Finally</h5>
                <h3 className="box-title" style={{ color: "" }}>
                  Live Scoring
                </h3>
                <div>
                  <p className="sub-title">
                    If you have setup all this, let's broadcast the score
                  </p>
                </div>
                <div className="image-container">
                  <img
                    alt="teams"
                    src={require("../../assets/images/live-sports.png")}
                    className="image-size2"
                    style={{}}
                  />
                </div>
              </div>
            </Link>
          </Tooltip>
        </div>
