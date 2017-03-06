'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require('../master/buyer');
var Product = require('../master/product');
var uom = require('../master/uom');
var AccountBank = require('../master/account-bank');
var Comodity = require('../master/comodity');
var Quality = require('../master/quality');
var MaterialConstruction = require('../master/material-construction');
var YarnMaterial = require('../master/yarn-material');


module.exports = class WeavingSalesContract extends BaseModel {
    constructor(source) {
        super('weaving-sales-contract', '1.0.0');

        this.salesContractNo='';

        this.buyerId={};
        this.buyer= new Buyer();

        this.dispositionNumber='';

        this.materialId={};
        this.material=new Product();

        this.uomId={};
        this.uom=new uom();

        this.materialConstructionId={};
        this.materialConstruction=new MaterialConstruction();
        
        this.yarnMaterialId={};
        this.yarnMaterial=new YarnMaterial();

        this.materialWidth='';
        this.orderQuantity=0;
        this.shippingQuantityTolerance=0;

        this.comodityId={};
        this.comodity=new Comodity();

        this.comodityDescription='';

        this.qualityId={};
        this.quality=new Quality();

        this.rollLength='';
        this.incomeTax = '';
        this.paymentMethod = '';
        this.paymentRequirement='';

        this.accountBankId={};
        this.accountBank=new AccountBank();

        this.transportFee='';
        this.deliveredTo='';
        this.packing='';
        this.agent='';
        this.comission=0;
        this.deliverySchedule=new Date();
        this.condition='';
        this.attachment='';
        this.remark='';

        this.copy(source);
    }
};