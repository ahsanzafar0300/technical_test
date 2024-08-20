"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const app_module_1 = require("./app.module");
const logger_1 = require("./common/logger/logger");
const swagger_1 = require("@nestjs/swagger");
const dto_validation_pipe_1 = require("./common/validation/dto-validation.pipe");
const error_filter_1 = require("./common/exceptions/error.filter");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
(async () => {
    const cors = {};
    const { CORS_ORIGINS = '' } = process.env;
    if (CORS_ORIGINS) {
        cors.origin = CORS_ORIGINS === null || CORS_ORIGINS === void 0 ? void 0 : CORS_ORIGINS.split(',');
        cors.credentials = true;
    }
    const logger = new logger_1.CustomLogger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger,
        cors,
        rawBody: true,
    });
    app.useGlobalFilters(new error_filter_1.ErrorFilter());
    app.useGlobalPipes(new dto_validation_pipe_1.DtoValidationPipe());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    app.use((0, helmet_1.default)());
    const rawBodyBuffer = (req, _, buffer) => {
        if (buffer === null || buffer === void 0 ? void 0 : buffer.length) {
            req.rawBody = buffer;
        }
    };
    app.use(bodyParser.json({ verify: rawBodyBuffer, limit: '5mb' }));
    app.use(bodyParser.urlencoded({
        verify: rawBodyBuffer,
        limit: '5mb',
        extended: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Bridgit Technical Comptetence API')
        .setDescription(`This is the Swagger interface for the technical competence API.  You can use this to experiment with the API and learn about payloads and error messages for the API endpoints you will be integrating.`)
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            plugins: {
                wrapComponents: {
                    curl: () => () => null,
                },
            },
        },
    });
    const port = process.env.PORT || 8081;
    const host = process.env.HOST || '127.0.0.1';
    const server = await app.listen(port, host);
    logger.notify(`App listening at http://${host}:${port}`);
    server.keepAliveTimeout = 61 * 1000;
    server.headersTimeout = 62 * 1000;
})();
//# sourceMappingURL=main.js.map