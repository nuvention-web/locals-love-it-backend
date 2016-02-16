#Locals Love It

##The purpose of the application

Locals Love It seeks to connect influencers, individuals with a large following on social media, with local businesses that the influencers can promote.



##The Scenario you are solving

A resource-restricted local business that wants to efficiently advertise their product to a target market can use Locals Love It to connect to influencers whose  social platform consists of members in that target range. 



##The team members

* Juan David Dominguez

* Helen Foster 

* Alexandria Anderson

* Abigail Staplea

* Lucia Liu

* Taslima Din

* Claudeson Azurin

##The current state of what has been implemented

There is a rails api. Please go into the rails-backend folder.
There is a flux+react frontend client. Please go into the react-frontend folder.

##A guide to the files and structure of the product
* Development:
  * Preparing rails folder:
    1. Install ruby
    1. Install bundler
    1. run `bundle install`
  * Preparing react folder:
    1. Install node
    1. Install npm
    1. run `npm install`
* Local Deployment:
  1. Run the rails server first `rails s`
  1. React-frontend not yet implemented. In the future `node server.js` should work.
* Tests:
  * Testing in rails folder:
    * To run all the rails tests, please run the following command `rake spec:all`.
    * To run all the integration tests, please run the following command `rake spec:integration`. Please keep in mind that it hits 3rd party APIs.
    * To run all the unit tests, please run the following command `rake`.
  * Testing in the react folder:
    * Has yet to be implemented. But, `jasmine-node spec` should work in the future.
