"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpots = void 0;
const userMap_1 = require("../Maps/userMap");
const vehMap_1 = require("../Maps/vehMap");
function createSpots() {
    var _a, _b, _c, _d, _e;
    const spotsArr = [
        {
            id: 'A1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'A10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'B10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'C10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'D10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'E10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'F10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'G10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'H10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'I10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J1',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J2',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J3',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J4',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J5',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J6',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J7',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J8',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J9',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        },
        {
            id: 'J10',
            reservation: createStatus(),
            occupied: createStatus(),
            vehicle: 'Unoccupied',
            owner: 'Unoccupied',
            spotType: '',
            location: createLocation(),
            covering: {},
            electric: {},
            valet: {}
        }
    ];
    const used = new Array(100);
    for (let i = 0; i <= spotsArr.length; i++) {
        if ((_a = spotsArr[i]) === null || _a === void 0 ? void 0 : _a.occupied) {
            // the chaining ? checks the value is not undefined before proceeding to check type
            spotsArr[i].vehicle = createOccupying();
            let count = 0;
            while (count == 0) {
                const id = Math.floor(Math.random() * 100);
                const proposed = userMap_1.UserMap.get(id);
                if (!used.includes(proposed)) {
                    count = 1;
                    spotsArr[i].owner = proposed;
                    used.push(proposed);
                }
            }
        }
    }
    for (let i = 0; i <= spotsArr.length; i++) {
        if (((_b = spotsArr[i]) === null || _b === void 0 ? void 0 : _b.location) == 'Gloucester' ||
            ((_c = spotsArr[i]) === null || _c === void 0 ? void 0 : _c.location) == 'Yate') {
            spotsArr[i].covering = false;
            spotsArr[i].electric = false;
            spotsArr[i].valet = false;
            const type = Math.floor(Math.random() * 2);
            if (type == 0) {
                if (spotsArr[i].location == 'Gloucester') {
                    spotsArr[i].spotType = 'CoachAndLorry';
                }
                else {
                    spotsArr[i].spotType = 'Standard';
                }
            }
            else {
                if (spotsArr[i].location == 'Gloucester') {
                    spotsArr[i].spotType = 'MotorhomeAndCaravan';
                }
                else {
                    spotsArr[i].spotType = 'Accessible';
                }
            }
        }
        else {
            if ((_d = spotsArr[i]) === null || _d === void 0 ? void 0 : _d.covering) {
                spotsArr[i].covering = Math.random() < 0.5;
            }
        }
        if (((_e = spotsArr[i]) === null || _e === void 0 ? void 0 : _e.location) == 'Bristol') {
            if (spotsArr[i].covering == true) {
                const type = Math.floor(Math.random() * 5);
                if (type == 0) {
                    spotsArr[i].spotType = 'Standard';
                    spotsArr[i].electric = false;
                    spotsArr[i].valet = false;
                }
                else if (type == 1) {
                    spotsArr[i].spotType = 'Accessible';
                    spotsArr[i].electric = Math.random() < 0.5;
                    spotsArr[i].valet = false;
                }
                else if (type == 2) {
                    spotsArr[i].spotType = 'Motorbike';
                    spotsArr[i].electric = false;
                    spotsArr[i].valet = false;
                }
                else if (type == 3) {
                    spotsArr[i].spotType = 'ElectricCharging';
                    spotsArr[i].electric = true;
                    spotsArr[i].valet = false;
                }
                else if (type == 4) {
                    spotsArr[i].spotType = 'Valet';
                    spotsArr[i].electric = false;
                    spotsArr[i].valet = true;
                }
            }
            else {
                spotsArr[i].electric = false;
                spotsArr[i].valet = false;
                const type = Math.floor(Math.random() * 2);
                if (type == 0) {
                    spotsArr[i].spotType = 'Standard';
                }
                else {
                    spotsArr[i].spotType = 'Accessible';
                }
            }
        }
    }
    console.log(spotsArr);
    const creation = JSON.stringify(spotsArr, null, 2);
    const fs = require('fs');
    fs.writeFile('arrays.json', creation, (err) => {
        if (err)
            throw err;
        console.log('Data created');
    });
}
exports.createSpots = createSpots;
function createStatus() {
    return Math.random() < 0.5;
}
function createOccupying() {
    const a = Math.floor(Math.random() * 12);
    return vehMap_1.vehMap.get(a);
}
function createLocation() {
    const a = Math.floor(Math.random() * 3);
    if (a == 0)
        return 'Bristol';
    if (a == 1)
        return 'Yate';
    return 'Gloucester';
}
