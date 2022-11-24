import { Component} from "react";
import './index.css'

class AddUser extends Component{

    state = {
        email : '',
        password : '',
        mobile :'',
        place : ''
    }

    onSubmitSuccess = () => {
        const {history} = this.props
        history.replace('/')
    }

    getFormDetails = async (event) =>{  
        event.preventDefault()
        const data = {
            "email" : this.state.email,
            "password" : this.state.password,
            "mobile" : parseInt(this.state.mobile),
            "place" : this.state.place
        }
        const createUserApi = 'http://localhost:5001/addUser'
        const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        
        const response = await fetch(createUserApi, options)
        const res = await response.json()
        console.log(res)
        // if (response.ok === true) {
        // const data = await response.json()
        // this.onSubmitSuccess()
        // console.log(data)
        // } else {
        // const data = await response.json()
        // this.onSubmitFailure(data.error_msg)
        // }
    }

    getUsername = event =>{
        this.setState({email : event.target.value})
    }

    getPassword = event =>{
        this.setState({password : event.target.value})
    }

    getMobileNo = event => {
        this.setState({mobile : event.target.value})
    }

    getPlace = event => {
        this.setState({place:event.target.value})
    }

    render(){
        return (
        <div className="bg-container">
            <h1>Add User</h1>
            <form className="form-container" onSubmit={this.getFormDetails} action="/">
                <label htmlFor="username">Email</label>
                <input required id="username" type="text" className="input-container" onChange={this.getUsername}/>
                <label htmlFor="password">Password</label>
                <input required id="password" type="text" className="input-container" onChange={this.getPassword}/>
                <label htmlFor="mobile">Mobile No</label>
                <input required id="mobile" type="text" className="input-container" onChange={this.getMobileNo}/>
                <label htmlFor="place">Place</label>
                <input required id="place" type="text" className="input-container" onChange={this.getPlace}/>
                <button className="login-btn" type="submit">Add User</button>
            </form>
        </div>
        )
    }
}

export default AddUser