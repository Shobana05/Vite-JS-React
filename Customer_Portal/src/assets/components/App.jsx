import { useState } from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import {Badge} from 'react-bootstrap'
import mustangPic from "../../../src/fordMustang.png"
import f150 from"../../../src/f150.png"
import fordTransit from "../../../src/fordTransit.png"
import fordAspire from "../../../src/aspire.png"
import "../../../src/App.css"

function App() {
  const [selectedItem,setSelectedItem]=useState('All');
const cards=[
    {title:'Ford Mustang',
    badge:'Retail',
    text:'Mustang Match-E, 2023.SUV,Fully Electric.20Km/Litre.23,000 Kms Driven. Off Road',
    img:mustangPic
  },
        {title:'F150',
        badge:'Commercial',
        text:'Two Bar Style. XLT,290 Horsepower. 20km/Litre. 23,000 Kms Driven. Off Road',
        img:f150
     
      },
  
  {
    title:'Ford Transit',
    badge:'Commercial',
    text:'Passanger Van XL. 17Km/Litre. 23,000 Kms Driven. On Road'
 ,img:fordTransit
 },
 {
  title:'Ford Aspire',
  badge:'Credit',
  text:'5 Seater 4 Cylinder Car. 2020 Model. 14Km/Litre. On Road',
  img:fordAspire
 }

  ];
    const bgcolor=(category)=>{
    switch(category){
      case 'Retail':
        return '#A2B863';
        case 'Commercial':
          return '#5F8BFA';
          case 'Credit':
            return  '#F9AB73';
           
    }
  };
  const invoicePayment=[
    {
      detail:'Subscription Due',
      day:'On 29th Dec 2023',
      status:'Upcoming'
    },
    {
       detail:'Sparks Plug.pdf',
      day:'On 29th Dec 2023',
      status:'Download'
    },
    {
       detail:'Sparks Plug.pdf',
      day:'On 29th Dec 2023',
      status:'Download'
    },
    {
       detail:'Sparks Plug.pdf',
      day:'On 29th Dec 2023',
      status:'Download'
    }
  ];
  const selectedSubscriptions=[
    {
      subscription:'Maintenance and UPkeep',
      note:'Complimentary for the life of vehicle'
    },{
      subscription:'Wheel alignment, Cleaning, washing',
      note:'Complimentary for the life of vehicle'
    },{
      subscription:'Maintenance and UPkeep',
      note:'Subscription till Jul 2024'
    },{
      subscription:'Wheel alignment, Cleaning, washing',
      note:'Complimentary for the life of vehicle'
    }
  ];
  const serviceTickets=[
    {
      detail:'Basic Service',
      day:'Scheduled On 29th Dec 2023',
      status:'Upcoming'
    },
    {
       detail:'Sparks Plug.pdf',
      day:'Done On 12th Oc 2023',
      status:'Completed'
    },
    {
       detail:'Engine Oil Change',
      day:'Done On 06th Aug 2023',
      status:'Completed'
    },
    {
       detail:'Wheel Allignment',
      day:'Done on 29th Jul 2023',
      status:'Completed'
    }
  ];
  const preferences=[
    {
      data:"Alloy wheels-sporty"
    },{
      data:"Spoilers"
    },
    {
      data:"Side skirts"
    },
    {
      data:"LED LIghts-Head Lamp"
    },
    {
      data:"Dual color tone-Blue & Black"
    },
    {
      data:"Good Mileage"
    },
    {
      data:"LED Lights-Head Lamp"
    }
  ]
  
  const handleDropdown=(category)=>{
    setSelectedItem(category);

  };
  const cardText=(text)=>{
    const list=text.split('.');//split the text into sentences
    return list.map((line,index)=><li key={index}>{line}</li>);
  };

const renderCards=()=>{
  if(selectedItem==='All'){
    return cards.map((card,index)=>(
      <Card key={index} style={{backgroundColor:bgcolor(card.badge), margin:"10px 0px"}}>
        <Card.Body>
          <Card.Title> <Row><Col style={{fontSize:"20px"}}>{card.title}</Col>
                <Col xs={3}>
                 <Badge bg="light"style={{color:bgcolor(card.badge),minWidth:"100px",fontSize:"10px"}}>{card.badge}</Badge>
                </Col></Row></Card.Title>
         <Row>
          <Col >
           <ul style={{fontSize:"14px"}}>
            {cardText(card.text)}
          </ul>
          </Col>
          <Col>
            <img src={card.img} style={{width:"250px"}}></img>
          </Col>
         </Row>
         
        </Card.Body>
      </Card>
    ));
  }else{
    const filteredCard=cards.filter((card)=>
    card.badge===selectedItem);
    return filteredCard.map((card,index)=>(
<Card key={index} style={{backgroundColor:bgcolor(card.badge), margin:"10px 0px"}}>
        <Card.Body>
          <Card.Title> <Row><Col style={{fontSize:"20px"}}>{card.title}</Col>
                <Col xs={3}>
                 <Badge bg="light" style={{color:bgcolor(card.badge),fontSize:"10px",minWidth:"100px"}}>{card.badge}</Badge>
                </Col></Row></Card.Title>
         <Row>
          <Col>
           <ul style={{fontSize:"14px"}}>
            {cardText(card.text)}
          </ul>
          </Col>
          <Col>
            <img  src={card.img} style={{width:"250px"}}></img>
          </Col>
         </Row>
         
        </Card.Body>
      </Card>

    ))
  }
}
  return (
  
   <div className="main">

  
     <Row className='mainrow' >
      <Col xs={4} className='mt-3 mb-3' style={{marginLeft:"10px"}}>
      <Card>
        <Row className='m-3 mb-0'>
          <Col xs={8}>
           <h4 style={{fontSize:"18px"}}>Good Day Franklin!</h4>
          <p className='text-secondary m-0' style={{fontSize:"12px"}}> You can see your vehicle details here</p>
          </Col>
          <Col>
           <button style={{fontSize:"14px"}} className='bg-dark text-light rounded p-2 w-100'>+Add Vehicle</button>
          </Col>
        </Row>
        <Row className='m-2 mb-0'>
          <Col style={{fontSize:"10px"}}className='small mt-3 d-flex justify-content-between'>
            <p ><span class="circle retail"></span>Retail</p>
<p><span class="circle commercial"></span>Commercial</p>
            <p><span class="circle credit"></span>Credit</p>

         
        
          </Col>
          <Col >
          
            <Dropdown onSelect={handleDropdown} >
      <Dropdown.Toggle style={{fontSize:"14px"}} variant="light" className='w-100' id="dropdown-basic">
      {selectedItem}
      </Dropdown.Toggle>
      

      <Dropdown.Menu style={{width:"100%"}}>
         <Dropdown.Item  eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Retail">Retail</Dropdown.Item>
        <Dropdown.Item  eventKey="Commercial">Commercial</Dropdown.Item>
        <Dropdown.Item eventKey="Credit">Credit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
    
          </Col>
        </Row>
         <Card.Body>{renderCards()}</Card.Body>
         
   
      </Card>
      </Col>
      <Col >
      <Card className='mt-3 pl-5'>
        <Card.Title>
          <Row  className="m-3" style={{marginLeft:"20px"}}>
            <Col style={{fontSize:"18px"}}>Vehicle Info
            </Col>
            <Col >  <Card.Link href="#" style={{textDecoration:"none",fontSize:"12px",color:'#E38732'}}>
              View Details.&gt;&gt;
              </Card.Link></Col>
          </Row>
        </Card.Title>
        <Card.Body>
          <Row style={{borderBottom:"1px lightgray dashed"}}>
          <Col><ul style={{fontSize:'12px'}}><li><h6 style={{fontSize:'14px'}}>Purchased on</h6> 29th Dec 2023</li></ul></Col>
         <Col><ul  style={{fontSize:'12px'}}><li><h6 style={{fontSize:'14px'}}>Purchased Amt</h6>$51,000</li></ul></Col>
          </Row>
          
            <Row  className="mt-2"style={{borderBottom:"1px lightgray dashed"}}>
          <Col><ul style={{fontSize:'12px'}}><li><h6 style={{fontSize:'14px'}}>Services Done</h6>6 Times</li></ul></Col>
         <Col><ul style={{fontSize:'12px'}}><li><h6 style={{fontSize:'14px'}}>Spent for Service</h6>$5,000</li></ul></Col>
          </Row>
           <Row className="mt-2"style={{borderBottom:"1px lightgray dashed"}}>
          <Col><ul style={{fontSize:'12px'}}><li><h6 style={{fontSize:'14px'}}>Additional Expenses</h6>$1,000(Alloy wheels and LED Lights)</li></ul></Col>
        
          </Row>
            <Row className="mt-2">
          <Col><ul style={{fontSize:'12px'}}><li><h6 style={{fontSize:'14px'}}>Insurance Due</h6>Will Expire on 29th Jul 2024</li></ul></Col>
        
          </Row>
        </Card.Body>
      </Card>
      <Card className='mt-3'>
         <Card.Title> <Row className="mt-3 ">
            <Col style={{fontSize:"18px",paddingLeft:"40px"}} xs={8}>Invoice Payments
            </Col>
            <Col>
            <Card.Link href="#" style={{textDecoration:"none",fontSize:"12px",color:'#E38732'}}>
 View Details&gt;&gt;              
 </Card.Link>
 </Col>
          </Row></Card.Title>
            <Card.Body >
        {invoicePayment.map((data,index)=>{
          return( <Row className="mt-2" style={{borderBottom:"1px lightgray dashed"}}>
              <Col  xs={8} >
              <ul style={{fontSize:"14px"}}
              >
                <li>
                
                  {data.detail}
                
                 <p style={{fontSize:"12px"}}
                 className='text-secondary'>{data.day}</p>
                </li>
              </ul>
             
              </Col>
              <Col  >
              <button className='rounded w-100 text-light p-1' style={{backgroundColor:"#00142E",fontSize:"10px"}}>
                {data.status}
                </button></Col>
            
            </Row>)
          
        })}
        </Card.Body>
             
      </Card>
      </Col>
        <Col  >
      <Card className='mt-3' >
        <Card.Title>
           <Row  className="mt-3" style={{marginLeft:"20px"}}>
            <Col style={{fontSize:"18px"}}>Selected Subcriptions
            </Col>
            <Col style={{fontSize:"12px"}}><Card.Link href="#" style={{textDecoration:"none",fontSize:"12px",color:'#E38732'}}>
 View Details&gt;&gt;              
 </Card.Link></Col>
          </Row>
        </Card.Title>
        <Card.Body>
         {selectedSubscriptions.map((data,index)=>{
return(<Row key={index}className="mt-2" style={{borderBottom:"1px lightgray dashed"}}>
            
              <h6 style={{fontSize:"14px"}}> {data.subscription}</h6>
                <p className="text-secondary"style={{fontSize:"12px"}}>{data.note}</p>
           
          </Row>)

         })}

       
          
        </Card.Body>
       
      </Card>
      <Card className='mt-3'>
         <Card.Title> 
          <Row style={{marginLeft:"20px"}}className="mt-3">
            <Col style={{fontSize:"18px"}} xs={7}>Service Tickets
            </Col>
            <Col>
            <Card.Link href="#" style={{textDecoration:"none",fontSize:"12px",color:'#E38732'}}>
 View Details&gt;&gt;              
 </Card.Link></Col>
          </Row></Card.Title>
           <Card.Body >
        {serviceTickets.map((data,index)=>{
          return( <Row className="mt-2" style={{borderBottom:"1px lightgray dashed"}}>
                <Col  xs={8} >
              <ul style={{fontSize:"14px"}}
              >
                <li>
                
                  {data.detail}
                
                 <p style={{fontSize:"12px"}}
                 className='text-secondary'>{data.day}</p>
                </li>
              </ul>
             
              </Col>
              <Col  >
              <button className='rounded w-100 text-light p-1' style={{backgroundColor:"#00142E",fontSize:"10px"}}>
                {data.status}
                </button></Col>
            
            </Row>)
          
        })}
        </Card.Body>
             
      </Card>
      </Col>
       <Col style={{marginRight:"10px"}}>
      <Card className=' mt-3' >
        <Card.Title>
          <Row className="mt-3" style={{fontSize:"18px",marginLeft:"20px"}} >
          Credit Details

          </Row>
       </Card.Title>
        <Card.Body className='m-5 p-5'>
          <h5 className='text-muted text-center ' style={{fontSize:"18px"}} >No Credits</h5>
        </Card.Body>
      </Card>
      <Card className='mt-3'>
         <Card.Title>
          <Row style={{marginLeft:"20px"}} className="mt-3">
            <Col><h5 style={{fontSize:"18px"}}>Preferences</h5>
            </Col>
            <Col> <Card.Link href="#" style={{textDecoration:"none",fontSize:"12px",color:'#E38732'}}>
                View Details&gt;&gt;              
           </Card.Link></Col>
                     
          </Row>
         </Card.Title>
         <Card.Body>
          {preferences.map((list,index)=>{
        return( <ul>
            <li key={index}className='pt-2 pb-2' style={{borderBottom:"1px dashed lightgray",fontSize:"14px"}}>
            {list.data}
            </li>
          </ul>)
          })}
         
         </Card.Body>
     
      </Card>
      </Col>
     </Row>
     
    </div>
    
  
  )
}

export default App
