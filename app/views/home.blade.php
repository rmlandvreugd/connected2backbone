<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    
    <link rel="stylesheet" href="css/normalize.css">
    <!-- link rel="stylesheet" href="css/main.css" -->
    <link rel="stylesheet/less" href="less/bootstrap.less" media="all">
    <script src="js/vendor/modernizr/modernizr-2.6.2.min.js"></script>
    <script src="js/vendor/less/less-1.3.1.min.js"></script>
</head>
<body>
    <!-- [if lt IE 8]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif] -->
    
    <!-- script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script -->
    <h1>Contacts</h1>
    
    <form id="addContact">
        <div>
            <label for="first_name">First Name: </label>
            <input type="text" id="first_name" name="first_name"/>
        </div>
        <div>
            <label for="last_name">Last Name: </label>
            <input type="text" id="last_name" name="last_name"/>
        </div>
        <div>
            <label for="email_address">Email Address: </label>
            <input type="text" id="email_address" name="email_address"/>
        </div>
        <div>
            <label for="description">Description: </label>
            <textarea id="description" name="description"></textarea>
        </div>
        <div>
            <input type="submit" value="Add Contact"/>
        </div>
    </form>
    
    <script src="js/vendor/jquery/jquery-1.8.3.min.js"></script>
    <script src="js/vendor/jquerypp/jquerypp.custom.js"></script>
    <script src="js/vendor/json/json2.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-transition.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-modal.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-dropdown.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-scrollspy.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-tab.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-tooltip.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-popover.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-alert.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-button.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-collapse.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-carousel.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-typeahead.js"></script>
    <script src="js/vendor/bootstrap/bootstrap-affix.js"></script>
    <script src="js/vendor/underscore/underscore-min.js"></script>
    <script src="js/vendor/underscore/underscore.string.min.js"></script>
    <script src="js/vendor/backbone/backbone-min.js"></script>
    <!-- script src="js/vendor/backbone.localstorage/backbone.localstorage-min.js"></script -->
    <!-- script src="js/vendor/backbone.offline/backbone.offline.js"></script -->
    <script src="js/vendor/backbone.relational/backbone-relational.js"></script>
    <script src="js/vendor/backbone.marionette/backbone.babysitter.js"></script>
    <script src="js/vendor/backbone.marionette/backbone.wreqr.js"></script>
    <script src="js/vendor/backbone.marionette/backbone.marionette.core.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/models.js"></script>
    <script src="js/collections.js"></script>
    <script src="js/views.js"></script>
    <script src="js/router.js"></script>
    <script>
        new App.Router;
        Backbone.history.start();
        
        App.contacts = new App.Collections.Contacts;
        App.contacts.fetch().then(function() {
            new App.Views.App({ collection: App.contacts });
        });
    </script>
</body>
</html>
