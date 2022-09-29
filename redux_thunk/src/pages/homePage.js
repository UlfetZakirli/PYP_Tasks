import { Link } from "react-router-dom";
export const HomePage = () => {
    const ul_style={
        display:"flex",
        justifyContent:"space-evenly",
    }
    return( 
        <div>
       <ul style={ul_style}>
         <Link to="/customers">
           <li>Customers</li>
         </Link>
         <Link to="/addcustomer">
           <li>Add</li>
         </Link>
       </ul>
     </div>
    )
  
  };
  