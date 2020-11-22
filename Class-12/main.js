// $("#btn1").mouseout(function () {
//     $("p").slideToggle();
// })

// $("#btn1").css("color","red");


// $("p").text("Hello")



// $("#btn1").hover(function () {
//     $("p").css("color","red");
// })


// $("p").text("Hello")

// $("p").prepend("hifffffffffffffffffffffff")


$("#btn").click(function (event) {
    var user= $("#userName").val();
    var password= $("#password").val();
    var password2= $("#password2").val();
    event.preventDefault()

    if (user.length==0) {
        
            
            $("#userName").css("border","1px solid red")
            $("#userName").addClass('placeholder');
            $('#userName').attr('placeholder', 
            'User Name is Empty');
        
                setTimeout(function(){  
                  $('#userName').attr('placeholder', 'User Name');
                  $("#userName").removeClass('placeholder');
                  $("#userName").css("border","1px solid #ccc")
        }, 3000);
            $("#userName").val("");
            $("#password").val("");
            $("#password2").val("");

    }else if(password.length==0){
        $("#btn").text("PassWord is Empty");
        setTimeout(function(){   $("#btn").text("Click Here"); }, 3000);
             $("#userName").val("");
            $("#password").val("");
            $("#password2").val("");
    }else{

        if(password==password2){
            $("#btn").text("Your Massage is send");
            setTimeout(function(){   $("#btn").text("Click Here"); }, 3000);
            $("#userName").val("");
            $("#password").val("");
            $("#password2").val("");
        }else{
            $("#btn").text("Password Does not Match");
            setTimeout(function(){   $("#btn").text("Click Here"); }, 3000);
            $("#userName").val("");
            $("#password").val("");
            $("#password2").val("");
        }

       
      
    }

})