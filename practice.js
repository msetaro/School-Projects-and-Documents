// convert and display 72 deg F to C
document.write("72 *F = " + (72-32) * 5/9) + " *C";

//create a function that does this
function cToF( c ){
    return (c * 9/5) + 32;
}

//convert 34 C to F
document.write(" <br> 34 *C = " + cToF(34) + " *F");

//assign the var mm the phrase ...
var mm = "the moose is maroon in massachusetts on monday";

    //print the # of chars
    document.write("<br>" , mm.length);
    //replace moose with horse - print
    document.write("<br>" , mm.replace("moose" , "horse"));
    //display the message appended to "eating a mushroom" to the orig message
    document.write("<br>" , mm + " eating a mushroom");

//print a message "Today is Tuesday" - let JS get the day
 var day = new Date();
 var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 document.write("<br>Today is: ", days[day.getDay()]);

 //print a message indicating todays date
 var month = new Date();
 var dayNum = new Date();
 var year = new Date();

 var months = [ "January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December" ]
document.write("<br>Today is: ", months[month.getMonth()]," ", dayNum.getDate(), 
", ", year.getFullYear())

//write a function that will determine if the current year is a leap year
//source: https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
function isLeapYear( year ){
    
    if (year % 4 == 0)
        if (year % 100 == 0)
            if (year % 400 == 0)
                return year + " is a leap year";
            else
                return year + "is not a leap year";
        else
            return year + " is a leap year";
    else
        return year + " is not a leap year";

}

document.write("<br>", isLeapYear(year.getFullYear()));

//triangle with sides of 32, 22, and 28, find area and perimeter
    //print the len of sides and area/perim
var s = (32 + 22 + 28) / 2;
var area = Math.sqrt((s)*(s-32)*(s-22)*(s-28));

var perim = s * 2
document.write("<br>The sides are 32, 22, and 28. The area is: " + area + 
    ". The perimeter is: " + perim);

//create an array of 6 types of apples
var apples = [ "gala", "fuji", "rome", "granny smith", "mcintosh", "golden delicious"];

//display them on the page
document.write("<ul>");
for (i in apples){
    document.write("<li>I like " + apples[i] + " apples.")
}
document.write("</ul");


//this is one type of comment

/*
* This is
* the other
*/