import "./App.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import img1 from "./logo.svg"; // Import your React.js icon SVG file

const App = () => {
  const [phone, setphone] = useState(0);
  const [show, setshow] = useState(false);
console.log("amdk",phone)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // height: "100vh",
      }}
    >
      <div className="container mt-5">
        <div className="row justify-content-center" style={{flexDirection:'column'}}>
            <div className="offset-3 col-6" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <img src={img1} style={{ width: "300px", height: "170px", marginBottom: "20px" }} />
              <h2 className="text-center mb-4 titlecls" style={{position:'relative',top:'-20px'}}>React.js</h2>
            </div>
          <div className="offset-3 col-md-6">
            <div className="custom-container">

              <h2 className="text-center mb-4 titlecls">Country List with Country Flag</h2>
              <div class="input-group mb-3 px-5">
              <PhoneInput
                  placeholder="Enter phone number"
                  className="form-control"
                  aria-describedby="basic-addon2"
                  value={phone}
                  onChange={(e) => {
                    setphone(e);
                    setshow(false)
                  }}
                  required
                />
  <span class="input-group-text btncls" id="basic-addon2" onClick={()=>{setshow(true)}}>Sumbit</span>
</div>
              
              <div className="text-center" style={{display:phone?.length >= 13 && show == true ? "block" : "none"}}>
                <h4 className="titlecls">Phone No : {phone}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
