let str="",yearstr="",monthstr="",daystr="";
let diff_years=0,diff_months=0,diff_days=0;
let yearNum=0, monthNum=0,dayNum=0;

let newYear = new Date();
function calculateAgeDifferance(dob){
    diff_years=0;
    diff_months=0;
    diff_days=0;
    devide(dob);
    printValues();
}
function devide(dob){
    str=dob;
    yearstr="";
    monthstr="";
    daystr="";
    let count=0;
    for(let i of str){
        if(i=="-"){
            count++;
        }
        else if(count==0){
            yearstr+=i;
        }
        else if(count==1){
            monthstr+=i;
        }
        else{
            daystr+=i;
        }
    }
    yearNum = Number(yearstr);
    monthNum = Number(monthstr);
    dayNum = Number(daystr);
    differenceInYear();
}
function differenceInYear(){

    diff_years = newYear.getFullYear() - yearNum -1;
    differenceInMonth();

}


function differenceInMonth(){

    if(  ( newYear.getMonth()+1 )  >  monthNum ) {                          
        diff_years++;

        if(newYear.getDate() >= dayNum){
            diff_months = newYear.getMonth()+1-monthNum;
            diff_days = newYear.getDate() - dayNum;
        }
        else{
            diff_months = (newYear.getMonth()+1)-(monthNum+1);
            diff_days = 30 - dayNum - newYear.getDate();
        }
    }

    else if ( (newYear.getMonth()+1)  <  monthNum ){
        if(newYear.getDate() >= dayNum){
            diff_months = (12- monthNum ) + (newYear.getMonth()+1); 
            diff_days = newYear.getDate() - dayNum;
        }
        else{
            diff_months = (12- monthNum ) + (newYear.getMonth()+1) - 1;
            diff_days = 30-(dayNum - newYear.getDate() );
        }
    }

    else{                                         /*here diff_months=0;*/ 
        if(newYear.getDate() >= dayNum){
            diff_years++;                                               
            diff_months = (newYear.getMonth()+1) - monthNum;
            diff_days = newYear.getDate() - dayNum;
        }
        else{
            diff_months = (12)-(newYear.getMonth()+1)+(monthNum-1);
            diff_days = 30 - (dayNum - newYear.getDate());
        }
    }

}

function printValues(){
    let age = ` ${diff_years} Years  ${diff_months} Months  ${diff_days} Days`;
    let display = document.getElementById("output");
    display.textContent=`Your Age is: ${age}`;
    console.log(`Your age is : ${age}`);
}


document.getElementById("calc-btn").onclick = function (){
    let dob = document.getElementById("dateofbirth").value;
    calculateAgeDifferance(dob);    
}
