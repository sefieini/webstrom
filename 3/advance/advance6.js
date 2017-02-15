// get to goal in minimum steps:
//                      1. alt + j, cut hash and copy var name from key
//                      2. create pattern, duplicate and paste together
const mongoose = require('mongoose');
const SchemaOptions = require('../common/schema-options');

const ManipulatorSettings = {
    displayName: String,
    description: String,
    type: String, // readonly
    supportedRuleTypes: [{type: String, enum: ['productList', 'ux', 'context']}],
    minimalContext: [{type: String, enum: ['siteId', 'verticalId', 'segmentId', 'pageTypeSegmentId', 'pageId']}],
    componentType: String,
    componentSettings: [{type: String, enum: ['siteId', 'verticalId', 'segmentId', 'pageTypeSegmentId', 'pageId']}],
    runtimeSchema: String
};

/* goal
 const mongoose = require('mongoose');
 const SchemaOptions = require('../common/schema-options');
 const supportedRuleTypes = new mongoose.Schema({type: String, enum: ['productList', 'ux', 'context']}, new SchemaOptions());
 const minimalContext = new mongoose.Schema({type: String, enum: ['siteId', 'verticalId', 'segmentId', 'pageTypeSegmentId', 'pageId']}, new SchemaOptions());
 const componentSettings = new mongoose.Schema({type: String, enum: ['siteId', 'verticalId', 'segmentId', 'pageTypeSegmentId', 'pageId']}, new SchemaOptions());

 const ManipulatorSettings = {
    displayName: String,
    description: String,
    type: String, // readonly
    supportedRuleTypes: [supportedRuleTypes],
    minimalContext: [minimalContext],
    componentType: String,
    componentSettings: [componentSettings],
    runtimeSchema: String
 };
 */
