import { Component} from "react";
import './index.css'

class Login extends Component{

    state = {
        username : '',
        password : ''
    }

    onSubmitSuccess = () => {
        const {history} = this.props
        history.replace('/')
    }

    getFormDetails = async (event) =>{
        
        event.preventDefault()
        console.log(this.state)

        const data = {
            "username" : this.state.vendorName,
            "password" : this.state.password
        }

        const createVendorApi = 'http://localhost:5001/api/addVendor'
        const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        
        const response = await fetch(createVendorApi, options)
        if (response.ok === true) {
        const data = await response.json()
        this.onSubmitSuccess()
        } else {
        const data = await response.json()
        this.onSubmitFailure(data.error_msg)
        }
    }

    getUsername = event =>{
        this.setState({username : event.target.value})
    }

    getPassword = event =>{
        this.setState({password : event.target.value})
    }

    render(){
        return (
        <div className="bg-container">
            <h1>Login Form</h1>
            <form className="form-container" onSubmit={this.getFormDetails} action="/">
                <label htmlFor="username">Email</label>
                <input required id="username" type="text" className="input-container" onChange={this.getUsername}/>
                <label htmlFor="password">Password</label>
                <input required id="password" type="text" className="input-container" onChange={this.getPassword}/>
                <button className="login-btn" type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default Login