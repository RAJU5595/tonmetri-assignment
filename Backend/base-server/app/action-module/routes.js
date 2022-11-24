const router = require('express').Router();
const bodyParser = require('body-parser');

const urlencodedPraser = bodyParser.urlencoded({ extended : true });
const appDelegates = require('../delegate-module/app-delegates');

router.route('/ping').get(appDelegates.ping);

router.route('/getVendors').get(appDelegates.getVendors);

router.route('/addVendor').post(appDelegates.addVendor);

router.route('/addUser').post(appDelegates.addUser)

router.route('/updateVendor').put(appDelegates.updateVendor);

module.exports = router;