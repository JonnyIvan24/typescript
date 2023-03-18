"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sweetalert2_1 = __importDefault(require("sweetalert2"));
sweetalert2_1.default.fire({
    title: 'Bien!',
    text: 'Datos guardados exitosamente',
    icon: 'success',
    confirmButtonText: 'Bien'
});
