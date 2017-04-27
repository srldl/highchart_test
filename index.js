'use strict';

// @ngInject
var angular = require('angular');
//var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
//require('highcharts/modules/exporting')(Highcharts);

var app = angular.module('element_test', []);

app.directive('hcChart', require('./hcChart'));
app.directive('hcPieChart', require('./hcPieChart'));
app.controller('myController', require('./myController'));
