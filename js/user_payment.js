// @author: Mihishkaa Sinha

class Funding_reg {
  constructor() {}

  display() {
    var title = createElement('h1')
    title.html("Raise Funding");
    title.position(130, 0);

    //create the vaiables
    var orp_id = createInput("Oprhanage Id");
    var funding_round = createInput("Funding Round");
    var funding_required_amount = createInput("Required Funding Amount");
    var funding_button = createButton("Request Funding");

    //add the position of the variables
    orp_id.position(200, 100);
    funding_required_amount.position(200, 140);
    funding_round.position(200, 180);
    funding_button.position(250, 200);

    //events
    funding_button.mousePressed(() => {
      createNewFunding(orp_id.value(), funding_required_amount.value(), funding_round.value());
    })
  }

}