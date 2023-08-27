const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  current_team: {
    type: String,
    required: true
  },
  points_avg: {
    type: Float,
    required: true
  },
  assists_avg: {
    type: Float,
    required: true
  },
  rebounds_avg: {
    type: Float,
    required: true
  },
  
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Player = mongoose.model('player', PlayerSchema);