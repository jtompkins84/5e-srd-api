const router = require('express').Router();
const FeatureController = require('../../controllers/api/featureController');

router.get('/', FeatureController.index);
router.get('/:index', FeatureController.show);
router.get('/classes/:classIndex', FeatureController.showFeaturesForClass);
router.get('/classes/:classIndex/:index', FeatureController.showFeatureForClass);

module.exports = router;
