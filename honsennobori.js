var now = new Date();
var hour = now.getHours();
var min = now.getMinutes();
//var sec = now.getSeconds();
var keisan = hour * 60 + min;
var daiya = ["05:43 (滝沢行)","06:10(いわて沼宮内行)","06:43","07:26","07:59","08:59","10:21","11:35","12:26","13:21","14:29(快速ジパング)","14:43","15:46","16:31","17:26","18:40","19:30","20:26","21:14","22:08(寝台特急カシオペア 札幌行)","22:13"]//要素数：21    番号0から20
document.writeln("次の発車は<br>");
if (keisan > 0)
{
       for (i = 0; i < 5; i++) 
       {
        document.write(daiya[i] + '<br>');
       }
}
