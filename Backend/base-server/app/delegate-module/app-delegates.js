const fileOwner = 'app-delegates.js';
const logger = require('../utils/logging/logger');
const appServices =  require('../service-module/app-services');

module.exports.ping = async(req, res) => {
    const functionName = "Ping Function";
    logger.info(functionName);

    try {
        let result = {
            status : "success",
            details : "Service was pinged successfully"
        }
        res.status(200).send(result);
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error"
        }
        res.status(500).send(result);
    }
};


module.exports.getVendors = async(req, res) => {
    const functionName = "getVendors";

    logger.info(functionName)

    try {
        const getVendorList = await appServices.getVendors(req);
        if(getVendorList.statusCode === 200) {
            res.status(getVendorList.statusCode).send(getVendorList.result);
        }
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error",
            err : err.result
        }
        res.status(500).send(result);
    }
}

module.exports.addVendor = async(req, res) => {
    const functionName = "addVendor";

    logger.info(functionName);

    try {
        const addVendor = await appServices.addVendor(req, res);
        if(addVendor.statusCode === 200) {
            res.status(addVendor.statusCode).send(addVendor.result);
        }
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error",
            err : err.result
        }
        res.status(500).send(result);
    }
}

module.exports.updateVendor = async(req, res) => {
    const functionName = "updateVendor";

    logger.info(functionName);

    try {
        const updateVendor = await appServices.updateVendor(req, res);
        if(updateVendor.statusCode === 200) {
            res.status(updateVendor.statusCode).send(updateVendor.result);
        }
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error",
            err : err.result
        }
        res.status(500).send(result);
    }
}

module.exports.addUser = async(req, res) => {
    const functionName = "addUser";

    logger.info(functionName);

    try {
        const addUser = await appServices.addUser(req, res);
        if(addUser.statusCode === 200) {
            res.status(addUser.statusCode).send({msg : "user created successfully"});
        }
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error",
            err : err.result
        }
        res.status(500).send(result);
    }
}

module.exports.loginUser = async(req, res) => {
    const functionName = "loginUser";

    logger.info(functionName);

    try {
        const loginUser = await appServices.loginUser(req, res);
        if(loginUser.statusCode === 200) {
            res.status(loginUser.statusCode).send(loginUser.result);
        }
    }
    catch(err) {
        if(err.statusCode === 404){
            res.status(err.statusCode).send({"error_msg":"user not found"});
        }
        if(err.statusCode === 403){
            res.status(err.statusCode).send({"error_msg":"invalid password"});
        }
    }
}