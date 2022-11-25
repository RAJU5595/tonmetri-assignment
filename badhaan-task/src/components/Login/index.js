import { Component} from "react";
import './index.css'
import Cookies from 'js-cookie'

class Login extends Component{

    state = {
        username : '',
        password : '',
        error : '',
        showError : false
    }

    onSubmitSuccess = (data) => {
        console.log(data)
        Cookies.set('jwt_token',data.jwt_token,{expires : 30})
        const {history} =this.props
        history.push("/")
    }

    onSubmitFailure = (errorMsg) =>{
        this.setState({error : errorMsg,showError : true})
    }

    getFormDetails = async (event) =>{
        
        event.preventDefault()

        const data = {
            email : this.state.username,
            password : this.state.password
        }

        const createVendorApi = 'http://localhost:5001/api/login'
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
        this.onSubmitSuccess(data)
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
        const {error,showError,username,password}= this.state
        return (
        <div className="bg-container">
            <h1>Login Form</h1>
            <form className="form-container" onSubmit={this.getFormDetails} action="/">
                <label htmlFor="username">Email</label>
                <input required id="username" type="text" className="input-container" onChange={this.getUsername} value={username}/>
                <label htmlFor="password">Password</label>
                <input required id="password" type="password" className="input-container" onChange={this.getPassword} value={password}/>
                <button className="login-btn" type="submit">Submit</button>
                {showError && <p>{error}</p>}
            </form>
            <a href="/adduser">New User</a>
        </div>
        )
    }
}

export default Login