import {  Container } from "react-bootstrap";
import {Row,Col} from "react-bootstrap";
import ford from "../../ford_logo 1.png"
import notification from "../../vector.png"
import "../../App.css"
import profile from "../../../src/profile.png"
export default function Header(){
    return(
        <div className="header">
            
            <Row style={{padding:"5px 30px"}} className="align-items-center">
                <Col xs={10}>
               <h4>SS Motor Company</h4>
                </Col>
                <Col>
                <img src={notification} style={{height:"35px"}}></img>
                </Col>
                <Col className="d-flex align-items-end">
                <img  className='profile' src={profile}></img>
               <p style={{fontSize:"16px",marginLeft:"20px"}}>Franklin</p>                </Col>
            </Row>
        </div>
        
    );
}