
import { Meetup } from '../models';

const exports = module.exports = {}

exports.fetchAll = (req, res) => {
  Meetup.findAll()
    .then((meetups) => {
      res.status(200).json(meetups)
    })
};
