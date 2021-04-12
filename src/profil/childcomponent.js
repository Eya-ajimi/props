import React from "react";
import IMG from "../img/johny.jpg";
import PropTypes from 'prop-types';
const childcomponent = ( props) => {
const { title, pp,t,t2,Alert1}=props;
 return (
   <>
     <div className= 'container'>
   <h1>{title}</h1>
   <button   onClick={()=>Alert1(title)} > click me</button>
   <h3>{pp}</h3>
   <a href="https://imgbb.com/"><img src= {IMG} alt="" border="0" /></a>
   <h4>About him</h4>
   <p>John Christopher Depp II is an American actor, producer, and musician. He has been nominated for ten Golden Globe Awards, winning one for Best Actor for his performance of the title role in Sweeney ...</p>
   <h4>Here are 6 of the best roles of Johnny Depp's career.</h4>
   <div className="listFlex">
       <ul>
           {t.map(el=><li>{el.act}</li>)}
       </ul>
       <ul>
           <li> {t2.map(el=><li>{el.act2}</li>)} </li>
       </ul>
   </div>
   <h4>Social Media</h4>
   Catch us on Twitter - <a href="https://twitter.com/famous">@famous</a>
</div>
   </>
 );
};
childcomponent.defaultProps = {
    pp : 'This is default type for pp ',
  };
  childcomponent.propTypes = {
    title: PropTypes.string.isRequired,
    pp: PropTypes.string,
    t: PropTypes.arrayOf(PropTypes.string),
    t2:PropTypes.arrayOf(PropTypes.string),
    handleAlert: PropTypes.func,
  };
export default childcomponent;