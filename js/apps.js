OS.apps = [
    {
        title: "Browser",
        app: "browser",
        theme: "light",
        height: 480,
        width: 800
    },
    {
        title: "Search",
        app: "google",
        theme: "light",
        height: 480,
        width: 800
    },
    {
        title: "Settings",
        app: "settings",
        theme: "light",
        height: 420,
        width: 700
    }/*,
    {
        title: "Terminal",
        app: "terminal",
        theme: "dark",
        height: 400,
        width: 700
    }*/
];

$(document).ready(function() {
    _.forEach(_.sortBy(OS.apps, function(o) { return o.title; }), function(object) {
        var $path = "./apps/";
        var $launcher = $(".launcher");
        var $app_id = "app_" + object.app;
        var $img_path = $path + object.app + "/app.png";
        var $main_path = $path + object.app + "/index.html";

        var $app =  $('<div class="app" id="' + $app_id + '"></div>');
        var $icon =     $('<div class="app-icon"></div>');
        var $img =          $('<img src="' + $img_path + '" height="48px">');
        var $title =    $('<div class="app-title"></div>').text(object.title);

        $icon.append($img);
        $app.append($icon);
        $app.append($title);
        $launcher.append($app);

        $(document).delegate("[id^='" + $app_id + "']", "click", function(e) {
            e.stopImmediatePropagation();
            new OS().Window(object);
        });
    });
});
