const form = $(".form")

const userid = $(".userid")
const userid_l = $(".userid_l")
const username = $(".username")
const username_l = $(".username_l")
const pw = $(".password")
const pw_l = $(".password_l")
const pw_check = $(".password_check")
const pw_check_l = $(".password_check_l")
const btn1 = $(".btn1")
const btn2 = $(".btn2")



$(document).ready(function() {

  //register

  btn1.click(function(){
    event.preventDefault()
    if(userid.val() == "") {
      userid.focus()
      userid_l.addClass("warning")
      setTimeout(() => {
        userid_l.removeClass("warning")
      }, 2000)
    } 
    else if (username.val() == "") {
      username.focus()
      username_l.addClass("warning")
      setTimeout(() => {
        username_l.removeClass("warning")
      }, 2000);
    } 
    else if (pw.val() == "") {
      pw.focus()
      pw_l.addClass("warning")
      setTimeout(() => {
        pw_l.removeClass("warning")
      }, 2000);
    } 
    else if (pw.val().length < 7) {
      pw.focus()
      pw_l.addClass("warning")
      setTimeout(() => {
        pw_l.removeClass("warning")
      }, 2000);
    } 
  })

  //login

  btn2.click(function(){
    event.preventDefault()
    if(userid.val() == "") {
      userid.focus()
      userid_l.addClass("warning")
      setTimeout(() => {
        userid_l.removeClass("warning")
      }, 2000)
    }
    else if (pw.val() == "") {
      pw.focus()
      pw_l.addClass("warning")
      setTimeout(() => {
        pw_l.removeClass("warning")
      }, 2000);
    } else {
      form.submit();
    }
  })

})