import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Row, Col, Form, Button } from 'react-bootstrap';
import tv from '../Images/tv.png'
import baa from'../Images/baa.jpg'
import pic from'../Images/device.png'
import boll from'../Images/boll.jpg'
import Accordion from 'react-bootstrap/Accordion';


function Net() {

    return (

        <>

            <Row className='sm'>

                <Col sm={1}></Col>

                <Col sm={8}>
                    <h1 className='hc'> NETFlX</h1>




                    <p className='hh'> Unlimited movies, TV shows and more
                    </p>
                    <p className='ss'> Watch anywhere. Cancel anytime.</p>
                    <p className='bb'> Ready to watch? Enter your email to create or restart your membership.</p>



                    <Row>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Email address" className='ff' />

                        </Col>
                        <Col>
                            <button className='sl'> Get startes <i class="bi bi-chevron-right"></i></button>

                        </Col>


                    </Row>
                </Col>
                <Col sm={2}>
                    <Row>
                        <Col>
                            <Form.Select aria-label="Default select example" className='ee'>
                                <option>English <i class="bi bi-caret-down-fill"></i> </option>
                                <option value="1">One</option></Form.Select>

                        </Col>

                        <Col>
                            <div className='st'> <button className='kk'>Sign In</button></div>

                        </Col>


                    </Row>



                </Col>



            </Row>

<br></br>




            <div className='bl'>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                        <h1 className='ss'> Enjoy on your TV</h1><br />
                        <p className='log'> Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>


                    </Col>
                    <Col sm={4}>
                        


<img src={tv} />
                    </Col>
                    <Col sm={2}></Col>


                </Row>
                
            </div>
            <div className='set'>
                <Row>
<Col sm={3}></Col>
<Col sm={4}>
<img className='xl' src={baa} />
</Col>
<Col sm={4}> 
<p className='pst'> Download your shows to watch offline</p>
<p className='gt'> Save your favourites easily and always have something to watch.</p>

</Col>
<Col sm={1}></Col>


                </Row>
               





            </div>

<div className='srt'>
<Row>
    <Col sm={1}></Col>
    <Col sm={4}>
    <p className='spt'> Watch everywhere</p>
    <p className='info'> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
     </Col>
<Col>

<img className='mik' src={pic} />
</Col>



</Row>


    
</div>
<div className='chil'>
<Row>
<Col sm={2}></Col>
<Col sm={4}>
<img className='abc' src={boll} />

</Col>
<Col sm={4}> 

<p className='xx'>  Create profiles for kids</p>
<p className='v1'> Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>


</Col>
<Col sm={2}></Col>
</Row>



</div>
<div className='v2'>
    <Row>

<Col sm={2}></Col>
<Col sm={8}>
<p className='v3'> Frequently Asked Questions</p>



<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='v11'>
        <Accordion.Header className='v9' >What is Netflx ?</Accordion.Header>
        <Accordion.Body className='v10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1" className='v12'>
        
        <Accordion.Header >How much does netflx cost ?</Accordion.Header>
        <Accordion.Body className='c1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='v13'>
        <Accordion.Header >Where can I watch ?</Accordion.Header>
        <Accordion.Body className='c2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='v14'>
        <Accordion.Header >How do Icancel ?</Accordion.Header>
        <Accordion.Body className='c3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='v15'>
        <Accordion.Header >Watch can I Watch On Netflx ?</Accordion.Header>
        <Accordion.Body className='c4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1" className='ker'>
        <Accordion.Header >is Netflx good for kids ?</Accordion.Header>
        <Accordion.Body className='c5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion><br></br>

    <p className='v5'> Ready to watch? Enter your email to create or restart your membership.</p>
    <Row>
<Col>
<Form.Control className='v6' type="email" placeholder="Email address"  />

</Col><br></br>
<Col>
<button className='v7'>  Get Started <i class="bi bi-chevron-right" ></i> </button>

</Col>

    </Row>

   
</Col>







    </Row>





</div>

<div className='ac'>
  <Row>
<Col sm={2}></Col>


<Col sm={2}>
<div className='yyy'>
  
<a href='https://www.netflix.com/in/' className='j0'  >  Questions ? call  Call 000-800-919-1694</a><br></br>
<a className='j1' href='https://www.facebook.com/'> Faq</a><br></br>
<a href='https://www.netflix.com/in/' className='j2'> Investor Relations</a><br></br>
<a href='https://www.facebook.com/' className='j3'> privacy</a><br></br>
<a href='https://www.netflix.com/in/' className='j4'>  Speedtest</a><br></br><br></br></div>




<Form.Select  className='flag'  aria-label="Default select example" >
                                <option >English </option>
                                <option value="1">One</option></Form.Select><br></br>

                              <p className='f3'> Netflx India</p>
                        

</Col>
<Col s={2}>

<div className='y5'>
<a className='j6' href='https://www.netflix.com/in/'> Help Center</a> <br></br> 
<a href='https://www.netflix.com/in/' className='j7'>  Jobs</a><br></br>
<a className='j8' href='https://www.netflix.com/in/'> Cookie preference</a><br></br>
<a className='j9' href='https://www.netflix.com/in/'> Legal Notices</a><br></br></div>



</Col>
<Col sm={2}>
<div className='y6'>
<a className='j10' href='https://www.netflix.com/in/'> Acount</a><br></br>
<a href='https://www.netflix.com/in/' className='j11'> Ways to watch</a>
<a href='https://www.netflix.com/in/' className='j12'> Corporate Information</a><br></br>
<a href='https://www.netflix.com/in/' className='j13'> Only on Netflx</a></div>



</Col>

<Col m={2}>
<div className='y7'>
<a className='j14' href='https://www.netflix.com/in/'> Media Center</a><br></br>
<a className='j15' href='https://www.netflix.com/in/'> Terms of use</a><br></br>
<a   href='https://www.facebook.com/' className='j16'> Contact Us</a></div>

</Col>
<Col sm={2}></Col>

  











  </Row>




</div>











        </>



    );

}
export default Net;