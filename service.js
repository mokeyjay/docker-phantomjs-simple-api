var webserver = require('webserver');
var server = webserver.create();

var service = server.listen(8080, function(request, response) {

    var url = JSON.parse(request.post)['url'];
    var page = require('webpage').create();

    page.settings.resourceTimeout = 5000;
    page.open(url, function (status) {
        console.log(status + ' - ' + url);

        if(status === 'success'){
            response.statusCode = 200;
            response.write(page.renderBase64('JPG'));
        } else {
            response.statusCode = 500;
        }

        response.close();
    });

});