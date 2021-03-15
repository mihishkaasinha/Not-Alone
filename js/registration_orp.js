// @author: Mihishkaa Sinha

class Orphanage_reg {
  constructor() {}


  display() {
    //var title = createElement('h51')
    // title.html("Orphanage Registration");
    //title.position(550, 0);

    //create the vaiables
    //var orp_id = createInput("Orphanage ID");
    var orp_name = createInput("Name");
    var address = createInput("Address");
    var email = createInput("E-mail");
    var password = createInput("Password");
    var conf_password = createInput("Confirm Passsword");
    var mobile_no = createInput("Mobile No.")
    var pan = createInput("PAN");
    var desc = createInput("Description");
    reg_button = createButton("Register");

    //add the position of the variables
    //orp_id.position(540, 100);
    orp_name.position(600, 120);
    address.position(600, 160);
    email.position(600, 200);
    password.position(600, 240);
    conf_password.position(600, 280);
    mobile_no.position(600, 320);
    pan.position(600, 360);
    desc.position(600, 400);
    reg_button.position(650, 460);

    //events
      reg_button.mousePressed(() => {
        //createOrphanage(orp_id.value(),orp_name.value(),address.value(),email.value(), mobile_no.value(), pan.value(), password.value(), desc.value());
        console.log("Start registering Orphanage:");
        var orp_id = getRandomInt(1000);
        var result = createOrphanage(orp_id, orp_name.value(), address.value(), email.value(), mobile_no.value(), pan.value(), password.value(), desc.value());
        console.log("Successfully registered Orphanage:" + result);
        window.setTimeout(function() {
  
          // Your redirect is here
          window.location.href = "orp_registration_success.html?&orp_id=" + orp_id;
  
        }, 1000);
  
      })    
    }
  }