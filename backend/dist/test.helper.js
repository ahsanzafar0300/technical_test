"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestApp = void 0;
const app_module_1 = require("./app.module");
const dto_validation_pipe_1 = require("./common/validation/dto-validation.pipe");
const error_filter_1 = require("./common/exceptions/error.filter");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const common_1 = require("@nestjs/common");
const testing_1 = require("@nestjs/testing");
let app;
let sequelize;
beforeAll(async () => {
    const testingModule = await testing_1.Test.createTestingModule({
        imports: [app_module_1.AppModule],
    }).compile();
    app = testingModule.createNestApplication();
    app.useGlobalFilters(new error_filter_1.ErrorFilter(), new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new dto_validation_pipe_1.DtoValidationPipe());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    sequelize = app === null || app === void 0 ? void 0 : app.get('SEQUELIZE');
    await app.init();
});
afterAll(async () => {
    await (sequelize === null || sequelize === void 0 ? void 0 : sequelize.close());
});
function getTestApp() {
    return app;
}
exports.getTestApp = getTestApp;
//# sourceMappingURL=test.helper.js.map