'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let events = [
//     [{'title':'Test event 1','start':'2018-03-03 09:00:00','end':'2018-03-03 09:03:00','desc':'No Description'}]
// ];

// let resources = [
//     {'name':'Andrew Turnbull'}
// ];

// let calendar = new Sheepskin({container:'Container',events:events})

var Sheepskin = function Sheepskin(options) {
    var _this = this;

    _classCallCheck(this, Sheepskin);

    this.build = function () {
        document.getElementById(_this.containerDiv).innerHTML = _this.generateHtml();
    };

    this.generateHtml = function () {
        var html = void 0;
        html += _this.generateHeaderHtml();
        html += _this.generateGutterHtml();
        html += _this.generateBodyHtml();

        return html;
    };

    this.generateBodyHtml = function () {
        var bodyHtml = '<div class="body item"><div class="body-container"><div class="template">';
        _this.events.forEach(function (resource) {
            bodyHtml += '<div class="resource">' + _this.generateTimeWindowsHtml() + '</div>';
        });
        bodyHtml += '</div></div></div>';

        return bodyHtml;
    };

    this.generateResourceTimeWindowsHtml = function () {
        var timeWindowHtml = '';
        for (var i = 0; i < 48; i++) {
            timeWindowHtml += '<div class="thirty-minutes"></div>';
        }
        return timeWindowHtml;
    };

    this.generateGutterHtml = function () {
        var gutterHtml = '<div class="gutter item"><div class="gutter-container"><div class="hours">';
        for (var i = 0; i < 24; i++) {
            gutterHtml += '<div class="one-hour"></div>';
        }
        gutterHtml += '</div></div></div>';

        return gutterHtml;
    };

    this.generateHeaderHtml = function () {
        var headerHtml = '<div class="header item">';

        _this.events.forEach(function (resource) {
            headerHtml += '<div class="resource">' + resource.name + '</div>';
        });
        headerHtml += '</div>';

        return headerHtml;
    };

    this.events = options.events || [];
    this.containerDiv = options.container || "Calendar";

    this.build();
};
//# sourceMappingURL=Sheepskin.js.map