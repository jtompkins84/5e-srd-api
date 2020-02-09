const Feature = require('../../models/feature');
const utility = require('./utility');

exports.index = async (req, res, next) => {
  await Feature.find()
    .sort({ index: 'asc' })
    .then(data => {
      res.status(200).json(utility.NamedAPIResource(data));
    })
    .catch(err => {
      next(err);
    });
};

exports.show = async (req, res, next) => {
  await Feature.find({ index: req.params.index })
    .then(data => {
      if (data && data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Not found' });
      }
    })
    .catch(err => {
      next(err);
    });
};

exports.showFeatureForClass = async (req, res, next) => {
  await Feature.find({
      index: req.params.index,
      'class.url': `/api/classes/${req.params.classIndex}` 
    })
    .then(data => {
      if (data && data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Not found' });
      }
    })
    .catch(err => {
      next(err)
    });
};

exports.showFeaturesForClass = async (req, res, next) => {
  await Feature.find({ 'class.url': `/api/classes/${req.params.classIndex}` })
    .sort({ index: 'asc' })
    .then(data => {
      if (data && data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Not found' });
      }
    })
    .catch(err => {
      next(err)
    });
};