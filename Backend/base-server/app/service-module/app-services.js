const connectionPool = require('../db-config/db-config-logic');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')

module.exports.getVendors = (data)=> {

    return new Promise( async(resolve, reject) => {
        try {
            
                console.log("connected..");
                let selectQuery = `SELECT * FROM internship.bank_details`;
                connectionPool.query(selectQuery, (err, result) => {
                    if(err){
                        reject({ 'statusCode' : 404, 'result': err })
                    }
                    resolve({ 'statusCode' : 200, 'result': result });
                })
        }
        catch (err) {
            console.log("Catch in Main Logic.. Hello world.." + err);
            reject({'statusCode' : 404, 'result': err });
        }
    })
}

module.exports.addVendor = (req, res)=> {

    return new Promise( async(resolve, reject) => {
        try {

            let reqBody = {
                bankKey: uuidv4(),
                ...req.body
            }
        
            let selectQuery = `INSERT INTO internship.bank_details SET ?`;
            connectionPool.query(selectQuery, reqBody ,  (err, result) => {
                if(err){
                    reject({ 'statusCode' : 404, 'result': err });
                }
                resolve({ 'statusCode' : 200, 'result': result });
                
            });
            
        }
        catch (err) {
            console.log("Catch in Main Logic.. Hello world.." + err);
            reject({'statusCode' : 404, 'result': err });
        }
    })
}

module.exports.addUser = (req, res)=> {

    return new Promise( async(resolve, reject) => {
        try {

            const hashedPassword = await bcrypt.hash(req.body.password,10)
            let reqBody = {
                userKey: uuidv4(),
                ...req.body,
                password : hashedPassword
            }

            console.log(reqBody)
        
            let selectQuery = `INSERT INTO internship.users SET ?`;
            connectionPool.query(selectQuery, reqBody ,  (err, result) => {
                if(err){
                    reject({ 'statusCode' : 404, 'result': err });
                }
                resolve({ 'statusCode' : 200, 'result': result });
            });
            
        }
        catch (err) {
            console.log("Catch in Main Logic.. Hello world.." + err);
            reject({'statusCode' : 404, 'result': err });
        }
    })
}



module.exports.updateVendor = (req, res)=> {

    return new Promise( async(resolve, reject) => {
        try {

            let reqBody = {
                bankKey: uuidv4(),
                ...req.body
            }

            console.log(reqBody);
        
            let selectQuery = `UPDATE internship.bank_details SET vendorName = ? bankAccountNumber = ? bankName = ? addressLine1 = ? addressLine2 = ? city = ? country = ? zipcode = ? where bankKey = ?`;
            connectionPool.query(selectQuery, ["1", "2", "3", "4", "5", "6", "7", "8", "236ae9c3-b0a8-4186-9b08-4c230f0c787d"] ,  (err, result) => {
                if(err){
                    reject({ 'statusCode' : 404, 'result': err });
                }
                resolve({ 'statusCode' : 200, 'result': result });
                
            });
            
        }
        catch (err) {
            console.log("Catch in Main Logic.. Hello world.." + err);
            reject({'statusCode' : 404, 'result': err });
        }
    });
}

module.exports.loginUser = (req, res)=> {

    return new Promise( async(resolve, reject) => {
        try {

            const {email , password} = req.body
        
            let selectQuery = `SELECT email from internship.users WHERE email=${email}`;
            connectionPool.query(selectQuery, reqBody ,  (err, result) => {
                if(err){
                    reject({ 'statusCode' : 404, 'result': err });
                }
                resolve({ 'statusCode' : 200, 'result': result });
            });
            
        }
        catch (err) {
            console.log("Catch in Main Logic.. Hello world.." + err);
            reject({'statusCode' : 404, 'result': err });
        }
    })
}
