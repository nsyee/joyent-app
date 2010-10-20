module.exports = function(exports, imports) {
  return imports(function(stream, css) {
    return exports(function baseCss(write) {
      var mainColor = "#436979"
        , submitBtn = "#form input[type=submit]"

      return write(function(write) {
        return stream(function(stream) {
          stream(write
            (css)
              ("h1", { color: mainColor })
              ("ul", { "list-style-type": "square", color: mainColor })
              ("a", { color: "#8CACBB" })
              ("#chat", { height: "300px"
                        , overflow: "auto"
                        , width: "800px"
                        , border: "1px solid #eee"
                        , font: "13px Helvetica, Arial"
                        })
              ("#chat p", { padding: "8px", margin: 0 })
              ("#chat p:nth-child(odd)", { background: "#F6F6F6" })
              ("#form", { width: "782px"
                        , background: "#333"
                        , padding: "5px 10px; display: none;"
                        })
              ("#form input[type=text]", { width: "700px"
                                         , padding: "5px"
                                         , background: "#fff"
                                         , border: "1px solid #fff"
                                         })
              (submitBtn, { cursor: "pointer"
                          , background: "#999"
                          , border: "none"
                          , padding: "6px 8px"
                          , "-moz-border-radius": "8px"
                          , "-webkit-border-radius": "8px"
                          , "margin-left": "5px"
                          , "text-shadow": "0 1px 0 #fff"
                          })
              (submitBtn+":hover", { background: "#A2A2A2" })
              (submitBtn+":active", { position: "relative", top: "2px" })
            ()
          )
        })
      })
    })
  })
}

