// @author: Mihishkaa Sinha

class Funding_reg {
  constructor() {}

  display() {
    //var title = createElement('h1')
    //title.html("Raise Funding");
    //title.position(130, 0);

    //create the vaiables
    var orp_id = createInput("Orphanage Id");

    var funding_required_amount = createInput("Required Funding Amount");
    var funding_button = createButton("Request Funding");

    //add the position of the variables
    orp_id.position(600, 200);
    funding_required_amount.position(600, 240);


    funding_button.position(650, 290);
    funding_button.display

    //events
    funding_button.mousePressed(() => {


      checkFundingStatus(orp_id.value(), funding_required_amount);


    })

  }
}