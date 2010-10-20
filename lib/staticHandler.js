module.exports = function(exports, imports) {
  return imports(function(stream, node$fs, head) {
    return exports(function staticHandler(write, dir) {
      return write(function(write) {
        return stream(function(stream) {
          stream(write
            (node$fs)
              (process.cwd())
              (dir)
              (head.url.pathname)
            ()
          )
        })
      })
    })
  })
}
