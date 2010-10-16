module.exports = function(exports, imports) {
  return imports(function(stream, node$fs, sleep, head) {
    return exports(function mystatic(write) {
      return write(function(write) {
        return stream(function(stream) {
          stream(write
            (node$fs)
              (process.cwd())
              ("/static")
              (head.url.pathname)
            ()
          )
        })
      })
    })
  })
}
