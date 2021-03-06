"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("./middleware/logger");
const parser_1 = require("./middleware/parser");
const typeorm_1 = require("./providers/typeorm");
let CommonModule = class CommonModule {
    configure(consumer) {
        consumer
            .apply(...[
            logger_1.LoggerMiddleware,
            parser_1.ParserMiddleware,
        ])
            .forRoutes({
            path: '/',
            method: common_1.RequestMethod.ALL,
        });
    }
};
CommonModule = __decorate([
    common_1.Module({
        exports: [typeorm_1.TypeORMProvider],
        providers: [typeorm_1.TypeORMProvider],
    })
], CommonModule);
exports.CommonModule = CommonModule;
