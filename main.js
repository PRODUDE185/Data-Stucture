list_of_Students=[];

function submit() {

    var display_name_of_Students=[];
    for (var j=1; j<=4; j++) {
        var student_name=document.getElementById("student_"+j).value;
        console.log(student_name);
        list_of_Students.push(student_name);
    }

    console.log(list_of_Students);
    var length_of_students= list_of_Students.length;
    console.log(length_of_students);

    for (var k=0; k<length_of_students; k++) {
        display_name_of_Students.push("<h4>Name- "+list_of_Students[k]+"</h4>");
        console.log(display_name_of_Students);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_name_of_Students;

     var remove_commmas=display_name_of_Students.join(" ");
     console.log(remove_commmas);
     document.getElementById(display_name_without_commas).innerHTML= remove_commmas;
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort() {
 list_of_Students.sort()

 console.log(list_of_Students);

 document.getElementById("display_name").innerHTML=list_of_Students;
}