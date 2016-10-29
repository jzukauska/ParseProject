console.log("Start objects and logic");

$(document).ready(function(){
    //**********************DECLARATIONS OF OBJECTS**********************

    //Data structure to hold topic area information
    function TopicArea(name, credits)
    {
       this.name = name;
       this.credits = credits;
    }
    
    //Data structure to hold course info
    //function Course(courseID, courseDepartment, courseNumber, courseName, credits, preReqs, coReqs, available, completion){
    //function deprecated
     function Course(name, credits, available, completion){
	   this.name = name;
	   this.credits = credits;
	   this.available = available;
       this.completion = completion;
    }


    //Create topicArea objects
    var degree = new TopicArea("poopSoftware Engineering", 122);
    var genEd = new TopicArea("General Education", 22);
    var CSCI = new TopicArea("CSCI", 18);
    var SEcore = new TopicArea("Software Engineering Core", 41);
    var SEpath = new TopicArea("Software Engineering Electives", 9);

    var commNode = new Course("Communication", 3, true, false);
    var mathReq = new Course("Math Required", 14, true, false);
    var mathEle = new Course("Math Electives", 6, true, false);
    var sciReq = new Course("Science Required", 7, true, false);
    var sciEle = new Course("Science Electives", 3, true, false);

    //create individual course objects
    //CSCI
    var CSCI201 = new Course("CSCI 201", 3, true, false);



    //*******************************************************************

    
    //*************************Population of HTML************************
    
    function populateHTML()
    {


        $("#totalCount span").text(degree.credits);
        $("#CSCI div span").text(CSCI.credits);
        $("#SEcore div span").text(SEcore.credits);
        $("#SEpath div span").text(SEpath.credits);
    }
    
    populateHTML();//initial population of HTML
    
    //*******************************************************************


    //********************OBJECT LOGIC AND FUNCTIONS*********************

    //Hides CSCI201 container upon completion
    if(CSCI201.completion == true)
    {
        $("#CSCI201").hide();

        CSCI.credits -= CSCI201.credits;
        degree.credits -= CSCI201.credits;
    }
    
    if(CSCI.credits == 0)
    {
        $("#CSCI").hide();
    }
    
    populateHTML();//repopulate HTML to reflect changes
    
});






