"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDateFilter = void 0;
const sequelize_1 = require("sequelize");
const response_messages_1 = require("./constants/response-messages");
function createDateFilter(field, minimumDate, maximumDate) {
    let dateFilter = {};
    if (minimumDate === null || minimumDate === void 0 ? void 0 : minimumDate.getTime) {
        if (maximumDate === null || maximumDate === void 0 ? void 0 : maximumDate.getTime) {
            if (minimumDate.getTime() > maximumDate.getTime()) {
                throw new Error(response_messages_1.MINIMUM_DATE_EXCEEDS_MAXIMUM_DATE_ERROR);
            }
            dateFilter = {
                [field]: {
                    [sequelize_1.Op.between]: [minimumDate, maximumDate],
                },
            };
        }
        else {
            dateFilter = {
                [field]: {
                    [sequelize_1.Op.gte]: minimumDate,
                },
            };
        }
    }
    else if (maximumDate === null || maximumDate === void 0 ? void 0 : maximumDate.getTime) {
        dateFilter = {
            [field]: {
                [sequelize_1.Op.lte]: maximumDate,
            },
        };
    }
    return dateFilter;
}
exports.createDateFilter = createDateFilter;
//# sourceMappingURL=query-filters.js.map