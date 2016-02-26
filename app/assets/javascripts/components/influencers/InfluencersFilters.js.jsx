var DropDownFormGroup = require('../common/DropDownFormGroup.js.jsx');
var ButtonGroup = require('../common/ButtonGroup.js.jsx');

var InfluencersFilters = React.createClass({
  render: function(){
    return (

        <div className = "row">
            <ButtonGroup title = {"Payment "} items = {["Pay Per Post", "Other Thing"]}/>
            <hr/>
            <ButtonGroup title = {"Personality"} items = {["Doc", "Grumpy", "Happy", "Sleepy", "Bashful", "Sneezy", "Dopey"]} />
            <hr/>
            <DropDownFormGroup title = {"Budget"} items = {["$0-$10", "$10-$30", "$30-$50", "$50-$75", "$75-$100", "$100+"]} />
        </div>
    );
  }
});

module.exports = InfluencersFilters;
