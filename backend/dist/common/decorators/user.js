"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.default = (0, common_1.createParamDecorator)((_, executionContext) => {
    return getUser(executionContext);
});
function getUser(executionContext) {
    const httpContext = executionContext.switchToHttp();
    const request = httpContext.getRequest();
    if (request.user) {
        return request.user;
    }
}
//# sourceMappingURL=user.js.map