var buffer = []
module.exports = function( exports, imports ) {
  return imports( function( stream, render ) {
    return exports( function( write, fn ) {
      return stream( function( upstream ) {
        if ( fn ) fn( listener )
        return write( listener )

        function listener(client) {
          client.send({ buffer: buffer })
          client.broadcast({ announcement: client.sessionId + ' connected' })

          client.on('message', function(message){
	        var msg = { message: [client.sessionId, message] }
	        buffer.push(msg);
	        if (buffer.length > 15) buffer.shift()
	        client.broadcast(msg)
          })

          client.on('disconnect', function(){
	        client.broadcast({ announcement: client.sessionId + ' disconnected' })
          })
        }
      })
    })
  }, "stream", "render" )
}
