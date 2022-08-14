function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? match[1] : null;
}

if (getCookie("title") == null) {
  document.cookie = "title=HwHelp"
}

document.title = getCookie("title")

$(document).keydown(function(e) {
    if(e.keyCode === 192) {
        if (getCookie('panic') == null) {
          document.cookie = "panic=classroom.google.com;"
        }
        // if (getCookie('panic') == null) {
        //    window.open('https://classroom.google.com')
        //    console.log('Cookie cant be set!')
        //    return
        // }
        window.open("https://" + getCookie('panic'))
    }
});