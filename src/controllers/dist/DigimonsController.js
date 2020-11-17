"use strict";
exports.__esModule = true;
exports.getDigimon = exports.getStrongAgainst = exports.getByType = exports.getByName = exports.get = exports.getAll = void 0;
var DigimonsService_1 = require("../services/DigimonsService");
function getAll(_, res) {
    var digimons = DigimonsService_1["default"].getAll();
    res.status(200).json(digimons);
}
exports.getAll = getAll;
function get(req, res) {
    try {
        var id = req.params.id && +req.params.id || undefined;
        if (!id) {
            throw "Se requiere el ID del digimon.";
        }
        var digimon = DigimonsService_1["default"].get(id);
        res.status(200).json(digimon);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.get = get;
function getByName(req, res) {
    try {
        var name = req.params.name && req.params.name || undefined;
        if (!name) {
            throw "Se requiere el name del digimon.";
        }
        var digimons = DigimonsService_1["default"].getByName(name);
        res.status(200).json(digimons);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.getByName = getByName;
function getByType(req, res) {
    try {
        var type = req.params.type && req.params.type || undefined;
        if (!type) {
            throw "Se requiere el Tipo del digimon.";
        }
        var digimons = DigimonsService_1["default"].getByType(type);
        res.status(200).json(digimons);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.getByType = getByType;
function getStrongAgainst(req, res) {
    try {
        var name = req.params.type && req.params.name || undefined;
        if (!name) {
            throw "Se requiere el Tipo del digimon.";
        }
        var digimons = DigimonsService_1["default"].getStrongAgainst(name);
        res.status(200).json(digimons);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.getStrongAgainst = getStrongAgainst;
function getDigimon(req, res) {
    try {
        var name = req.params.name && req.params.name;
        if (!name) {
            throw "Se requiere el nombre del pokemon.";
        }
        var digimon = DigimonsService_1["default"].getDigimon;
        res.status(200).json(digimon);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.getDigimon = getDigimon;
