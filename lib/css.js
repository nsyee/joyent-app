module.exports = function( exports, imports ) {
  return exports( function css( write ) {
    return function read( selector, obj ) {
      if ( !arguments.length ) return write;
        write = write(selector)(" {");
        write = attrs( write )( obj )("}\n");
        return read;
     }
    })
  
  function attrs( write ) {
    return function read( obj ) {
      for ( var name in obj ) {
        write = write( name )( ":" );
        write = attr( write )( obj[ name ] );
      }
      return write;
    }
  }
  
  function attr( write ) {
    return function read( value ) {
      return write( value )(";");
    }
  }
}