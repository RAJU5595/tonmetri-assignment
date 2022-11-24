import { Component} from "react";
import './index.css'

class AddUser extends Component{

    state = {
        email : '',
        password : '',
        mobile :'',
        place : '',
        suc_msg : '',
        show_msg : false
    }

    onSubmitSuccess = (msg) => {
        this.setState({
            suc_msg : msg,
            email :"",
            password :'',
            place :'',
            show_msg : true,
            mobile : ''
        })
    }

    getFormDetails = async (event) =>{  
        event.preventDefault()
        const data = {
            email : this.state.email,
            password : this.state.password,
            mobile : parseInt(this.state.mobile),
            place : this.state.place
        }
        const createUserApi = 'http://localhost:5001/api/addUser'
        const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        
        const response = await fetch(createUserApi, options)
        if (response.ok === true) {
        const data = await response.json()
        this.onSubmitSuccess(data.msg)
        } else {
        const data = await response.json()
        this.onSubmitFailure(data.error_msg)
        }
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
        const {email,password,mobile,place,suc_msg,show_msg}=this.state
        return (
        <div className="bg-container">
            <h1>Add User</h1>
            <form className="form-container" onSubmit={this.getFormDetails} action="/">
                <label htmlFor="username">Email</label>
                <input required id="username" type="text" className="input-container" onChange={this.getUsername} value={email}/>
                <label htmlFor="password">Password</label>
                <input required id="password" type="text" className="input-container" onChange={this.getPassword} value={password}/>
                <label htmlFor="mobile">Mobile No</label>
                <input required id="mobile" type="text" className="input-container" onChange={this.getMobileNo} value={mobile}/>
                <label htmlFor="place">Place</label>
                <input required id="place" type="text" className="input-container" onChange={this.getPlace} value={place}/>
                <button className="login-btn" type="submit">Add User</button>
                {show_msg && <p className="msg">{suc_msg} - <a href="/login">Login</a></p>}
            </form>
        </div>
        )
    }
}

export default AddUser