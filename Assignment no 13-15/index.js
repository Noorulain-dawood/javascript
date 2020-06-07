var array1 = [];
var array_string = ["noor" ,"zunera","fatima"];
var array_num = [2,8,6];
var array_boolean = ["true","false"];
var array_mixed =["hassan","ali",67,"true"];
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS" ,"M.Phil","PHD"];
for(var i=1; i< qualification.length ;i++){
  document.write(i + "  " + qualification[i] + "<br>" );
}

// task no 2
var studentName = ["ale","ahmed","noor"];
var marks = [300, 400, 350];
var percentage;
for(var i=0; i<3; i++ )
{
  console.log(studentName[i] +"  " + "Student score " + marks[i] +"\n");
  console.log(percentage[i] = (marks[i]/500)*100);
  console.log("Percentage is " + percentage[i] );
}
