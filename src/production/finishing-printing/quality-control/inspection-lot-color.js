'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Kanban = require("../kanban");
var InspectionLotColorItem = require("./inspection-lot-color-item");

module.exports = class InspectionLotColor extends BaseModel {
    constructor(source) {
        super('inspection-lot-color', '1.0.0');

        this.code = '';
        this.kanbanId = {};
        this.kanban = new Kanban();
        this.date = new Date();
        this.items = [];

        this.copy(source);
        this.items = (this.items || []).map(item => new InspectionLotColorItem(item));
    }
};