var alt = require('../alt');

class FilterActions {
  updateInfluencersOnFilters(filters) {
    return filters;
  }
}

module.exports = alt.CreateActions(FilterActions);
