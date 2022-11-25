import { Component } from "react";
import PaginatedItems from "../PaginatedItems";
import Cookies from 'js-cookie'
import './index.css'

class Home extends Component {

    onLogout = () =>{
        Cookies.remove('jwt_token')
        const {history} = this.props
        history.replace('/login')
    }

    render(){
        return(
            <div className="home-bg-container">
                <h1>Vendor's List</h1>
                <a href="/addvendor"><button className="add-vendor-btn">Add Vendor</button></a>
                <button className="add-vendor-btn" onClick={this.onLogout}>Logout</button>
                <PaginatedItems itemsPerPage={4}/>
            </div>
        )
    }
}

export default Home