"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serverConfig(app, config) {
    function startServer() {
        app.listen(config.port, config.ip, () => {
            console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
        });
    }
    return {
        startServer,
    };
}
exports.default = serverConfig;
