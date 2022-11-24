import { Component } from "react";
import PaginatedItems from "../PaginatedItems";
import './index.css'

class Home extends Component {
    render(){
        return(
            <div className="home-bg-container">
                <h1>Vendor's List</h1>
                <a href="/addvendor"><button className="add-vendor-btn">Add Vendor</button></a>
                <PaginatedItems itemsPerPage={4}/>
            </div>
        )
        
    }
}

export default Home