
'use strict';

var BlockchainClient = require('./blockchainClient.js');
var blockchainClient = new BlockchainClient();


//example of how to submit args to transaction - this can be changed
//  async addMember(ctx, id, organization, address, memberType) {

let dataForAddMember = {};
dataForAddMember.function = 'addMember';
dataForAddMember.id = 'horea.porutiu@ibm.com';
dataForAddMember.organization = 'IBM';
dataForAddMember.address = 'NYC';
dataForAddMember.memberType = 'Software Developer';

blockchainClient.submitTransaction(dataForAddMember);