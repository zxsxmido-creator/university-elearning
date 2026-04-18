const rooms = new Map();

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('join-room', ({ roomId, user }) => {
      socket.join(roomId);
      if (!rooms.has(roomId)) rooms.set(roomId, { users: [], raisedHands: [] });

      const room = rooms.get(roomId);
      room.users.push({ id: socket.id, ...user });

      io.to(roomId).emit('room-users', room.users);
      socket.to(roomId).emit('user-joined', { id: socket.id, ...user });
    });

    socket.on('chat-message', ({ roomId, message, user, timestamp }) => {
      io.to(roomId).emit('chat-message', { id: socket.id, message, user, timestamp });
    });

    socket.on('raise-hand', ({ roomId, user }) => {
      const room = rooms.get(roomId);
      if (!room) return;

      const alreadyRaised = room.raisedHands.find(h => h.id === socket.id);
      if (alreadyRaised) {
        room.raisedHands = room.raisedHands.filter(h => h.id !== socket.id);
        io.to(roomId).emit('hand-lowered', { id: socket.id, user });
      } else {
        room.raisedHands.push({ id: socket.id, user });
        io.to(roomId).emit('hand-raised', { id: socket.id, user });
      }
      io.to(roomId).emit('raised-hands', room.raisedHands);
    });

    socket.on('instructor-signal', ({ roomId, type, targetId, data }) => {
      io.to(roomId).emit('instructor-signal', { type, senderId: socket.id, targetId, data });
    });

    socket.on('disconnect', () => {
      rooms.forEach((room, roomId) => {
        room.users = room.users.filter(u => u.id !== socket.id);
        room.raisedHands = room.raisedHands.filter(h => h.id !== socket.id);
        io.to(roomId).emit('user-left', { id: socket.id });
        io.to(roomId).emit('room-users', room.users);
        io.to(roomId).emit('raised-hands', room.raisedHands);
      });
    });
  });
};