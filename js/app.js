/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *  adding a useless extra comment here to test git.
 */
var vanillaPress = {};


/**
 * Initializes the VanillaPress app
 * @return {void}
 */
vanillaPress.init = function() {

  model.init();
  router.init();
  view.init();
  editor.init();
};

vanillaPress.init();
