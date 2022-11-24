import './index.css'

const VendorDetails = (props) =>{
    const {details} = props
    const {vendorName,bankAccountNumber,bankName} = details
    return (
        <div className="vendor-details-card">
            <div className='text-card'>
                <h5>{vendorName}</h5>
                <h5>{bankAccountNumber}</h5>
                <h5>{bankName}</h5>
            </div>
            <div>
                <button className='edit-btn'>Edit</button>
                <button className='del-btn'>Delete</button>
            </div>
        </div>
    )
}

export default VendorDetails