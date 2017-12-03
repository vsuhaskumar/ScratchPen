/**'+
 * Created by kaustubhmungale on 02/12/17.'+
 */


var dash = {};
var domCount = 0;
var rowId = "";
dash['createDOM'] = function(project, id, element, user){

    var name = project['name'];
    var desc = project['desc'];
    var time = project['timestamp'];

    // dash['tmplRow'] = '<div class="row" id="row_"' + id + '>' +
    //                   '</div><br>';
    dash['tmpl'] =
        '<div class="col-sm-4 dashboard-item" id="' + id + '">' +
          '<div class="panel panel-primary dashboard-item-primary">'+
            '<div class="panel-heading dashboard-item-header"></div>'+
              '<div class="panel-body">'+
                  '<div class="catalog-content">'+
                      '<div class="dashboard-item-name"><h3>'+ name + '</h3></div>'+
                      '<div class="dashboard-item-desc">'+ desc + '</div>'+
                  '</div>'+
              '</div>'+
            '<div class="panel-footer">'+
                '<div><h4>Created By - '+ user + '</h4></div>'+
                '<div><h5>Time Created - '+ moment(Number(time)).format("DD/MM/YYYY") +'</h5> </div>'+
            '</div>'+
          '</div>'+
        '</div>';


    if(domCount === 0) {
        rowId = "#row_" + id;
        element.append('<div class="row" id="row_' + id + '">' + dash['tmpl'] + '</div><br>');
    }
    else {
        $(rowId).append(dash['tmpl'])
    }

    domCount++;
    if(domCount === 3) {
        domCount = 0;
    }

};



 
dash['init'] = function () {
    var el = $(".dashboard-container").empty();
    var ref = firebase.app().database().ref();
    var usersRef = ref.child('Users');
    usersRef.once('value', function (snap) {
        var projects = snap.val(); // Keep the local user object synced with the Firebase userRef
        //console.log(projects);
        for(var p in projects) {
            var userId = projects[p]['userId'];
            for (var project in projects[p]['projects']) {
                console.log("Creating Dynamic DOM");
                dash.createDOM(projects[p]['projects'][project], project, el, userId)
            }
        }
    });
    $("#scratch").hide();
    $(".comments").hide();

};