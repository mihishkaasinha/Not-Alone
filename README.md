Not Alone is the solution that connects the Orphanages to the Givers. There is no such solution in the world that does this at this point of time. My solution solves real-world problems by addressing all the key questions that I mentioned section of how I got the idea to develop such a solution.

The first version of the solution provides the following functionalities:

  •	**Orphanage Registration**: Orphanage can register themselves
  
  •	**Raise Funding Request**: Orphanage can raise a request to raise funding based on their requirements. One orphanage can raise only one funding request at a time. Only       when a given round of funding is closed, is the Orphanage allowed to raise a new funding request
  
  •	**View Funding status by Orphanage**: Orphanage can view the status of the past and recent funding request using their Orphanage ID ( assigned at time of Orphanage      
    registration)
    
  •	**User registration**: Any User who wants to make contributions to the Orphanages can register themselves
  
  •	**Donation by User**: User can view all the Active funding requests ( including Orphanage details) by all Orphanages and make donations for any orphanage


This is just the start. We have many more exciting functionalities planned to be added in coming versions. You can find more details in the “What’s Next” section when you launch the solution.

This solution is developed using the p5.js framework and use Google Firebase Real time database. In order to use the solution, you need to :
•	Download the code the git repo 
•	Go to js folder and open the config.js file
•	Create a Google firebase account ( if you do not have) and create a project
•	Go to Project Overview/Project settings/General/Firebase SDK snippet/config
•	Copy the following :
  apiKey: "AIzaSyDunIMDQoQS5jfO7UJ2bpQ01US66fKyQsT",
  authDomain: "not-alone-6655.firebaseapp.com",
  databaseURL: https://not-alone-6655-default-rtdb.firebaseio.com,
  projectId: "not-alone-6655",
  storageBucket: "not-alone-6655.appspot.com",
  messagingSenderId: "577727362005",
  appId: "1:560727362005:web:961e73a5812d26a063d66c"

•	Paste to config.js as:
  var appConfig={
    apiKey: "AIzaSyDunIMDQoQS5jfO7UJ2bpQ01US66fKyQsT",
    authDomain: "not-alone-6655.firebaseapp.com",
    databaseURL: https://not-alone-6655-default-rtdb.firebaseio.com,
    projectId: "not-alone-6655",
    storageBucket: "not-alone-6655.appspot.com",
    messagingSenderId: "577727362005",
    appId: "1:560727362005:web:961e73a5812d26a063d66c"
    }
  Note: Don’t change variable name “**appConfig**”

•	Now you can launch the solution through Visual studio/Go live or through the 200 OK (Web server for chrome)
•	You need to go in following order:

  o	**Orphanage Registration**: Click Orphanage. Register an Orphanage. On completion of registration, one Orphanage id will be created and shown on the page. Please note  
    that Orphanage id. You can create few more Orphanages if you want to. Please do note down all Orphanage ids.
    
  o	**Raise funding request**: Click Orphanage/ Already registered orphanage/Raise funding requests. You can provide the Orphanage id and the amount that an Orphanage would  
    like to raise. On successful processing, solution shows a success message with a funding id. 
    Note: 
    An Orphanage can have only one active funding request at a given point of time. If the Orphanage tries to create another funding request ( when there is already a funding     request is in progress) then the solution will not allow and show the message that the Orphanage already has an active funding request. 
    The solution will allow the funding request to be created by an Orphanage when all the earlier funding requests have been marked “Completed” , due to donation amount 
    exceeding the funding request amount
    
   o **View Funding status by Orphanage**: Orphanage can view the status of the past and recent funding request using their Orphanage ID ( assigned at time of Orphanage  
    registration). Go to Orphanage/View funding status/provide orphanage id. 
    
   o **User registration**: Click User. Register a User
   
   o **Donation by User**: Once User is registered, he/she can go to User/Already registered/Make donation. User can view all the active funding requests raised by the  
    Orphanages. 
    User can then view Orphanage details (as well as status of the past and recent funding request of an Orphanage by clicking in Orphanage Id link) and the required amount.     User can then make contribution to any orphanage by enter the amount in “Donation amount” text box and click on “Donate”.
    Solution will show the success message with the funding id and the  Orphanage id, if the donation amount is successfully processed.


Note:
If the User makes a donation of any amount and the total donation amount (after adding this latest donation by the User) exceeds the funding request amount, then the status of that funding request is changed from “In-progress” to “Completed” and is not shown on that page ( as this page only shows the funding requests with “In-Progress” status)

You can view the sections such as “My story” and “What’s Next”. “My story” contains details on I discovered the idea of the solution. “What’s Next” contains details of what the new functionalities I would like to implement in next versions of the solution
