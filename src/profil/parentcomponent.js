
import React from 'react';
import ChildComponent from "./childcomponent" ;
const array = [ { act : "The Mad Hatter in Alice in Wonderland (2010)"}, {act: "Sam in Benny & Joon (1993)"}, { act: "Ichabod Crane in Sleepy Hollow (1999)"}]
const array2 = [{ act2: "George Jung in Blow (2001)"},{ act2:"Edward D. Wood, Jr. in Ed Wood (1994)"},{act2:"Captain Jack Sparrow in Pirates of the Caribbean: The Curse of the Black Pearl (2003)"}]
const parentcomponent = ( ) => {
const handleAlert = (title) => alert(`this is  ${title}`);
 return (
   <>
     <ChildComponent
     title="JOHNNY DEEP"
     pp= " profil picture"
     handleAlert={handleAlert}
     t= {array}
     t2={array2}
     Alert1={handleAlert}
     
     />
     
   </>
 );
};

export default parentcomponent;