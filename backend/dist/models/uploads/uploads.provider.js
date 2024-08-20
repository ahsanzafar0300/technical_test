"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProviders = void 0;
const repositories_1 = require("../../common/constants/repositories");
const upload_entity_1 = require("./upload.entity");
exports.uploadProviders = [
    {
        provide: repositories_1.UPLOAD_REPOSITORY,
        useValue: upload_entity_1.Upload,
    },
];
//# sourceMappingURL=uploads.provider.js.map