module.exports = function( exports, imports ) {
  var http = require( "http" )
    , socketIo = require('Socket.IO-node')
    , io

  return imports( function( stream, listener ) {
    return exports( function( write, server, wsListener ) {
      if ( !( server instanceof http.Server ) ) {
        var where = server
        server = http.createServer()
        server.listen( where )
        io = socketIo.listen(server)
      }

      return stream( function( upstream ) {
        upstream( listener( function( listener ) {
          server.on( "request", listener );
        }))
        upstream( wsListener( function( listener ) {
          io.on( "connection", listener );
        }))
        return upstream( write );
      });
    });
  }, "stream", "node/listener" );
}
