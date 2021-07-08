const router = require('express').Router();
let Room = require('../models/room.model');

router.route('/hotel').get((req,res) => {
    Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req,res) => {
    Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const roomNo = Number(req.body.roomNo);
    const guest = req.body.guest;
    const date = Date.parse(req.body.date);

    const newRoom = new Room({
        roomNo,
        guest,
        date,
    });

    newRoom.save()
    .then(() => res.json(' rooms added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Room.findByIdAndDelete(req.params.id)
    .then(() => res.json('room deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Room.findById(req.params.id)
    .then(room => {
        room.roomNo = Number(req.body.roomNo);
        room.guest = req.body.guest;
        room.date = Date.parse(req.body.date);

        room.save()
        .then(() => res.json('room updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
