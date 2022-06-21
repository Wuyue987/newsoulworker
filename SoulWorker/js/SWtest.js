$(document).ready(function() {
  $('.list > li > a').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
  });
  $('.system-intro h2').click(function(event){
    $(this).parent().find('.system-contain').slideToggle();
    $(this).parent().siblings().find('.system-contain').slideUp();
  })
});

function openchPage(event,chPage) {
  var i ,tapcontent,tablink;
  tapcontent = document.getElementsByClassName('tapcontent');
  for (var i = 0; i < tapcontent.length; i++) {
    tapcontent[i].style.display = "none";
  }
  tablink = document.getElementsByClassName('tablink');
  for (var i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active","")
  }
  document.getElementById(chPage).style.display = "block";
  event.currentTarget.className += " active";
}