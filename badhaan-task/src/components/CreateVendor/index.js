import { Component} from "react";
import './index.css'

class CreateVendor extends Component{

    state = {
        vendorName : '',
        bankAccNo : '',
        bankName : false,
        address : {}
    }

    onSubmitSuccess = () => {
        const {history} = this.props
        history.replace('/')
    }

    getFormDetails = async (event) =>{
        
        event.preventDefault()
        console.log(this.state)

        const data = {
            "vendorName" : this.state.vendorName,
            "bankAccountNumber" : parseInt(this.state.bankAccNo),
            "bankName" :this.state.bankName,
            "addressLine1" : this.state.address.address1,
            "addressLine2" : this.state.address.address2,
            "city" : this.state.address.city,
            "country" : this.state.address.country,
            "zipcode" : parseInt(this.state.address.zipcode)
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

    getVendorName = (event) =>{
        this.setState({vendorName : event.target.value})
    }

    getAccNo = (event) =>{
        this.setState({bankAccNo : event.target.value})
    }

    getBankName = event =>{
        this.setState({bankName : event.target.value})
    }

    getAddress1 = event => {
        this.setState(prevState => ({
        address : {...prevState.address,address1 : event.target.value}
    }))}

    getAddress2 = event => {
        this.setState(prevState => ({
        address : {...prevState.address,address2 : event.target.value}
    }))}

    getCity = event => {
        this.setState(prevState => ({
        address : {...prevState.address,city : event.target.value}
    }))}

    getCountry = event => {
        this.setState(prevState => ({
        address : {...prevState.address,country : event.target.value}
    }))}

    getZipCode = event => {
        this.setState(prevState => ({
        address : {...prevState.address,zipcode : event.target.value}
    }))}

    render(){
        return (
        <div className="bg-container">
            <h1>Create Vendor</h1>
            <form className="form-container" onSubmit={this.getFormDetails} action="/">
                <label htmlFor="vendor-name">Vendor Name</label>
                <input required id="vendor-name" type="text" className="input-container" onChange={this.getVendorName}/>
                <label htmlFor="account-num">Bank Account Number</label>
                <input required id="account-num" type="text" className="input-container" onChange={this.getAccNo}/>
                <label htmlFor="bank-name">Bank Name</label>
                <input required id="bank-name" type="text" className="input-container" onChange={this.getBankName}/>
                <div className="address-container">
                    <div className="add-card">
                        <label htmlFor="add1">Address Line 1</label>
                        <input required id="add1" type="text" className="input-container" onChange={this.getAddress1}/>
                    </div>
                    <div className="add-card">
                        <label htmlFor="add2">Address Line 1</label>
                        <input required id="add2" type="text" className="input-container" onChange={this.getAddress2}/>
                    </div>
                </div>
                <div className="address-container">
                    <div className="add-card-2">
                        <label htmlFor="city">City</label>
                        <input required id="city" type="text" className="input-container-2" onChange={this.getCity}/>
                    </div>
                    <div className="add-card-2">
                        <label htmlFor="country">Country</label>
                        <input required id="country" type="text" className="input-container-2" onChange={this.getCountry}/>
                    </div>
                    <div className="add-card-2">
                        <label htmlFor="zip">Zip Code</label>
                        <input required id="zip" type="text" className="input-container-2" onChange={this.getZipCode}/>
                    </div>
                </div>
                <button className="login-btn" type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default CreateVendor