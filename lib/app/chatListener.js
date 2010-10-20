module.exports = function( exports, imports ) {
  return imports( function( stream ) {
    return exports( function( write, fn ) {
      var db = require("node-dirty")("chat.db")
        , buffer = []

      return stream( function( upstream ) {
        db.on('load', function() {
          db.forEach(function(key, val) {
            buffer.push(val)
          })

          if ( fn ) fn( listener )
          return write( listener )
        })

        function listener(client) {
          client.broadcast({announcement: client.sessionId + ' connected'})
          client.send({buffer: buffer})

          client.on('message', function(message){
            var msg = {message: [client.sessionId, message]}
            db.set(new Date().getTime(), msg)
            buffer.push(msg);
            if (buffer.length > 15) buffer.shift()
            client.broadcast(msg)
          })

          client.on('disconnect', function(){
            client.broadcast({announcement: client.sessionId + ' disconnected'})
          })
        }
      })
    })
  }, "stream" )
}
