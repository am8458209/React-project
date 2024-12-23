import Na from "./Nav";
import "./Card.css"

import C_img from "./img/pexels-dom-j-7304-354062.jpg";
import C1_img from "./img/pexels-joppe-beurskens-22992471-6689289.jpg";
import C2_img from "./img/pawel-czerwinski-OfwiURcZwYw-unsplash.jpg";
import C3_img from "./img/pexels-brett-sayles-1990764.jpg";
import { Row, Container, Col } from "react-bootstrap";
import { useState } from "react";
function A() {
    const [count ,setcount] = useState(0);
    const [Count ,setCount] = useState(0);
    const [COunt ,setCOunt] = useState(0);
    return(
<>


<Na />
<img
          src={C_img}
          alt="Web Security"
          className="img-fluid w-100"
          style={{ objectFit: 'cover', height: '100vh' }}
        />




<Container>
<h1 className=" text-center mt-5" > Smart lock  </h1>
    <Row className="mt-5">
        <Col className="col-4">
        <p  className=" fs-1"> This Smart lock for safe your home or your company it is very good and very relaibl</p>
        <button className=" btn btn-outline-dark m-5" onClick={()=> setcount(count+1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>  {count}</button> 
        <button  className=" btn btn-outline-dark m-5" onClick={()=> setCount(Count-1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak" viewBox="0 0 16 16">
  <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/>
</svg>  {Count}</button>  
<br/>
        <button className="btn btn-outline-dark ">ORDER IT NOW </button>

        </Col>
        <Col className="col-8">
        <img src={C1_img}  className="img-fluid "
      />
        </Col>
    </Row>
</Container>    

<Container>
<h1 className=" text-center mt-5" > Camera  </h1>
    <Row className="mt-5">
        <Col className="col-4">
        <p  className=" fs-1"> This Camera for safe your home or your company it is very good and very relaibl</p>
        <button className=" btn btn-outline-dark m-5" onClick={()=> setcount(count+1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>  {count}</button> 
        <button  className=" btn btn-outline-dark m-5" onClick={()=> setCount(Count-1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak" viewBox="0 0 16 16">
  <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/>
</svg>  {Count}</button>  
<br/>
        <button className="btn btn-outline-dark ">ORDER IT NOW </button>

        </Col>
        <Col className="col-8">
        <img src={C2_img}  
      className="img-fluid w-100"
      style={{ objectFit: 'cover', height: '80vh' }} />
        </Col>
    </Row>
</Container>    

<Container>
<h1 className=" text-center mt-5" > Lock  </h1>
    <Row className="mt-5">
        <Col className="col-4">
        <p  className=" fs-1"> This Lock for safe your home or your company it is very good and very relaibl</p>
        <button className=" btn btn-outline-dark m-5" onClick={()=> setCOunt(COunt+1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>  {COunt}</button> 
        <button  className=" btn btn-outline-dark m-5" onClick={()=> setCOunt(COunt-1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak" viewBox="0 0 16 16">
  <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/>
</svg>  {COunt}</button>  
<br/>
        <button className="btn btn-outline-dark ">ORDER IT NOW </button>

        </Col>
        <Col className="col-8">
        <img src={C3_img}  
      className="img-fluid w-100"
      style={{ objectFit: 'cover', height: '80vh' }} />
        </Col>
    </Row>
</Container>    



<footer className="bg-dark text-white text-center py-3 mt-3">
        <Container>
          <p>&copy;Web Security. All rights reserved.</p>
        </Container>
      </footer>


</>



    )


}

export default A;
