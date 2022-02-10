const { sessionMW } = require('../middlewares/sessions');

const sockets = {};

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

      if (!user || !user.id) {
        socket.emit('message', 'Необходимо авторизоватьcя!');
        socket.disconnect(true);
        return;
      }

      sockets[user.id] = [...(sockets[user.id] || []), socket.id];

      socket.on('disconnect', () => {
        sockets[user.id] = sockets[user.id].filter(
          socketId => socketId !== socket.id
        );
      });
    });

    return server;
  },
};
