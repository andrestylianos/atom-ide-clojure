const {AutoLanguageClient} = require('atom-languageclient')
//const cp = require("child_process");

//atom.config.set('core.debugLSP', true)

class ClojureLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.clojure' ] }
  getLanguageName () { return 'Clojure' }
  getServerName () { return 'clojure-lsp' }

  /*
  startServerProcess () {

    const options = {};
    options.env = Object.create(process.env);
    options.env.ELECTRON_RUN_AS_NODE = "1";
    options.env.ELECTRON_NO_ATTACH_CONSOLE = "1";
    const args = ["-c", "cd /Users/andrestylianos/Coding/clojure-lsp/ && /usr/local/bin/lein run"];
    const child = cp.spawn("bash", args, options);
    this.captureServerErrors(child);
    return child;
  }
  */
  startServerProcess () {
    return super.spawnChildNode([ require.resolve('/usr/local/bin/clojure-lsp') ])
  }
}

module.exports = new ClojureLanguageClient()
