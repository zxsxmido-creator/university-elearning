const rooms = new Map();

module.exports = (io) => {
  io.on('connection', (socket) => {
    
    socket.on('join-room', ({ roomId, user }) => {
      socket.join(roomId);
      if (!rooms.has(roomId)) rooms.set(roomId, { users: [], raisedHands: [] });

      const room = rooms.get(roomId);
      // بنحفظ الـ role هنا عشان نتأكد منها وقت الطلبات
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

    socket.on('speak-request', ({ roomId }) => {
      const room = rooms.get(roomId);
      if (!room) return;
      
      const sender = room.users.find(u => u.id === socket.id);
      // تأمين: المدرس مش محتاج يبعت طلب كلام
      if (!sender || sender.role === 'instructor' || sender.role === 'admin') return;
      
      socket.to(roomId).emit('speak-request', { id: socket.id, user: { name: sender.name, role: sender.role } });
    });

    socket.on('instructor-signal', ({ roomId, type, targetId, data }) => {
      const room = rooms.get(roomId);
      if (!room) return;
      
      const sender = room.users.find(u => u.id === socket.id);
      // تأمين: المدرس فقط هو من يرسل الإشارات للطلاب
      if (!sender || (sender.role !== 'instructor' && sender.role !== 'admin')) return;
      
      io.to(roomId).emit('instructor-signal', { type, senderId: socket.id, targetId, data });
    });

    socket.on('disconnect', () => {
      rooms.forEach((room, roomId) => {
        const wasPresent = room.users.some(u => u.id === socket.id);
        if (!wasPresent) return;

        room.users = room.users.filter(u => u.id !== socket.id);
        room.raisedHands = room.raisedHands.filter(h => h.id !== socket.id);
        
        io.to(roomId).emit('user-left', { id: socket.id });

        // تدمير الغرفة لو فضيت لتوفير الرامات
        if (room.users.length === 0) {
          rooms.delete(roomId);
        } else {
          io.to(roomId).emit('room-users', room.users);
          io.to(roomId).emit('raised-hands', room.raisedHands);
        }
      });
    });
  });
};