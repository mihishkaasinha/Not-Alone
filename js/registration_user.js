// @author: Mihishkaa Sinha
class User_reg {
  constructor() {}

  display(){
    var title = createElement('h1')
    title.html("User Registration");
    title.position(630, 0);

    //create the vaiables
    var user_name = createInput("Full Name");
    var user_address = createInput("Address");
    var user_email = createInput("E-mail");
    var user_password = createInput("Password");
    var user_conf_password = createInput("Confirm Passsword");
    var user_mobile_no = createInput("Mobile No.");
    var user_pan = createInput("PAN");
    var user_reg_button = createButton("Register");

    //add the position of the variables
    user_name.position(600, 120);
    user_address.position(600, 160);
    user_email.position(600, 200);
    user_password.position(600, 240);
    user_conf_password.position(600, 280);
    user_mobile_no.position(600, 320);
    user_pan.position(600, 360);
    user_reg_button.position(650, 420);

    //events
    user_reg_button.mousePressed(() =>
    {
      createUser(user_name.value(), user_address.value(), user_email.value(), user_mobile_no.value(), user_pan.value(), user_password.value());

      window.setTimeout(function(){

        // Your redirect is here
        window.location.href = "user_registration_success.html?&email_id=" + user_email.value() ;
    
    }, 2050);


    })
}
}