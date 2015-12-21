## Cowsays "Chuck"

The purpose of this simple app was to cheer up developers logging to our development server.

### Jokes

All jokes are coutesy of `http://api.icndb.com/jokes/`.

### Installation

Just clone the repo and run "npm install" in the repo directory.

If you want the cow throwing a joke on a user logging into a remote terminal, just add `<path_to_the_repo> node index.js` into the `~/.bashrc` or `~/.bash_profile` files.

### Updating joke list

When you're fed up with the default list of Chuck jokes, run `npm getjokes.js` to get another set of 100 of random jokes. 

To get a complete list of Chuck jokes, modify the url from the `getjokes.js` file to `http://api.icndb.com/jokes/`.
