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
                    { y: 5, label: "AJAX" },
                    { y: 5, label: "Jquery" },
                    { y: 6, label: "SQL" },
                    { y: 6, label: "PHP" },
                    { y: 4, label: "HTML" },
                    { y: 3, label: "CSS" },
                    { y: 7, label: "Powershell" }
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
                toolTipContent: "<b>{label}</b>: {y}/10",
                showInLegend: "true",
                legendText: " ",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}/10",
                click: competencesinfo,
                dataPoints: [
                    { y: 5, label: "AJAX" },
                    { y: 5, label: "Jquery" },
                    { y: 6, label: "SQL" },
                    { y: 6, label: "PHP" },
                    { y: 4, label: "HTML" },
                    { y: 3, label: "CSS" },
                    { y: 7, label: "Powershell" }
                ]
            }]
        });
        $("#chartContainer").fadeIn(2000)
        chart.render();
}

function competencesinfo(e){
    $("#pitch_competence p").hide("slow").promise().done(function (){
        $("#"+e.dataPoint.label).show("slow");
        $("#title_competence").text(e.dataPoint.label)
    })
}

$( document ).ready(function() {

    if(document.cookie.indexOf("theme")<0){document.cookie = 'theme=light;path=/;SameSite=None; Secure';}
    
    if(document.cookie.indexOf("theme")>=0 && document.cookie.indexOf("light")<0){
        loaddarkgraph()
    }
    else {
        loadlightgraph()
    }
    // var chart = new CanvasJS.Chart("chartContainer", {
    //     theme: "light2", // "light1", "light2", "dark1", "dark2"
    //     exportEnabled: false,
    //     animationEnabled: true,
    //     title: {
    //         text: "Compétences",
    //     },
    //     axisY:{
    //         maximum: 10,
    //         gridDashType: "dot",
    //         gridColor: "#483D8B",
    //     },
    //     data: [{
    //         type: "bar",
    //         startAngle: 25,
    //         toolTipContent: "<b>{label}</b>: {y}/10",
    //         showInLegend: "true",
    //         legendText: " ",
    //         indexLabelFontSize: 16,
    //         indexLabel: "{label} - {y}/10",
    //         click: competencesinfo,
    //         dataPoints: [
    //             { y: 5, label: "AJAX" },
    //             { y: 5, label: "Jquery" },
    //             { y: 6, label: "SQL" },
    //             { y: 6, label: "PHP" },
    //             { y: 4, label: "HTML" },
    //             { y: 3, label: "CSS" },
    //             { y: 7, label: "Powershell" }
    //         ]
    //     }]
    // });
    // chart.render();
 
    
});

