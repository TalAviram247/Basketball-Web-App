const express = require('express');
const router = express.Router();

// Load Player model
const Player = require('../../models/Players');

// @route GET api/players/test
// @description tests players route
// @access Public
router.get('/test', (req, res) => res.send('player route testing!'));

// @route GET api/players
// @description Get all players
// @access Public
router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(404).json({ noplayersfound: 'No Players found' });
  }
});

// @route GET api/players/:id
// @description Get single player by id
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.json(player);
  } catch (err) {
    res.status(404).json({ noplayerfound: 'No player found' });
  }
});

// @route POST api/players
// @description add/save player
// @access Public
router.post('/', async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.json({ msg: 'player added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Unable to add this player' });
  }
});

// @route PUT api/players/:id
// @description Update player
// @access Public
router.put('/:id', async (req, res) => {
  try {
    await Player.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: 'Updated successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Unable to update the Database' });
  }
});

// @route DELETE api/players/:id
// @description Delete player by id
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    await Player.findByIdAndRemove(req.params.id, req.body);
    res.json({ mgs: 'player entry deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: 'No such a player' });
  }
});

module.exports = router;
