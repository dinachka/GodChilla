const { sessionMW } = require('../middlewares/sessions');

module.exports = {
  initWebSockets: (expressApp) => {
    const server = require('http').createServer(expressApp);
    const io = require('socket.io')(server, {
      cors: { origin: ['http://localhost:3000'] },
    });
    io.use((socket, next) => {
      sessionMW(socket.request, {}, next);
    });

    io.on('connection', (socket, next) => {
      const { user } = socket.request?.session;
      if (!user) {
        socket.emit('message', 'Необходимо авторизоватья!');
        socket.disconnect(true);
      }

      for (let t = 0; t < 3; t++) {
        setTimeout(
          () => socket.emit('message', 'message from server'),
          1000 * t,
        );
      }
    });

    return server;
  },
};
