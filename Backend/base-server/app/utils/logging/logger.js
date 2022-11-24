const moment = require('moment');

module.exports.info = (message, fileName, method) => {
    logToConsole('INFO', null, message, fileName, method);
}

function logToConsole(type, errorCode, message, fileName, methodName) {
    let timestamp = moment().local().format('YYYY-MM-DD HH:mm:sssZ');
    try {
        var logStatement = fileName && fileName.length > 0 ? `FILE: ${fileName}` : '';
        if(methodName && methodName.length > 0) {
            logStatement += `METHOD: ${methodName}`;
        }
        if(logStatement) {
            logStatement = `[${logStatement}]`;
        }

        if(errorCode) {
            logStatement = `${errorCode} : ${logStatement}`;
        }

        let completeLogStatement = `[${timestamp}] : ${type} : ` + logStatement; 

        console.log(completeLogStatement);
    }
    catch(err) {
        console.log(`Error:....${err}`);
    }
}