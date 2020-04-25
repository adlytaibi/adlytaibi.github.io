/* 
 * Binary clock
 * Author: Adly Taibi
 * Date: 2020/04/24
**/
$('document').ready(function() {
  function display(n,lr,d) {
    for (i = 0; i < d.length; i++) { 
      if (d.substring(d.length-i-1,d.length-i)==1) {
        $('#m'+n+lr+i).removeClass('off').addClass('on');
      } else {
        $('#m'+n+lr+i).removeClass('on').addClass('off');
      }
    }
  }
  function parseTime(t,n) {
    var l = parseInt((t-t%10)/10,10).toString(2);
    var r = parseInt(t%10,10).toString(2);
    display(n,'l',('0000'+l).slice(-4));
    display(n,'r',('0000'+r).slice(-4));
  }
  function showTime() {
    var date = new Date();
    parseTime(date.getSeconds(), 3);
    parseTime(date.getMinutes(), 2);
    parseTime(date.getHours(), 1);
    setTimeout(function() { showTime() }, 1000);
  }
  showTime();
});
