import "./App.css";
import bg_image from './assets/bg_image2.png'
import sp_image from './assets/sutta_parlor.png'
import {
  BigContainer,
  TextContainer,
  PictureContainer,
} from "./components/containers";
import { Col } from "reactstrap";


function App() {
  return (
    <Col>
      <BigContainer>
        <TextContainer>
          <h1 className="display-1 font-weight-bolder">DNA</h1>
          <h3>We Create Businesses You Need !</h3>
        </TextContainer>
        <PictureContainer>
            <img src={bg_image} />
        </PictureContainer>
      </BigContainer>
      <BigContainer>
        <TextContainer>
          <h1 className="display-3 font-weight-bolder" style={{color:"#E1972A"}}>Sutta Parlor</h1>
          <h3>We Provide Safest Place To Smoke...</h3>
          <h3>Make Sure Nothing Distract You On The Trip !</h3>
        </TextContainer>
        <PictureContainer>
          <img src={sp_image} width="300px"/>
        </PictureContainer>
      </BigContainer>
    </Col>
  );
}

export default App;
