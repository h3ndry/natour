const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.checkID = (req, res, next, val) => {
  console.log(`just to see if ${val}`);
  if (parseInt(val) > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'inavlid id',
    });
  }

  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    results: tours.length,
    data: {
      tours,
    },
  });
};
exports.getTour = (req, res) => {
  console.log(req.requestTime);

  // if (parseInt(req.params.id) > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'inavlid id'
  //   })
  // }

  const tour = tours.find((el) => el.id === parseInt(req.params.id));
  // console.log(tour)
  res.status(200).json({
    status: 'sucess',
    // results: tours.length,
    data: {
      tour,
    },
  });
};

exports.createTour = async (req, res) => {
  // create Tour
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'sucess',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    /* handle error */
    res.status(400).json({
      status: 'fail to save document',
      message: error,
    });
  }
};

exports.updateTour = (req, res) => {
  // if (parseInt(req.params.id) > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'inavlid id'
  //   })
  // }
  res.status(200).json({
    status: 'success',
    data: {
      tours: '<Updated tour here....',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
