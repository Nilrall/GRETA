function swapcolor() {
    if ($("#color_var").attr("href").indexOf("light") > 0){loaddarkgraph()}
    else {loadlightgraph()}

    
}

function loaddarkgraph(){
    $("#chartContainer").fadeOut(1)
        $("#color_var").attr("href","css/dark.css");
        document.cookie = 'theme=dark;path=/;SameSite=None; Secure';
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "dark2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: false,
            animationEnabled: true,
            title: {
                text: "Compétences"
            },
            axisY:{
                maximum: 10
            },
            data: [{
                type: "bar",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}/10",
                showInLegend: "true",
                legendText: " ",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}/10",
                click: competencesinfo,
                dataPoints: [
                    { y: 5, label: "AJAX", cursor: "help" },
                    { y: 5, label: "Jquery", cursor: "help" },
                    { y: 6, label: "SQL", cursor: "help" },
                    { y: 6, label: "PHP", cursor: "help"},
                    { y: 4, label: "HTML", cursor: "help" },
                    { y: 3, label: "CSS", cursor: "help" },
                    { y: 7, label: "Powershell", cursor: "help" }
                ]
            }]
        });
        $("#chartContainer").fadeIn(2000);
        chart.render();
}

function loadlightgraph(){
    $("#chartContainer").fadeOut(1);
        $("#color_var").attr("href","css/light.css");
        document.cookie = 'theme=light;path=/;SameSite=None; Secure';
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: false,
            animationEnabled: true,
            title: {
                text: "Compétences"
            },
            axisY:{
                maximum: 10
            },
            data: [{
                type: "bar",
                startAngle: 25,
                // toolTipContent: "<b>{label}</b>: {y}/10",
                showInLegend: "true",
                legendText: " ",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}/10",
                click: competencesinfo,
                mouseover: competencesinfo,
                dataPoints: [
                    { y: 5, label: "AJAX", cursor: "help" },
                    { y: 5, label: "Jquery", cursor: "help" },
                    { y: 6, label: "SQL", cursor: "help" },
                    { y: 6, label: "PHP", cursor: "help"},
                    { y: 4, label: "HTML", cursor: "help" },
                    { y: 3, label: "CSS", cursor: "help" },
                    { y: 7, label: "Powershell", cursor: "help" }
                ]
            }]
        });
        $("#chartContainer").fadeIn(2000)
        chart.render();
}

function competencesinfo(e){
    $("#pitch_competence p").fadeOut(500).promise().done(function (){
        $("#"+e.dataPoint.label).fadeIn(500);
        $("#title_competence").text(e.dataPoint.label)
    })
}

$( document ).ready(function() {
    var t
    if(document.cookie.indexOf("theme")<0){document.cookie = 'theme=light;path=/;SameSite=None; Secure';}
    
    if(document.cookie.indexOf("theme")>=0 && document.cookie.indexOf("light")<0){
        loaddarkgraph()
    }
    else {
        loadlightgraph()
    }    

    $("#competences_area").mouseleave(function(){
        t = setTimeout(function(){
            $("#pitch_competence p").fadeOut(500).promise().done(function (){
                $("#intro").fadeIn(500);
                $("#title_competence").text("Résumé")
            })
        }, 5000)
    })

    $("#competences_area").mouseenter(function(){
        clearTimeout(t);
    })
});

