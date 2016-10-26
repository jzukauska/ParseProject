var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = "https://webproc.mnscu.edu/darsia/bar?jobQSeqNo=9577989&job_id=2016102506265110";
var urlSplit = url.split("&");
var jobQSeqNo = parseInt(urlSplit[0].replace(/\D+/g, ''));
var jobId = parseInt(urlSplit[1].replace(/\D+/g, ''));

var newUrl = "https://webproc.mnscu.edu/darsia/printerfriendly?jobQSeqNo=" + jobQSeqNo + "&job_id="+jobId+"&";


request(newUrl,function (err,resp,body) {
    var $ = cheerio.load(body);
    var arr = [];
    $('[class$=SubrequirementCourses]').each(function(index, elem){
        arr.push("span" +index+ "_" + $(this).text());
    });

    console.log(arr);

   /* var file = fs.createWriteStream('./downloads/doc.html')

    stringy = JSON.stringify(arr.join(" ,\n "));

    file.write(stringy);*/

})


app.listen(port);
console.log('server is listening on ' + port);
