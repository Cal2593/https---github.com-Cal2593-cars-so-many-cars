"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArrays = void 0;
const createSpots_1 = require("./Arrays/createSpots");
const createReserved_1 = require("./Arrays/createReserved");
const createOccupied_1 = require("./Arrays/createOccupied");
const createOccupying_1 = require("./Arrays/createOccupying");
const createOwners_1 = require("./Arrays/createOwners");
function CreateArrays() {
    const spots = (0, createSpots_1.createSpots)();
    const reserve = (0, createReserved_1.createReserved)();
    const occupy = (0, createOccupied_1.createOccupied)();
    const occupyingCar = (0, createOccupying_1.createOccupying)(occupy);
    const owns = (0, createOwners_1.createOwners)(occupy);
    return [spots, reserve, occupy, occupyingCar, owns];
}
exports.CreateArrays = CreateArrays;
