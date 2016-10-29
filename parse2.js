var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var workingUrl;
var arr;


function parseUrl(url){
//alert ("Url:" + url);
    var urlSplit = url.split("&");
    var jobQSeqNo = parseInt(urlSplit[0].replace(/\D+/g, ''));
    var jobId = parseInt(urlSplit[1].replace(/\D+/g, ''));
    var newUrl = "https://webproc.mnscu.edu/darsia/printerfriendly?jobQSeqNo=" + jobQSeqNo + "&job_id="+jobId+"&";
    return newUrl;

}

function generalParse() {

    workingUrl = parseUrl(document.getElementById('urlInput').value);

    alert(workingUrl);

    request(workingUrl,function (err,resp,body) {
        var $ = cheerio.load(body);
        arr = [];
        $('[class$=SubrequirementCourses]').each(function(index, elem){
            arr.push("span" +index+ "_" + $(this).text());
        });

        console.log(arr);

        /* var file = fs.createWriteStream('./downloads/doc.html')

         stringy = JSON.stringify(arr.join(" ,\n "));

         file.write(stringy);*/

    })


}




app.listen(port);
console.log('server is listening on ' + port);
