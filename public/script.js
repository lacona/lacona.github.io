(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (a, b) {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);

module.exports = exports["default"];

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getExecute;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = (typeof window !== "undefined" ? window.moment : typeof global !== "undefined" ? global.moment : null);

var _moment2 = _interopRequireDefault(_moment);

var _reactAddons = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _reactAddons2 = _interopRequireDefault(_reactAddons);

require('moment-duration-format');

function intersperse(array, something) {
  if (array.length < 2) {
    return array;
  }
  var result = [],
      i = 0,
      l = array.length;
  if (typeof something == 'function') {
    for (; i < l; i++) {
      if (i !== 0) {
        result.push(something());
      }
      result.push(array[i]);
    }
  } else {
    for (; i < l; i++) {
      if (i !== 0) {
        result.push(something);
      }
      result.push(array[i]);
    }
  }
  return result;
}

function getExecute(showNotification) {
  return function (result) {
    var message = undefined;
    if (result.open) {
      if (result.open.app && result.open.url) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'load'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-url' },
          result.open.url
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          result.open.app
        )];
      } else if (result.open.app && result.open.file) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'open'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-file' },
          result.open.file
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          result.open.app
        )];
      } else if (result.open.app) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'launch'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          result.open.app
        )];
      } else if (result.open.file) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'open'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-file' },
          result.open.file
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'the default application'
        )];
      } else if (result.open.url) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'load'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-url' },
          result.open.url
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'the default browser'
        )];
      }
    } else if (result.date) {
      if (result.date.reminder) {
        var time = undefined;

        if (result.date.reminder.datetime) {
          time = ['due ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-date-and-time' },
            (0, _moment2['default'])(result.date.reminder.datetime).format('dddd, MMMM Do, YYYY [at] h:mm a')
          )];
        } else if (result.date.reminder.date) {
          time = ['due ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-date-and-time' },
            (0, _moment2['default'])(result.date.reminder.date).format('dddd, MMMM Do, YYYY'),
            ' at 9:00 am'
          )];
        } else if (result.date.reminder.time) {
          time = ['due ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-date-and-time' },
            'today at ',
            (0, _moment2['default'])(result.date.reminder.time).format('h:mm a')
          )];
        } else {
          time = ['without a due date'];
        }

        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'create a reminder'
        ), ' called ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-reminder-title' },
          result.date.reminder.title
        ), ' ', time];
      } else if (result.date.event) {
        var _location = undefined;
        if (result.date.event.location) _location = [' with location ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-location' },
          result.date.event.location
        ), ''];

        var time = undefined;
        if (result.date.event.datetime) {
          time = [_reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-date-and-time' },
            (0, _moment2['default'])(result.date.event.datetime).format('dddd, MMMM Do, YYYY [at] h:mma')
          ), ' that is ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-period-of-time' },
            'an hour'
          ), ' long'];
        } else if (result.date.event.period) {
          console.log(result.date.event.period.duration);
          time = [_reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-date-and-time' },
            (0, _moment2['default'])(result.date.event.period.start).format('dddd, MMMM Do, YYYY [at] h:mma')
          ), ' that is ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-period-of-time' },
            _moment2['default'].duration(result.date.event.period.duration).format('Y [years], M [months], D [days], H [hours] [and] m [minutes]')
          ), ' long'];
        }

        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'create an event'
        ), ' called ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-calendar-event' },
          result.date.event.title
        ), ' ', _location, ' on ', time];
      }
    } else if (result.search) {
      console.log(result.search);
      if (result.search.engines.length === 1) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'open'
        ), ' a ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-search-engine' },
          result.search.engines[0]
        ), ' search for ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-query' },
          result.search.query
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'the default browser'
        )];
      } else {
        var enginePhrases = _.map(result.search.engines, function (engine) {
          return _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-search-engine' },
            engine
          );
        });
        var engines = result.search.engines.length === 2 ? intersperse(enginePhrases, ' and ') : [intersperse(enginePhrases.slice(0, -1), ', '), ', and ', _.last(enginePhrases)];
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'open'
        ), ' ', engines, ' searches for ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-query' },
          result.search.query
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'the default browser'
        )];
      }
    } else if (result.play) {
      if (result.play.something) {
        var descriptions = _.map(result.play.something, function (thing) {
          if (thing.song) {
            return [_reactAddons2['default'].createElement(
              'span',
              { className: 'descriptor-song' },
              thing.song
            )];
          } else if (thing.album) {
            return ['all songs on ', _reactAddons2['default'].createElement(
              'span',
              { className: 'descriptor-album' },
              thing.album
            )];
          } else if (thing.artist) {
            return ['all songs by ', _reactAddons2['default'].createElement(
              'span',
              { className: 'descriptor-artist' },
              thing.artist
            )];
          } else if (thing.genre) {
            return ['all songs in the ', _reactAddons2['default'].createElement(
              'span',
              { className: 'descriptor-genre' },
              thing.genre
            ), ' genre'];
          } else if (thing.playlist) {
            return ['all songs in the ', _reactAddons2['default'].createElement(
              'span',
              { className: 'descriptor-playlist' },
              thing.playlist
            ), ' playlist'];
          } else if (thing.composer) {
            return ['all songs composed by ', _reactAddons2['default'].createElement(
              'span',
              { className: 'descriptor-composer' },
              thing.composer
            )];
          }
        });

        var allDescriptions = undefined;
        if (descriptions.length === 1) {
          allDescriptions = descriptions[0];
        } else if (descriptions.length === 2) {
          allDescriptions = intersperse(descriptions, ' and ');
        } else {
          allDescriptions = [intersperse(descriptions.slice(0, -1), ', '), ', and ', _.last(descriptions)];
        }
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'play'
        ), ' ', allDescriptions, ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'iTunes'
        )];
      } else if (result.play.next) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'play'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'category-argument5' },
          'the next song'
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'iTunes'
        )];
      } else if (result.play.previous) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'play'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'category-argument5' },
          'the previous song'
        ), ' in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'iTunes'
        )];
      } else if (result.play.stop) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'stop'
        ), ' the music in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'iTunes'
        )];
      } else if (result.play.pause) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'pause'
        ), ' the music in ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'iTunes'
        )];
      }
    } else if (result.contact) {
      if (result.contact.email) {
        if (result.contact.email.message) {
          message = [_reactAddons2['default'].createElement(
            'span',
            { className: 'category-action' },
            'start'
          ), ' a new email to ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-relationship' },
            result.contact.email.relationship
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-contact' },
            result.contact.email.contact
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-email-address' },
            result.contact.email.address
          ), ' with ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-message' },
            result.contact.email.message
          ), ' in the subject'];
        } else {
          message = [_reactAddons2['default'].createElement(
            'span',
            { className: 'category-action' },
            'start'
          ), ' a new email to ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-relationship' },
            result.contact.email.relationship
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-contact' },
            result.contact.email.contact
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-email-address' },
            result.contact.email.address
          )];
        }
      } else if (result.contact.call) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'call'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-phone-number' },
          result.contact.call.number
        ), _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-relationship' },
          result.contact.call.relationship
        ), _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-contact' },
          result.contact.call.contact
        ), ' through your iPhone'];
      } else if (result.contact.facetime) {
        message = [_reactAddons2['default'].createElement(
          'span',
          { className: 'category-action' },
          'call'
        ), ' ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-phone-number' },
          result.contact.facetime.number
        ), _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-relationship' },
          result.contact.facetime.relationship
        ), _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-email-address' },
          result.contact.facetime.address
        ), _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-contact' },
          result.contact.facetime.contact
        ), ' using the ', _reactAddons2['default'].createElement(
          'span',
          { className: 'descriptor-application' },
          'FaceTime'
        ), ' app'];
      } else if (result.contact.text) {
        if (result.contact.text.message) {
          message = [_reactAddons2['default'].createElement(
            'span',
            { className: 'category-action' },
            'send'
          ), ' ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-message' },
            result.contact.text.message
          ), ' to ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-phone-number' },
            result.contact.text.number
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-relationship' },
            result.contact.text.relationship
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-contact' },
            result.contact.text.contact
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-email-address' },
            result.contact.text.address
          ), ' using the ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-application' },
            'Messages'
          ), ' app'];
        } else {
          message = [_reactAddons2['default'].createElement(
            'span',
            { className: 'category-action' },
            'open'
          ), ' ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-application' },
            'Messages'
          ), 'to a conversation with ', _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-phone-number' },
            result.contact.text.number
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-relationship' },
            result.contact.text.relationship
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-contact' },
            result.contact.text.contact
          ), _reactAddons2['default'].createElement(
            'span',
            { className: 'descriptor-email-address' },
            result.contact.text.address
          )];
        }
      }
    }

    if (message == null) {
      message = 'something went wrong with: ' + JSON.stringify(result);
    }

    showNotification(message);
  };
}

// export function execute(result) {
//   switch(result.action) {
//     case 'learn':
//         $('html, body').animate({scrollTop: $('content').offset().top - 90}, 400, 'swing')
//       break;
//     case 'subscribe':
//       $.ajax({
//         type: 'POST',
//         url: `${window.__env.APIROOT}subscribe`,
//         data: JSON.stringify({email: result.email}),
//         contentType: 'application/json'
//       }).then(() => {
//         this.setState({
//           noteMessage: `${result.email} was added to Newsletter. Check your email for confirmation.`,
//           noteVisible: true,
//           noteType: 'success'
//         })
//       }, error => {
//         const email = encodeURIComponent(result.email)
//         window.location.href = `http://lacona.us10.list-manage.com/subscribe?u=f923be23d36f00f457ea3b2c6&id=1db875d5ed&MERGE0=${email}`
//       })
//       break;
//     case 'tweet':
//       const message = encodeURIComponent(result.message)
//       window.open(`https://twitter.com/intent/tweet?text=${message}&via=lacona`, '_blank', 'menubar=1,resizable=1,width=550,height=420')
//     case 'share':
//       switch(result.platform) {
//         case 'facebook':
//             window.open('https://www.facebook.com/sharer/sharer.php?u=https://lacona.io', '_blank', 'width=550,height=231')
//           break;
//         case 'twitter':
//             window.open('https://twitter.com/intent/tweet?text=I%20tweeted%20this%20with%20Lacona&url=https%3A%2F%2Flacona.io', '_blank', 'menubar=1,resizable=1,width=550,height=420')
//           break;
//         case 'google-plus':
//             window.open('https://plus.google.com/share?url=https://lacona.io', '_blank', 'menubar=1,resizable=1,width=534,height=446')
//           break;
//         case 'email':
//             window.location.href = 'mailto:?&subject=Check out Lacona&body=The%20upcoming%20natural%20language%20command%20system%20for%20Mac.%0A%0Ahttps://lacona.io'
//           break;
//       }
//       break;
//     case 'follow':
//       window.open('https://twitter.com/intent/follow?screen_name=lacona&user_id=1963107458', '_blank', 'menubar=1,resizable=1,width=534,height=446')
//       break;
//     case 'fork':
//       window.open('https://github.com/lacona', '_blank')
//       break;
//     case 'contact':
//       switch (result.platform) {
//         case 'twitter':
//             window.open('https://twitter.com/intent/tweet?text=Hey%20%40lacona%2C%20', '_blank', 'menubar=1,resizable=1,width=550,height=420')
//           break;
//         case 'email':
//             window.location.href = 'mailto:app@lacona.io?Subject=Lacona%20Questions'
//           break;
//       }
//       break;
//     case 'change':
//       this.setState({theme: result.theme})
//       break;
//   }
// }
//
//
// export function select(result) {
//   if (result.action === 'change' && result.theme) {
//     this.setState({theme: result.theme})
//   }
// }

module.exports = exports['default'];
// showNotification(`Now, Lacona would ${message}. `)

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"moment-duration-format":120}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _lodash = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _lacona = require('lacona');

var _reactAddons = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactLacona = require('react-lacona');

var _reactLacona2 = _interopRequireDefault(_reactLacona);

function groupPlaceholders(result) {
  return _lodash2['default'].chain(result.words).map(function (item) {
    return item.placeholder ? '￼' : '￹' + item.text + '￺' + item.argument + '￻';
  }).value();
}

function mapPlaceholderGroups(resultGroup) {
  var placeholders = _lodash2['default'].chain(resultGroup).map(function (result) {
    return _lodash2['default'].chain(result.words).filter('placeholder').map('text').value();
  }).thru(function (descriptorLists) {
    return _lodash2['default'].zip.apply(_lodash2['default'], _toConsumableArray(descriptorLists));
  }).map(function (x) {
    return _lodash2['default'].unique(x);
  }).map(function (x) {
    return _lodash2['default'].filter(x);
  }).value();

  var result = _lodash2['default'].clone(_lodash2['default'].first(resultGroup));

  _lodash2['default'].chain(result.words).filter('placeholder').forEach(function (item, index) {
    item.placeholderTexts = placeholders[index]
    // item.descriptors = [placeholders[index]]
    ;
  }).value();

  return result;
}

// function removeDescriptors (result) {
//   _.forEach(result.match.concat(result.suggestion, result.completion), item => {
//     item.topLevelDescriptor = item.ar_.first(item.descriptors)
//   })
// }

var prefixes = ['open ', 'search ']; //, 'open ', 'search ']

var Keys = (function () {
  function Keys() {
    _classCallCheck(this, Keys);
  }

  _createClass(Keys, [{
    key: 'render',
    value: function render() {
      return _reactAddons2['default'].createElement(
        'div',
        { className: 'keys' + (this.props.visible ? ' visible' : '') },
        _reactAddons2['default'].createElement(
          'div',
          { className: 'key' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'keyChar' },
            '↑↓'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'keyDesc' },
            'select'
          )
        ),
        _reactAddons2['default'].createElement(
          'div',
          { className: 'key' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'keyChar' },
            '⇥'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'keyDesc' },
            'complete'
          )
        ),
        _reactAddons2['default'].createElement(
          'div',
          { className: 'key' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'keyChar' },
            '↩'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'keyDesc' },
            'do'
          )
        )
      );
    }
  }]);

  return Keys;
})();

var Lacona = (function (_React$Component) {
  function Lacona(props) {
    _classCallCheck(this, Lacona);

    _get(Object.getPrototypeOf(Lacona.prototype), 'constructor', this).call(this, props);

    this.state = {
      input: '',
      output: [],
      prefix: '',
      focused: false
    };

    this.parser = new _lacona.Parser();
    this.parser.grammar = props.grammar;
    this.parser.extensions = props.extensions;
  }

  _inherits(Lacona, _React$Component);

  _createClass(Lacona, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update('');
    }
  }, {
    key: 'focusEnd',
    value: function focusEnd() {
      this.refs.lacona.focusEnd();
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return this.state.input;
    }
  }, {
    key: 'parse',
    value: function parse(input, checkDone) {
      var prefixes = arguments[2] === undefined ? [''] : arguments[2];

      if (checkDone()) return [];

      var inputs = _lodash2['default'].map(prefixes, function (prefix) {
        return '' + prefix + '' + input;
      });

      var fullOutput = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = prefixes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _prefix = _step.value;

          var prefixedInput = '' + _prefix + '' + input;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.parser.parse(prefixedInput)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var output = _step2.value;

              if (checkDone()) return [];
              if (output.words[0].text === _prefix) {
                output.words[0].fallthrough = true;
              }
              fullOutput.push(output);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (checkDone()) return [];

      if (!_lodash2['default'].isEmpty(fullOutput)) {
        return _lodash2['default'].chain(fullOutput).groupBy(groupPlaceholders).map(mapPlaceholderGroups).sortBy(function (option) {
          return -option.score;
        }).value();
      }

      return [];
    }
  }, {
    key: 'update',
    value: function update(input) {
      var _this = this;

      this.setState({ input: input });

      var checkDone = function checkDone() {
        return input !== _this.state.input;
      };

      setTimeout(function () {
        var output = _this.parse(input, checkDone);
        if (checkDone()) return;

        if (!output.length) {
          output = _this.parse(input, checkDone, prefixes);
        }
        if (checkDone()) return;

        _this.setState({ output: output });
      }, 11);
    }
  }, {
    key: 'execute',
    value: function execute(index) {
      var result = this.state.output[index].result;
      this.props.execute(result);
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.update('');
    }
  }, {
    key: 'blur',
    value: function blur(event) {
      this.setState({ focused: false });
    }
  }, {
    key: 'focus',
    value: function focus(event) {
      this.setState({ focused: true });
      if (!this.props.tryMe) this.props.userInteracted();
    }
  }, {
    key: 'clearPrefix',
    value: function clearPrefix(event) {
      this.setState({ prefix: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _reactAddons2['default'].createElement(
        'div',
        { className: 'lacona' },
        _reactAddons2['default'].createElement(Keys, { visible: this.state.focused }),
        _reactAddons2['default'].createElement(_reactLacona2['default'], {
          ref: 'lacona',
          onFocus: this.focus.bind(this),
          onBlur: this.blur.bind(this),
          userInput: this.state.input,
          outputs: this.state.output,
          prefix: this.state.prefix,
          update: this.update.bind(this),
          execute: this.execute.bind(this),
          cancel: this.cancel.bind(this),
          clearPrefix: this.clearPrefix.bind(this),
          userInteracted: this.props.userInteracted,
          tabIndex: this.props.tabIndex,
          placeholder: this.props.placeholder })
      );
    }
  }]);

  return Lacona;
})(_reactAddons2['default'].Component);

exports['default'] = Lacona;

Lacona.defaultProps = {
  tryMe: false,
  placeholder: 'Try me!',
  extensions: []
};
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona":61,"react-lacona":123}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _sentenceJsx = require('./sentence.jsx');

var _asyncEachSeries = require('async-each-series');

var _asyncEachSeries2 = _interopRequireDefault(_asyncEachSeries);

var _reactGoogleAnalytics = require('react-google-analytics');

var _reactGoogleAnalytics2 = _interopRequireDefault(_reactGoogleAnalytics);

var _executeJsx = require('./execute.jsx');

var _executeJsx2 = _interopRequireDefault(_executeJsx);

var _laconaJsx = require('./lacona.jsx');

var _laconaJsx2 = _interopRequireDefault(_laconaJsx);

var _reactAddons = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var MS_PER_INPUT = 10;

var examples = ['open Calendar', 'open Facebook', 'open kickstarter.com', 'open ~/Downloads/Lacona.dmg', 'open todo.txt', 'open my-document.docx with Pages', 'open lacona.io in Safari', 'schedule Dinner with Vicky at The Friendly Toast for 7pm tomorrow', 'schedule Vacation 10a Monday to 6:30p Thursday', 'remind me to Pick up the car September 12 at 11:30am', 'remind me to Buy a gift 7 days before 12/1', 'search Google for pictures of cats', 'search Wikipedia for Laconia', 'Google stormtroopers', 'Amazon Avengers', 'play Robot Love', 'play Walk the Moon', 'play Jason Derulo, Flyte, and Elle King', 'play Jams', 'play next song', 'pause', 'call Mom', 'email Tony Stark', 'text Leaving now :) to Hank McCoy', 'email Dinner Plans to Peter Parker', 'facetime Bruce Banner', 'email app@lacona.io', 'call +1 617 867 5309'];

var Lightbox = (function () {
  function Lightbox() {
    _classCallCheck(this, Lightbox);
  }

  _createClass(Lightbox, [{
    key: 'render',
    value: function render() {
      return _reactAddons2['default'].createElement(
        'div',
        { className: 'lightbox-total' },
        _reactAddons2['default'].createElement('div', { className: 'lightbox-cover', onClick: this.props.hide }),
        _reactAddons2['default'].createElement(
          'div',
          { className: 'lightbox' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'closeButton', onClick: this.props.hide },
            '×'
          ),
          _reactAddons2['default'].createElement(
            'h3',
            null,
            'Thanks for trying the Lacona demo!'
          ),
          _reactAddons2['default'].createElement(
            'p',
            null,
            'If this were a real copy of Lacona, it would ',
            this.props.message,
            '.'
          ),
          _reactAddons2['default'].createElement(ShareSheet, null)
        )
      );
    }
  }]);

  return Lightbox;
})();

var ShareSheet = (function () {
  function ShareSheet() {
    _classCallCheck(this, ShareSheet);
  }

  _createClass(ShareSheet, [{
    key: 'render',
    value: function render() {
      return _reactAddons2['default'].createElement(
        'div',
        { className: 'share-sheet' },
        this.props.includeTry ? _reactAddons2['default'].createElement(
          'div',
          { className: 'share-item extend' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-desc' },
            'Try'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-icons' },
            _reactAddons2['default'].createElement('img', { src: 'try.png' })
          )
        ) : null,
        _reactAddons2['default'].createElement(
          'a',
          { href: '#comingsoon', className: 'share-item' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-desc' },
            'Back'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-icons' },
            _reactAddons2['default'].createElement('img', { src: 'kickstarter.png' })
          )
        ),
        _reactAddons2['default'].createElement(
          'a',
          { className: 'share-item', onClick: function (e) {
              window.open('https://twitter.com/intent/follow?screen_name=lacona&user_id=1963107458', '_blank', 'menubar=1,resizable=1,width=550,height=420');e.preventDefault();
            }, href: 'https://twitter.com/intent/follow?screen_name=lacona&user_id=1963107458', target: '_blank' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-desc' },
            'Follow'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-icons' },
            _reactAddons2['default'].createElement('img', { src: 'twitter.png' })
          )
        ),
        _reactAddons2['default'].createElement(
          'a',
          { className: 'share-item', onClick: function (e) {
              window.open('http://eepurl.com/bjPRjD', '_blank', 'menubar=1,resizable=1,width=550,height=420');e.preventDefault();
            }, href: 'http://eepurl.com/bjPRjD', target: '_blank' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-desc' },
            'Subscribe'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-icons' },
            _reactAddons2['default'].createElement('img', { src: 'email.png' })
          )
        ),
        _reactAddons2['default'].createElement(
          'div',
          { className: 'share-item' },
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-desc' },
            'Share'
          ),
          _reactAddons2['default'].createElement(
            'div',
            { className: 'share-icons' },
            _reactAddons2['default'].createElement(
              'a',
              { onClick: function (e) {
                  window.open('https://www.facebook.com/sharer/sharer.php?u=http://lacona.io', '_blank', 'width=550,height=231');e.preventDefault();
                }, href: 'https://www.facebook.com/sharer/sharer.php?u=http://lacona.io' },
              _reactAddons2['default'].createElement('img', { src: 'facebook.png' })
            ),
            _reactAddons2['default'].createElement(
              'a',
              { onClick: function (e) {
                  window.open('https://twitter.com/intent/tweet?text=Check%20out%20Lacona%20-%20Natural%20Language%20Commands%20for%20your%20Mac&url=http%3A%2F%2Flacona.io', '_blank', 'menubar=1,resizable=1,width=550,height=420');e.preventDefault();
                }, href: 'https://twitter.com/intent/tweet?text=Check%20out%20Lacona%20-%20Natural%20Language%20Commands%20for%20your%20Mac&url=https%3A%2F%2Flacona.io' },
              _reactAddons2['default'].createElement('img', { src: 'twitter.png' })
            ),
            _reactAddons2['default'].createElement(
              'a',
              { onClick: function (e) {
                  window.open('https://plus.google.com/share?url=http://lacona.io', '_blank', 'width=550,height=231');e.preventDefault();
                }, href: 'https://plus.google.com/share?url=http://lacona.io' },
              _reactAddons2['default'].createElement('img', { src: 'googleplus.png' })
            )
          )
        )
      );
    }
  }]);

  return ShareSheet;
})();

ShareSheet.defaultProps = {
  includeTry: false
};

var Page = (function (_React$Component) {
  function Page() {
    _classCallCheck(this, Page);

    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this);

    this.state = {
      theme: 'theme-eighties-dark',
      initialLoad: true
    };

    this.execute = (0, _executeJsx2['default'])(this.showLightbox.bind(this));

    this.demoRunning = true;
  }

  _inherits(Page, _React$Component);

  _createClass(Page, [{
    key: 'showLightbox',
    value: function showLightbox(text) {
      this.setState({ lightBoxMessage: text });
    }
  }, {
    key: 'hideLightbox',
    value: function hideLightbox() {
      this.setState({ lightBoxMessage: null });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _reactGoogleAnalytics2['default'])('create', 'UA-61643321-1', 'auto');
      (0, _reactGoogleAnalytics2['default'])('send', 'pageview');

      this.setState({ initialLoad: false });

      this.startDemo();
    }
  }, {
    key: 'startDemo',
    value: function startDemo() {
      var _this = this;

      var shuffledExamples = _lodash2['default'].shuffle(examples);

      var shouldStop = function shouldStop() {
        return !_this.demoRunning;
      };

      (0, _asyncEachSeries2['default'])(shuffledExamples, function (item, done) {
        _this.type('big', shouldStop, item, false);
        if (!shouldStop()) setTimeout(done, 7000);
      }, this.startDemo.bind(this));
    }
  }, {
    key: 'stopDemo',
    value: function stopDemo() {
      this.demoRunning = false;
    }
  }, {
    key: 'erase',
    value: function erase(elem, shouldStop, focus, done) {
      var input = elem.getInput();

      var _loop = function (i) {
        _lodash2['default'].delay(function () {
          if (shouldStop()) return;
          elem.update(input.substr(0, input.length - i));
          if (focus) elem.focusEnd();
        }, i * MS_PER_INPUT / 2);
      };

      for (var i = 0; i < input.length; i++) {
        _loop(i);
      }

      _lodash2['default'].delay(function () {
        done();
      }, input.length * MS_PER_INPUT / 2);
    }
  }, {
    key: 'type',
    value: function type(ref, shouldStop, content) {
      var focus = arguments[3] === undefined ? true : arguments[3];

      var elem = this.refs[ref];
      this.erase(elem, shouldStop, focus, function () {
        var _loop2 = function (i) {
          if (shouldStop()) return {
              v: undefined
            };
          _lodash2['default'].delay(function () {
            elem.update(content.substr(0, i + 1));
            if (focus) elem.focusEnd();
          }, i * MS_PER_INPUT);
        };

        for (var i = 0; i < content.length; i++) {
          var _ret2 = _loop2(i);

          if (typeof _ret2 === 'object') return _ret2.v;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _reactAddons2['default'].createElement(
        'div',
        { className: 'page' + (this.state.fixedMode ? ' fixed' : '') + '' + (this.state.initialLoad ? ' initial-load' : '') + '' + (this.state.active ? '' : ' inactive') + ' ' + (this.props.isMobile ? 'mobile' : 'desktop') + ' theme-eighties-dark' },
        _reactAddons2['default'].createElement(
          _reactAddons2['default'].addons.CSSTransitionGroup,
          { transitionName: 'lightbox' },
          this.state.lightBoxMessage ? _reactAddons2['default'].createElement(Lightbox, { key: '1', message: this.state.lightBoxMessage, hide: this.hideLightbox.bind(this) }) : null
        ),
        _reactAddons2['default'].createElement(
          'header',
          null,
          _reactAddons2['default'].createElement(
            'h1',
            null,
            _reactAddons2['default'].createElement(
              'a',
              { href: '#', tabIndex: '-1' },
              'Lacona'
            )
          ),
          _reactAddons2['default'].createElement(
            'h2',
            null,
            _reactAddons2['default'].createElement(
              'span',
              { className: 'category-action highlighted' },
              'Natural Language Commands'
            ),
            ' ',
            _reactAddons2['default'].createElement(
              'span',
              { className: 'category-conjunction highlighted' },
              'for your'
            ),
            ' ',
            _reactAddons2['default'].createElement(
              'span',
              { className: 'category-argument2 highlighted' },
              'Mac'
            )
          ),
          _reactAddons2['default'].createElement(
            'p',
            null,
            'Call up Lacona with a keypress, and type whatever you want to do.'
          ),
          _reactAddons2['default'].createElement(
            'p',
            null,
            'It gives intelligent suggestions as you type and then follows your orders.'
          )
        ),
        _reactAddons2['default'].createElement(
          'content',
          null,
          _reactAddons2['default'].createElement(
            'section',
            { className: 'full green' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(ShareSheet, { includeTry: true })
            )
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'full' },
            _reactAddons2['default'].createElement(_laconaJsx2['default'], {
              userInteracted: this.stopDemo.bind(this),
              grammar: _sentenceJsx.all.grammar,
              execute: this.execute,
              ref: 'big',
              tryMe: true,
              tabIndex: 1 })
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'textLeft' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(
                'h3',
                null,
                'Ditch the Dock'
              ),
              _reactAddons2['default'].createElement(
                'p',
                null,
                'With Lacona, your Apps, Bookmarks, Files, and more are just a few keystrokes away.'
              ),
              _reactAddons2['default'].createElement(
                'ul',
                { className: 'examples' },
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open Calendar') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-application' },
                    'Calendar'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open Facebook') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-bookmark' },
                    'Facebook'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'iTunes') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-application' },
                    'iTunes'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open kickstarter.com') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-url' },
                    'kickstarter.com'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open lacona.io in Safari') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-url' },
                    'lacona.io'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'in'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-application' },
                    'Safari'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'lifehacker.com') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-url' },
                    'lifehacker.com'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open ~/Downloads/Lacona.dmg') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-path' },
                    '~/Downloads/Lacona.dmg'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open todo.txt') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-file' },
                    'todo.txt'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '0', function () {
                      return false;
                    }, 'open my-document.docx with Pages') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'open'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-file' },
                    'my-document.docx'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'with'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-application' },
                    'Pages'
                  )
                )
              )
            ),
            _reactAddons2['default'].createElement(_laconaJsx2['default'], { userInteracted: this.stopDemo.bind(this), ref: '0', grammar: _sentenceJsx.open.grammar, execute: function (open) {
                return _this2.execute({ open: open });
              } })
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'textRight' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(
                'h3',
                null,
                'Organize your Life, not your Calendar'
              ),
              _reactAddons2['default'].createElement(
                'p',
                null,
                'Create events and reminders just like you were talking to a person. Lacona understands.'
              ),
              _reactAddons2['default'].createElement(
                'p',
                { className: 'well' },
                'Dates are complicated! The occasional choppiness is only because Lacona is running in a browser. The real app will be silky smooth.'
              ),
              _reactAddons2['default'].createElement(
                'ul',
                { className: 'examples' },
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '1', function () {
                      return false;
                    }, 'schedule Dinner with Vicky at Sacco\'s Flatbread for 7pm tomorrow') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'schedule'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-calendar-event' },
                    'Dinner with Vicky'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'at'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-location' },
                    'The Friendly Toast'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'for'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-date-and-time' },
                    '7pm tomorrow'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '1', function () {
                      return false;
                    }, 'remind me to Pick up the car September 12 at 11:30am') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'remind me to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-reminder-title' },
                    'Pick up the car'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-date-and-time' },
                    'September 12 at 11:30am'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '1', function () {
                      return false;
                    }, 'schedule Vacation 10a Monday to 6:30p Thursday') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'schedule'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-calendar-event' },
                    'Vacation'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-period-of-time' },
                    '10a Monday to 6:30p Thursday'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '1', function () {
                      return false;
                    }, 'remind me to Buy a gift 7 days before 12/1') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'remind me to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-reminder-title' },
                    'Buy a gift'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-date' },
                    '7 days before 12/1'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '1', function () {
                      return false;
                    }, 'remind me to Call Jenny') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'remind me to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-reminder-title' },
                    'Call Jenny'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '1', function () {
                      return false;
                    }, 'remind me to Charge my phone at 9pm') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'remind me to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-reminder-title' },
                    'Charge my phone'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'at'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-time' },
                    '9pm'
                  )
                )
              )
            ),
            _reactAddons2['default'].createElement(_laconaJsx2['default'], { userInteracted: this.stopDemo.bind(this), ref: '1', grammar: _sentenceJsx.date.grammar, execute: function (date) {
                return _this2.execute({ date: date });
              } })
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'textLeft' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(
                'h3',
                null,
                'Seek and Ye Shall Find'
              ),
              _reactAddons2['default'].createElement(
                'p',
                null,
                'Search the web like a boss. Utilize powerful fallthrough functionality to save even more keystrokes.'
              ),
              _reactAddons2['default'].createElement(
                'ul',
                { className: 'examples' },
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '2', function () {
                      return false;
                    }, 'search Google for pictures of cats') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'search'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-search-engine' },
                    'Google'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'for'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-query' },
                    'pictures of cats'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '2', function () {
                      return false;
                    }, 'Google stormtroopers') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-search-engine' },
                    'Google'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-query' },
                    'stormtroopers'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '2', function () {
                      return false;
                    }, 'Amazon Avengers') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-search-engine' },
                    'Amazon'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-query' },
                    'Avengers'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '2', function () {
                      return false;
                    }, 'search Wikipedia for Laconia') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'search'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-search-engine' },
                    'Wikipedia'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'for'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-query' },
                    'Laconia'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '2', function () {
                      return false;
                    }, 'search eBay and Amazon for iPhone 6') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'search'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-search-engine' },
                    'eBay'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'and'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-search-engine' },
                    'Amazon'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'for'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-query' },
                    'iPhone 6'
                  )
                )
              )
            ),
            _reactAddons2['default'].createElement(_laconaJsx2['default'], { userInteracted: this.stopDemo.bind(this), ref: '2', grammar: _sentenceJsx.search.grammar, execute: function (search) {
                return _this2.execute({ search: search });
              } })
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'textRight' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(
                'h3',
                null,
                'Your Work Needs a DJ'
              ),
              _reactAddons2['default'].createElement(
                'p',
                null,
                'Instantly play anything in your iTunes library, without ever touching the mouse.'
              ),
              _reactAddons2['default'].createElement(
                'ul',
                { className: 'examples' },
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '3', function () {
                      return false;
                    }, 'play Robot Love') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'play'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-song' },
                    'Robot Love'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '3', function () {
                      return false;
                    }, 'play Walk the Moon') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'play'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-artist' },
                    'Walk the Moon'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '3', function () {
                      return false;
                    }, 'play Jason Derulo, Flyte, and Elle King') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'play'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-artist' },
                    'Jason Derulo'
                  ),
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    ', '
                  ),
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-artist' },
                    'Flyte'
                  ),
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    ', and '
                  ),
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-artist' },
                    'Elle King'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '3', function () {
                      return false;
                    }, 'play Jams') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'play'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-playlist' },
                    'Jams'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '3', function () {
                      return false;
                    }, 'play next song') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'play'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-next-song' },
                    'next song'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '3', function () {
                      return false;
                    }, 'pause') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'pause'
                  )
                )
              )
            ),
            _reactAddons2['default'].createElement(_laconaJsx2['default'], { userInteracted: this.stopDemo.bind(this), ref: '3', grammar: _sentenceJsx.play.grammar, execute: function (play) {
                return _this2.execute({ play: play });
              } })
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'textLeft' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(
                'h3',
                null,
                'Keep in Touch'
              ),
              _reactAddons2['default'].createElement(
                'p',
                null,
                'Easily communicate with all of your contacts over Email, FaceTime, iMessage. Make calls and send texts through your iPhone. Smoke signals not yet supported.'
              ),
              _reactAddons2['default'].createElement(
                'ul',
                { className: 'examples' },
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'call Mom') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'call'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-relationship' },
                    'Mom'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'email Tony Stark') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'email'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-contact' },
                    'Tony Stark'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'text Leaving now :) to Hank McCoy') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'text'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-message' },
                    'Leaving now :)'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'conjunction' },
                    'to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-contact' },
                    'Hank McCoy'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'email Dinner Plans to Peter Parker') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'email'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-message' },
                    'Dinner Plans'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'conjunction' },
                    'to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-contact' },
                    'Peter Parker'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'facetime my boss') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'facetime'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-relationship' },
                    'my boss'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'facetime Bruce Banner') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'facetime'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-contact' },
                    'Bruce Banner'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'email app@lacona.io') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'email'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-email-address' },
                    'app@lacona.io'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  { onClick: this.type.bind(this, '4', function () {
                      return false;
                    }, 'call +1 617 867 5309') },
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'call'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-phone-number' },
                    '+1 617 867 5309'
                  )
                )
              )
            ),
            _reactAddons2['default'].createElement(_laconaJsx2['default'], { userInteracted: this.stopDemo.bind(this), ref: '4', grammar: _sentenceJsx.contact.grammar, execute: function (contact) {
                return _this2.execute({ contact: contact });
              } })
          ),
          _reactAddons2['default'].createElement(
            'section',
            { className: 'full' },
            _reactAddons2['default'].createElement(
              'div',
              { className: 'text' },
              _reactAddons2['default'].createElement(
                'h3',
                null,
                'The Sky\'s the Limit'
              ),
              _reactAddons2['default'].createElement(
                'p',
                null,
                'Lacona is built to be extended. An open Developer API will let it understand anything you need to do.'
              ),
              _reactAddons2['default'].createElement(
                'ul',
                { className: 'examples inactive' },
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'tweet'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument2' },
                    'just setting up my twttr #blessed'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'skype'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-contact' },
                    'Aaron'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'switch to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-application' },
                    'Safari'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'email'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument4' },
                    'my last instagram picture'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-relationship' },
                    'Mom'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'calculate'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument3' },
                    'sqrt(5)'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'turn off'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument5' },
                    'the kitchen lights'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'check'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument6' },
                    'APPL'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'translate'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument3' },
                    'How do you do?'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument2' },
                    'Japanese'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'empty the Trash'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'remind me to'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument3' },
                    'Book a flight home'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-date' },
                    '6 weeks before Jordan\'s birthday'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'set a timer'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-conjunction' },
                    'for'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument2' },
                    '25 minutes'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'block'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'descriptor-url' },
                    'reddit.com'
                  )
                ),
                _reactAddons2['default'].createElement(
                  'li',
                  null,
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-action' },
                    'fork'
                  ),
                  ' ',
                  _reactAddons2['default'].createElement(
                    'span',
                    { className: 'category-argument1' },
                    'lacona/lacona'
                  )
                )
              )
            )
          )
        ),
        _reactAddons2['default'].createElement(
          'footer',
          null,
          _reactAddons2['default'].createElement(
            'div',
            { className: 'text' },
            _reactAddons2['default'].createElement(
              'p',
              { className: 'well' },
              'This page is only a demonstration of Lacona\'s interface. It cannot access your files, apps, calendar, or anything else on your computer.'
            ),
            '©2015 Lacona Labs'
          )
        ),
        _reactAddons2['default'].createElement(_reactGoogleAnalytics.Initializer, null)
      );
    }
  }]);

  return Page;
})(_reactAddons2['default'].Component);

exports['default'] = Page;
module.exports = exports['default'];
/*<p>Feel free to try something else, <a href='https://twitter.com/intent/follow?screen_name=lacona&user_id=1963107458' target='_blank' onClick={this.openWindow}>follow @lacona on Twitter</a>, or <a href='http://eepurl.com/bjPRjD' target='_blank'>subscribe to the newsletter</a>.</p>*/ /*<p>Lacona will be available for download <em>late summer, 2015</em>. Until then, check out the demos below, <a href='https://twitter.com/intent/follow?screen_name=lacona&user_id=1963107458' target='_blank' onClick={this.openWindow}>follow @lacona on Twitter</a>, or <a href='http://eepurl.com/bjPRjD' target='_blank'>sign up for the newsletter</a>.</p>*/ /*<li><span className='category-action'>Поиск</span> <span className='descriptor-search-engine'>Яндекса</span> <span className='category-conjunction'>для</span> <span className='descriptor-query'>музыки</span></li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <li><span className='category-conjunction'>在</span><span className='descriptor-search-engine'>百度</span><span classAName='category-conjunction'>上</span><span className='category-action'>搜索</span><span className='descriptor-query'>好听的音乐</span></li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <li style={{textAlign: 'right'}}><span className='category-action'>بحث</span> <span className='descriptor-search-engine'>يملي</span> <span className='descriptor-query'>للموسيقى</span></li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <li><span className='category-action'>calculate</span> <span className='category-argument3'>六十四 + 23 + ٣‎٤</span></li>*/ /*<section className='full'>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <div className='text'>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <h3>Just the Beginning</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Lacona is currently under active development, and will be launching <em>Summer, 2015</em>. To recieve updates, <a href='http://lacona.us10.list-manage.com/subscribe?u=f923be23d36f00f457ea3b2c6&id=1db875d5ed' target='_blank' onClick={this.openWindow}>subscribe to the Newsletter</a> or .
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               {/*<p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Since computers have existed, we have needed to learn <em>their</em> language. With Lacona, the computer takes that responsibility back. It understands commands <em>the way they exist in your mind</em>, freeing you from the burden of an expensive mental context-switch, so you can forget about the computer and just <em>get things done</em>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </section>*/

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./execute.jsx":2,"./lacona.jsx":3,"./sentence.jsx":5,"async-each-series":6,"react-google-analytics":121}],5:[function(require,module,exports){
(function (global){
/** @jsx createElement */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _lodash = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _laconaPhrase = require('lacona-phrase');

var _laconaPhraseDatetime = require('lacona-phrase-datetime');

var _laconaPhraseUrl = require('lacona-phrase-url');

var _laconaPhraseUrl2 = _interopRequireDefault(_laconaPhraseUrl);

var _laconaPhraseEmail = require('lacona-phrase-email');

var _laconaPhraseEmail2 = _interopRequireDefault(_laconaPhraseEmail);

var _laconaPhrasePhonenumber = require('lacona-phrase-phonenumber');

var _laconaPhrasePhonenumber2 = _interopRequireDefault(_laconaPhrasePhonenumber);

var _laconaPhraseRepeat = require('lacona-phrase-repeat');

var _laconaPhraseRepeat2 = _interopRequireDefault(_laconaPhraseRepeat);

var userFiles = [{
  name: 'Desktop',
  children: ['mydocument.pages', 'mockup.html', 'kickstarter.url'] }, {
  name: 'Documents',
  children: [{
    name: 'University',
    children: ['...']
  }, {
    name: 'Resumes',
    children: ['...']
  }, {
    name: 'Ideas',
    children: ['...']
  }, {
    name: 'Presentations',
    children: ['...']
  }, {
    name: 'Projects',
    children: ['...']
  }, {
    name: 'NLP',
    children: ['...']
  }]
}, {
  name: 'Downloads',
  children: ['Lacona.dmg']
}, {
  name: 'Library',
  children: [{
    name: 'Accounts',
    children: ['...']
  }, {
    name: 'Application Scripts',
    children: ['...']
  }, {
    name: 'Application Support',
    children: ['...']
  }, {
    name: 'Assistants',
    children: ['...']
  }, {
    name: 'Audio',
    children: ['...']
  }, {
    name: 'Autosave Information',
    children: ['...']
  }, {
    name: 'Caches',
    children: ['...']
  }, {
    name: 'Calendars',
    children: ['...']
  }, {
    name: 'ColorPickers',
    children: ['...']
  }, {
    name: 'Colors',
    children: ['...']
  }, {
    name: 'Compositions',
    children: ['...']
  }, {
    name: 'Containers',
    children: ['...']
  }, {
    name: 'Cookies',
    children: ['...']
  }, {
    name: 'Developer',
    children: ['...']
  }, {
    name: 'Dictionaries',
    children: ['...']
  }, {
    name: 'Favorites',
    children: ['...']
  }, {
    name: 'FlashlightPlugins',
    children: ['...']
  }, {
    name: 'FontCollections',
    children: ['...']
  }, {
    name: 'Fonts',
    children: ['...']
  }, {
    name: 'GameKit',
    children: ['...']
  }, {
    name: 'Google',
    children: ['...']
  }, {
    name: 'Group Containers',
    children: ['...']
  }, {
    name: 'IdentityServices',
    children: ['...']
  }, {
    name: 'Input Methods',
    children: ['...']
  }, {
    name: 'Internet Plug-Ins',
    children: ['...']
  }, {
    name: 'Keyboard Layouts',
    children: ['...']
  }, {
    name: 'Keychains',
    children: ['...']
  }, {
    name: 'LanguageModeling',
    children: ['...']
  }, {
    name: 'LaunchAgents',
    children: ['...']
  }, {
    name: 'Logs',
    children: ['...']
  }, {
    name: 'Mail',
    children: ['...']
  }, {
    name: 'Messages',
    children: ['...']
  }, {
    name: 'Mobile Documents',
    children: ['...']
  }, {
    name: 'PreferencePanes',
    children: ['...']
  }, {
    name: 'Preferences',
    children: ['...']
  }, {
    name: 'Printers',
    children: ['...']
  }, {
    name: 'PubSub',
    children: ['...']
  }, {
    name: 'Safari',
    children: ['...']
  }, {
    name: 'Saved Application State',
    children: ['...']
  }, {
    name: 'Saved Searches',
    children: ['...']
  }, {
    name: 'Screen Savers',
    children: ['...']
  }, {
    name: 'ScriptingAdditions',
    children: ['...']
  }, {
    name: 'Services',
    children: ['...']
  }, {
    name: 'Sounds',
    children: ['...']
  }, {
    name: 'Spelling',
    children: ['...']
  }, {
    name: 'SyncedPreferences',
    children: ['...']
  }, {
    name: 'Voices',
    children: ['...']
  }, {
    name: 'WebKit',
    children: ['...']
  }, {
    name: 'com.apple.nsurlsessiond',
    children: ['...']
  }, {
    name: 'iMovie',
    children: ['...']
  }, {
    name: 'iTunes',
    children: ['...']
  }]
}, {
  name: 'Movies',
  children: ['The Avengers.avi', 'X-Men First Class.avi', 'Iron Man.avi']
}, {
  name: 'Music',
  children: [{
    name: 'Audio Music Apps',
    children: ['...']
  }, {
    name: 'GarageBand',
    children: ['...']
  }, {
    name: 'iTunes',
    children: ['...']
  }]
}, {
  name: 'Pictures',
  children: ['Photos Library.photoslibrary']
}];

var rootFiles = [{
  name: 'Applications',
  children: [{
    name: 'App Store.app',
    children: ['...']
  }, {
    name: 'Atom.app',
    children: ['...']
  }, {
    name: 'Automator.app',
    children: ['...']
  }, {
    name: 'Calculator.app',
    children: ['...']
  }, {
    name: 'Calendar.app',
    children: ['...']
  }, {
    name: 'Chess.app',
    children: ['...']
  }, {
    name: 'Contacts.app',
    children: ['...']
  }, {
    name: 'DVD Player.app',
    children: ['...']
  }, {
    name: 'Dash.app',
    children: ['...']
  }, {
    name: 'Dashboard.app',
    children: ['...']
  }, {
    name: 'Dictionary.app',
    children: ['...']
  }, {
    name: 'FaceTime.app',
    children: ['...']
  }, {
    name: 'Font Book.app',
    children: ['...']
  }, {
    name: 'Game Center.app',
    children: ['...']
  }, {
    name: 'GarageBand.app',
    children: ['...']
  }, {
    name: 'GitHub.app',
    children: ['...']
  }, {
    name: 'Google Chrome.app',
    children: ['...']
  }, {
    name: 'Image Capture.app',
    children: ['...']
  }, {
    name: 'Keynote.app',
    children: ['...']
  }, {
    name: 'Launchpad.app',
    children: ['...']
  }, {
    name: 'Mail.app',
    children: ['...']
  }, {
    name: 'Maps.app',
    children: ['...']
  }, {
    name: 'Messages.app',
    children: ['...']
  }, {
    name: 'Mission Control.app',
    children: ['...']
  }, {
    name: 'Notes.app',
    children: ['...']
  }, {
    name: 'Numbers.app',
    children: ['...']
  }, {
    name: 'Pages.app',
    children: ['...']
  }, {
    name: 'Photo Booth.app',
    children: ['...']
  }, {
    name: 'Photos.app',
    children: ['...']
  }, {
    name: 'Preview.app',
    children: ['...']
  }, {
    name: 'QuickTime Player.app',
    children: ['...']
  }, {
    name: 'Reminders.app',
    children: ['...']
  }, {
    name: 'Safari.app',
    children: ['...']
  }, {
    name: 'Slack.app',
    children: ['...']
  }, {
    name: 'Stickies.app',
    children: ['...']
  }, {
    name: 'System Preferences.app',
    children: ['...']
  }, {
    name: 'TextEdit.app',
    children: ['...']
  }, {
    name: 'Time Machine.app',
    children: ['...']
  }, {
    name: 'Utilities',
    children: ['...']
  }, {
    name: 'Xcode.app',
    children: ['...']
  }, {
    name: 'iBooks.app',
    children: ['...']
  }, {
    name: 'iMovie.app',
    children: ['...']
  }, {
    name: 'iPhoto.app',
    children: ['...']
  }, {
    name: 'iTunes.app',
    children: ['...']
  }]
}, {
  name: 'Library',
  children: [{
    name: 'Application Support',
    children: ['...']
  }, {
    name: 'Audio',
    children: ['...']
  }, {
    name: 'Caches',
    children: ['...']
  }, {
    name: 'ColorPickers',
    children: ['...']
  }, {
    name: 'ColorSync',
    children: ['...']
  }, {
    name: 'Components',
    children: ['...']
  }, {
    name: 'Compositions',
    children: ['...']
  }, {
    name: 'Contextual Menu Items',
    children: ['...']
  }, {
    name: 'CoreMediaIO',
    children: ['...']
  }, {
    name: 'Desktop Pictures',
    children: ['...']
  }, {
    name: 'Developer',
    children: ['...']
  }, {
    name: 'Dictionaries',
    children: ['...']
  }, {
    name: 'DirectoryServices',
    children: ['...']
  }, {
    name: 'Documentation',
    children: ['...']
  }, {
    name: 'DropboxHelperTools',
    children: ['...']
  }, {
    name: 'Extensions',
    children: ['...']
  }, {
    name: 'Filesystems',
    children: ['...']
  }, {
    name: 'Fonts',
    children: ['...']
  }, {
    name: 'Frameworks',
    children: ['...']
  }, {
    name: 'Google',
    children: ['...']
  }, {
    name: 'Graphics',
    children: ['...']
  }, {
    name: 'Image Capture',
    children: ['...']
  }, {
    name: 'Input Methods',
    children: ['...']
  }, {
    name: 'Internet Plug-Ins',
    children: ['...']
  }, {
    name: 'Java',
    children: ['...']
  }, {
    name: 'Keyboard Layouts',
    children: ['...']
  }, {
    name: 'Keychains',
    children: ['...']
  }, {
    name: 'LaunchAgents',
    children: ['...']
  }, {
    name: 'LaunchDaemons',
    children: ['...']
  }, {
    name: 'Logs',
    children: ['...']
  }, {
    name: 'Messages',
    children: ['...']
  }, {
    name: 'Modem Scripts',
    children: ['...']
  }, {
    name: 'OpenDirectory',
    children: ['...']
  }, {
    name: 'PDF Services',
    children: ['...']
  }, {
    name: 'Perl',
    children: ['...']
  }, {
    name: 'PreferencePanes',
    children: ['...']
  }, {
    name: 'Preferences',
    children: ['...']
  }, {
    name: 'Printers',
    children: ['...']
  }, {
    name: 'PrivilegedHelperTools',
    children: ['...']
  }, {
    name: 'Python',
    children: ['...']
  }, {
    name: 'QuickLook',
    children: ['...']
  }, {
    name: 'QuickTime',
    children: ['...']
  }, {
    name: 'Receipts',
    children: ['...']
  }, {
    name: 'Ruby',
    children: ['...']
  }, {
    name: 'Sandbox',
    children: ['...']
  }, {
    name: 'Screen Savers',
    children: ['...']
  }, {
    name: 'ScriptingAdditions',
    children: ['...']
  }, {
    name: 'Scripts',
    children: ['...']
  }, {
    name: 'Security',
    children: ['...']
  }, {
    name: 'Server',
    children: ['...']
  }, {
    name: 'Speech',
    children: ['...']
  }, {
    name: 'Spelling',
    children: ['...']
  }, {
    name: 'Spotlight',
    children: ['...']
  }, {
    name: 'StartupItems',
    children: ['...']
  }, {
    name: 'SystemMigration',
    children: ['...']
  }, {
    name: 'SystemProfiler',
    children: ['...']
  }, {
    name: 'Updates',
    children: ['...']
  }, {
    name: 'User Pictures',
    children: ['...']
  }, {
    name: 'Video',
    children: ['...']
  }, {
    name: 'WebServer',
    children: ['...']
  }, {
    name: 'Widgets',
    children: ['...']
  }, {
    name: 'iTunes',
    children: ['...']
  }]
}, {
  name: 'Users',
  children: [{
    name: 'LaconaUser',
    children: userFiles
  }, {
    name: 'Guest',
    children: ['...']
  }, {
    name: 'Shared',
    children: ['...']
  }]
}, {
  name: 'bin',
  children: ['bash', 'cat', 'chmod', 'cp', 'csh', 'date', 'dd', 'df', 'domainname', 'echo', 'ed', 'expr', 'hostname', 'kill', 'ksh', 'launchctl', 'link', 'ln', 'ls', 'mkdir', 'mv', 'pax', 'ps', 'pwd', 'rcp', 'rm', 'rmdir', 'sh', 'sleep', 'stty', 'sync', 'tcsh', 'test', 'unlink', 'wait4path', 'zsh']
}, {
  name: 'etc',
  children: []
}, {
  name: 'home',
  children: []
}, {
  name: 'net',
  children: []
}, {
  name: 'tmp',
  children: ['KSOutOfProcessFetcher.0.OlaJUhhgKAnFsX7fZ0FyXTFxIgg=', 'com.apple.launchd.CWPFO2w3Rj', 'com.apple.launchd.eM0bByeRbW', 'tmphosts', 'tmphosts1', 'some.tmp', 'test.tmp', 'yes.txt']
}, {
  name: 'usr',
  children: [{
    name: 'X11',
    children: ['...']
  }, {
    name: 'X11R6',
    children: ['...']
  }, {
    name: 'bin',
    children: ['...']
  }, {
    name: 'include',
    children: ['...']
  }, {
    name: 'lib',
    children: ['...']
  }, {
    name: 'libexec',
    children: ['...']
  }, {
    name: 'local',
    children: ['...']
  }, {
    name: 'sbin',
    children: ['...']
  }, {
    name: 'share',
    children: ['...']
  }, {
    name: 'standalone',
    children: ['...']
  }]
}, {
  name: 'var',
  children: [{
    name: 'Keychains',
    children: ['...']
  }, {
    name: 'agentx',
    children: ['...']
  }, {
    name: 'at',
    children: ['...']
  }, {
    name: 'audit',
    children: ['...']
  }, {
    name: 'backups',
    children: ['...']
  }, {
    name: 'db',
    children: ['...']
  }, {
    name: 'empty',
    children: ['...']
  }, {
    name: 'folders',
    children: ['...']
  }, {
    name: 'folders~orig',
    children: ['...']
  }, {
    name: 'jabberd',
    children: ['...']
  }, {
    name: 'lib',
    children: ['...']
  }, {
    name: 'log',
    children: ['...']
  }, {
    name: 'mail',
    children: ['...']
  }, {
    name: 'msgs',
    children: ['...']
  }, {
    name: 'netboot',
    children: ['...']
  }, {
    name: 'networkd',
    children: ['...']
  }, {
    name: 'root',
    children: ['...']
  }, {
    name: 'rpc',
    children: ['...']
  }, {
    name: 'run',
    children: ['...']
  }, {
    name: 'rwho',
    children: ['...']
  }, {
    name: 'spool',
    children: ['...']
  }, {
    name: 'tmp',
    children: ['...']
  }, {
    name: 'vm',
    children: ['...']
  }, {
    name: 'yp',
    children: ['...']
  }]
}];

var tunes = [{ name: 'I\'m Good',
  artist: 'The Mowgli\'s',
  album: 'I\'m Good',
  genre: 'Pop' }, { name: 'Baby Love',
  artist: 'Petite Meller',
  album: 'Baby Love',
  genre: 'Pop' }, { name: 'T-Shirt Weather',
  artist: 'Circa Waves',
  album: 'T-Shirt Weather',
  genre: 'Pop' }, { name: 'Fade Out Lines - The Avener Rework',
  artist: 'The Avener & Phoebe Killdeer',
  album: 'Fade Out Lines',
  genre: 'Pop' }, { name: 'Salt',
  artist: 'Bad Suns',
  album: 'Language & Perspective',
  genre: 'Pop' }, { name: 'Ship To Wreck',
  artist: 'Florence + The Machine',
  album: 'Ship To Wreck',
  genre: 'Pop' }, { name: 'Couch Potato',
  artist: 'Shortstraw',
  album: 'Good Morning, Sunshine',
  genre: 'Pop' }, { name: 'Good Day',
  artist: 'distant cousins',
  album: 'Good Day',
  genre: 'Pop' }, { name: 'Ex\'s & Oh\'s',
  artist: 'Elle King',
  album: 'Love Stuff',
  genre: 'Pop' }, { name: 'Irresistible',
  artist: 'Fall Out Boy',
  album: 'American Beauty/American Psycho',
  genre: 'Pop' }, { name: 'Centuries',
  artist: 'Fall Out Boy',
  album: 'American Beauty/American Psycho',
  genre: 'Pop' }, { name: 'Light Me Up',
  artist: 'Flyte',
  album: 'Light Me Up',
  genre: 'Pop' }, { name: 'Violins',
  artist: 'I\'m From Barcelona',
  album: 'Violins',
  genre: 'Pop' }, { name: 'I Bet My Life',
  artist: 'Imagine Dragons',
  album: 'Smoke + Mirrors (Deluxe)',
  genre: 'Pop' }, { name: 'RIVA (Restart the Game) - Radio Edit',
  artist: 'Klingande',
  album: 'RIVA (Restart The Game) [Radio Edit]',
  genre: 'Pop' }, { name: 'Lean On (feat. MØ & DJ Snake)',
  artist: 'Major Lazer',
  album: 'Lean On (feat. MØ & DJ Snake)',
  genre: 'Pop' }, { name: 'Got It',
  artist: 'Marian Hill',
  album: 'Sway',
  genre: 'Pop' }, { name: 'Can You Blame Me',
  artist: 'Matt and Kim',
  album: 'Can You Blame Me',
  genre: 'Pop' }, { name: 'Talk About You',
  artist: 'MIKA',
  album: 'Talk About You',
  genre: 'Pop' }, { name: 'Love Like Mine',
  artist: 'Miami Horror',
  album: 'Love Like Mine',
  genre: 'Pop' }, { name: 'Our Own House',
  artist: 'MisterWives',
  album: 'Our Own House',
  genre: 'Pop' }, { name: 'The Rhythm',
  artist: 'MNEK',
  album: 'The Rhythm',
  genre: 'Pop' }, { name: 'Magic (feat. Nile Rodgers and Brandy)',
  artist: 'Mystery Skulls',
  album: 'Forever',
  genre: 'Pop' }, { name: 'Never Gets Old',
  artist: 'Penguin Prison',
  album: 'Never Gets Old',
  genre: 'Pop' }, { name: 'Karaoke',
  artist: 'Smallpools',
  album: 'Karaoke',
  genre: 'Pop' }, { name: 'Robot Love',
  artist: 'Urban Cone',
  album: 'Robot Love',
  genre: 'Pop' }, { name: 'King',
  artist: 'Years & Years',
  album: 'King',
  genre: 'Pop' }, { name: 'So Cruel',
  artist: 'Young Empires',
  album: 'So Cruel',
  genre: 'Pop' }, { name: 'The Night Is Still Young',
  artist: 'Nicki Minaj',
  album: 'The Pinkprint',
  genre: 'Pop' }, { name: 'I Will Never Let You Down',
  artist: 'Rita Ora',
  album: 'I Will Never Let You Down',
  genre: 'Pop' }, { name: 'Never Been In Love (feat. Icona Pop)',
  artist: 'Cobra Starship',
  album: 'Never Been In Love (feat. Icona Pop)',
  genre: 'Pop' }, { name: 'What I did for Love (feat. Emeli Sandé)',
  artist: 'David Guetta',
  album: 'Listen (Deluxe)',
  genre: 'Pop' }, { name: 'Want To Want Me',
  artist: 'Jason Derulo',
  album: 'Want To Want Me',
  genre: 'Pop' }, { name: 'Stronger',
  artist: 'Clean Bandit',
  album: 'New Eyes',
  genre: 'Pop' }, { name: 'Stole the Show',
  artist: 'Kygo',
  album: 'Stole the Show',
  genre: 'Pop' }, { name: 'In Your Arms',
  artist: 'Nico & Vinz',
  album: 'Black Star Elephant',
  genre: 'Pop' }, { name: 'Intoxicated',
  artist: 'Martin Solveig',
  album: 'Intoxicated (Radio Edit)',
  genre: 'Pop' }, { name: 'Runaway (U & I)',
  artist: 'Galantis',
  album: 'Runaway (U & I)',
  genre: 'Pop' }, { name: 'Outside',
  artist: 'Calvin Harris',
  album: 'Motion',
  genre: 'Pop' }, { name: 'Crazy For You',
  artist: 'Hedley',
  album: 'Wild Life',
  genre: 'Pop' }, { name: 'Kathleen',
  artist: 'Catfish and the Bottlemen',
  album: 'The Balcony',
  genre: 'Pop' }, { name: 'Work This Body',
  artist: 'Walk the Moon',
  album: 'TALKING IS HARD',
  genre: 'Pop' }, { name: 'Seeing Stars',
  artist: 'BØRNS',
  album: 'Candy',
  genre: 'Pop' }, { name: 'If It\'s Not You',
  artist: 'Keljet',
  album: 'Keljet x AYER - If It\'s Not You',
  genre: 'Pop' }, { name: 'The Nights',
  artist: 'Avicii',
  album: 'The Days / Nights',
  genre: 'Pop' }, { name: 'Pay No Mind',
  artist: 'Madeon',
  album: 'Adventure (Deluxe)',
  genre: 'Pop' }, { name: 'Best Fake Smile',
  artist: 'James Bay',
  album: 'Chaos And The Calm',
  genre: 'Pop' }, { name: 'Savages',
  artist: 'Marina and The Diamonds',
  album: 'FROOT',
  genre: 'Pop' }, { name: 'Human Contact',
  artist: 'Catey Shaw',
  album: 'The Brooklyn EP',
  genre: 'Pop' }, { name: 'Hum Hum',
  artist: 'Mating Ritual',
  album: 'Hum Hum',
  genre: 'Pop' }, { name: 'Cold Cold Man',
  artist: 'Saint Motel',
  album: 'My Type EP',
  genre: 'Pop' }];

var FileList = (function (_Phrase) {
  function FileList() {
    _classCallCheck(this, FileList);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(FileList, _Phrase);

  _createClass(FileList, [{
    key: 'getValue',
    value: function getValue(result) {
      if (result.dir) {
        var dir = result.dir === '~' ? '/Users/LaconaUser' : result.dir;
        return '' + dir + '/' + result.file;
      } else {
        return result;
      }
    }
  }, {
    key: 'describe',
    value: function describe() {
      if (_lodash2['default'].isPlainObject(this.props.directoryOrFile)) {
        return (0, _laconaPhrase.createElement)(
          'sequence',
          null,
          (0, _laconaPhrase.createElement)('literal', { text: '' + this.props.directoryOrFile.name + '/', id: 'dir', value: this.props.directoryOrFile.name }),
          (0, _laconaPhrase.createElement)(
            'argument',
            { text: 'content', id: 'file' },
            (0, _laconaPhrase.createElement)(
              'choice',
              null,
              (0, _laconaPhrase.createElement)('literal', { text: '', value: '' }),
              _lodash2['default'].map(this.props.directoryOrFile.children, function (child) {
                return (0, _laconaPhrase.createElement)(FileList, { directoryOrFile: child });
              })
            )
          )
        );
      } else {
        return (0, _laconaPhrase.createElement)('literal', { text: this.props.directoryOrFile, value: this.props.directoryOrFile });
      }
    }
  }]);

  return FileList;
})(_laconaPhrase.Phrase);

var File = (function (_Phrase2) {
  function File() {
    _classCallCheck(this, File);

    if (_Phrase2 != null) {
      _Phrase2.apply(this, arguments);
    }
  }

  _inherits(File, _Phrase2);

  _createClass(File, [{
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        'choice',
        null,
        (0, _laconaPhrase.createElement)(
          'argument',
          { text: 'path', showForEmpty: true },
          (0, _laconaPhrase.createElement)(
            'choice',
            null,
            (0, _laconaPhrase.createElement)(FileList, { directoryOrFile: { name: '~', children: userFiles } }),
            (0, _laconaPhrase.createElement)(FileList, { directoryOrFile: { name: '', children: rootFiles } })
          )
        ),
        (0, _laconaPhrase.createElement)(
          'argument',
          { text: 'file', showForEmpty: true },
          (0, _laconaPhrase.createElement)('list', { items: [{ text: 'logo.jpg', value: '/Users/LaconaUser/Documents/logo.jpg' }, { text: 'logo.png', value: '/Users/LaconaUser/Documents/logo.png' }, { text: 'document.docx', value: '/Users/LaconaUser/Documents/document.docx' }, { text: 'my-document.docx', value: '/Users/LaconaUser/Documents/my-document.docx' }, { text: 'main.js', value: '/Users/LaconaUser/Projects/test/main.js' }, { text: 'package.json', value: '/Users/LaconaUser/Projects/test/package.json' }, { text: 'lodash.js', value: '/Users/LaconaUser/Projects/test/lodash.js' }, { text: 'react-router.jsx', value: '/Users/LaconaUser/Projects/test/react-router.jsx' }, { text: 'briefing 1_2.keynote', value: '/Users/LaconaUser/Documents/Presentations/briefing 1_2.keynote' }, { text: 'briefing 2_24.keynote', value: '/Users/LaconaUser/Documents/Presentations/briefing 2_24.keynote' }, { text: 'briefing 5_5.keynote', value: '/Users/LaconaUser/Documents/Presentations/briefing 5_5.keynote' }, { text: 'status-updates.txt', value: '/Users/LaconaUser/status-updates.txt' }, { text: 'todo.txt', value: '/Users/LaconaUser/todo.txt' }, { text: 'main.cpp', value: '/Users/LaconaUser/Projects/cpp-test/main.cpp' }, { text: 'main.h', value: '/Users/LaconaUser/Projects/cpp-test/main.h' }, { text: 'quick-brown-fox.js', value: '/Users/LaconaUser/Projects/cpp-test/quick-brown-fox.js' }, { text: 'overjumper.cs', value: '/Users/LaconaUser/Projects/cpp-test/overjumper.cs' }, { text: 'overjumper.h', value: '/Users/LaconaUser/Projects/cpp-test/overjumper.h' }, { text: 'lazy_dog.js', value: '/Users/LaconaUser/Projects/cpp-test/lazy_dog.js' }], fuzzy: true })
        )
      );
    }
  }]);

  return File;
})(_laconaPhrase.Phrase);

var Application = (function (_Phrase3) {
  function Application() {
    _classCallCheck(this, Application);

    if (_Phrase3 != null) {
      _Phrase3.apply(this, arguments);
    }
  }

  _inherits(Application, _Phrase3);

  _createClass(Application, [{
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'application', showForEmpty: true },
        (0, _laconaPhrase.createElement)('list', { items: [{ text: 'Calendar', value: 'Calendar' }, { text: 'Contacts', value: 'Contacts' }, { text: 'FaceTime', value: 'FaceTime' }, { text: 'Game Center', value: 'Game Center' }, { text: 'GarageBand', value: 'GarageBand' }, { text: 'iBooks', value: 'iBooks' }, { text: 'iMovie', value: 'iMovie' }, { text: 'iPhoto', value: 'iPhoto' }, { text: 'iTunes', value: 'iTunes' }, { text: 'Keynote', value: 'Keynote' }, { text: 'App Store', value: 'App Store' }, { text: 'Mail', value: 'Mail' }, { text: 'Maps', value: 'Maps' }, { text: 'Messages', value: 'Messages' }, { text: 'Notes', value: 'Notes' }, { text: 'Numbers', value: 'Numbers' }, { text: 'Pages', value: 'Pages' }, { text: 'Photo Booth', value: 'Photo Booth' }, { text: 'Reminders', value: 'Reminders' }, { text: 'Safari', value: 'Safari' }, { text: 'Automator', value: 'Automator' }, { text: 'Calculator', value: 'Calculator' }, { text: 'Chess', value: 'Chess' }, { text: 'Dictionary', value: 'Dictionary' }, { text: 'DVD Player', value: 'DVD Player' }, { text: 'Font Book', value: 'Font Book' }, { text: 'Image Capture', value: 'Image Capture' }, { text: 'Preview', value: 'Preview' }, { text: 'QuickTime Player', value: 'QuickTime Player' }, { text: 'Stickies', value: 'Stickies' }, { text: 'System Information', value: 'System Information' }, { text: 'TextEdit', value: 'TextEdit' }, { text: 'VoiceOver Utility', value: 'VoiceOver Utility' }], fuzzy: true })
      );
    }
  }]);

  return Application;
})(_laconaPhrase.Phrase);

var Bookmark = (function (_Phrase4) {
  function Bookmark() {
    _classCallCheck(this, Bookmark);

    if (_Phrase4 != null) {
      _Phrase4.apply(this, arguments);
    }
  }

  _inherits(Bookmark, _Phrase4);

  _createClass(Bookmark, [{
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'bookmark', showForEmpty: true },
        (0, _laconaPhrase.createElement)('list', { items: [{ text: 'Facebook', value: 'http://facebook.com' }, { text: 'Twitter', value: 'http://twitter.com' }, { text: 'Google', value: 'http://google.com' }, { text: 'Lifehacker', value: 'http://lifehacker.com' }, { text: 'xkcd', value: 'http://xkcd.com' }, { text: 'Github', value: 'http://github.com' }, { text: 'Youtube', value: 'http://youtube.com' }, { text: 'Wikipedia', value: 'http://wikipedia.org' }, { text: 'Ebay', value: 'http://ebay.com' }], fuzzy: true })
      );
    }
  }]);

  return Bookmark;
})(_laconaPhrase.Phrase);

var open = {
  grammar: (0, _laconaPhrase.createElement)(
    'sequence',
    { id: 'open' },
    (0, _laconaPhrase.createElement)('literal', { text: 'open ', category: 'action' }),
    (0, _laconaPhrase.createElement)(
      'choice',
      { merge: true },
      (0, _laconaPhrase.createElement)(Application, { id: 'app' }),
      (0, _laconaPhrase.createElement)(_laconaPhraseUrl2['default'], { id: 'url' }),
      (0, _laconaPhrase.createElement)(Bookmark, { id: 'url' }),
      (0, _laconaPhrase.createElement)(File, { id: 'file' }),
      (0, _laconaPhrase.createElement)(
        'sequence',
        null,
        (0, _laconaPhrase.createElement)(
          'choice',
          { merge: true },
          (0, _laconaPhrase.createElement)(_laconaPhraseUrl2['default'], { id: 'url' }),
          (0, _laconaPhrase.createElement)(Bookmark, { id: 'url' }),
          (0, _laconaPhrase.createElement)(File, { id: 'file' })
        ),
        (0, _laconaPhrase.createElement)('list', { items: [' with ', ' using ', ' in '], limit: 1, category: 'conjunction' }),
        (0, _laconaPhrase.createElement)(Application, { id: 'app' })
      )
    )
  )
};

exports.open = open;
var date = {
  grammar: (0, _laconaPhrase.createElement)(
    'choice',
    { id: 'date' },
    (0, _laconaPhrase.createElement)(
      'sequence',
      { id: 'event' },
      (0, _laconaPhrase.createElement)('list', { items: ['schedule ', 'create an event ', 'create event ', 'add an event ', 'add event '], limit: 1, category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'calendar event', id: 'title' },
        (0, _laconaPhrase.createElement)('freetext', { limit: 1, splitOn: ' ' })
      ),
      (0, _laconaPhrase.createElement)(
        'sequence',
        { optional: true, id: 'location' },
        (0, _laconaPhrase.createElement)('list', { items: [' at ', ' on ', ' in '], limit: 1, category: 'conjunction' }),
        (0, _laconaPhrase.createElement)(
          'argument',
          { text: 'location', merge: true },
          (0, _laconaPhrase.createElement)('freetext', { limit: 1, splitOn: ' ' })
        )
      ),
      (0, _laconaPhrase.createElement)('list', { items: [' for ', ' '], category: 'conjunction', limit: 1 }),
      (0, _laconaPhrase.createElement)(
        'choice',
        { limit: 1, merge: true },
        (0, _laconaPhrase.createElement)(_laconaPhraseDatetime.DateTime, { includeAt: true }),
        (0, _laconaPhrase.createElement)(_laconaPhraseDatetime.TimePeriod, null)
      )
    ),
    (0, _laconaPhrase.createElement)(
      'sequence',
      { id: 'reminder' },
      (0, _laconaPhrase.createElement)('literal', { text: 'remind me to ', category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'reminder title', id: 'title' },
        (0, _laconaPhrase.createElement)('freetext', { limit: 1, splitOn: ' ' })
      ),
      (0, _laconaPhrase.createElement)(
        'sequence',
        { optional: true, merge: true },
        (0, _laconaPhrase.createElement)('literal', { text: ' ', category: 'conjunction' }),
        (0, _laconaPhrase.createElement)(
          'choice',
          { merge: true },
          (0, _laconaPhrase.createElement)(
            'argument',
            { text: 'time', id: 'time' },
            (0, _laconaPhrase.createElement)(
              'sequence',
              null,
              (0, _laconaPhrase.createElement)('literal', { text: 'at ' }),
              (0, _laconaPhrase.createElement)(_laconaPhraseDatetime.Time, { allowPast: false, merge: true })
            )
          ),
          (0, _laconaPhrase.createElement)(_laconaPhraseDatetime.Date, { allowPast: false }),
          (0, _laconaPhrase.createElement)(_laconaPhraseDatetime.DateTime, { includeAt: true, allowPast: false })
        )
      )
    )
  )
};

exports.date = date;
var engines = [{ text: 'Google', value: 'Google' }, { text: 'Wikipedia', value: 'Wikipedia' }, { text: 'Bing', value: 'Bing' }, { text: 'Yahoo', value: 'Yahoo' }, { text: 'Amazon', value: 'Amazon' }, { text: 'eBay', value: 'eBay' }];

var SearchEngines = (function (_Phrase5) {
  function SearchEngines() {
    _classCallCheck(this, SearchEngines);

    if (_Phrase5 != null) {
      _Phrase5.apply(this, arguments);
    }
  }

  _inherits(SearchEngines, _Phrase5);

  _createClass(SearchEngines, [{
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        _laconaPhraseRepeat2['default'],
        { unique: true },
        (0, _laconaPhrase.createElement)(
          'content',
          null,
          (0, _laconaPhrase.createElement)(
            'argument',
            { text: 'search engine' },
            (0, _laconaPhrase.createElement)('list', { items: engines })
          )
        ),
        (0, _laconaPhrase.createElement)(
          'separator',
          null,
          (0, _laconaPhrase.createElement)('list', { items: [' and ', ', ', ', and'], limit: 1, category: 'conjunction' })
        ),
        this.props.firstArgument ? undefined : (0, _laconaPhrase.createElement)(
          'firstContent',
          null,
          (0, _laconaPhrase.createElement)(
            'descriptor',
            { text: 'search engine', argument: true },
            (0, _laconaPhrase.createElement)('list', { items: engines })
          )
        )
      );
    }
  }]);

  return SearchEngines;
})(_laconaPhrase.Phrase);

SearchEngines.defaultProps = {
  firstArgument: true
};

var search = {
  grammar: (0, _laconaPhrase.createElement)(
    'choice',
    { limit: 1, id: 'search' },
    (0, _laconaPhrase.createElement)(
      'sequence',
      null,
      (0, _laconaPhrase.createElement)('literal', { text: 'search ', category: 'action' }),
      (0, _laconaPhrase.createElement)(SearchEngines, { id: 'engines' }),
      (0, _laconaPhrase.createElement)('literal', { text: ' ' }),
      (0, _laconaPhrase.createElement)('decorator', { text: 'for ', category: 'conjunction' }),
      (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'query', id: 'query' },
        (0, _laconaPhrase.createElement)('freetext', { consumeAll: true })
      )
    ),
    (0, _laconaPhrase.createElement)(
      'sequence',
      null,
      (0, _laconaPhrase.createElement)('literal', { text: 'search ', category: 'action' }),
      (0, _laconaPhrase.createElement)('literal', { text: 'for ', category: 'conjunction', optional: true, prefered: true, limited: true }),
      (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'query', id: 'query' },
        (0, _laconaPhrase.createElement)('freetext', { splitOn: ' ', limit: 1 })
      ),
      (0, _laconaPhrase.createElement)('list', { items: [' on ', ' with ', ' using '], limit: 1 }),
      (0, _laconaPhrase.createElement)(SearchEngines, { id: 'engines', firstArgument: false })
    )
  )
};

exports.search = search;
function itemify(x) {
  return { text: x, value: x };
}

var play = {
  grammar: (0, _laconaPhrase.createElement)(
    'choice',
    { id: 'play' },
    (0, _laconaPhrase.createElement)(
      'sequence',
      null,
      (0, _laconaPhrase.createElement)('literal', { text: 'play ', category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'choice',
        { merge: true },
        (0, _laconaPhrase.createElement)(
          _laconaPhraseRepeat2['default'],
          { id: 'something', unique: true },
          (0, _laconaPhrase.createElement)(
            'content',
            null,
            (0, _laconaPhrase.createElement)(
              'choice',
              null,
              (0, _laconaPhrase.createElement)(
                'argument',
                { text: 'song', showForEmpty: true, id: 'song' },
                (0, _laconaPhrase.createElement)('list', { items: _lodash2['default'].chain(tunes).map('name').map(itemify).value(), limit: 10 })
              ),
              (0, _laconaPhrase.createElement)(
                'argument',
                { text: 'album', showForEmpty: true, id: 'album' },
                (0, _laconaPhrase.createElement)('list', { items: _lodash2['default'].chain(tunes).map('album').unique().map(itemify).value(), limit: 10 })
              ),
              (0, _laconaPhrase.createElement)(
                'argument',
                { text: 'artist', showForEmpty: true, id: 'artist' },
                (0, _laconaPhrase.createElement)('list', { items: _lodash2['default'].chain(tunes).map('artist').unique().map(itemify).value(), limit: 10 })
              ),
              (0, _laconaPhrase.createElement)(
                'argument',
                { text: 'genre', showForEmpty: true, id: 'genre' },
                (0, _laconaPhrase.createElement)('list', { items: _lodash2['default'].chain(tunes).map('genre').unique().map(itemify).value(), limit: 10 })
              ),
              (0, _laconaPhrase.createElement)(
                'argument',
                { text: 'playlist', showForEmpty: true, id: 'playlist' },
                (0, _laconaPhrase.createElement)('list', { items: ['Jams', 'Chill', 'Workout', 'Driving'].map(itemify) })
              ),
              (0, _laconaPhrase.createElement)(
                'argument',
                { text: 'composer', showForEmpty: true, id: 'composer' },
                (0, _laconaPhrase.createElement)('literal', null)
              )
            )
          ),
          (0, _laconaPhrase.createElement)(
            'separator',
            null,
            (0, _laconaPhrase.createElement)('list', { items: [' and ', ', ', ', and '], limit: 1, category: 'conjunction' })
          )
        ),
        (0, _laconaPhrase.createElement)('list', { id: 'previous', value: true, items: ['previous track', 'previous song'], limit: 1, category: 'argument5' })
      )
    ),
    (0, _laconaPhrase.createElement)(
      'choice',
      { limit: 1, value: { next: true } },
      (0, _laconaPhrase.createElement)(
        'sequence',
        null,
        (0, _laconaPhrase.createElement)('literal', { text: 'play ', category: 'action' }),
        (0, _laconaPhrase.createElement)('list', { items: ['next track', 'next song'], limit: 1, category: 'argument5' })
      ),
      (0, _laconaPhrase.createElement)(
        'sequence',
        null,
        (0, _laconaPhrase.createElement)('literal', { text: 'skip ', category: 'action' }),
        (0, _laconaPhrase.createElement)('list', { items: ['track', 'song', 'this track', 'this song'], limit: 1, category: 'argument5' })
      )
    ),
    (0, _laconaPhrase.createElement)('list', { value: { pause: true }, items: ['pause music', 'pause this track', 'pause iTunes', 'pause track', 'pause song'], limit: 1, category: 'action' }),
    (0, _laconaPhrase.createElement)('list', { value: { stop: true }, items: ['stop music', 'stop iTunes', 'stop track', 'stop song'], limit: 1, category: 'action' })
  )
};

exports.play = play;

var Contact = (function (_Phrase6) {
  function Contact() {
    _classCallCheck(this, Contact);

    if (_Phrase6 != null) {
      _Phrase6.apply(this, arguments);
    }
  }

  _inherits(Contact, _Phrase6);

  _createClass(Contact, [{
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'contact', showForEmpty: true },
        (0, _laconaPhrase.createElement)('list', { items: [{ text: 'Tony Stark', value: 'Tony Stark' }, { text: 'Thor Odinson', value: 'Thor Odinson' }, { text: 'Henry Pym', value: 'Henry Pym' }, { text: 'Bruce Banner', value: 'Bruce Banner' }, { text: 'Steve Rogers', value: 'Steve Rogers' }, { text: 'Clinton Barton', value: 'Clinton Barton' }, { text: 'Wanda Maximoff', value: 'Wanda Maximoff' }, { text: 'Victor Shade', value: 'Victor Shade' }, { text: 'Natalia Romanova', value: 'Natalia Romanova' }, { text: 'Jennifer Walters', value: 'Jennifer Walters' }, { text: 'Hank McCoy', value: 'Hank McCoy' }, { text: 'Reed Richards', value: 'Reed Richards' }, { text: 'Susan Richards', value: 'Susan Richards' }, { text: 'Jim Hammond', value: 'Jim Hammond' }, { text: 'Benjamin Grimm', value: 'Benjamin Grimm' }, { text: 'Peter Parker', value: 'Peter Parker' }, { text: 'Luke Cage', value: 'Luke Cage' }, { text: 'Logan Howlett', value: 'Logan Howlett' }, { text: 'James Barnes', value: 'James Barnes' }, { text: 'Steven Strange', value: 'Steven Strange' }, { text: 'Matt Murdock', value: 'Matt Murdock' }, { text: 'Scott Summers', value: 'Scott Summers' }, { text: 'Charles Xavier', value: 'Charles Xavier' }, { text: 'Bobby Drake', value: 'Bobby Drake' }, { text: 'Jean Grey-Summers', value: 'Jean Grey-Summers' }, { text: 'Kurt Wagner', value: 'Kurt Wagner' }, { text: 'Ororo Monroe', value: 'Ororo Monroe' }, { text: 'Anna Marie', value: 'Anna Marie' }, { text: 'Erik Lehnsherr', value: 'Erik Lehnsherr' }] })
      );
    }
  }]);

  return Contact;
})(_laconaPhrase.Phrase);

var Relationship = (function (_Phrase7) {
  function Relationship() {
    _classCallCheck(this, Relationship);

    if (_Phrase7 != null) {
      _Phrase7.apply(this, arguments);
    }
  }

  _inherits(Relationship, _Phrase7);

  _createClass(Relationship, [{
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'relationship', showForEmpty: true },
        (0, _laconaPhrase.createElement)(
          'sequence',
          null,
          (0, _laconaPhrase.createElement)('literal', { text: 'my ', optional: true, limited: true }),
          (0, _laconaPhrase.createElement)('list', { merge: true, items: [{ text: 'Mom', value: 'your mom' }, { text: 'Dad', value: 'your dad' }, { text: 'Landlord', value: 'your landlord' }, { text: 'Boss', value: 'your boss' }] })
        )
      );
    }
  }]);

  return Relationship;
})(_laconaPhrase.Phrase);

var contact = {
  grammar: (0, _laconaPhrase.createElement)(
    'choice',
    { id: 'contact' },
    (0, _laconaPhrase.createElement)(
      'sequence',
      { id: 'email' },
      (0, _laconaPhrase.createElement)('literal', { text: 'email ', category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'choice',
        { merge: true },
        (0, _laconaPhrase.createElement)(
          'choice',
          null,
          (0, _laconaPhrase.createElement)(_laconaPhraseEmail2['default'], { id: 'address' }),
          (0, _laconaPhrase.createElement)(Relationship, { id: 'relationship' }),
          (0, _laconaPhrase.createElement)(Contact, { id: 'contact' })
        ),
        (0, _laconaPhrase.createElement)(
          'sequence',
          null,
          (0, _laconaPhrase.createElement)(
            'argument',
            { text: 'message', id: 'message' },
            (0, _laconaPhrase.createElement)('freetext', { splitOn: ' ' })
          ),
          (0, _laconaPhrase.createElement)('literal', { text: ' to ', category: 'conjunction' }),
          (0, _laconaPhrase.createElement)(
            'choice',
            { merge: true },
            (0, _laconaPhrase.createElement)(_laconaPhraseEmail2['default'], { id: 'address' }),
            (0, _laconaPhrase.createElement)(Relationship, { id: 'relationship' }),
            (0, _laconaPhrase.createElement)(Contact, { id: 'contact' })
          )
        )
      )
    ),
    (0, _laconaPhrase.createElement)(
      'sequence',
      { id: 'call' },
      (0, _laconaPhrase.createElement)('literal', { text: 'call ', category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'choice',
        { merge: true },
        (0, _laconaPhrase.createElement)(_laconaPhrasePhonenumber2['default'], { id: 'number' }),
        (0, _laconaPhrase.createElement)(Relationship, { id: 'relationship' }),
        (0, _laconaPhrase.createElement)(Contact, { id: 'contact' })
      )
    ),
    (0, _laconaPhrase.createElement)(
      'sequence',
      { id: 'facetime' },
      (0, _laconaPhrase.createElement)('literal', { text: 'facetime ', category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'choice',
        { merge: true },
        (0, _laconaPhrase.createElement)(Relationship, { id: 'relationship' }),
        (0, _laconaPhrase.createElement)(Contact, { id: 'contact' }),
        (0, _laconaPhrase.createElement)(_laconaPhrasePhonenumber2['default'], { id: 'number' }),
        (0, _laconaPhrase.createElement)(_laconaPhraseEmail2['default'], { id: 'address' })
      )
    ),
    (0, _laconaPhrase.createElement)(
      'sequence',
      { id: 'text' },
      (0, _laconaPhrase.createElement)('list', { items: ['text ', 'iMessage '], limit: 1, category: 'action' }),
      (0, _laconaPhrase.createElement)(
        'choice',
        { merge: true },
        (0, _laconaPhrase.createElement)(
          'choice',
          null,
          (0, _laconaPhrase.createElement)(Relationship, { id: 'relationship' }),
          (0, _laconaPhrase.createElement)(Contact, { id: 'contact' }),
          (0, _laconaPhrase.createElement)(_laconaPhrasePhonenumber2['default'], { id: 'number' }),
          (0, _laconaPhrase.createElement)(_laconaPhraseEmail2['default'], { id: 'address' })
        ),
        (0, _laconaPhrase.createElement)(
          'sequence',
          null,
          (0, _laconaPhrase.createElement)(
            'argument',
            { text: 'message', id: 'message' },
            (0, _laconaPhrase.createElement)('freetext', { splitOn: ' ' })
          ),
          (0, _laconaPhrase.createElement)('literal', { text: ' to ', category: 'conjunction' }),
          (0, _laconaPhrase.createElement)(
            'choice',
            { merge: true },
            (0, _laconaPhrase.createElement)(Relationship, { id: 'relationship' }),
            (0, _laconaPhrase.createElement)(Contact, { id: 'contact' }),
            (0, _laconaPhrase.createElement)(_laconaPhrasePhonenumber2['default'], { id: 'number' }),
            (0, _laconaPhrase.createElement)(_laconaPhraseEmail2['default'], { id: 'address' })
          )
        )
      )
    )
  )
};

exports.contact = contact;
var all = {
  grammar: (0, _laconaPhrase.createElement)(
    'choice',
    null,
    open.grammar,
    date.grammar,
    search.grammar,
    play.grammar,
    contact.grammar
  )
}

// export default class Sentence extends Phrase {
//   describe() {
//     const themeChoices = _.map(themes, theme => <literal value={`theme-${_.kebabCase(theme)}-light`} text={`${theme} Light`} fuzzy={true} />)
//       .concat(_.map(themes, theme => <literal value={`theme-${_.kebabCase(theme)}-dark`} text={`${theme} Dark`} fuzzy={true} />))
//
//     return (
//       <choice>
//         <sequence>
//           <literal text='learn ' id='action' value='learn' category='action' />
//           <literal text='more about Lacona' category='argument' join={true} />
//         </sequence>
//         <sequence>
//           <choice limit={1} id='action' value='subscribe' category='action'>
//             <literal text='add ' />
//             <literal text='subscribe ' />
//           </choice>
//           <placeholder text='your email address' id='email' category='argument'>
//             <Email />
//           </placeholder>
//           <literal text=' to the ' category='conjunction' />
//           <choice limit={1} category='actor' join={true}>
//             <literal text='newsletter' />
//             <literal text='mailing list' />
//           </choice>
//         </sequence>
//         <sequence>
//           <literal text='tweet ' id='action' value='tweet' category='action' />
//           <placeholder text='something about lacona' category='argument' id='message'>
//             <Validator />
//           </placeholder>
//         </sequence>
//         <sequence>
//           <literal text='share ' id='action' value='share' category='action' />
//           <choice limit={1} join={true} category='conjunction'>
//             <literal text='with ' />
//             <literal text='using ' />
//             <literal text='on ' />
//           </choice>
//           <placeholder text='a social network' category='actor' id='platform' >
//             <choice>
//               <literal text='Twitter' value='twitter' />
//               <literal text='Facebook' value='facebook' />
//               <literal text='Google+' value='google-plus' />
//               <literal text='Email' value='email' />
//             </choice>
//           </placeholder>
//         </sequence>
//         <sequence>
//           <literal text='follow ' id='action' value='follow' category='action' />
//           <literal text='@lacona ' category='argument' join={true} />
//           <literal text='on ' category='conjunction' join={true} />
//           <literal text='Twitter' category='actor' join={true} />
//         </sequence>
//         <sequence>
//           <literal text='contact us ' id='action' value='contact' category='action' />
//           <choice limit={1} join={true} category='conjunction'>
//             <literal text='using ' />
//             <literal text='over ' />
//             <literal text='with ' />
//             <literal text='on ' />
//           </choice>
//           <placeholder text='a social network' category='actor' id='platform'>
//             <choice>
//               <literal text='Twitter' value='twitter' />
//               <literal text='Email' value='email' />
//             </choice>
//           </placeholder>
//         </sequence>
//       </choice>
//     )
//   }
// }
;exports.all = all;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":45,"lacona-phrase-datetime":12,"lacona-phrase-email":29,"lacona-phrase-phonenumber":33,"lacona-phrase-repeat":37,"lacona-phrase-url":41}],6:[function(require,module,exports){
module.exports = function (arr, iterator, callback) {
  callback = callback || function () {};
  if (!Array.isArray(arr) || !arr.length) {
      return callback();
  }
  var completed = 0;
  var iterate = function () {
    iterator(arr[completed], function (err) {
      if (err) {
        callback(err);
        callback = function () {};
      }
      else {
        ++completed;
        if (completed >= arr.length) { callback(); }
        else { iterate(); }
      }
    });
  };
  iterate();
};

},{}],7:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],8:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],9:[function(require,module,exports){
'use strict';

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: key == null || typeof Symbol == 'undefined' || key.constructor !== Symbol, configurable: true, writable: true }); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var _Integer = require('lacona-phrase-number');

var DateDuration = (function (_Phrase) {
  function DateDuration() {
    _classCallCheck(this, DateDuration);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(DateDuration, _Phrase);

  _createClass(DateDuration, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }if (result.type === 'weeks') {
        return { days: result.num * 7 };
      } else {
        return _defineProperty({}, result.type, result.num);
      }
    }
  }, {
    key: 'describe',
    value: function describe() {
      var singularItems = this.props.includeThe ? ['1', 'the'] : ['1'];

      return _createElement$Phrase.createElement(
        'choice',
        null,
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement(
            'placeholder',
            { text: 'number', showForEmpty: true, id: 'num' },
            _createElement$Phrase.createElement('list', { items: singularItems, value: 1, limit: 1 })
          ),
          _createElement$Phrase.createElement('literal', { text: ' ' }),
          _createElement$Phrase.createElement(
            'placeholder',
            { text: 'time period', id: 'type' },
            _createElement$Phrase.createElement(
              'choice',
              null,
              _createElement$Phrase.createElement('literal', { text: 'day', value: 'days' }),
              _createElement$Phrase.createElement('literal', { text: 'week', value: 'weeks' }),
              _createElement$Phrase.createElement('literal', { text: 'month', value: 'months' }),
              _createElement$Phrase.createElement('literal', { text: 'year', value: 'years' })
            )
          )
        ),
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement(_Integer.Integer, { id: 'num', min: 2 }),
          _createElement$Phrase.createElement('literal', { text: ' ' }),
          _createElement$Phrase.createElement(
            'placeholder',
            { text: 'time period', id: 'type' },
            _createElement$Phrase.createElement(
              'choice',
              null,
              _createElement$Phrase.createElement('literal', { text: 'days', value: 'days' }),
              _createElement$Phrase.createElement('literal', { text: 'weeks', value: 'weeks' }),
              _createElement$Phrase.createElement('literal', { text: 'months', value: 'months' }),
              _createElement$Phrase.createElement('literal', { text: 'years', value: 'years' })
            )
          )
        )
      );
    }
  }]);

  return DateDuration;
})(_createElement$Phrase.Phrase);

exports['default'] = DateDuration;

DateDuration.defaultProps = { includeThe: false };
module.exports = exports['default'];
},{"lacona-phrase":26,"lacona-phrase-number":19}],10:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: key == null || typeof Symbol == 'undefined' || key.constructor !== Symbol, configurable: true, writable: true }); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var _DateDuration = require('./date-duration');

var _DateDuration2 = _interopRequireWildcard(_DateDuration);

var _DigitString$Integer$Ordinal = require('lacona-phrase-number');

var _Month = require('./month');

var _Month2 = _interopRequireWildcard(_Month);

var _Weekday = require('./weekday');

var _Weekday2 = _interopRequireWildcard(_Weekday);

var DatePhrase = (function (_Phrase) {
  function DatePhrase() {
    _classCallCheck(this, DatePhrase);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(DatePhrase, _Phrase);

  _createClass(DatePhrase, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }if (result.relative) {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        if (!_import2['default'].isUndefined(result.relative.days)) date.setDate(date.getDate() + result.relative.days);
        if (!_import2['default'].isUndefined(result.relative.weeks)) date.setDate(date.getDate() + result.relative.weeks * 7);
        if (!_import2['default'].isUndefined(result.relative.months)) date.setMonth(date.getMonth() + result.relative.months);
        if (!_import2['default'].isUndefined(result.relative.years)) date.setFullYear(date.getFullYear() + result.relative.years);

        return date;
      } else if (result.absolute) {
        return result.absolute;
      }
    }
  }]);

  return DatePhrase;
})(_createElement$Phrase.Phrase);

exports['default'] = DatePhrase;

DatePhrase.translations = [{
  langs: ['en_US', 'default'],
  describe: function describe() {
    return _createElement$Phrase.createElement(
      'sequence',
      null,
      _createElement$Phrase.createElement('literal', { text: 'on ', optional: true, prefered: true, limited: true }),
      _createElement$Phrase.createElement(
        'argument',
        { text: 'date', showForEmpty: true, merge: true },
        _createElement$Phrase.createElement(
          'choice',
          null,
          _createElement$Phrase.createElement(
            'choice',
            { id: 'relative' },
            _createElement$Phrase.createElement(NamedDay, { allowPast: this.props.allowPast }),
            _createElement$Phrase.createElement(RelativeNumbered, { allowPast: this.props.allowPast }),
            _createElement$Phrase.createElement(RelativeAdjacent, { allowPast: this.props.allowPast })
          ),
          _createElement$Phrase.createElement(
            'choice',
            { id: 'absolute' },
            this.props.allowRecurse ? _createElement$Phrase.createElement(RecursiveDay, { allowPast: this.props.allowPast }) : null,
            _createElement$Phrase.createElement(RelativeWeekday, { allowPast: this.props.allowPast }),
            _createElement$Phrase.createElement(AbsoluteDay, { allowPast: this.props.allowPast }),
            _createElement$Phrase.createElement(NamedMonthAbsolute, { allowPast: this.props.allowPast })
          )
        )
      )
    );
  }
}];
DatePhrase.defaultProps = {
  allowRecurse: true,
  allowPast: true
};

var RecursiveDay = (function (_Phrase2) {
  function RecursiveDay() {
    _classCallCheck(this, RecursiveDay);

    if (_Phrase2 != null) {
      _Phrase2.apply(this, arguments);
    }
  }

  _inherits(RecursiveDay, _Phrase2);

  _createClass(RecursiveDay, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result || !result.date) {
        return;
      }var date = new Date(result.date.getTime());

      if (result.years) {
        date.setFullYear(result.years * result.direction + result.date.getFullYear());
      } else if (result.months) {
        date.setMonth(result.months * result.direction + result.date.getMonth());
      } else if (result.days) {
        date.setDate(result.days * result.direction + result.date.getDate());
      }

      return date;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DateDuration2['default'], { includeThe: true, merge: true }),
        _createElement$Phrase.createElement('list', { id: 'direction', items: [{ text: ' before ', value: -1 }, { text: ' after ', value: 1 }, { text: ' from ', value: 1 }], limit: 2 }),
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'date', id: 'date' },
          _createElement$Phrase.createElement(DatePhrase, { allowRecurse: false })
        )
      );
    }
  }]);

  return RecursiveDay;
})(_createElement$Phrase.Phrase);

var NamedDay = (function (_Phrase3) {
  function NamedDay() {
    _classCallCheck(this, NamedDay);

    if (_Phrase3 != null) {
      _Phrase3.apply(this, arguments);
    }
  }

  _inherits(NamedDay, _Phrase3);

  _createClass(NamedDay, [{
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'choice',
        null,
        _createElement$Phrase.createElement('literal', { text: 'today', value: { days: 0 } }),
        _createElement$Phrase.createElement('literal', { text: 'tomorrow', value: { days: 1 } }),
        this.props.allowPast ? _createElement$Phrase.createElement('literal', { text: 'yesterday', value: { days: -1 } }) : null
      );
    }
  }]);

  return NamedDay;
})(_createElement$Phrase.Phrase);

var RelativeNumbered = (function (_Phrase4) {
  function RelativeNumbered() {
    _classCallCheck(this, RelativeNumbered);

    if (_Phrase4 != null) {
      _Phrase4.apply(this, arguments);
    }
  }

  _inherits(RelativeNumbered, _Phrase4);

  _createClass(RelativeNumbered, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }if (result.direction < 0) {
        return _import2['default'].mapValues(result.duration, function (num) {
          return -num;
        });
      } else {
        return result.duration;
      }
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'choice',
        null,
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement('literal', { text: 'in ', id: 'direction', value: 1 }),
          _createElement$Phrase.createElement(_DateDuration2['default'], { id: 'duration' })
        ),
        this.props.allowPast ? _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement(_DateDuration2['default'], { id: 'duration' }),
          _createElement$Phrase.createElement('literal', { text: ' ago', id: 'direction', value: -1 })
        ) : null
      );
    }
  }]);

  return RelativeNumbered;
})(_createElement$Phrase.Phrase);

var RelativeAdjacent = (function (_Phrase5) {
  function RelativeAdjacent() {
    _classCallCheck(this, RelativeAdjacent);

    if (_Phrase5 != null) {
      _Phrase5.apply(this, arguments);
    }
  }

  _inherits(RelativeAdjacent, _Phrase5);

  _createClass(RelativeAdjacent, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }return _defineProperty({}, result.type, result.num);
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(
          'choice',
          { id: 'num' },
          _createElement$Phrase.createElement('literal', { text: 'next ', value: 1 }),
          _createElement$Phrase.createElement('literal', { text: 'last ', value: -1 })
        ),
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'week, month, year', id: 'type' },
          _createElement$Phrase.createElement(
            'choice',
            null,
            _createElement$Phrase.createElement('literal', { text: 'week', value: 'weeks' }),
            _createElement$Phrase.createElement('literal', { text: 'month', value: 'months' }),
            _createElement$Phrase.createElement('literal', { text: 'year', value: 'years' })
          )
        )
      );
    }
  }]);

  return RelativeAdjacent;
})(_createElement$Phrase.Phrase);

var RelativeWeekday = (function (_Phrase6) {
  function RelativeWeekday() {
    _classCallCheck(this, RelativeWeekday);

    if (_Phrase6 != null) {
      _Phrase6.apply(this, arguments);
    }
  }

  _inherits(RelativeWeekday, _Phrase6);

  _createClass(RelativeWeekday, [{
    key: 'getValue',
    value: function getValue(result) {
      var returnDate = new Date();
      var currentDay = returnDate.getDay();
      var distance = undefined;
      if (result.distance != null) {
        distance = result.weekday - currentDay + 7 * result.distance;
      } else {
        distance = (result.weekday + (7 - currentDay)) % 7;
      }
      returnDate.setDate(returnDate.getDate() + distance);
      return returnDate;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(
          'choice',
          { id: 'distance' },
          _createElement$Phrase.createElement('literal', { text: '', value: null }),
          _createElement$Phrase.createElement('literal', { text: 'last ', value: -1 }),
          _createElement$Phrase.createElement('literal', { text: 'this ', value: 0 }),
          _createElement$Phrase.createElement('list', { items: ['next ', 'this upcoming '], limit: 1, value: 1 })
        ),
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'weekday', id: 'weekday' },
          _createElement$Phrase.createElement(_Weekday2['default'], null)
        )
      );
    }
  }]);

  return RelativeWeekday;
})(_createElement$Phrase.Phrase);

function leapYear(year) {
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

var AbsoluteDay = (function (_Phrase7) {
  function AbsoluteDay() {
    _classCallCheck(this, AbsoluteDay);

    if (_Phrase7 != null) {
      _Phrase7.apply(this, arguments);
    }
  }

  _inherits(AbsoluteDay, _Phrase7);

  _createClass(AbsoluteDay, [{
    key: 'getValue',
    value: function getValue(result) {
      var year = undefined;

      if (result.year) {
        if (result.year.length === 2) {
          var partialYear = parseInt(result.year, 10);
          if (partialYear > 29) {
            year = 1900 + partialYear;
          } else {
            year = 2000 + partialYear;
          }
        } else {
          year = parseInt(result.year, 10);
        }
      } else {
        year = new Date().getFullYear();
      }

      var month = parseInt(result.month, 10) - 1;
      var day = parseInt(result.day, 10);
      return new Date(year, month, day, 0, 0, 0, 0);
    }
  }, {
    key: 'filter',

    // this is interesting, because the user must be able to specify Feburary 29 if they have not specified a year, and then it must be validated by the year. So use a leap year (2012)
    value: function filter(result) {
      if (_import2['default'].isUndefined(result) || _import2['default'].isUndefined(result.month) || _import2['default'].isUndefined(result.day)) {
        return true;
      }var year = _import2['default'].isUndefined(result.year) || _import2['default'].isEqual(result.year, {}) ? 2012 : parseInt(result.year, 10);
      var month = parseInt(result.month, 10) - 1;
      var day = parseInt(result.day, 10);
      var date = new Date(year, month, day, 0, 0, 0, 0);
      return date.getMonth() === month;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.DigitString, { maxLength: 2, descriptor: 'mm', id: 'month' }),
        _createElement$Phrase.createElement('list', { items: ['/', '-', '.'], limit: 1 }),
        _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.DigitString, { maxLength: 2, max: 31, descriptor: 'dd', id: 'day' }),
        _createElement$Phrase.createElement(
          'sequence',
          { optional: true, merge: true },
          _createElement$Phrase.createElement('list', { items: ['/', '-', '.'], limit: 1 }),
          _createElement$Phrase.createElement(
            'choice',
            { id: 'year' },
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.DigitString, { minLength: 2, maxLength: 2, descriptor: 'yy' }),
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.DigitString, { minLength: 4, maxLength: 4, descriptor: 'yyyy' })
          )
        )
      );
    }
  }]);

  return AbsoluteDay;
})(_createElement$Phrase.Phrase);

var NamedMonthAbsolute = (function (_Phrase8) {
  function NamedMonthAbsolute() {
    _classCallCheck(this, NamedMonthAbsolute);

    if (_Phrase8 != null) {
      _Phrase8.apply(this, arguments);
    }
  }

  _inherits(NamedMonthAbsolute, _Phrase8);

  _createClass(NamedMonthAbsolute, [{
    key: 'getValue',
    value: function getValue(result) {
      var year = _import2['default'].isUndefined(result.year) ? new Date().getFullYear() : parseInt(result.year, 10);
      return new Date(year, result.month, result.day, 0, 0, 0, 0);
    }
  }, {
    key: 'filter',

    // this is interesting, because the user must be able to specify Feburary 29 if they have not specified a year, and then it must be validated by the year. So use a leap year (2012)
    value: function filter(result) {
      if (_import2['default'].isUndefined(result) || _import2['default'].isUndefined(result.month) || _import2['default'].isUndefined(result.day)) {
        return true;
      }var year = _import2['default'].isUndefined(result.year) || _import2['default'].isEqual(result.year, {}) ? 2012 : parseInt(result.year, 10);
      var date = new Date(year, result.month, result.day, 0, 0, 0, 0);
      return date.getMonth() === result.month;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'choice',
        null,
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement(_Month2['default'], { id: 'month' }),
          _createElement$Phrase.createElement('list', { items: [' ', ' the '], limit: 1 }),
          _createElement$Phrase.createElement(
            'choice',
            { id: 'day', limit: 1 },
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.Integer, { max: 31, min: 1 }),
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.Ordinal, { max: 31 })
          ),
          _createElement$Phrase.createElement(
            'sequence',
            { id: 'year', optional: true, prefered: false },
            _createElement$Phrase.createElement('list', { items: [', ', ' '], limit: 1 }),
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.DigitString, { descriptor: 'year', max: 9999, allowLeadingZeros: false, merge: true })
          )
        ),
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement('literal', { text: 'the ' }),
          _createElement$Phrase.createElement(
            'choice',
            { id: 'day', limit: 1 },
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.Integer, { max: 31, min: 1 }),
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.Ordinal, { max: 31 })
          ),
          _createElement$Phrase.createElement('list', { items: [' of ', ' '], limit: 1 }),
          _createElement$Phrase.createElement(_Month2['default'], { id: 'month' }),
          _createElement$Phrase.createElement(
            'sequence',
            { id: 'year', optional: true, prefered: false },
            _createElement$Phrase.createElement('list', { items: [', ', ' '], limit: 1 }),
            _createElement$Phrase.createElement(_DigitString$Integer$Ordinal.DigitString, { descriptor: 'year', max: 9999, allowLeadingZeros: false, merge: true })
          )
        )
      );
    }
  }]);

  return NamedMonthAbsolute;
})(_createElement$Phrase.Phrase);

module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-duration":9,"./month":13,"./weekday":17,"lacona-phrase":26,"lacona-phrase-number":19}],11:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var _Time = require('./time');

var _Time2 = _interopRequireWildcard(_Time);

var _DatePhrase = require('./date');

var _DatePhrase2 = _interopRequireWildcard(_DatePhrase);

var DateTime = (function (_Phrase) {
  function DateTime() {
    _classCallCheck(this, DateTime);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(DateTime, _Phrase);

  _createClass(DateTime, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result || !result.date || !result.time) {
        return;
      }return new Date(result.date.getFullYear(), result.date.getMonth(), result.date.getDate(), result.time.getHours(), result.time.getMinutes(), result.time.getSeconds(), 0);
    }
  }]);

  return DateTime;
})(_createElement$Phrase.Phrase);

exports['default'] = DateTime;

DateTime.translations = [{
  langs: ['en_US', 'default'],
  describe: function describe() {
    return _createElement$Phrase.createElement(
      'choice',
      null,
      _createElement$Phrase.createElement(
        'sequence',
        null,
        this.props.includeAt ? _createElement$Phrase.createElement('literal', { text: 'at ' }) : null,
        _createElement$Phrase.createElement(_Time2['default'], { id: 'time' }),
        _createElement$Phrase.createElement('literal', { text: ' ' }),
        _createElement$Phrase.createElement(_DatePhrase2['default'], { id: 'date', allowPast: this.props.allowPast })
      ),
      _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DatePhrase2['default'], { id: 'date', allowPast: this.props.allowPast }),
        _createElement$Phrase.createElement('literal', { text: ' at ' }),
        _createElement$Phrase.createElement(_Time2['default'], { id: 'time' })
      )
    );
  }
}];

DateTime.defaultProps = {
  includeAt: false,
  allowPast: true
};
module.exports = exports['default'];
},{"./date":10,"./time":15,"lacona-phrase":26}],12:[function(require,module,exports){
'use strict';

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _default = require('./date');

exports.Date = _interopRequire(_default);

var _default2 = require('./time');

exports.Time = _interopRequire(_default2);

var _default3 = require('./datetime');

exports.DateTime = _interopRequire(_default3);

var _default4 = require('./timeperiod');

exports.TimePeriod = _interopRequire(_default4);
},{"./date":10,"./datetime":11,"./time":15,"./timeperiod":16}],13:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var Weekday = (function (_Phrase) {
  function Weekday() {
    _classCallCheck(this, Weekday);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Weekday, _Phrase);

  _createClass(Weekday, [{
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'placeholder',
        { text: 'month', showForEmpty: true },
        _createElement$Phrase.createElement('list', { items: [{ text: 'January', value: 0 }, { text: 'Feburary', value: 1 }, { text: 'March', value: 2 }, { text: 'April', value: 3 }, { text: 'May', value: 4 }, { text: 'June', value: 5 }, { text: 'July', value: 6 }, { text: 'August', value: 7 }, { text: 'September', value: 8 }, { text: 'October', value: 9 }, { text: 'November', value: 10 }, { text: 'December', value: 11 }] })
      );
    }
  }]);

  return Weekday;
})(_createElement$Phrase.Phrase);

exports['default'] = Weekday;
module.exports = exports['default'];
},{"lacona-phrase":26}],14:[function(require,module,exports){
'use strict';

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: key == null || typeof Symbol == 'undefined' || key.constructor !== Symbol, configurable: true, writable: true }); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var _Integer = require('lacona-phrase-number');

var TimeDuration = (function (_Phrase) {
  function TimeDuration() {
    _classCallCheck(this, TimeDuration);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(TimeDuration, _Phrase);

  _createClass(TimeDuration, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }return _defineProperty({}, result.type, result.num);
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'choice',
        null,
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement(
            'placeholder',
            { text: 'number', showForEmpty: true },
            _createElement$Phrase.createElement('literal', { text: '1 ', id: 'num', value: 1 })
          ),
          _createElement$Phrase.createElement(
            'placeholder',
            { text: 'time period', id: 'type' },
            _createElement$Phrase.createElement(
              'choice',
              null,
              _createElement$Phrase.createElement('literal', { text: 'hour', value: 'hours' }),
              _createElement$Phrase.createElement('literal', { text: 'minute', value: 'minutes' }),
              _createElement$Phrase.createElement('literal', { text: 'second', value: 'seconds' })
            )
          )
        ),
        _createElement$Phrase.createElement(
          'sequence',
          null,
          _createElement$Phrase.createElement(_Integer.Integer, { id: 'num', min: 2 }),
          _createElement$Phrase.createElement('literal', { text: ' ' }),
          _createElement$Phrase.createElement(
            'placeholder',
            { text: 'time period', id: 'type' },
            _createElement$Phrase.createElement(
              'choice',
              null,
              _createElement$Phrase.createElement('literal', { text: 'hours', value: 'hours' }),
              _createElement$Phrase.createElement('literal', { text: 'minutes', value: 'minutes' }),
              _createElement$Phrase.createElement('literal', { text: 'seconds', value: 'seconds' })
            )
          )
        )
      );
    }
  }]);

  return TimeDuration;
})(_createElement$Phrase.Phrase);

exports['default'] = TimeDuration;
module.exports = exports['default'];
},{"lacona-phrase":26,"lacona-phrase-number":19}],15:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var _DigitString$Integer = require('lacona-phrase-number');

var Time = (function (_Phrase) {
  function Time() {
    _classCallCheck(this, Time);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Time, _Phrase);

  _createClass(Time, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }if (_import2['default'].isDate(result)) {
        return result;
      } else if (!_import2['default'].isUndefined(result.hour)) {
        var date = new Date();
        date.setHours(result.hour, result.minute || 0, 0, 0);
        return date;
      } else {
        console.log('SOMETHING WENT WRONG WITH Time');
        return new Date();
      }
    }
  }]);

  return Time;
})(_createElement$Phrase.Phrase);

exports['default'] = Time;

Time.translations = [{
  langs: ['en_US', 'default'],
  describe: function describe() {
    return _createElement$Phrase.createElement(
      'argument',
      { text: 'time', showForEmpty: true },
      _createElement$Phrase.createElement(
        'choice',
        null,
        _createElement$Phrase.createElement('literal', { text: 'midnight', id: 'hour', value: 0 }),
        _createElement$Phrase.createElement('literal', { text: 'noon', id: 'hour', value: 12 }),
        _createElement$Phrase.createElement(AbsTime, { minutes: true }),
        _createElement$Phrase.createElement(RelativeTime, null)
      )
    );
  }
}];

var RelativeTime = (function (_Phrase2) {
  function RelativeTime() {
    _classCallCheck(this, RelativeTime);

    if (_Phrase2 != null) {
      _Phrase2.apply(this, arguments);
    }
  }

  _inherits(RelativeTime, _Phrase2);

  _createClass(RelativeTime, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }var date = new Date();

      if (result.direction > 0) {
        date.setHours(result.hour, result.minutes, 0, 0);
      } else {
        var hour = result.hour === 0 ? 23 : result.hour - 1;
        var _minutes = 60 - result.minutes;
        date.setHours(hour, _minutes, 0, 0);
      }
      return date;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'number', showForEmpty: true, id: 'minutes' },
          _createElement$Phrase.createElement(
            'choice',
            null,
            _createElement$Phrase.createElement('literal', { text: 'quarter', value: 15 }),
            _createElement$Phrase.createElement('literal', { text: 'half', value: 30 }),
            _createElement$Phrase.createElement(
              'sequence',
              null,
              _createElement$Phrase.createElement(_DigitString$Integer.Integer, { min: 1, max: 59, merge: true }),
              _createElement$Phrase.createElement('literal', { optional: true, text: ' minutes' })
            )
          )
        ),
        _createElement$Phrase.createElement(
          'choice',
          { id: 'direction' },
          _createElement$Phrase.createElement('literal', { text: ' past ', value: 1 }),
          _createElement$Phrase.createElement(
            'choice',
            { limit: 1, value: -1 },
            _createElement$Phrase.createElement('literal', { text: ' to ' }),
            _createElement$Phrase.createElement('literal', { text: ' of ' }),
            _createElement$Phrase.createElement('literal', { text: ' til ' })
          )
        ),
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'some hour', merge: true },
          _createElement$Phrase.createElement(
            'choice',
            null,
            _createElement$Phrase.createElement(AbsTime, { minutes: false }),
            _createElement$Phrase.createElement('literal', { text: 'midnight', value: { hour: 0, minute: 0 } }),
            _createElement$Phrase.createElement('literal', { text: 'noon', value: { hour: 12, minute: 0 } })
          )
        )
      );
    }
  }]);

  return RelativeTime;
})(_createElement$Phrase.Phrase);

var AbsTime = (function (_Phrase3) {
  function AbsTime() {
    _classCallCheck(this, AbsTime);

    if (_Phrase3 != null) {
      _Phrase3.apply(this, arguments);
    }
  }

  _inherits(AbsTime, _Phrase3);

  _createClass(AbsTime, [{
    key: 'getValue',
    value: function getValue(result) {
      var hour = parseInt(result.hour);

      if (result.ampm) {
        hour = result.ampm === 'am' ? hour === 12 ? 0 : hour : hour + 12;
      }

      var minute = result.minutes ? parseInt(result.minutes, 10) : 0;

      return { hour: hour, minute: minute };
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DigitString$Integer.DigitString, { descriptor: 'hour', min: 1, max: 12, allowLeadingZeros: false, id: 'hour' }),
        this.props.minutes ? _createElement$Phrase.createElement(
          'sequence',
          { id: 'minutes', optional: true, prefered: false },
          _createElement$Phrase.createElement('literal', { text: ':' }),
          _createElement$Phrase.createElement(Minutes, { merge: true })
        ) : null,
        _createElement$Phrase.createElement(
          'choice',
          { id: 'ampm' },
          _createElement$Phrase.createElement('list', { items: [' am', 'am', ' a', 'a', ' a.m.', 'a.m.', ' a.m', 'a.m'], value: 'am', limit: 1 }),
          _createElement$Phrase.createElement('list', { items: [' pm', 'pm', ' p', 'p', ' p.m.', 'p.m.', ' p.m', 'p.m'], value: 'pm', limit: 1 })
        )
      );
    }
  }]);

  return AbsTime;
})(_createElement$Phrase.Phrase);

AbsTime.defaultProps = { minutes: true };

var Minutes = (function (_Phrase4) {
  function Minutes() {
    _classCallCheck(this, Minutes);

    if (_Phrase4 != null) {
      _Phrase4.apply(this, arguments);
    }
  }

  _inherits(Minutes, _Phrase4);

  _createClass(Minutes, [{
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(_DigitString$Integer.DigitString, { descriptor: 'minutes', max: 59, minLength: 2, maxLength: 2 });
    }
  }]);

  return Minutes;
})(_createElement$Phrase.Phrase);

module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":26,"lacona-phrase-number":19}],16:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var _DatePhrase = require('./date');

var _DatePhrase2 = _interopRequireWildcard(_DatePhrase);

var _DateTime = require('./datetime');

var _DateTime2 = _interopRequireWildcard(_DateTime);

var _DateDuration = require('./date-duration');

var _DateDuration2 = _interopRequireWildcard(_DateDuration);

var _moment = (typeof window !== "undefined" ? window.moment : typeof global !== "undefined" ? global.moment : null);

var _moment2 = _interopRequireWildcard(_moment);

var _Time = require('./time');

var _Time2 = _interopRequireWildcard(_Time);

var _TimeDuration = require('./time-duration');

var _TimeDuration2 = _interopRequireWildcard(_TimeDuration);

function join(date, time) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
}

var TimePeriod = (function (_Phrase) {
  function TimePeriod() {
    _classCallCheck(this, TimePeriod);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(TimePeriod, _Phrase);

  _createClass(TimePeriod, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) {
        return;
      }if (result.startdatetime) {
        if (result.enddatetime) {
          return {
            start: result.startdatetime,
            duration: _moment2['default'](result.enddatetime).diff(result.startdatetime)
          };
        } else if (result.endtime) {
          var enddatetime = join(result.startdatetime, result.endtime);
          return {
            start: result.startdatetime,
            duration: _moment2['default'](enddatetime).diff(result.startdatetime)
          };
        } else if (result.duration) {
          return {
            start: result.startdatetime,
            duration: _moment2['default'](result.startdatetime).diff(_moment2['default'](result.startdatetime).add(result.duration))
          };
        } else {
          return {
            start: result.startdatetime,
            duration: 0
          };
        }
      } else if (result.date) {
        if (result.starttime && result.endtime) {
          var startdatetime = join(result.date, result.starttime);
          var enddatetime = join(result.date, result.endtime);
          console.log('ttt', startdatetime, enddatetime);
          return {
            start: startdatetime,
            duration: _moment2['default'](enddatetime).diff(startdatetime)
          };
        }
      }
    }
  }]);

  return TimePeriod;
})(_createElement$Phrase.Phrase);

exports['default'] = TimePeriod;

TimePeriod.translations = [{
  langs: ['en_US', 'default'],
  describe: function describe() {
    return _createElement$Phrase.createElement(
      'choice',
      null,
      _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DateTime2['default'], { id: 'startdatetime' }),
        _createElement$Phrase.createElement('list', { items: [' to ', ' - ', '-'], limit: 1 }),
        _createElement$Phrase.createElement(
          'choice',
          { merge: true },
          _createElement$Phrase.createElement(_Time2['default'], { id: 'endtime' }),
          _createElement$Phrase.createElement(_DateTime2['default'], { id: 'enddatetime' })
        )
      ),
      _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DatePhrase2['default'], { id: 'date' }),
        _createElement$Phrase.createElement('literal', { text: ' ' }),
        _createElement$Phrase.createElement(_Time2['default'], { id: 'starttime' }),
        _createElement$Phrase.createElement('list', { items: [' to ', ' - ', '-'], limit: 1 }),
        _createElement$Phrase.createElement(_Time2['default'], { id: 'endtime' })
      ),
      _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_Time2['default'], { id: 'starttime' }),
        _createElement$Phrase.createElement('list', { items: [' to ', ' - ', '-'], limit: 1 }),
        _createElement$Phrase.createElement(_Time2['default'], { id: 'endtime' }),
        _createElement$Phrase.createElement('literal', { text: ' ' }),
        _createElement$Phrase.createElement(_DatePhrase2['default'], { id: 'date' })
      ),
      _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'time period', id: 'duration' },
          _createElement$Phrase.createElement(
            'choice',
            null,
            _createElement$Phrase.createElement(_TimeDuration2['default'], null),
            _createElement$Phrase.createElement(_DateDuration2['default'], null)
          )
        ),
        _createElement$Phrase.createElement('literal', { text: ' at ' }),
        _createElement$Phrase.createElement(_DateTime2['default'], { id: 'startdatetime' })
      ),
      _createElement$Phrase.createElement(
        'sequence',
        null,
        _createElement$Phrase.createElement(_DateTime2['default'], { id: 'startdatetime' }),
        _createElement$Phrase.createElement('literal', { text: ' for ' }),
        _createElement$Phrase.createElement(
          'placeholder',
          { text: 'time period', id: 'duration' },
          _createElement$Phrase.createElement(
            'choice',
            null,
            _createElement$Phrase.createElement(_TimeDuration2['default'], null),
            _createElement$Phrase.createElement(_DateDuration2['default'], null)
          )
        )
      )
    );
  }
}];
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date":10,"./date-duration":9,"./datetime":11,"./time":15,"./time-duration":14,"lacona-phrase":26}],17:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var Weekday = (function (_Phrase) {
  function Weekday() {
    _classCallCheck(this, Weekday);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Weekday, _Phrase);

  _createClass(Weekday, [{
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement('list', { items: [{ text: 'Sunday', value: 0 }, { text: 'Monday', value: 1 }, { text: 'Tuesday', value: 2 }, { text: 'Wednesday', value: 3 }, { text: 'Thursday', value: 4 }, { text: 'Friday', value: 5 }, { text: 'Saturday', value: 6 }] });
    }
  }]);

  return Weekday;
})(_createElement$Phrase.Phrase);

exports['default'] = Weekday;
module.exports = exports['default'];
},{"lacona-phrase":26}],18:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var DigitString = (function () {
  function DigitString() {
    _classCallCheck(this, DigitString);
  }

  _createClass(DigitString, [{
    key: 'validate',
    value: function validate(input) {
      if (!/^[0-9]+$/.test(input)) {
        return false;
      }if (input.length > this.props.maxLength) {
        return false;
      }if (input.length < this.props.minLength) {
        return false;
      }if (!this.props.allowLeadingZeros && input !== '0' && input.search(/^0/) !== -1) {
        return false;
      }if (!_import2['default'].isUndefined(this.props.max) || !_import2['default'].isUndefined(this.props.min)) {
        var intValue = parseInt(input, 10);
        if (isNaN(intValue)) {
          return false;
        }if (intValue > this.props.max) {
          return false;
        }if (intValue < this.props.min) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: 'displayWhen',
    value: function displayWhen(input) {
      if (!/^\d*$/.test(input)) {
        return false;
      }if (input.length > this.props.maxLength) {
        return false;
      }if (!this.props.allowLeadingZeros && input !== '0' && /^0/.test(input)) {
        return false;
      }var intValue = parseInt(input, 10);
      if (intValue > this.props.max) {
        return false;
      }return true;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'placeholder',
        { text: this.props.descriptor, displayWhen: this.displayWhen.bind(this) },
        _createElement$Phrase.createElement('freetext', { validate: this.validate.bind(this), splitOn: /\D/, score: 1 })
      );
    }
  }]);

  return DigitString;
})();

exports['default'] = DigitString;

DigitString.defaultProps = {
  minLength: 0,
  maxLength: 9007199254740991,
  min: 0,
  max: 9007199254740991,
  allowLeadingZeros: true,
  descriptor: 'number'
};
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":23}],19:[function(require,module,exports){
'use strict';

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _default = require('./integer');

exports.Integer = _interopRequire(_default);

var _default2 = require('./digitstring');

exports.DigitString = _interopRequire(_default2);

var _default3 = require('./number');

exports.Number = _interopRequire(_default3);

var _default4 = require('./ordinal');

exports.Ordinal = _interopRequire(_default4);
},{"./digitstring":18,"./integer":20,"./number":21,"./ordinal":22}],20:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

var Integer = (function (_Phrase) {
  function Integer() {
    _classCallCheck(this, Integer);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Integer, _Phrase);

  _createClass(Integer, [{
    key: 'getValue',
    value: function getValue(result) {
      if (_import2['default'].isUndefined(result)) {
        return;
      }return parseInt(result, 10);
    }
  }, {
    key: 'validate',
    value: function validate(input) {
      if (!/^[\-\+]?\d+$/.test(input)) {
        return false;
      }var number = parseInt(input, 10);
      return number <= this.props.max && number >= this.props.min;
    }
  }, {
    key: 'displayWhen',
    value: function displayWhen(input) {
      if (!/^[\-\+]?\d*$/.test(input)) {
        return false;
      }var number = parseInt(input, 10) || 0;
      if (this.props.min >= 0) {
        if (_import2['default'].startsWith(input, '-')) {
          return false;
        }return number <= this.props.max;
      } else if (this.props.max <= 0) {
        return number >= this.props.min;
      } else {
        return number <= this.props.max && number >= this.props.min;
      }
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'placeholder',
        { text: this.props.descriptor, displayWhen: this.displayWhen.bind(this) },
        _createElement$Phrase.createElement('freetext', { validate: this.validate.bind(this), limit: this.props.limit, splitOn: /\D/, score: 1 })
      );
    }
  }]);

  return Integer;
})(_createElement$Phrase.Phrase);

exports['default'] = Integer;

Integer.defaultProps = {
  max: MAX_SAFE_INTEGER,
  min: -MAX_SAFE_INTEGER,
  descriptor: 'number'
};
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":23}],21:[function(require,module,exports){
"use strict";

// import
// var lacona = require('lacona');
// var freetext = require('lacona-phrase-freetext');
//
// module.exports = lacona.createPhrase({
//   name: 'lacona/float',
//   getValue: function (result) {
//     return parseFloat(result.float);
//   },
//   describe: function () {
//     return freetext({
//       id: 'float',
//       regex: /^(\d+\.\d*|\d*\.\d+|\d+)$/,
//       default: '1.0'
//     });
//   }
// });
},{}],22:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

var Ordinal = (function (_Phrase) {
  function Ordinal() {
    _classCallCheck(this, Ordinal);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Ordinal, _Phrase);

  _createClass(Ordinal, [{
    key: 'getValue',
    value: function getValue(result) {
      if (_import2['default'].isUndefined(result)) {
        return;
      }return parseInt(result, 10);
    }
  }, {
    key: 'validate',
    value: function validate(input) {
      if (!/^(?:\d+th|\d*1st|\d*2nd|\d*3rd)$/.test(input)) {
        return false;
      }var number = parseInt(input, 10);
      return number <= this.props.max && number >= this.props.min;
    }
  }, {
    key: 'displayWhen',
    value: function displayWhen(input) {
      if (!/^(?:\d*|\d*t|\d*1s|\d*2n|\d*3r)$/.test(input)) {
        return false;
      }var number = parseInt(input, 10) || 1;
      return number <= this.props.max;
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'placeholder',
        { text: this.props.descriptor, displayWhen: this.displayWhen.bind(this) },
        _createElement$Phrase.createElement('freetext', { validate: this.validate.bind(this), limit: this.props.limit, splitOn: /[ ,]/, score: 1 })
      );
    }
  }]);

  return Ordinal;
})(_createElement$Phrase.Phrase);

exports['default'] = Ordinal;

Ordinal.defaultProps = {
  max: MAX_SAFE_INTEGER,
  min: 1,
  descriptor: 'nth'
};
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":23}],23:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.createElement = createElement;
exports.createFactory = createFactory;
exports.createPhrase = createPhrase;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var inherits = _interopRequire(require("inherits"));

var version = require("../package").version;

function createElement(Constructor, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    Constructor: Constructor,
    props: props,
    children: children,
    version: version
  };
}

function createFactory(constructor) {
  return createElement.bind(null, constructor);
}

var Phrase = exports.Phrase = function Phrase() {
  _classCallCheck(this, Phrase);
};

var Source = exports.Source = function Source() {
  _classCallCheck(this, Source);
};

function createPhrase(options) {
  var Constructor = function Constructor() {};

  inherits(Constructor, Phrase);

  Constructor.translations = options.translations;
  Constructor.extensions = options.extensions;
  Constructor.defaultProps = options.defaultProps;
  Constructor.sources = options.sources;

  for (var key in options) {
    if (typeof options[key] === "function") {
      Constructor.prototype[key] = options[key];
    }
  }
  return Constructor;
}

var choice = createFactory("choice");
exports.choice = choice;
var content = createFactory("content");
exports.content = content;
var literal = createFactory("literal");
exports.literal = literal;
var separator = createFactory("separator");
exports.separator = separator;
var sequence = createFactory("sequence");
exports.sequence = sequence;
var value = createFactory("value");
exports.value = value;
},{"../package":25,"inherits":24}],24:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],25:[function(require,module,exports){
module.exports={
  "name": "lacona-phrase",
  "version": "0.7.0",
  "description": "Create lacona phrases",
  "main": "lib/phrase.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "pretest": "babel test --out-dir tmp ",
    "test": "mocha tmp",
    "build": "babel src --out-dir lib",
    "validate": "npm run build && npm test",
    "prepublish": "npm run clean && npm run build",
    "clean": "rimraf lib tmp"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/lacona/lacona-phrase.git"
  },
  "keywords": [
    "lacona-phrase",
    "lacona",
    "phrase",
    "create",
    "initialize",
    "class"
  ],
  "author": {
    "name": "@brandonhorst"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/lacona/lacona-phrase/issues"
  },
  "homepage": "https://github.com/lacona/lacona-phrase",
  "devDependencies": {
    "babel": "^4.7.16",
    "chai": "^2.2.0",
    "mocha": "^2.2.1",
    "rimraf": "^2.3.2"
  },
  "dependencies": {
    "inherits": "^2.0.1"
  },
  "readme": "# lacona-phrase\n\nThis package is used to create `lacona` phrases. It works with [`lacona`](https://github.com/lacona/lacona) but is maintained separately to allow libraries to be versioned independently of the parser.\n\nA `lacona` phrase is a Javascript descriptor of some natural language construct. The syntax is modeled after [React](http://facebook.github.io/react/), but rather than specifying HTML output, it specifies a language.\n\nLike React, `lacona` phrases can be specified using [JSX](http://facebook.github.io/jsx/). This is recommended, but not required. While JSX is a much more succinct and readable way to express the phrase's structure, it does necessitate a transpilation step. `lacona` itself is built this way, using the excellent [babel](http://babeljs.io/) transpiler. In addition to transpiling JSX, it also transpiles ES6 functionality, which can result in very simple code. All examples in this document will have two examples - JSX/ES6 code to be transpiled using Babel, and standard ES5. Note that it is possible to ES6 without JS (or vice-versa), but those examples are left as an exercise to the developer (but the tests may point you in the right direction).\n\n## Using Javascript Classes\n\nA `lacona` phrase is expressed as a Javascript class. For use with ES5, a shorthand method is provided that will create this class for you, without requiring you to interact with prototypes.\n\n#### Using ES6\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nexport default class MyPhrase extends Phrase {\n  constructor() {\n    // no need to call super()\n  }\n  static get defaultProps() {\n    return {a: 'test'}\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n#### Using ES5\n\n```js\nvar createPhrase = require('lacona-phrase').createPhrase\n\nmodule.exports = createPhrase({\n  onCreate: function() {\n    // initialize phrase\n  },\n  defaultProps: {a: 'test'},\n  describe: function() {\n    return // ...\n  }\n})\n```\n\n## Describing Language\n\nIn `lacona`, language is described using `Element`s. Each `Element` can be thought of as an instance of a `Phrase`. Each `Element` can have `props` which govern its behavior.\n\nPlease note that `Phrases` should never be instantiated directly, and `Elements` should never be used outside of the context of a `describe()` call. An `Element` is ultimately just a small descriptor of its inputs - the actual `Phrase` instantiation and parsing is all done by `lacona` itself.\n\n#### Using ES6/JSX\n\nIn JSX, all lowercase tags refer to elements built-in to `lacona`. Custom classes must be uppercase. Please note the `@jsx` pragma in the initial comment. Unlike React, this comment is required. It must specify the name of the `createElement` function.\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return (\n      <choice>\n        <literal text='Google' />\n        <literal text='Yahoo' />\n        <literal text='Bing' />\n      </choice>\n    )\n  }\n}\n```\n\n#### Using ES5\n\nIn ES5, elements are specified in the form `phrase.createElement(constructor, props[, ...children])`. You can also create a factory to free you from continually needing to call `createElement`, using `createFactory`.\n\n```js\nvar phrase = require('lacona-phrase')\nvar factory = phrase.createFactory(MyPhrase)\n// these two lines are equivalent\nfactory({myProp: 'test'}, child1, child2)\nphrase.createElement(MyPhrase, {myProp: 'test'}, child1, child2)\n```\n\nThe module contains shorthand factories for the builtin elements.\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  describe: function() {\n    return phrase.choice(null,\n      phrase.literal({text: 'Google'}),\n      phrase.literal({text: 'Yahoo'}),\n      phrase.literal({text: 'Bing'})\n    )\n  }\n})\n```\n\n## Supporting multiple languages\n\nThe pesky thing about *language* is that there are lots of them. A single phrase can (and should) support as many languages as possible, all expressing the same fundamental thing. This is done using the `translations` property. Note that while `describe()` is specified as a single function, `translations` is specified as a Static Property (see below for more information).\n\n### Using ES6/JSX\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\nclass MyPhrase extends Phrase {\n  static get translations () {\n    return [{\n      langs: ['en'],\n      describe() {\n        return <literal text='hello' />\n      }\n    }, {\n      langs: ['zh']\n      describe() {\n        return <literal text='你好' />\n      }\n    }]\n  }\n}\n```\n\n### Using ES5\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  translations: [{\n    langs: ['en'],\n    describe: function() {\n      return phrase.literal({text: 'hello'})\n    }\n  }, {\n    langs: ['zh']\n    describe: function() {\n      return phrase.literal({text: '你好'})\n    }\n  }]\n})\n```\n\n\n## Phrase Properties\n\nA `Phrase` is ultimately just a class - it can have any methods or properties. However, some methods and properties govern the `Phrase`'s behavior, and should not be used outside of that context.\n\n### Static Properties\n\nSome of a `Phrase`'s behavior is governed by Static Properties, which are specific to the `Phrase`, not to any particular `Element`. When using `createPhrase`, these are specified directly as objects. However, because ES6 does not directly support static properties, these cannot be expressed using ES6 class syntax alone. They can set be set as static getters, or directly as properties on the constructor.\n\n* `defaultProps`\n* `supplements`\n* `overrides`\n* `translations`\n\n#### Using ES6\n\nThe two strategies below are precisely equivalent\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  static get defaultProps() {\n    return {myProp: 'test'}\n  }\n  static get supplements() {\n    return []\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return // ...\n  }\n}\nMyPhrase.defaultProps = {myProp: 'test'}\nMyPhrase.supplements = []\n```\n\n#### Using ES5\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  defaultProps: {myProp: 'test'},\n  supplements: [],\n  describe: function () {\n    return // ...\n  }\n})\n```\n",
  "readmeFilename": "README.md",
  "gitHead": "bb4dd9a89acdcb8fd00c82af3f66d8ae1055b4c9",
  "_id": "lacona-phrase@0.7.0",
  "_shasum": "b707b5c3abc6034137f5d4dafb3da4c22c6e221c",
  "_from": "lacona-phrase@>=0.7.0 <0.8.0"
}

},{}],26:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../package":28,"dup":23,"inherits":27}],27:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],28:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],29:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var Email = (function (_Phrase) {
  function Email() {
    _classCallCheck(this, Email);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Email, _Phrase);

  _createClass(Email, [{
    key: 'displayWhen',

    // getValue(result) {
    // return `${result.firstPart}@${result.secondPart}.${result.thirdPart}`
    // }

    value: function displayWhen(input) {
      return /^[\d\w_+.@-]*$/.test(input);
    }
  }, {
    key: 'validate',
    value: function validate(input) {
      return /^[\d\w_+.-]+@[\d\w_.-]{1,63}\.\w{2,63}$/.test(input);
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'argument',
        { text: 'email address', displayWhen: this.displayWhen },
        _createElement$Phrase.createElement('freetext', { validate: this.validate })
      );
    }
  }]);

  return Email;
})(_createElement$Phrase.Phrase);

exports['default'] = Email;
module.exports = exports['default'];
},{"lacona-phrase":30}],30:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../package":32,"dup":23,"inherits":31}],31:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],32:[function(require,module,exports){
module.exports={
  "name": "lacona-phrase",
  "version": "0.7.0",
  "description": "Create lacona phrases",
  "main": "lib/phrase.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "pretest": "babel test --out-dir tmp ",
    "test": "mocha tmp",
    "build": "babel src --out-dir lib",
    "validate": "npm run build && npm test",
    "prepublish": "npm run clean && npm run build",
    "clean": "rimraf lib tmp"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/lacona/lacona-phrase.git"
  },
  "keywords": [
    "lacona-phrase",
    "lacona",
    "phrase",
    "create",
    "initialize",
    "class"
  ],
  "author": {
    "name": "@brandonhorst"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/lacona/lacona-phrase/issues"
  },
  "homepage": "https://github.com/lacona/lacona-phrase",
  "devDependencies": {
    "babel": "^4.7.16",
    "chai": "^2.2.0",
    "mocha": "^2.2.1",
    "rimraf": "^2.3.2"
  },
  "dependencies": {
    "inherits": "^2.0.1"
  },
  "readme": "# lacona-phrase\n\nThis package is used to create `lacona` phrases. It works with [`lacona`](https://github.com/lacona/lacona) but is maintained separately to allow libraries to be versioned independently of the parser.\n\nA `lacona` phrase is a Javascript descriptor of some natural language construct. The syntax is modeled after [React](http://facebook.github.io/react/), but rather than specifying HTML output, it specifies a language.\n\nLike React, `lacona` phrases can be specified using [JSX](http://facebook.github.io/jsx/). This is recommended, but not required. While JSX is a much more succinct and readable way to express the phrase's structure, it does necessitate a transpilation step. `lacona` itself is built this way, using the excellent [babel](http://babeljs.io/) transpiler. In addition to transpiling JSX, it also transpiles ES6 functionality, which can result in very simple code. All examples in this document will have two examples - JSX/ES6 code to be transpiled using Babel, and standard ES5. Note that it is possible to ES6 without JS (or vice-versa), but those examples are left as an exercise to the developer (but the tests may point you in the right direction).\n\n## Using Javascript Classes\n\nA `lacona` phrase is expressed as a Javascript class. For use with ES5, a shorthand method is provided that will create this class for you, without requiring you to interact with prototypes.\n\n#### Using ES6\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nexport default class MyPhrase extends Phrase {\n  constructor() {\n    // no need to call super()\n  }\n  static get defaultProps() {\n    return {a: 'test'}\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n#### Using ES5\n\n```js\nvar createPhrase = require('lacona-phrase').createPhrase\n\nmodule.exports = createPhrase({\n  onCreate: function() {\n    // initialize phrase\n  },\n  defaultProps: {a: 'test'},\n  describe: function() {\n    return // ...\n  }\n})\n```\n\n## Describing Language\n\nIn `lacona`, language is described using `Element`s. Each `Element` can be thought of as an instance of a `Phrase`. Each `Element` can have `props` which govern its behavior.\n\nPlease note that `Phrases` should never be instantiated directly, and `Elements` should never be used outside of the context of a `describe()` call. An `Element` is ultimately just a small descriptor of its inputs - the actual `Phrase` instantiation and parsing is all done by `lacona` itself.\n\n#### Using ES6/JSX\n\nIn JSX, all lowercase tags refer to elements built-in to `lacona`. Custom classes must be uppercase. Please note the `@jsx` pragma in the initial comment. Unlike React, this comment is required. It must specify the name of the `createElement` function.\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return (\n      <choice>\n        <literal text='Google' />\n        <literal text='Yahoo' />\n        <literal text='Bing' />\n      </choice>\n    )\n  }\n}\n```\n\n#### Using ES5\n\nIn ES5, elements are specified in the form `phrase.createElement(constructor, props[, ...children])`. You can also create a factory to free you from continually needing to call `createElement`, using `createFactory`.\n\n```js\nvar phrase = require('lacona-phrase')\nvar factory = phrase.createFactory(MyPhrase)\n// these two lines are equivalent\nfactory({myProp: 'test'}, child1, child2)\nphrase.createElement(MyPhrase, {myProp: 'test'}, child1, child2)\n```\n\nThe module contains shorthand factories for the builtin elements.\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  describe: function() {\n    return phrase.choice(null,\n      phrase.literal({text: 'Google'}),\n      phrase.literal({text: 'Yahoo'}),\n      phrase.literal({text: 'Bing'})\n    )\n  }\n})\n```\n\n## Supporting multiple languages\n\nThe pesky thing about *language* is that there are lots of them. A single phrase can (and should) support as many languages as possible, all expressing the same fundamental thing. This is done using the `translations` property. Note that while `describe()` is specified as a single function, `translations` is specified as a Static Property (see below for more information).\n\n### Using ES6/JSX\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\nclass MyPhrase extends Phrase {\n  static get translations () {\n    return [{\n      langs: ['en'],\n      describe() {\n        return <literal text='hello' />\n      }\n    }, {\n      langs: ['zh']\n      describe() {\n        return <literal text='你好' />\n      }\n    }]\n  }\n}\n```\n\n### Using ES5\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  translations: [{\n    langs: ['en'],\n    describe: function() {\n      return phrase.literal({text: 'hello'})\n    }\n  }, {\n    langs: ['zh']\n    describe: function() {\n      return phrase.literal({text: '你好'})\n    }\n  }]\n})\n```\n\n\n## Phrase Properties\n\nA `Phrase` is ultimately just a class - it can have any methods or properties. However, some methods and properties govern the `Phrase`'s behavior, and should not be used outside of that context.\n\n### Static Properties\n\nSome of a `Phrase`'s behavior is governed by Static Properties, which are specific to the `Phrase`, not to any particular `Element`. When using `createPhrase`, these are specified directly as objects. However, because ES6 does not directly support static properties, these cannot be expressed using ES6 class syntax alone. They can set be set as static getters, or directly as properties on the constructor.\n\n* `defaultProps`\n* `supplements`\n* `overrides`\n* `translations`\n\n#### Using ES6\n\nThe two strategies below are precisely equivalent\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  static get defaultProps() {\n    return {myProp: 'test'}\n  }\n  static get supplements() {\n    return []\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return // ...\n  }\n}\nMyPhrase.defaultProps = {myProp: 'test'}\nMyPhrase.supplements = []\n```\n\n#### Using ES5\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  defaultProps: {myProp: 'test'},\n  supplements: [],\n  describe: function () {\n    return // ...\n  }\n})\n```\n",
  "readmeFilename": "README.md",
  "gitHead": "bb4dd9a89acdcb8fd00c82af3f66d8ae1055b4c9",
  "_id": "lacona-phrase@0.7.0",
  "_shasum": "b707b5c3abc6034137f5d4dafb3da4c22c6e221c",
  "_from": "lacona-phrase@*"
}

},{}],33:[function(require,module,exports){
/** @jsx createElement */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _laconaPhrase = require('lacona-phrase');

var PhoneNumber = (function (_Phrase) {
  function PhoneNumber() {
    _classCallCheck(this, PhoneNumber);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(PhoneNumber, _Phrase);

  _createClass(PhoneNumber, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!result) return;

      return result.replace(/[ ()/-]/g, '');
    }
  }, {
    key: 'displayWhen',
    value: function displayWhen(input) {
      return /^\+?\(?(\d[ ()/-]{0,2}){0,6}$/.test(input);
    }
  }, {
    key: 'validate',
    value: function validate(input) {
      return /^\+?\(?(\d[ ()/-]{0,2}){7,15}$/.test(input);
    }
  }, {
    key: 'describe',
    value: function describe() {
      return (0, _laconaPhrase.createElement)(
        'argument',
        { text: 'phone number', displayWhen: this.displayWhen },
        (0, _laconaPhrase.createElement)('freetext', { validate: this.validate, splitOn: /\w/ })
      );
    }
  }]);

  return PhoneNumber;
})(_laconaPhrase.Phrase);

exports['default'] = PhoneNumber;
module.exports = exports['default'];
},{"lacona-phrase":34}],34:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../package":36,"dup":23,"inherits":35}],35:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],36:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],37:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/** @jsx createElement */

var _ = _interopRequire((typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null));

var _laconaPhrase = require("lacona-phrase");

var createElement = _laconaPhrase.createElement;
var Phrase = _laconaPhrase.Phrase;

var Repeat = (function (_Phrase) {
  function Repeat() {
    _classCallCheck(this, Repeat);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Repeat, _Phrase);

  _createClass(Repeat, {
    filter: {
      value: function filter(result) {
        if (this.props.unique && _.isPlainObject(result) && result.repeat) {
          return !_.includes(result.repeat, result.child);
        }
        return true;
      }
    },
    getValue: {
      value: function getValue(result) {
        if (_.isPlainObject(result) && result.repeat) {
          if (result.child) {
            return [result.child].concat(result.repeat);
          } else {
            return result.repeat;
          }
        } else {
          return [result];
        }
      }
    },
    describe: {
      value: function describe() {
        var child = undefined,
            separator = undefined,
            firstContent = undefined;
        var trueChildren = this.props.children;

        if (this.props.children[0] && this.props.children[0].Constructor === "content") {
          child = this.props.children[0].children[0];
          if (this.props.children[1] && this.props.children[1].Constructor === "separator") {
            separator = this.props.children[1].children[0];
          }
          if (this.props.children[2] && this.props.children[2].Constructor === "firstContent") {
            firstContent = this.props.children[2].children[0];
            trueChildren = this.props.children.slice(0, 2);
          }
        } else {
          child = this.props.children[0];
        }

        if (this.props.max === 1) {
          return firstContent || child;
        } else {
          var childWithId = _.merge({}, child, { props: { id: "child" } });
          var content = separator ? createElement(
            "sequence",
            { merge: true },
            childWithId,
            separator
          ) : childWithId;

          var recurse = createElement(
            "sequence",
            null,
            content,
            createElement(
              Repeat,
              { id: "repeat", unique: this.props.unique, max: this.props.max - 1, min: this.props.min - 1 },
              trueChildren
            )
          );

          if (this.props.min <= 1) {
            return createElement(
              "choice",
              null,
              firstContent || child,
              createElement(
                "placeholder",
                null,
                recurse
              )
            );
          } else {
            return recurse;
          }
        }
      }
    }
  });

  return Repeat;
})(Phrase);

module.exports = Repeat;

Repeat.defaultProps = {
  max: Number.MAX_SAFE_INTEGER,
  min: 1,
  unique: false
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":38}],38:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.createElement = createElement;
exports.createFactory = createFactory;
exports.createPhrase = createPhrase;

var inherits = _interopRequire(require("inherits"));

var version = require("../package").version;

function createElement(Constructor, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    Constructor: Constructor,
    props: props,
    children: children,
    version: version
  };
}

function createFactory(constructor) {
  return createElement.bind(null, constructor);
}

var Phrase = exports.Phrase = function Phrase() {
  _classCallCheck(this, Phrase);
};

function createPhrase(options) {
  var Constructor = options.onCreate || function () {};

  inherits(Constructor, Phrase);

  Constructor.translations = options.translations;
  Constructor.supplements = options.supplements;
  Constructor.overrides = options.overrides;
  Constructor.defaultProps = options.defaultProps;
  Constructor.initialState = options.initialState;

  for (var key in options) {
    if (typeof options[key] === "function") {
      Constructor.prototype[key] = options[key];
    }
  }
  return Constructor;
}

var choice = exports.choice = createFactory("choice");
var content = exports.content = createFactory("content");
var literal = exports.literal = createFactory("literal");
var separator = exports.separator = createFactory("separator");
var sequence = exports.sequence = createFactory("sequence");
var value = exports.value = createFactory("value");
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{"../package":40,"inherits":39}],39:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],40:[function(require,module,exports){
module.exports={
  "name": "lacona-phrase",
  "version": "0.6.1",
  "description": "Create lacona phrases",
  "main": "lib/phrase.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "pretest": "babel test --out-dir tmp ",
    "test": "mocha tmp",
    "build": "babel src --out-dir lib",
    "validate": "npm run build && npm test",
    "prepublish": "npm run clean && npm run build",
    "clean": "rimraf lib tmp"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/lacona/lacona-phrase.git"
  },
  "keywords": [
    "lacona-phrase",
    "lacona",
    "phrase",
    "create",
    "initialize",
    "class"
  ],
  "author": {
    "name": "@brandonhorst"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/lacona/lacona-phrase/issues"
  },
  "homepage": "https://github.com/lacona/lacona-phrase",
  "devDependencies": {
    "babel": "^4.6.6",
    "chai": "^2.1.0",
    "mocha": "^2.1.0",
    "rimraf": "^2.2.8"
  },
  "dependencies": {
    "inherits": "^2.0.1"
  },
  "readme": "# lacona-phrase\n\nThis package is used to create `lacona` phrases. It works with [`lacona`](https://github.com/lacona/lacona) but is maintained separately to allow libraries to be versioned independently of the parser.\n\nA `lacona` phrase is a Javascript descriptor of some natural language construct. The syntax is modeled after [React](http://facebook.github.io/react/), but rather than specifying HTML output, it specifies a language.\n\nLike React, `lacona` phrases can be specified using [JSX](http://facebook.github.io/jsx/). This is recommended, but not required. While JSX is a much more succinct and readable way to express the phrase's structure, it does necessitate a transpilation step. `lacona` itself is built this way, using the excellent [babel](http://babeljs.io/) transpiler. In addition to transpiling JSX, it also transpiles ES6 functionality, which can result in very simple code. All examples in this document will have two examples - JSX/ES6 code to be transpiled using Babel, and standard ES5. Note that it is possible to ES6 without JS (or vice-versa), but those examples are left as an exercise to the developer (but the tests may point you in the right direction).\n\n## Using Javascript Classes\n\nA `lacona` phrase is expressed as a Javascript class. For use with ES5, a shorthand method is provided that will create this class for you, without requiring you to interact with prototypes.\n\n#### Using ES6\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nexport default class MyPhrase extends Phrase {\n  constructor() {\n    // no need to call super()\n  }\n  static get defaultProps() {\n    return {a: 'test'}\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n#### Using ES5\n\n```js\nvar createPhrase = require('lacona-phrase').createPhrase\n\nmodule.exports = createPhrase({\n  onCreate: function() {\n    // initialize phrase\n  },\n  defaultProps: {a: 'test'},\n  describe: function() {\n    return // ...\n  }\n})\n```\n\n## Describing Language\n\nIn `lacona`, language is described using `Element`s. Each `Element` can be thought of as an instance of a `Phrase`. Each `Element` can have `props` which govern its behavior.\n\nPlease note that `Phrases` should never be instantiated directly, and `Elements` should never be used outside of the context of a `describe()` call. An `Element` is ultimately just a small descriptor of its inputs - the actual `Phrase` instantiation and parsing is all done by `lacona` itself.\n\n#### Using ES6/JSX\n\nIn JSX, all lowercase tags refer to elements built-in to `lacona`. Custom classes must be uppercase. Please note the `@jsx` pragma in the initial comment. Unlike React, this comment is required. It must specify the name of the `createElement` function.\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return (\n      <choice>\n        <literal text='Google' />\n        <literal text='Yahoo' />\n        <literal text='Bing' />\n      </choice>\n    )\n  }\n}\n```\n\n#### Using ES5\n\nIn ES5, elements are specified in the form `phrase.createElement(constructor, props[, ...children])`. You can also create a factory to free you from continually needing to call `createElement`, using `createFactory`.\n\n```js\nvar phrase = require('lacona-phrase')\nvar factory = phrase.createFactory(MyPhrase)\n// these two lines are equivalent\nfactory({myProp: 'test'}, child1, child2)\nphrase.createElement(MyPhrase, {myProp: 'test'}, child1, child2)\n```\n\nThe module contains shorthand factories for the builtin elements.\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  describe: function() {\n    return phrase.choice(null,\n      phrase.literal({text: 'Google'}),\n      phrase.literal({text: 'Yahoo'}),\n      phrase.literal({text: 'Bing'})\n    )\n  }\n})\n```\n\n## Supporting multiple languages\n\nThe pesky thing about *language* is that there are lots of them. A single phrase can (and should) support as many languages as possible, all expressing the same fundamental thing. This is done using the `translations` property. Note that while `describe()` is specified as a single function, `translations` is specified as a Static Property (see below for more information).\n\n### Using ES6/JSX\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\nclass MyPhrase extends Phrase {\n  static get translations () {\n    return [{\n      langs: ['en'],\n      describe() {\n        return <literal text='hello' />\n      }\n    }, {\n      langs: ['zh']\n      describe() {\n        return <literal text='你好' />\n      }\n    }]\n  }\n}\n```\n\n### Using ES5\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  translations: [{\n    langs: ['en'],\n    describe: function() {\n      return phrase.literal({text: 'hello'})\n    }\n  }, {\n    langs: ['zh']\n    describe: function() {\n      return phrase.literal({text: '你好'})\n    }\n  }]\n})\n```\n\n\n## Phrase Properties\n\nA `Phrase` is ultimately just a class - it can have any methods or properties. However, some methods and properties govern the `Phrase`'s behavior, and should not be used outside of that context.\n\n### Static Properties\n\nSome of a `Phrase`'s behavior is governed by Static Properties, which are specific to the `Phrase`, not to any particular `Element`. When using `createPhrase`, these are specified directly as objects. However, because ES6 does not directly support static properties, these cannot be expressed using ES6 class syntax alone. They can set be set as static getters, or directly as properties on the constructor.\n\n* `defaultProps`\n* `supplements`\n* `overrides`\n* `translations`\n\n#### Using ES6\n\nThe two strategies below are precisely equivalent\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  static get defaultProps() {\n    return {myProp: 'test'}\n  }\n  static get supplements() {\n    return []\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return // ...\n  }\n}\nMyPhrase.defaultProps = {myProp: 'test'}\nMyPhrase.supplements = []\n```\n\n#### Using ES5\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  defaultProps: {myProp: 'test'},\n  supplements: [],\n  describe: function () {\n    return // ...\n  }\n})\n```\n",
  "readmeFilename": "README.md",
  "gitHead": "c8b8807038b18b65556627510d1e5a8401630614",
  "_id": "lacona-phrase@0.6.1",
  "_shasum": "0116fb838b021f5b7158bd734a81d5a7433ff564",
  "_from": "lacona-phrase@*"
}

},{}],41:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var URL = (function () {
  function URL() {
    _classCallCheck(this, URL);
  }

  _createClass(URL, [{
    key: 'getValue',
    value: function getValue(result) {
      if (!_import2['default'].startsWith(result, 'http')) {
        return 'http://' + result;
      } else {
        return result;
      }
    }
  }, {
    key: 'validateWithProtocol',

    // validate (input) {
    //   return /^(?:(?:https?):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(input)
    // }
    //
    // displayWhen (input) {
    //   return /^(https?:\/\/|h$|ht$|htt$|https?$|https?:$|https?:\/$|https?:\/\/$)?([\w\d-]+(\.\w{0,18}\S*)?)?$/i.test(input)
    // }
    value: function validateWithProtocol(input) {
      return /^(https?\:\/\/)([-_a-z0-9]+\.)+[-a-z0-9]+\S*$/i.test(input);
    }
  }, {
    key: 'displayWhen',
    value: function displayWhen(input) {
      return /^(https?:\/\/|h$|ht$|htt$|http$|https$|http:$|http:\/$|https:$|https:\/$)?[-_a-z0-9]*(\.\S*)?$/.test(input)
      // return /^(\w{3,8}:\/\/|\w{3,8}$|\w{3,8}:$|\w{3,8}:\/$)?([\w\d-]+(\.\w{0,18}\S*)?)?$/i.test(input)
      ;
    }
  }, {
    key: 'validateWithoutProtocol',
    value: function validateWithoutProtocol(input) {
      return /^([-a-z0-9]+\.)+[-_a-z0-9]+\S*$/i.test(input);
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'argument',
        { text: 'URL', displayWhen: this.displayWhen },
        _createElement$Phrase.createElement(
          'choice',
          { limit: 1 },
          _createElement$Phrase.createElement(
            'sequence',
            null,
            _createElement$Phrase.createElement(
              'choice',
              { limit: 1 },
              _createElement$Phrase.createElement('decorator', { text: 'http://' }),
              _createElement$Phrase.createElement('decorator', { text: 'https://' })
            ),
            _createElement$Phrase.createElement('freetext', { validate: this.validateWithoutProtocol, splitOn: ' ' })
          ),
          _createElement$Phrase.createElement('freetext', { validate: this.validateWithProtocol, splitOn: '' })
        )
      );
    }
  }]);

  return URL;
})();

exports['default'] = URL;

URL.defaultProps = { splitOn: /\s/ }
/*
        <sequence>
          <choice id='protocol' optional={true}>
            <literal text='http://' value='http://' />
            <literal text='https://' value='https://' />
          </choice>
          <choice>
            <placeholder text='ip address'>
                <content>
                  <DigitString min={0} max={255} allowLeadingZeros={false} />
                </content>
                <separator><literal text='.' /></separator>
            </placeholder>
            <placeholder text='domain'>
              <freetext limit={1} validate={this.noSpace} />
              </sequence>
            </placeholder>
          </choice>
          <sequence optional={true} merge={true}>
            <literal text=':' />
            <DigitString id='port' min={1} max={65535} />
          </sequence>
        </sequence>
        */
;module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lacona-phrase":42}],42:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../package":44,"dup":23,"inherits":43}],43:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],44:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],45:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../package":47,"dup":23,"inherits":46}],46:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],47:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],48:[function(require,module,exports){
function join(array) {
  return array.reduce(function (acc, val) {
    return acc + val.string;
  }, '');
}

function match(option) { return join(option.match); }
function suggestion(option) { return join(option.suggestion); }
function completion(option) { return join(option.completion); }

function all(option) {
  return [match(option), suggestion(option), completion(option)].join('');
}

module.exports = {
  all: all,
  match: match,
  suggestion: suggestion,
  completion: completion
};

},{}],49:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var Placeholder = (function (_Phrase) {
  function Placeholder() {
    _classCallCheck(this, Placeholder);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Placeholder, _Phrase);

  _createClass(Placeholder, [{
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement('descriptor', _extends({}, this.props, { argument: true, placeholder: true }));
    }
  }]);

  return Placeholder;
})(_createElement$Phrase.Phrase);

exports['default'] = Placeholder;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/extends":76,"babel-runtime/helpers/inherits":78,"lacona-phrase":116}],50:[function(require,module,exports){
(function (global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var _parse = require('../parse');

var _parse2 = _interopRequireWildcard(_parse);

var _reconcile = require('../reconcile');

var Choice = (function (_Phrase) {
  function Choice() {
    _classCallCheck(this, Choice);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Choice, _Phrase);

  _createClass(Choice, [{
    key: '_handleParse',
    value: _regeneratorRuntime.mark(function _handleParse(input, options) {
      var successes, scoredOutputs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _ret;

      return _regeneratorRuntime.wrap(function _handleParse$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            successes = 0;
            scoredOutputs = [];

            if (!(this.props.children && this.props.children.length > 0)) {
              context$2$0.next = 32;
              break;
            }

            this.childPhrases = _reconcile.reconcile({ descriptor: this.props.children, phrase: this.childPhrases, options: options });

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 7;
            _loop = _regeneratorRuntime.mark(function callee$2$0() {
              var childPhrase, success, output, newResult, modifications;
              return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    childPhrase = _step.value;
                    success = false;
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    context$3$0.prev = 5;
                    _iterator2 = _getIterator(_parse2['default']({ phrase: childPhrase, input: input, options: options }));

                  case 7:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      context$3$0.next = 17;
                      break;
                    }

                    output = _step2.value;
                    newResult = this.props.value || (childPhrase.props.id ? _defineProperty({}, childPhrase.props.id, output.result) : output.result);
                    modifications = { result: newResult };

                    if (this.props.limit) modifications.callbacks = output.callbacks.concat(function () {
                      return success = true;
                    });

                    context$3$0.next = 14;
                    return _import2['default'].assign({}, output, modifications);

                  case 14:
                    _iteratorNormalCompletion2 = true;
                    context$3$0.next = 7;
                    break;

                  case 17:
                    context$3$0.next = 23;
                    break;

                  case 19:
                    context$3$0.prev = 19;
                    context$3$0.t0 = context$3$0['catch'](5);
                    _didIteratorError2 = true;
                    _iteratorError2 = context$3$0.t0;

                  case 23:
                    context$3$0.prev = 23;
                    context$3$0.prev = 24;

                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                      _iterator2['return']();
                    }

                  case 26:
                    context$3$0.prev = 26;

                    if (!_didIteratorError2) {
                      context$3$0.next = 29;
                      break;
                    }

                    throw _iteratorError2;

                  case 29:
                    return context$3$0.finish(26);

                  case 30:
                    return context$3$0.finish(23);

                  case 31:
                    if (!this.props.limit) {
                      context$3$0.next = 35;
                      break;
                    }

                    if (success) successes++;

                    if (!(this.props.limit <= successes)) {
                      context$3$0.next = 35;
                      break;
                    }

                    return context$3$0.abrupt('return', 'break');

                  case 35:
                  case 'end':
                    return context$3$0.stop();
                }
              }, callee$2$0, _this, [[5, 19, 23, 31], [24,, 26, 30]]);
            });
            _iterator = _getIterator(this.childPhrases);

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 18;
              break;
            }

            return context$2$0.delegateYield(_loop(), 't1', 12);

          case 12:
            _ret = context$2$0.t1;

            if (!(_ret === 'break')) {
              context$2$0.next = 15;
              break;
            }

            return context$2$0.abrupt('break', 18);

          case 15:
            _iteratorNormalCompletion = true;
            context$2$0.next = 10;
            break;

          case 18:
            context$2$0.next = 24;
            break;

          case 20:
            context$2$0.prev = 20;
            context$2$0.t2 = context$2$0['catch'](7);
            _didIteratorError = true;
            _iteratorError = context$2$0.t2;

          case 24:
            context$2$0.prev = 24;
            context$2$0.prev = 25;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 27:
            context$2$0.prev = 27;

            if (!_didIteratorError) {
              context$2$0.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return context$2$0.finish(27);

          case 31:
            return context$2$0.finish(24);

          case 32:
          case 'end':
            return context$2$0.stop();
        }
      }, _handleParse, this, [[7, 20, 24, 32], [25,, 27, 31]]);
    })
  }]);

  return Choice;
})(_createElement$Phrase.Phrase);

exports['default'] = Choice;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../parse":62,"../reconcile":64,"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/define-property":75,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"lacona-phrase":116}],51:[function(require,module,exports){
(function (global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _match = require('../fuzzy');

var _createElement$Phrase = require('lacona-phrase');

//
// class TrueDecorator extends Phrase {
//   _handleParse(input, options) {
//     // const category = stackFind(input.stack, 'category', this.props.category, null)
//     // const qualifier = stackFind(input.stack, 'qualifier', this.props.qualifier, null)
//     // const descriptors = _.chain(input.stack).map('descriptor').filter().value(
//   }
//
// }

var Decorator = (function (_Phrase) {
  function Decorator() {
    _classCallCheck(this, Decorator);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Decorator, _Phrase);

  _createClass(Decorator, [{
    key: 'compute',
    value: function compute(input) {
      return [{
        words: [{ text: this.props.text, input: false, decorator: true }],
        value: this.props.value,
        remaining: input,
        score: 1
      }];
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement(
        'choice',
        { limit: 1 },
        _createElement$Phrase.createElement('literal', { text: this.props.text, value: this.props.value }),
        _createElement$Phrase.createElement('value', { compute: this.compute.bind(this) })
      );
    }
  }]);

  return Decorator;
})(_createElement$Phrase.Phrase);

exports['default'] = Decorator;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../fuzzy":60,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"lacona-phrase":116}],52:[function(require,module,exports){
(function (global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var _parse = require('../parse');

var _parse2 = _interopRequireWildcard(_parse);

var _reconcile = require('../reconcile');

var _stackFind = require('../stackfind');

var _stackFind2 = _interopRequireWildcard(_stackFind);

var Descriptor = (function (_Phrase) {
  function Descriptor() {
    _classCallCheck(this, Descriptor);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Descriptor, _Phrase);

  _createClass(Descriptor, [{
    key: 'parseChild',
    value: _regeneratorRuntime.mark(function parseChild(input, options) {
      var showPlaceholder, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, output;

      return _regeneratorRuntime.wrap(function parseChild$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (this.props.trigger) this.props.trigger(input.text);

            if (!(this.props.showForEmpty && input.text === '')) {
              context$2$0.next = 3;
              break;
            }

            return context$2$0.abrupt('return', true);

          case 3:
            showPlaceholder = true;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 7;
            _iterator = _getIterator(_parse2['default']({ phrase: this.childPhrase, input: input, options: options }));

          case 9:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 22;
              break;
            }

            output = _step.value;

            showPlaceholder = false;

            if (!this.props.argument) {
              context$2$0.next = 17;
              break;
            }

            context$2$0.next = 15;
            return _import2['default'].assign({}, output, { currentArgument: undefined });

          case 15:
            context$2$0.next = 19;
            break;

          case 17:
            context$2$0.next = 19;
            return output;

          case 19:
            _iteratorNormalCompletion = true;
            context$2$0.next = 9;
            break;

          case 22:
            context$2$0.next = 28;
            break;

          case 24:
            context$2$0.prev = 24;
            context$2$0.t3 = context$2$0['catch'](7);
            _didIteratorError = true;
            _iteratorError = context$2$0.t3;

          case 28:
            context$2$0.prev = 28;
            context$2$0.prev = 29;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 31:
            context$2$0.prev = 31;

            if (!_didIteratorError) {
              context$2$0.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return context$2$0.finish(31);

          case 35:
            return context$2$0.finish(28);

          case 36:
            if (showPlaceholder) {
              context$2$0.next = 38;
              break;
            }

            return context$2$0.abrupt('return', false);

          case 38:
            if (!(this.props.displayWhen && this.props.displayWhen(input.text))) {
              context$2$0.next = 40;
              break;
            }

            return context$2$0.abrupt('return', true);

          case 40:
            return context$2$0.abrupt('return', false);

          case 41:
          case 'end':
            return context$2$0.stop();
        }
      }, parseChild, this, [[7, 24, 28, 36], [29,, 31, 35]]);
    })
  }, {
    key: 'yieldSelf',
    value: _regeneratorRuntime.mark(function yieldSelf(input, options) {
      var word, modification;
      return _regeneratorRuntime.wrap(function yieldSelf$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            word = {
              text: this.props.text,
              input: false,
              placeholder: true,
              argument: input.currentArgument
            };
            modification = {
              score: 0.01,
              result: undefined,
              text: ''
            };

            modification.words = input.words.concat(word);

            context$2$0.next = 5;
            return _import2['default'].assign({}, input, modification);

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, yieldSelf, this);
    })
  }, {
    key: '_handleParse',
    value: _regeneratorRuntime.mark(function _handleParse(input, options) {
      var inputWithArgument, showPlaceholder;
      return _regeneratorRuntime.wrap(function _handleParse$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            this.childPhrase = _reconcile.reconcile({ descriptor: this.props.children[0], phrase: this.childPhrase, options: options });

            inputWithArgument = input;

            if (this.props.argument && !input.currentArgument) {
              inputWithArgument = _import2['default'].assign({}, input, { currentArgument: this.props.text });
            }

            if (!this.props.placeholder) {
              context$2$0.next = 14;
              break;
            }

            if (!(input.text !== '' || _import2['default'].all(input.words, 'input'))) {
              context$2$0.next = 11;
              break;
            }

            return context$2$0.delegateYield(this.parseChild(inputWithArgument, options), 't4', 6);

          case 6:
            showPlaceholder = context$2$0.t4;

            if (!showPlaceholder) {
              context$2$0.next = 9;
              break;
            }

            return context$2$0.delegateYield(this.yieldSelf(input, options), 't5', 9);

          case 9:
            context$2$0.next = 12;
            break;

          case 11:
            return context$2$0.delegateYield(this.yieldSelf(input, options), 't6', 12);

          case 12:
            context$2$0.next = 15;
            break;

          case 14:
            return context$2$0.delegateYield(this.parseChild(inputWithArgument, options), 't7', 15);

          case 15:
          case 'end':
            return context$2$0.stop();
        }
      }, _handleParse, this);
    })
  }]);

  return Descriptor;
})(_createElement$Phrase.Phrase);

exports['default'] = Descriptor;

Descriptor.defaultProps = {
  placeholder: false,
  argument: false,
  showForEmpty: false,
  displayWhen: function displayWhen(input) {
    return input === '';
  }
};
module.exports = exports['default'];
// if (_.isEmpty(input.suggestion)) {
//   modification.suggestion = input.suggestion.concat(word)
// } else {
//   modification.completion = input.completion.concat(word)
// }
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../parse":62,"../reconcile":64,"../stackfind":65,"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"lacona-phrase":116}],53:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
var marked0$0 = [substrings].map(_regeneratorRuntime.mark);
/** @jsx createElement */

var _Phrase$createElement = require('lacona-phrase');

var _split = require('smart-split');

var _split2 = _interopRequireWildcard(_split);

function substrings(input, _ref) {
  var splitOn = _ref.splitOn;
  var noSplit = _ref.noSplit;
  var inputs, i;
  return _regeneratorRuntime.wrap(function substrings$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!noSplit) {
          context$1$0.next = 4;
          break;
        }

        context$1$0.next = 3;
        return input;

      case 3:
        return context$1$0.abrupt('return');

      case 4:
        inputs = _split2['default'](input, splitOn);
        i = 0;

      case 6:
        if (!(i < inputs.length)) {
          context$1$0.next = 12;
          break;
        }

        context$1$0.next = 9;
        return inputs.slice(0, i + 1).join('');

      case 9:
        i += 2;
        context$1$0.next = 6;
        break;

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

var Freetext = (function (_Phrase) {
  function Freetext() {
    _classCallCheck(this, Freetext);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Freetext, _Phrase);

  _createClass(Freetext, [{
    key: 'validate',
    value: _regeneratorRuntime.mark(function validate(input) {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, stringPart;

      return _regeneratorRuntime.wrap(function validate$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 3;
            _iterator = _getIterator(substrings(input, { splitOn: this.props.splitOn, noSplit: this.props.consumeAll }));

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 13;
              break;
            }

            stringPart = _step.value;

            if (!this.props.validate(stringPart)) {
              context$2$0.next = 10;
              break;
            }

            context$2$0.next = 10;
            return {
              words: [{ text: stringPart, input: true }],
              value: stringPart,
              remaining: input.substring(stringPart.length),
              score: this.props.score || 0.1 + 1 / (stringPart.length + 2)
            };

          case 10:
            _iteratorNormalCompletion = true;
            context$2$0.next = 5;
            break;

          case 13:
            context$2$0.next = 19;
            break;

          case 15:
            context$2$0.prev = 15;
            context$2$0.t8 = context$2$0['catch'](3);
            _didIteratorError = true;
            _iteratorError = context$2$0.t8;

          case 19:
            context$2$0.prev = 19;
            context$2$0.prev = 20;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 22:
            context$2$0.prev = 22;

            if (!_didIteratorError) {
              context$2$0.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return context$2$0.finish(22);

          case 26:
            return context$2$0.finish(19);

          case 27:
          case 'end':
            return context$2$0.stop();
        }
      }, validate, this, [[3, 15, 19, 27], [20,, 22, 26]]);
    })
  }, {
    key: 'describe',
    value: function describe() {
      return _Phrase$createElement.createElement('value', { compute: this.validate.bind(this), limit: this.props.limit });
    }
  }]);

  return Freetext;
})(_Phrase$createElement.Phrase);

exports['default'] = Freetext;

Freetext.defaultProps = {
  validate: function validate() {
    return true;
  },
  splitOn: '',
  consumeAll: false
};
module.exports = exports['default'];
},{"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"lacona-phrase":116,"smart-split":119}],54:[function(require,module,exports){
'use strict';

var _interopRequire = require('babel-runtime/helpers/interop-require')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _default = require('./argument');

exports.argument = _interopRequire(_default);

var _default2 = require('./choice');

exports.choice = _interopRequire(_default2);

var _default3 = require('./decorator');

exports.decorator = _interopRequire(_default3);

var _default4 = require('./descriptor');

exports.descriptor = _interopRequire(_default4);

var _default5 = require('./freetext');

exports.freetext = _interopRequire(_default5);

var _default6 = require('./list');

exports.list = _interopRequire(_default6);

var _default7 = require('./literal');

exports.literal = _interopRequire(_default7);

var _default8 = require('./placeholder');

exports.placeholder = _interopRequire(_default8);

var _default9 = require('./sequence');

exports.sequence = _interopRequire(_default9);

var _default10 = require('./value');

exports.value = _interopRequire(_default10);
},{"./argument":49,"./choice":50,"./decorator":51,"./descriptor":52,"./freetext":53,"./list":55,"./literal":56,"./placeholder":57,"./sequence":58,"./value":59,"babel-runtime/helpers/interop-require":80}],55:[function(require,module,exports){
(function (global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _sort = require('../fuzzy');

var _createElement$Phrase = require('lacona-phrase');

var List = (function (_Phrase) {
  function List() {
    _classCallCheck(this, List);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(List, _Phrase);

  _createClass(List, [{
    key: 'itemify',
    value: function itemify(item) {
      var trueItem = _import2['default'].isString(item) ? { text: item } : item;
      if (!_import2['default'].isUndefined(this.props.value)) trueItem.value = this.props.value;
      if (!_import2['default'].isUndefined(this.props.qualifier)) trueItem.qualifier = this.props.qualifier;
      return trueItem;
    }
  }, {
    key: 'compute',
    value: _regeneratorRuntime.mark(function compute(input) {
      var trueItems, itemsForFuzzy, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, result;

      return _regeneratorRuntime.wrap(function compute$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            trueItems = _import2['default'].map(this.props.items, this.itemify.bind(this));
            itemsForFuzzy = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 5;
            _iterator = _getIterator(trueItems);

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 18;
              break;
            }

            item = _step.value;

            if (!_import2['default'].startsWith(input.toLowerCase(), item.text.toLowerCase())) {
              context$2$0.next = 14;
              break;
            }

            context$2$0.next = 12;
            return {
              remaining: input.slice(item.text.length),
              words: [{ text: item.text, input: true, qualifier: item.qualifier }],
              value: item.value
            };

          case 12:
            context$2$0.next = 15;
            break;

          case 14:
            itemsForFuzzy.push(item);

          case 15:
            _iteratorNormalCompletion = true;
            context$2$0.next = 7;
            break;

          case 18:
            context$2$0.next = 24;
            break;

          case 20:
            context$2$0.prev = 20;
            context$2$0.t9 = context$2$0['catch'](5);
            _didIteratorError = true;
            _iteratorError = context$2$0.t9;

          case 24:
            context$2$0.prev = 24;
            context$2$0.prev = 25;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 27:
            context$2$0.prev = 27;

            if (!_didIteratorError) {
              context$2$0.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return context$2$0.finish(27);

          case 31:
            return context$2$0.finish(24);

          case 32:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$2$0.prev = 35;
            _iterator2 = _getIterator(_sort.sort(input, itemsForFuzzy));

          case 37:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              context$2$0.next = 45;
              break;
            }

            result = _step2.value;

            result.remaining = '';

            context$2$0.next = 42;
            return result;

          case 42:
            _iteratorNormalCompletion2 = true;
            context$2$0.next = 37;
            break;

          case 45:
            context$2$0.next = 51;
            break;

          case 47:
            context$2$0.prev = 47;
            context$2$0.t10 = context$2$0['catch'](35);
            _didIteratorError2 = true;
            _iteratorError2 = context$2$0.t10;

          case 51:
            context$2$0.prev = 51;
            context$2$0.prev = 52;

            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }

          case 54:
            context$2$0.prev = 54;

            if (!_didIteratorError2) {
              context$2$0.next = 57;
              break;
            }

            throw _iteratorError2;

          case 57:
            return context$2$0.finish(54);

          case 58:
            return context$2$0.finish(51);

          case 59:
          case 'end':
            return context$2$0.stop();
        }
      }, compute, this, [[5, 20, 24, 32], [25,, 27, 31], [35, 47, 51, 59], [52,, 54, 58]]);
    })
  }, {
    key: 'suggest',
    value: _regeneratorRuntime.mark(function suggest(input) {
      var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

      return _regeneratorRuntime.wrap(function suggest$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            context$2$0.prev = 3;
            _iterator3 = _getIterator(this.props.items);

          case 5:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              context$2$0.next = 12;
              break;
            }

            item = _step3.value;
            context$2$0.next = 9;
            return this.itemify(item);

          case 9:
            _iteratorNormalCompletion3 = true;
            context$2$0.next = 5;
            break;

          case 12:
            context$2$0.next = 18;
            break;

          case 14:
            context$2$0.prev = 14;
            context$2$0.t11 = context$2$0['catch'](3);
            _didIteratorError3 = true;
            _iteratorError3 = context$2$0.t11;

          case 18:
            context$2$0.prev = 18;
            context$2$0.prev = 19;

            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
              _iterator3['return']();
            }

          case 21:
            context$2$0.prev = 21;

            if (!_didIteratorError3) {
              context$2$0.next = 24;
              break;
            }

            throw _iteratorError3;

          case 24:
            return context$2$0.finish(21);

          case 25:
            return context$2$0.finish(18);

          case 26:
          case 'end':
            return context$2$0.stop();
        }
      }, suggest, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })
  }, {
    key: 'describe',
    value: function describe() {
      var _this = this;

      if (this.props.fuzzy) {
        return _createElement$Phrase.createElement('value', { compute: this.compute.bind(this), suggest: this.suggest.bind(this), limit: this.props.limit, category: this.props.category });
      } else {
        var literals = _import2['default'].chain(this.props.items).map(this.itemify.bind(this)).map(function (item) {
          return _createElement$Phrase.createElement('literal', { text: item.text, value: item.value, qualifier: item.qualifier, category: _this.props.category });
        }).value();

        return _createElement$Phrase.createElement(
          'choice',
          { limit: this.props.limit, value: this.props.value },
          literals
        );
      }
    }
  }]);

  return List;
})(_createElement$Phrase.Phrase);

exports['default'] = List;
module.exports = exports['default'];

// first check for exact matches
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../fuzzy":60,"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"lacona-phrase":116}],56:[function(require,module,exports){
(function (global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _match = require('../fuzzy');

var _createElement$Phrase = require('lacona-phrase');

var Literal = (function (_Phrase) {
  function Literal() {
    _classCallCheck(this, Literal);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Literal, _Phrase);

  _createClass(Literal, [{
    key: 'suggest',
    value: function suggest() {
      if (this.props.text == null) {
        return [];
      }return [{ text: this.props.text.replace(/\n/g, ''), value: this.props.value, score: this.props.score || 1 }];
    }
  }, {
    key: 'compute',
    value: function compute(input) {
      if (this.props.text == null) {
        return [];
      }var inputLower = input.toLowerCase();
      var thisTextLine = this.props.text.replace(/\n/g, '');
      var thisTextLower = thisTextLine.toLowerCase();
      if (_import2['default'].startsWith(inputLower, thisTextLower)) {
        return [{
          words: [{ text: thisTextLine, input: true }],
          remaining: input.substring(thisTextLine.length),
          value: this.props.value,
          score: this.props.score || 1
        }];
      } else if (_import2['default'].startsWith(thisTextLower, inputLower)) {
        var words = [{ text: thisTextLine.substring(0, input.length), input: true }];
        if (thisTextLine.length > input.length) {
          words.push({ text: thisTextLine.substring(input.length), input: false });
        }
        return [{
          words: words,
          remaining: '',
          value: this.props.value,
          score: this.props.score || 1
        }];
      } else if (this.props.fuzzy) {
        var result = _match.match(input, thisTextLine);
        if (result) {
          result.remaining = '';
          result.value = this.props.value;
          result.score = this.props.score || result.score;
          return [result];
        }
      }
      return [];
    }
  }, {
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement('value', {
        compute: this.compute.bind(this),
        suggest: this.suggest.bind(this),
        qualifier: this.props.qualifier,
        category: this.props.category });
    }
  }]);

  return Literal;
})(_createElement$Phrase.Phrase);

exports['default'] = Literal;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../fuzzy":60,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"lacona-phrase":116}],57:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _createElement$Phrase = require('lacona-phrase');

var Placeholder = (function (_Phrase) {
  function Placeholder() {
    _classCallCheck(this, Placeholder);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Placeholder, _Phrase);

  _createClass(Placeholder, [{
    key: 'describe',
    value: function describe() {
      return _createElement$Phrase.createElement('descriptor', _extends({}, this.props, { placeholder: true }));
    }
  }]);

  return Placeholder;
})(_createElement$Phrase.Phrase);

exports['default'] = Placeholder;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/extends":76,"babel-runtime/helpers/inherits":78,"lacona-phrase":116}],58:[function(require,module,exports){
(function (global){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement$Phrase = require('lacona-phrase');

var _parse = require('../parse');

var _parse2 = _interopRequireWildcard(_parse);

var _reconcile = require('../reconcile');

function addSeparator(child, separator) {
  if (child.props && child.props.optional) {
    var newChild = _import2['default'].merge({}, child, { props: { optional: false } });
    //TODO there are likely some problems with separators and optional
    return _createElement$Phrase.createElement(
      Sequence,
      { optional: true, merge: true },
      newChild,
      separator
    );
  } else {
    return _createElement$Phrase.createElement(
      Sequence,
      { merge: true },
      child,
      separator
    );
  }
}

var Sequence = (function (_Phrase) {
  function Sequence() {
    _classCallCheck(this, Sequence);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Sequence, _Phrase);

  _createClass(Sequence, [{
    key: 'describe',
    value: function describe() {
      //get the content and the separator
      var content = undefined,
          separator = undefined;
      if (this.props.children[0] && this.props.children[0].Constructor === 'content') {
        content = this.props.children[0].children;
        if (this.props.children[1] && this.props.children[1].Constructor === 'separator') {
          //apply separators
          separator = this.props.children[1].children[0];
          return _createElement$Phrase.createElement(
            'sequence',
            this.props,
            _import2['default'].chain(content.slice(0, -1)).map(_import2['default'].partial(addSeparator, _import2['default'], separator)).concat(_import2['default'].last(content)).value()
          );
        } else {
          return _createElement$Phrase.createElement(
            'sequence',
            this.props,
            content
          );
        }
      }

      //replace optionals with replacements
      if (_import2['default'].some(this.props.children, _import2['default'].property('props.optional'))) {
        var newChildren = _import2['default'].map(this.props.children, function (child) {
          if (child && child.props && child.props.optional) {

            var newChild = _import2['default'].merge({}, child, { props: { optional: false } });
            delete newChild.props.id;
            delete newChild.props.merge;

            var choiceChildren = [_createElement$Phrase.createElement('literal', { text: '' }), newChild];

            if (child.props.preferred) choiceChildren.reverse();

            return _createElement$Phrase.createElement(
              'choice',
              { limit: child.props.limited ? 1 : undefined, id: child.props.id, merge: child.props.merge },
              choiceChildren
            );
          }

          return child;
        });

        return _createElement$Phrase.createElement(
          'sequence',
          _extends({}, this.props, { children: undefined }),
          newChildren
        );
      }
    }
  }, {
    key: '_handleParse',
    value: _regeneratorRuntime.mark(function _handleParse(input, options) {
      var modifications;
      return _regeneratorRuntime.wrap(function _handleParse$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            this.childPhrases = _reconcile.reconcile({ descriptor: this.props.children, phrase: this.childPhrases, options: options });

            modifications = {
              result: {},
              score: 1
            };
            return context$2$0.delegateYield(this.parseChild(0, _import2['default'].assign({}, input, modifications), options), 't12', 3);

          case 3:
          case 'end':
            return context$2$0.stop();
        }
      }, _handleParse, this);
    })
  }, {
    key: 'parseChild',
    value: _regeneratorRuntime.mark(function parseChild(childIndex, input, options) {
      var child, success, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, output, accumulatedResult, newScore, nextOutput;

      return _regeneratorRuntime.wrap(function parseChild$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!(childIndex >= this.childPhrases.length)) {
              context$2$0.next = 4;
              break;
            }

            context$2$0.next = 3;
            return input;

          case 3:
            return context$2$0.abrupt('return');

          case 4:
            child = this.childPhrases[childIndex];
            success = false;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 9;
            _iterator = _getIterator(_parse2['default']({ phrase: this.childPhrases[childIndex], input: input, options: options }));

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 20;
              break;
            }

            output = _step.value;
            accumulatedResult = this.props.value || getAccumulatedResult(input.result, child, output.result);
            newScore = input.score * output.score;
            nextOutput = _import2['default'].assign({}, output, {
              result: accumulatedResult,
              score: newScore,
              callbacks: output.callbacks.concat(function () {
                return success = true;
              })
            });
            return context$2$0.delegateYield(this.parseChild(childIndex + 1, nextOutput, options), 't13', 17);

          case 17:
            _iteratorNormalCompletion = true;
            context$2$0.next = 11;
            break;

          case 20:
            context$2$0.next = 26;
            break;

          case 22:
            context$2$0.prev = 22;
            context$2$0.t14 = context$2$0['catch'](9);
            _didIteratorError = true;
            _iteratorError = context$2$0.t14;

          case 26:
            context$2$0.prev = 26;
            context$2$0.prev = 27;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 29:
            context$2$0.prev = 29;

            if (!_didIteratorError) {
              context$2$0.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return context$2$0.finish(29);

          case 33:
            return context$2$0.finish(26);

          case 34:
          case 'end':
            return context$2$0.stop();
        }
      }, parseChild, this, [[9, 22, 26, 34], [27,, 29, 33]]);
    })
  }]);

  return Sequence;
})(_createElement$Phrase.Phrase);

exports['default'] = Sequence;

function getAccumulatedResult(inputResult, child, childResult) {
  if (!_import2['default'].isUndefined(childResult)) {
    var childId = child.props.id;
    var childMerge = child.props.merge;
    if (childId) {
      return _import2['default'].assign({}, inputResult, _defineProperty({}, childId, childResult));
    } else if (childMerge) {
      if (_import2['default'].isPlainObject(childResult)) {
        return _import2['default'].merge({}, inputResult, childResult);
      } else {
        return childResult;
      }
    }
  }
  return inputResult;
}
module.exports = exports['default'];

// if (child.props && child.props.optional) {
//   yield* this.parseChild(childIndex + 1, input, options)
// }
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../parse":62,"../reconcile":64,"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/define-property":75,"babel-runtime/helpers/extends":76,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"lacona-phrase":116}],59:[function(require,module,exports){
(function (global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

// import {handleString} from '../input-option'

var _Phrase2 = require('lacona-phrase');

var _stackFind = require('../stackfind.js');

var _stackFind2 = _interopRequireWildcard(_stackFind);

var Value = (function (_Phrase) {
  function Value() {
    _classCallCheck(this, Value);

    if (_Phrase != null) {
      _Phrase.apply(this, arguments);
    }
  }

  _inherits(Value, _Phrase);

  _createClass(Value, [{
    key: '_handleParse',
    value: _regeneratorRuntime.mark(function _handleParse(input, options) {
      var successes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _ret, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _loop2, _iterator2, _step2, _ret2;

      return _regeneratorRuntime.wrap(function _handleParse$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            successes = 0;

            if (!(input.text === '')) {
              context$2$0.next = 32;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 5;
            _loop = _regeneratorRuntime.mark(function callee$2$0() {
              var output, success, modification, word;
              return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    output = _step.value;
                    success = false;
                    modification = {
                      result: output.value,
                      score: output.score || 1
                    };

                    if (this.props.limit) modification.callbacks = input.callbacks.concat(function () {
                      return success = true;
                    });

                    word = {
                      text: output.text,
                      // category,
                      input: false,
                      argument: input.currentArgument,
                      category: this.props.category
                      // qualifier,
                      // descriptors
                    };

                    modification.words = input.words.concat(word);

                    context$3$0.next = 8;
                    return _import2['default'].assign({}, input, modification);

                  case 8:
                    if (!this.props.limit) {
                      context$3$0.next = 12;
                      break;
                    }

                    if (success) successes++;

                    if (!(this.props.limit <= successes)) {
                      context$3$0.next = 12;
                      break;
                    }

                    return context$3$0.abrupt('return', 'break');

                  case 12:
                  case 'end':
                    return context$3$0.stop();
                }
              }, callee$2$0, _this);
            });
            _iterator = _getIterator(this.props.suggest());

          case 8:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 16;
              break;
            }

            return context$2$0.delegateYield(_loop(), 't15', 10);

          case 10:
            _ret = context$2$0.t15;

            if (!(_ret === 'break')) {
              context$2$0.next = 13;
              break;
            }

            return context$2$0.abrupt('break', 16);

          case 13:
            _iteratorNormalCompletion = true;
            context$2$0.next = 8;
            break;

          case 16:
            context$2$0.next = 22;
            break;

          case 18:
            context$2$0.prev = 18;
            context$2$0.t16 = context$2$0['catch'](5);
            _didIteratorError = true;
            _iteratorError = context$2$0.t16;

          case 22:
            context$2$0.prev = 22;
            context$2$0.prev = 23;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 25:
            context$2$0.prev = 25;

            if (!_didIteratorError) {
              context$2$0.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return context$2$0.finish(25);

          case 29:
            return context$2$0.finish(22);

          case 30:
            context$2$0.next = 60;
            break;

          case 32:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$2$0.prev = 35;
            _loop2 = _regeneratorRuntime.mark(function callee$2$1() {
              var output, success, modification;
              return _regeneratorRuntime.wrap(function callee$2$1$(context$3$0) {
                var _this2 = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    output = _step2.value;
                    success = false;
                    modification = {
                      result: output.value,
                      score: output.score || 1,
                      text: output.remaining,
                      words: input.words.concat(_import2['default'].map(output.words, function (word) {
                        return _import2['default'].assign(word, {
                          argument: input.currentArgument,
                          category: _this2.props.category
                        });
                      }))
                    };

                    if (this.props.limit) modification.callbacks = input.callbacks.concat(function () {
                      return success = true;
                    });
                    context$3$0.next = 6;
                    return _import2['default'].assign({}, input, modification);

                  case 6:
                    if (!this.props.limit) {
                      context$3$0.next = 10;
                      break;
                    }

                    if (success) successes++;

                    if (!(this.props.limit <= successes)) {
                      context$3$0.next = 10;
                      break;
                    }

                    return context$3$0.abrupt('return', 'break');

                  case 10:
                  case 'end':
                    return context$3$0.stop();
                }
              }, callee$2$1, _this);
            });
            _iterator2 = _getIterator(this.props.compute(input.text));

          case 38:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              context$2$0.next = 46;
              break;
            }

            return context$2$0.delegateYield(_loop2(), 't17', 40);

          case 40:
            _ret2 = context$2$0.t17;

            if (!(_ret2 === 'break')) {
              context$2$0.next = 43;
              break;
            }

            return context$2$0.abrupt('break', 46);

          case 43:
            _iteratorNormalCompletion2 = true;
            context$2$0.next = 38;
            break;

          case 46:
            context$2$0.next = 52;
            break;

          case 48:
            context$2$0.prev = 48;
            context$2$0.t18 = context$2$0['catch'](35);
            _didIteratorError2 = true;
            _iteratorError2 = context$2$0.t18;

          case 52:
            context$2$0.prev = 52;
            context$2$0.prev = 53;

            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }

          case 55:
            context$2$0.prev = 55;

            if (!_didIteratorError2) {
              context$2$0.next = 58;
              break;
            }

            throw _iteratorError2;

          case 58:
            return context$2$0.finish(55);

          case 59:
            return context$2$0.finish(52);

          case 60:
          case 'end':
            return context$2$0.stop();
        }
      }, _handleParse, this, [[5, 18, 22, 30], [23,, 25, 29], [35, 48, 52, 60], [53,, 55, 59]]);
    })
  }]);

  return Value;
})(_Phrase2.Phrase);

exports['default'] = Value;

Value.defaultProps = {
  suggest: function suggest() {
    return [];
  },
  compute: function compute() {
    return [];
  }
};
module.exports = exports['default'];

// if this has a category use that, else the last category on the stack
// const category = stackFind(input.stack, 'category', this.props.category, null)
// const qualifier = stackFind(input.stack, 'qualifier', this.props.qualifier, null)
// const descriptors = _.chain(input.stack).map('descriptor').filter().value()

// TODO this is **super** WET
// if (_.isEmpty(input.suggestion)) {
//   modification.suggestion = input.suggestion.concat(word)
// } else {
//   modification.completion = input.completion.concat(word)
// }
//
//
// const trueWords = output.words.map(word => ({
//   text: word.text,
//   // category,
//   input: word.input
//   // qualifier: word.qualifier || qualifier,
//   // descriptors
// }))

// modification.words = output.words

// if (_.isEmpty(input.suggestion) && (_.every(output.words, 'input') || output.decorator)) {
//   modification.match = input.match.concat(trueWords)
// } else {
//   modification.suggestion = input.suggestion.concat(trueWords)
// }
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../stackfind.js":65,"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"lacona-phrase":116}],60:[function(require,module,exports){
(function (global){
'use strict';

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

// returns a `words` object if its a match, else null

exports.match = match;
exports.sort = sort;
var marked0$0 = [sort, sortFunction].map(_regeneratorRuntime.mark);

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

function match(input, text) {
  var anywhere = anywhereMatch({ input: input, text: text });
  if (anywhere) {
    return { words: anywhere, score: 0.5 };
  } // const fullFuzzy = fuzzyMatch({input, text})
  // if (fullFuzzy) return {words: fullFuzzy, score: 0.25}

  return null;
}

function sort(input, items) {
  var results, itemSet, _arr, _i, _arr$_i, func, score;

  return _regeneratorRuntime.wrap(function sort$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        results = [];
        itemSet = _import2['default'].map(items, function (item) {
          return { item: item, matched: false };
        });
        _arr = [[beginningMatch, 1], [anywhereMatch, 0.5] /*, [fuzzyMatch, 0.25]*/];
        _i = 0;

      case 4:
        if (!(_i < _arr.length)) {
          context$1$0.next = 12;
          break;
        }

        _arr$_i = _slicedToArray(_arr[_i], 2);
        func = _arr$_i[0];
        score = _arr$_i[1];
        return context$1$0.delegateYield(sortFunction({ input: input, itemSet: itemSet, func: func, score: score }), 't19', 9);

      case 9:
        _i++;
        context$1$0.next = 4;
        break;

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function sortFunction(_ref) {
  var input = _ref.input;
  var itemSet = _ref.itemSet;
  var func = _ref.func;
  var score = _ref.score;

  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

  return _regeneratorRuntime.wrap(function sortFunction$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 3;
        _loop = _regeneratorRuntime.mark(function callee$1$0() {
          var obj, words;
          return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                obj = _step.value;

                if (obj.matched) {
                  context$2$0.next = 8;
                  break;
                }

                words = func({ input: input, text: obj.item.text, qualifier: obj.item.qualifier });

                if (!words) {
                  context$2$0.next = 8;
                  break;
                }

                obj.matched = true;
                _import2['default'].forEach(words, function (word) {
                  return word.descriptor = obj.item.descriptor;
                });
                context$2$0.next = 8;
                return { words: words, value: obj.item.value, score: score };

              case 8:
              case 'end':
                return context$2$0.stop();
            }
          }, callee$1$0, _this);
        });
        _iterator = _getIterator(itemSet);

      case 6:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 11;
          break;
        }

        return context$1$0.delegateYield(_loop(), 't20', 8);

      case 8:
        _iteratorNormalCompletion = true;
        context$1$0.next = 6;
        break;

      case 11:
        context$1$0.next = 17;
        break;

      case 13:
        context$1$0.prev = 13;
        context$1$0.t21 = context$1$0['catch'](3);
        _didIteratorError = true;
        _iteratorError = context$1$0.t21;

      case 17:
        context$1$0.prev = 17;
        context$1$0.prev = 18;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 20:
        context$1$0.prev = 20;

        if (!_didIteratorError) {
          context$1$0.next = 23;
          break;
        }

        throw _iteratorError;

      case 23:
        return context$1$0.finish(20);

      case 24:
        return context$1$0.finish(17);

      case 25:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[1], this, [[3, 13, 17, 25], [18,, 20, 24]]);
}

// escape special characters, and wrap in parens (for matching)
function regexEscape(str) {
  return '(' + str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, '\\$&') + ')';
}

function regexSplit(str) {
  return str.split('').map(regexEscape);
}

function beginningMatch(_ref2) {
  var input = _ref2.input;
  var text = _ref2.text;
  var qualifier = _ref2.qualifier;

  if (_import2['default'].startsWith(text.toLowerCase(), input)) {
    var matches = [{ text: text.slice(0, input.length), input: true, qualifier: qualifier }];
    if (input.length < text.length) {
      matches.push({ text: text.slice(input.length), input: false, qualifier: qualifier });
    }
    return matches;
  }
  return null;
}

function anywhereMatch(_ref3) {
  var input = _ref3.input;
  var text = _ref3.text;
  var qualifier = _ref3.qualifier;

  var index = text.toLowerCase().indexOf(input);

  if (index > -1) {
    var matches = [];
    var endIndex = index + input.length;

    if (index > 0) {
      matches.push({ text: text.slice(0, index), input: false, qualifier: qualifier });
    }

    matches.push({ text: text.slice(index, endIndex), input: true, qualifier: qualifier });

    if (endIndex <= text.length - 1) {
      matches.push({ text: text.slice(endIndex), input: false, qualifier: qualifier });
    }

    return matches;
  }
  return null;
}

// function fuzzyMatch({input, text}) {
//   const chars = regexSplit(input)
//   const fuzzyString = chars.reduce((a, b) => (`${a}([^${b}]*)${b}`), '^') + '(.*)$'
//   const fuzzyRegex = new RegExp(fuzzyString, 'i')
//   const fuzzyMatches = text.match(fuzzyRegex)
//
//   if (fuzzyMatches) {
//     const words = []
//     for (let i = 1, l = fuzzyMatches.length; i < l; i++) {
//       if (fuzzyMatches[i].length > 0) {
//         words.push({
//           text: fuzzyMatches[i],
//           input: i % 2 === 0
//         })
//       }
//     }
//     return words
//   }
//   return null
// }
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/helpers/sliced-to-array":81,"babel-runtime/regenerator":114}],61:[function(require,module,exports){
'use strict';

var _interopRequire = require('babel-runtime/helpers/interop-require')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _default = require('./parser');

exports.Parser = _interopRequire(_default);
},{"./parser":63,"babel-runtime/helpers/interop-require":80}],62:[function(require,module,exports){
(function (global){
'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parse;
var marked0$0 = [parse, parseElement].map(_regeneratorRuntime.mark);

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

function parse(_ref) {
  var phrase = _ref.phrase;
  var input = _ref.input;
  var options = _ref.options;
  return _regeneratorRuntime.wrap(function parse$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(parseElement({ phrase: phrase, input: input, options: options }),

        // for (let output of parseElement({phrase, input, options})) {
        //   yield _.assign({}, output, {stack: output.stack.slice(0, -1)}) //pop stack
        // }
        't22', 1);

      case 1:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function parseElement(_ref2) {
  var phrase = _ref2.phrase;
  var input = _ref2.input;
  var options = _ref2.options;

  var iterator, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, output, newOutput;

  return _regeneratorRuntime.wrap(function parseElement$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!phrase.__describedPhrase) {
          context$1$0.next = 32;
          break;
        }

        iterator = parse({ phrase: phrase.__describedPhrase, input: input, options: options });
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 5;
        _iterator = _getIterator(iterator);

      case 7:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 16;
          break;
        }

        output = _step.value;

        if (!(!phrase.filter || phrase.filter(output.result))) {
          context$1$0.next = 13;
          break;
        }

        newOutput = phrase.getValue ? _import2['default'].assign({}, output, { result: phrase.getValue(output.result) }) : output;
        context$1$0.next = 13;
        return newOutput;

      case 13:
        _iteratorNormalCompletion = true;
        context$1$0.next = 7;
        break;

      case 16:
        context$1$0.next = 22;
        break;

      case 18:
        context$1$0.prev = 18;
        context$1$0.t23 = context$1$0['catch'](5);
        _didIteratorError = true;
        _iteratorError = context$1$0.t23;

      case 22:
        context$1$0.prev = 22;
        context$1$0.prev = 23;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 25:
        context$1$0.prev = 25;

        if (!_didIteratorError) {
          context$1$0.next = 28;
          break;
        }

        throw _iteratorError;

      case 28:
        return context$1$0.finish(25);

      case 29:
        return context$1$0.finish(22);

      case 30:
        context$1$0.next = 36;
        break;

      case 32:
        if (!phrase._handleParse) {
          context$1$0.next = 36;
          break;
        }

        return context$1$0.delegateYield(phrase._handleParse(input, options, parse), 't24', 34);

      case 34:
        context$1$0.next = 36;
        break;

      case 36:

        _import2['default'].forEach(phrase.__sources, function (obj) {
          obj.lastVersion = obj.source.__dataVersion;
        });

      case 37:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[1], this, [[5, 18, 22, 30], [23,, 25, 29]]);
}
module.exports = exports['default'];

//prevent unbounded recursion. Once we have a completion, do not allow user
// phrases to continue looping
// if (!_.isEmpty(input.completion) &&
//     _.find(input.stack, entry => {
//       return entry.Constructor === phrase.constructor &&
//         !entry.Constructor.prototype._handleParse
//     })) {
//   return
// }

// add this to the stack before doing anything
// const inputWithStack = _.assign({}, input, {
//   stack: input.stack.concat({
//     // Constructor: phrase.constructor,
//     // category: phrase.props.category,
//     // qualifier: phrase.props.qualifier
//   // })
//   // path: input.path.concat(phrase)
// })
// const inputWithStack = input //just testing to see how this works

//noop
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114}],63:[function(require,module,exports){
(function (process,global){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createOption = createOption;
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _createElement = require('lacona-phrase');

var _EventEmitter2 = require('events');

var _parse2 = require('./parse');

var _parse3 = _interopRequireWildcard(_parse2);

var _reconcile = require('./reconcile');

function from(i) {
  var a = [];var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(i), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;
      a.push(x);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return a;
}

var optionDefaults = {
  text: '',
  words: [],
  // match: [],
  // suggestion: [],
  // completion: [],
  // stack: [],
  callbacks: [] };

function createOption(options) {
  return _import2['default'].defaults(options, optionDefaults);
}

function normalizeOutput(option) {
  var output = _import2['default'].pick(option, ['words', 'score', 'result']);
  // const suggestion = option.suggestion
  // let newSuggestions = []
  // let i, l, lastSuggestion, oldSuggestion

  // if (suggestion.length > 0) {
  //   newSuggestions.push(_.clone(suggestion[0]))
  //   for (i = 1, l = suggestion.length; i < l; i++) {
  //     lastSuggestion = newSuggestions[newSuggestions.length - 1]
  //     oldSuggestion = _.clone(suggestion[i])
  //     if (lastSuggestion.input === oldSuggestion.input && lastSuggestion.category === oldSuggestion.category) {
  //       lastSuggestion.string = lastSuggestion.string + oldSuggestion.string
  //     } else {
  //       newSuggestions.push(oldSuggestion)
  //     }
  //   }
  // }
  // output.suggestion = newSuggestions
  //
  return output;
}

var Parser = (function (_EventEmitter) {
  function Parser() {
    var _ref = arguments[0] === undefined ? {} : arguments[0];

    var _ref$langs = _ref.langs;
    var langs = _ref$langs === undefined ? ['default'] : _ref$langs;
    var grammar = _ref.grammar;
    var _ref$extensions = _ref.extensions;
    var extensions = _ref$extensions === undefined ? [] : _ref$extensions;

    _classCallCheck(this, Parser);

    _get(Object.getPrototypeOf(Parser.prototype), 'constructor', this).call(this);

    this.langs = langs;
    this.grammar = grammar;
    this.extensions = extensions;
    this._sources = [];
    this._reparseNeeded = false;
  }

  _inherits(Parser, _EventEmitter);

  _createClass(Parser, [{
    key: '_getExtensions',
    value: function _getExtensions(Constructor) {
      return _import2['default'].reduce(this.extensions, function (acc, Extension) {
        if (_import2['default'].includes(Extension['extends'], Constructor)) {
          acc.push(Extension);
        }
        return acc;
      }, []);
    }
  }, {
    key: '_triggerReparse',
    value: function _triggerReparse() {
      var _this = this;

      this._reparseNeeded = true;
      process.nextTick(function () {
        if (_this._reparseNeeded) {
          _this._reparseNeeded = false;
          _this.emit('change');
        }
      });
    }
  }, {
    key: '_getSource',
    value: function _getSource(sourceDescriptor) {
      var _this2 = this;

      var possibleSource = _import2['default'].find(this._sources, function (_ref2) {
        var descriptor = _ref2.descriptor;
        return _import2['default'].isEqual(descriptor, sourceDescriptor);
      });
      if (possibleSource) {
        return possibleSource.instance;
      }var instance = new sourceDescriptor.Constructor();
      instance.props = sourceDescriptor.props;

      instance.data = {};
      instance.__dataVersion = 0;
      instance.__subscribers = 0;
      instance.setData = function (newData) {
        _import2['default'].merge(instance.data, newData);
        instance.__dataVersion++;
        _this2._triggerReparse();
      };
      instance.replaceData = function (newData) {
        instance.data = newData;
        instance.__dataVersion++;
        _this2._triggerReparse();
      };

      if (instance.create) instance.create();

      this._sources.push({ instance: instance, descriptor: sourceDescriptor });
      return instance;
    }
  }, {
    key: '_removeSource',
    value: function _removeSource(sourceDescriptor) {
      var index = _import2['default'].findIndex(this._sources, function (_ref3) {
        var descriptor = _ref3.descriptor;
        return _import2['default'].isEqual(descriptor, sourceDescriptor);
      });
      this._sources.splice(index, 1);
    }
  }, {
    key: 'parse',
    value: (function (_parse) {
      var marked2$0 = [parse].map(_regeneratorRuntime.mark);

      function parse(_x) {
        var args$3$0 = arguments;
        return _regeneratorRuntime.wrap(function parse$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.delegateYield(_parse.apply(this, args$3$0), 't25', 1);

            case 1:
              return context$3$0.abrupt('return', context$3$0.t25);

            case 2:
            case 'end':
              return context$3$0.stop();
          }
        }, marked2$0[0], this);
      }

      parse.toString = function () {
        return _parse.toString();
      };

      return parse;
    })(_regeneratorRuntime.mark(function callee$1$0(inputString) {
      var input, options, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, output;

      return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (_import2['default'].isString(inputString)) {
              context$2$0.next = 2;
              break;
            }

            throw new Error('lacona parse input must be a string');

          case 2:
            input = createOption({ text: inputString });
            options = {
              langs: this.langs,
              getExtensions: this._getExtensions.bind(this),
              getSource: this._getSource.bind(this),
              removeSource: this._removeSource.bind(this)
            };

            this._phrase = _reconcile.reconcile({ descriptor: this.grammar, phrase: this._phrase, options: options });

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$2$0.prev = 8;
            _iterator2 = _getIterator(_parse3['default']({ phrase: this._phrase, input: input, options: options }));

          case 10:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              context$2$0.next = 19;
              break;
            }

            output = _step2.value;

            if (!(output.text === '')) {
              context$2$0.next = 16;
              break;
            }

            // call each callback (used for limiting)
            output.callbacks.forEach(function (callback) {
              return callback();
            });
            context$2$0.next = 16;
            return normalizeOutput(output);

          case 16:
            _iteratorNormalCompletion2 = true;
            context$2$0.next = 10;
            break;

          case 19:
            context$2$0.next = 25;
            break;

          case 21:
            context$2$0.prev = 21;
            context$2$0.t26 = context$2$0['catch'](8);
            _didIteratorError2 = true;
            _iteratorError2 = context$2$0.t26;

          case 25:
            context$2$0.prev = 25;
            context$2$0.prev = 26;

            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }

          case 28:
            context$2$0.prev = 28;

            if (!_didIteratorError2) {
              context$2$0.next = 31;
              break;
            }

            throw _iteratorError2;

          case 31:
            return context$2$0.finish(28);

          case 32:
            return context$2$0.finish(25);

          case 33:

            this._reparseNeeded = false;

          case 34:
          case 'end':
            return context$2$0.stop();
        }
      }, callee$1$0, this, [[8, 21, 25, 33], [26,, 28, 32]]);
    }))
  }, {
    key: 'parseArray',
    value: function parseArray(inputString) {
      return from(this.parse(inputString));
    }
  }]);

  return Parser;
})(_EventEmitter2.EventEmitter);

exports['default'] = Parser;

// path: []
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./parse":62,"./reconcile":64,"_process":8,"babel-runtime/core-js/get-iterator":66,"babel-runtime/helpers/class-call-check":73,"babel-runtime/helpers/create-class":74,"babel-runtime/helpers/get":77,"babel-runtime/helpers/inherits":78,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/regenerator":114,"events":7,"lacona-phrase":116}],64:[function(require,module,exports){
(function (global){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.reconcile = reconcile;
exports.destroy = destroy;
/** @jsx createElement */

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var _import3 = require('./elements');

var builtins = _interopRequireWildcard(_import3);

var _createElement = require('lacona-phrase');

function reconcile(_ref) {
  var descriptor = _ref.descriptor;
  var phrase = _ref.phrase;
  var options = _ref.options;

  var func = _import2['default'].isArray(descriptor) ? reconcileArray : reconcileOne;
  return func({ descriptor: descriptor, phrase: phrase, options: options });
}

function reconcileArray(_ref2) {
  var descriptor = _ref2.descriptor;
  var phrase = _ref2.phrase;
  var options = _ref2.options;

  return _import2['default'].chain(descriptor).reject(_import2['default'].isNull).reject(_import2['default'].isString).zip(phrase).map(function (_ref3) {
    var _ref32 = _slicedToArray(_ref3, 2);

    var descriptor = _ref32[0];
    var phrase = _ref32[1];
    return reconcile({ descriptor: descriptor, phrase: phrase, options: options });
  }).value();
}

function reconcileOne(_ref4) {
  var descriptor = _ref4.descriptor;
  var phrase = _ref4.phrase;
  var options = _ref4.options;

  if (descriptor == null && phrase) {
    return destroy({ phrase: phrase, removeSource: options.removeSource });
  }var Constructor = getConstructor({ Constructor: descriptor.Constructor });
  var props = getRealProps({ descriptor: descriptor, Constructor: Constructor });
  var extensions = options.getExtensions(Constructor);

  if (phrase && phrase.constructor === Constructor && _import2['default'].isEqual(props, phrase.props)) {
    if (_import2['default'].some(phrase.__sources, function (obj) {
      return obj.lastVersion !== obj.source.__dataVersion;
    }) || !_import2['default'].isEqual(extensions, phrase.__oldExtensions)) {
      var describedPhrase = getDescribedPhrase({ Constructor: Constructor, phrase: phrase, extensions: extensions, options: options });

      phrase.__oldExtensions = extensions;
      phrase.__describedPhrase = describedPhrase;

      return phrase;
    } else {
      return phrase;
    }
  } else {
    if (phrase) destroy({ phrase: phrase, removeSource: options.removeSource });

    var newPhrase = new Constructor();
    newPhrase.props = props;

    var sourceCall = getCall({ prop: 'source', Constructor: Constructor, langs: options.langs });
    var sources = sourceCall ? sourceCall.call(newPhrase) : {};
    var allSources = _import2['default'].defaults({}, sources, Constructor.__additionalSources);
    applySources({ sources: allSources, phrase: newPhrase, getSource: options.getSource });

    create({ phrase: newPhrase });

    var describedPhrase = getDescribedPhrase({ Constructor: Constructor, phrase: newPhrase, extensions: extensions, options: options });

    newPhrase.__oldExtensions = extensions;
    newPhrase.__describedPhrase = describedPhrase;

    return newPhrase;
  }
}

function getDescribedPhrase(_ref5) {
  var phrase = _ref5.phrase;
  var extensions = _ref5.extensions;
  var options = _ref5.options;

  var describe = getCall({ prop: 'describe', Constructor: phrase.constructor, langs: options.langs });
  var description = getDescription({ describe: describe, extensions: extensions, phrase: phrase });
  return description ? reconcile({ descriptor: description, options: options, phrase: phrase.__describedPhrase }) : null;
}

function getCall(_ref6) {
  var Constructor = _ref6.Constructor;
  var langs = _ref6.langs;
  var prop = _ref6.prop;

  if (Constructor.prototype[prop]) {
    return Constructor.prototype[prop];
  } else if (Constructor.translations) {
    return getCallFromTranslations({ prop: prop, langs: langs, translations: Constructor.translations });
  }
}

function getCallFromTranslations(_ref7) {
  var prop = _ref7.prop;
  var langs = _ref7.langs;
  var translations = _ref7.translations;

  return _import2['default'].chain(langs.concat('default')).map(function (lang) {
    return _import2['default'].find(translations, function (obj) {
      return _import2['default'].includes(obj.langs, lang);
    });
  }).filter(_import2['default'].negate(_import2['default'].isUndefined)).first().value()[prop];
}
//
// function setPropsAndState({phrase, props, state, changed}) {
//   phrase.props = props
//
//   if (!phrase.setState) {
//     phrase.state = state || {}
//     phrase.setState = function (nextState) {
//       _.merge(this.state, nextState)
//       this._stateChanged = true
//       changed(this)
//     }
//   }
// }

function getDescription(_ref8) {
  var describe = _ref8.describe;
  var extensions = _ref8.extensions;
  var phrase = _ref8.phrase;

  if (describe) {
    var description = describe.call(phrase);
    if (extensions.length) {
      var extensionElements = extensions.map(function (Extension) {
        return _createElement.createElement(Extension, _extends({}, phrase.props, { id: null }));
      });
      description = _createElement.createElement(
        'choice',
        null,
        description,
        extensionElements
      );
    }
    return description;
  }
}

function getRealProps(_ref9) {
  var descriptor = _ref9.descriptor;
  var Constructor = _ref9.Constructor;

  var realProps = _import2['default'].defaults(descriptor.props || {}, Constructor.defaultProps || {});
  if (descriptor.children && descriptor.children.length > 0) {
    realProps.children = _import2['default'].flattenDeep(descriptor.children);
  }
  return realProps;
}

function getConstructor(_ref10) {
  var Constructor = _ref10.Constructor;

  if (_import2['default'].isString(Constructor)) {
    if (_import2['default'].has(builtins, Constructor)) {
      return builtins[Constructor];
    } else {
      throw new Error('Invalid phrase. Note: non-builtin phrases must be uppercase');
    }
  }
  return Constructor;
}

function destroy(_ref11) {
  var phrase = _ref11.phrase;
  var removeSource = _ref11.removeSource;

  if ((phrase.constructor === builtins.choice || phrase.constructor === builtins.sequence) && phrase.childPhrases) {
    phrase.childPhrases.forEach(function (phrase) {
      return destroy({ phrase: phrase, removeSource: removeSource });
    });
  }

  _import2['default'].forEach(phrase.__sources, function (_ref12) {
    var source = _ref12.source;
    var descriptor = _ref12.descriptor;

    source.__subscribers--;
    if (source.__subscribers === 0 && source.destroy) {
      source.destroy();
      removeSource(descriptor);
    }
  });

  if (phrase.destroy) phrase.destroy();
}

function create(_ref13) {
  var phrase = _ref13.phrase;

  if (phrase.create) phrase.create();
}

function applySources(_ref14) {
  var sources = _ref14.sources;
  var phrase = _ref14.phrase;
  var getSource = _ref14.getSource;

  phrase.__sources = {};

  _import2['default'].forEach(sources, function (descriptor, name) {
    var source = getSource(descriptor);
    source.__subscribers++;
    phrase.__sources[name] = { source: source, lastVersion: 0, descriptor: descriptor };
    Object.defineProperty(phrase, name, { get: function get() {
        return phrase.__sources[name].source.data;
      } });
  });
}

//TODO debug validation would be nice
// function validate(Constructor) {
//   let hasDefault = false
//   if (!_.every(Constructor.translations, _.partial(_.has, _, 'describe'))) {
//     throw new Error('Every translation must have a describe method')
//   }
//   if (!_.every(Constructor.translations, _.partial(_.has, _, 'langs'))) {
//     throw new Error('Every translation must have a langs property')
//   }
//   if (!_.some(Constructor.translations, translation => _.indexOf(translation.langs, 'default') > -1)) {
//     throw new Error('All elements must have a describe method defined for the default language')
//   }
//   return true
// }
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./elements":54,"babel-runtime/helpers/extends":76,"babel-runtime/helpers/interop-require-wildcard":79,"babel-runtime/helpers/sliced-to-array":81,"lacona-phrase":116}],65:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stackFind;

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

function stackFind(stack, property, override, otherwise) {
  if (override != null) {
    return override;
  }var stackEntry = _import2['default'].findLast(stack, function (entry) {
    return entry[property] != null;
  });
  return stackEntry ? stackEntry[property] : otherwise;
}

module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/helpers/interop-require-wildcard":79}],66:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":82}],67:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":83}],68:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":84}],69:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":85}],70:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":86}],71:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":87}],72:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":88}],73:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],74:[function(require,module,exports){
"use strict";

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{}],75:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

exports["default"] = function (obj, key, value) {
  return Object.defineProperty(obj, key, {
    value: value,
    enumerable: key == null || typeof _Symbol == "undefined" || key.constructor !== _Symbol,
    configurable: true,
    writable: true
  });
};

exports.__esModule = true;
},{"babel-runtime/core-js/symbol":71}],76:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":68}],77:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    desc = parent = getter = undefined;
    _again = false;
    var object = _x,
        property = _x2,
        receiver = _x3;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":69}],78:[function(require,module,exports){
"use strict";

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{}],79:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],80:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
};

exports.__esModule = true;
},{}],81:[function(require,module,exports){
"use strict";

var _isIterable = require("babel-runtime/core-js/is-iterable")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

exports["default"] = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (_isIterable(Object(arr))) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/get-iterator":66,"babel-runtime/core-js/is-iterable":67}],82:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
require('../modules/core.iter-helpers');
module.exports = require('../modules/$').core.getIterator;
},{"../modules/$":98,"../modules/core.iter-helpers":106,"../modules/es6.string.iterator":111,"../modules/web.dom.iterable":113}],83:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
require('../modules/core.iter-helpers');
module.exports = require('../modules/$').core.isIterable;
},{"../modules/$":98,"../modules/core.iter-helpers":106,"../modules/es6.string.iterator":111,"../modules/web.dom.iterable":113}],84:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$').core.Object.assign;
},{"../../modules/$":98,"../../modules/es6.object.assign":108}],85:[function(require,module,exports){
require('../../modules/es6.object.statics-accept-primitives');
module.exports = require('../../modules/$').core.Object.getOwnPropertyDescriptor;
},{"../../modules/$":98,"../../modules/es6.object.statics-accept-primitives":109}],86:[function(require,module,exports){
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$').core.Promise;
},{"../modules/$":98,"../modules/es6.promise":110,"../modules/es6.string.iterator":111,"../modules/web.dom.iterable":113}],87:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$').core.Symbol;
},{"../../modules/$":98,"../../modules/es6.symbol":112}],88:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":105,"../../modules/es6.string.iterator":111,"../../modules/web.dom.iterable":113}],89:[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":98}],90:[function(require,module,exports){
var $ = require('./$');
// 19.1.2.1 Object.assign(target, source, ...)
/*eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/*eslint-enable no-unused-vars */
  var T = Object($.assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = $.ES5Object(arguments[i++])
      , keys   = $.getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$":98}],91:[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":98,"./$.wks":105}],92:[function(require,module,exports){
// Optional / simple context binding
var assertFunction = require('./$.assert').fn;
module.exports = function(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.assert":89}],93:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp.prototype = C.prototype;
    }(out);
    else exp = type & $def.P && isFunction(out) ? ctx(Function.call, out) : out;
    // export
    $.hide(exports, key, exp);
  }
}
module.exports = $def;
},{"./$":98}],94:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],95:[function(require,module,exports){
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
};
},{}],96:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":105}],97:[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , ctx               = require('./$.ctx')
  , cof               = require('./$.cof')
  , $def              = require('./$.def')
  , assertObject      = require('./$.assert').obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = {}
  , IteratorPrototype = {};
// Safari has byggy iterators w/o `next`
var BUGGY = 'keys' in [] && !('next' in [].keys());
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}
function defineIterator(Constructor, NAME, value, DEFAULT){
  var proto = Constructor.prototype
    , iter  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT] || value;
  // Define iterator
  if($.FW)setIterator(proto, iter);
  if(iter !== value){
    var iterProto = $.getProto(iter.call(new Constructor));
    // Set @@toStringTag to native iterators
    cof.set(iterProto, NAME + ' Iterator', true);
    // FF fix
    if($.FW)$.has(proto, FF_ITERATOR) && setIterator(iterProto, $.that);
  }
  // Plug for library
  Iterators[NAME] = iter;
  // FF & v8 fix
  Iterators[NAME + ' Iterator'] = $.that;
  return iter;
}
function getIterator(it){
  var Symbol  = $.g.Symbol
    , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
  return assertObject(getIter.call(it));
}
function closeIterator(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)assertObject(ret.call(iterator));
}
function stepCall(iterator, fn, value, entries){
  try {
    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
  } catch(e){
    closeIterator(iterator);
    throw e;
  }
}
var $iter = module.exports = {
  BUGGY: BUGGY,
  Iterators: Iterators,
  prototype: IteratorPrototype,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  stepCall: stepCall,
  close: closeIterator,
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol
      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
  },
  get: getIterator,
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || $iter.prototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  },
  define: defineIterator,
  std: function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
    function createIter(kind){
      return function(){
        return new Constructor(this, kind);
      };
    }
    $iter.create(Constructor, NAME, next);
    var entries = createIter('key+value')
      , values  = createIter('value')
      , proto   = Base.prototype
      , methods, key;
    if(DEFAULT == 'value')values = defineIterator(Base, NAME, values, 'values');
    else entries = defineIterator(Base, NAME, entries, 'entries');
    if(DEFAULT){
      methods = {
        entries: entries,
        keys:    IS_SET ? values : createIter('key'),
        values:  values
      };
      $def($def.P + $def.F * BUGGY, NAME, methods);
      if(FORCE)for(key in methods){
        if(!(key in proto))$.hide(proto, key, methods[key]);
      }
    }
  },
  forOf: function(iterable, entries, fn, that){
    var iterator = getIterator(iterable)
      , f = ctx(fn, that, entries ? 2 : 1)
      , step;
    while(!(step = iterator.next()).done){
      if(stepCall(iterator, f, step.value, entries) === false){
        return closeIterator(iterator);
      }
    }
  }
};
},{"./$":98,"./$.assert":89,"./$.cof":91,"./$.ctx":92,"./$.def":93,"./$.wks":105}],98:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value)); // eslint-disable-line no-use-before-define
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  it: function(it){
    return it;
  },
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  // Dummy, fix for not array-like ES3 string in es5 module
  assertDefined: assertDefined,
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  mix: function(target, src){
    for(var key in src)hide(target, key, src[key]);
    return target;
  },
  each: [].forEach
});
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":94}],99:[function(require,module,exports){
var $ = require('./$');
module.exports = function(object, el){
  var O      = $.toObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":98}],100:[function(require,module,exports){
var $ = require('./$');
module.exports = function(C){
  if($.DESC && $.FW)$.setDesc(C, require('./$.wks')('species'), {
    configurable: true,
    get: $.that
  });
};
},{"./$":98,"./$.wks":105}],101:[function(require,module,exports){
'use strict';
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(pos){
    var s = String($.assertDefined(this))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":98}],102:[function(require,module,exports){
'use strict';
var $      = require('./$')
  , ctx    = require('./$.ctx')
  , cof    = require('./$.cof')
  , invoke = require('./$.invoke')
  , global             = $.g
  , isFunction         = $.isFunction
  , html               = $.html
  , document           = global.document
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , postMessage        = global.postMessage
  , addEventListener   = global.addEventListener
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
function run(){
  var id = +this;
  if($.has(queue, id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
}
function listner(event){
  run.call(event.data);
}
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!isFunction(setTask) || !isFunction(clearTask)){
  setTask = function(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(isFunction(fn) ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(cof(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is object
  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
    defer = function(id){
      postMessage(id, '*');
    };
    addEventListener('message', listner, false);
  // WebWorkers
  } else if(isFunction(MessageChannel)){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if(document && ONREADYSTATECHANGE in document.createElement('script')){
    defer = function(id){
      html.appendChild(document.createElement('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$":98,"./$.cof":91,"./$.ctx":92,"./$.invoke":95}],103:[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol(' + key + ')_' + (++sid + Math.random()).toString(36);
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":98}],104:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var $           = require('./$')
  , UNSCOPABLES = require('./$.wks')('unscopables');
if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  if($.FW)[][UNSCOPABLES][key] = true;
};
},{"./$":98,"./$.wks":105}],105:[function(require,module,exports){
var global = require('./$').g
  , store  = {};
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":98,"./$.uid":103}],106:[function(require,module,exports){
var core  = require('./$').core
  , $iter = require('./$.iter');
core.isIterable  = $iter.is;
core.getIterator = $iter.get;
},{"./$":98,"./$.iter":97}],107:[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
$iter.std(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'key'  )return step(0, index);
  if(kind == 'value')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'value');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":98,"./$.iter":97,"./$.uid":103,"./$.unscope":104}],108:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":90,"./$.def":93}],109:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
function wrapObjectMethod(METHOD, MODE){
  var fn  = ($.core.Object || {})[METHOD] || Object[METHOD]
    , f   = 0
    , o   = {};
  o[METHOD] = MODE == 1 ? function(it){
    return isObject(it) ? fn(it) : it;
  } : MODE == 2 ? function(it){
    return isObject(it) ? fn(it) : true;
  } : MODE == 3 ? function(it){
    return isObject(it) ? fn(it) : false;
  } : MODE == 4 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : MODE == 5 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : function(it){
    return fn(toObject(it));
  };
  try {
    fn('z');
  } catch(e){
    f = 1;
  }
  $def($def.S + $def.F * f, 'Object', o);
}
wrapObjectMethod('freeze', 1);
wrapObjectMethod('seal', 1);
wrapObjectMethod('preventExtensions', 1);
wrapObjectMethod('isFrozen', 2);
wrapObjectMethod('isSealed', 2);
wrapObjectMethod('isExtensible', 3);
wrapObjectMethod('getOwnPropertyDescriptor', 4);
wrapObjectMethod('getPrototypeOf', 5);
wrapObjectMethod('keys');
wrapObjectMethod('getOwnPropertyNames');
},{"./$":98,"./$.def":93}],110:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , ctx     = require('./$.ctx')
  , cof     = require('./$.cof')
  , $def    = require('./$.def')
  , assert  = require('./$.assert')
  , $iter   = require('./$.iter')
  , SPECIES = require('./$.wks')('species')
  , RECORD  = require('./$.uid').safe('record')
  , forOf   = $iter.forOf
  , PROMISE = 'Promise'
  , global  = $.g
  , process = global.process
  , asap    = process && process.nextTick || require('./$.task').set
  , P       = global[PROMISE]
  , Base    = P
  , isFunction     = $.isFunction
  , isObject       = $.isObject
  , assertFunction = assert.fn
  , assertObject   = assert.obj
  , test;

// helpers
function getConstructor(C){
  var S = assertObject(C)[SPECIES];
  return S != undefined ? S : C;
}
function isThenable(it){
  var then;
  if(isObject(it))then = it.then;
  return isFunction(then) ? then : false;
}
function isUnhandled(promise){
  var record = promise[RECORD]
    , chain  = record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
}
function notify(record, isReject){
  var chain = record.c;
  if(isReject || chain.length)asap(function(){
    var promise = record.p
      , value   = record.v
      , ok      = record.s == 1
      , i       = 0;
    if(isReject && isUnhandled(promise)){
      setTimeout(function(){
        if(isUnhandled(promise)){
          if(cof(process) == 'process'){
            process.emit('unhandledRejection', value, promise);
          } else if(global.console && isFunction(console.error)){
            console.error('Unhandled promise rejection', value);
          }
        }
      }, 1e3);
    } else while(chain.length > i)!function(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError(PROMISE + '-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    }(chain[i++]);
    chain.length = 0;
  });
}
function $reject(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  notify(record, true);
}
function $resolve(value){
  var record = this
    , then, wrapper;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      wrapper = {r: record, d: false}; // wrap
      then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
    } else {
      record.v = value;
      record.s = 1;
      notify(record);
    }
  } catch(err){
    $reject.call(wrapper || {r: record, d: false}, err); // wrap
  }
}

// constructor polyfill
if(!(isFunction(P) && isFunction(P.resolve) && P.resolve(test = new P(function(){})) == test)){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    assertFunction(executor);
    var record = {
      p: assert.inst(this, P, PROMISE),       // <- promise
      c: [],                                  // <- chain
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false                                // <- handled rejection
    };
    $.hide(this, RECORD, record);
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  $.mix(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = assertObject(assertObject(this).constructor)[SPECIES];
      var react = {
        ok:   isFunction(onFulfilled) ? onFulfilled : true,
        fail: isFunction(onRejected)  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = assertFunction(res);
        react.rej = assertFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      record.s && notify(record);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * (P != Base), {Promise: P});
cof.set(P, PROMISE);
require('./$.species')(P);

// statics
$def($def.S, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new (getConstructor(this))(function(res, rej){
      rej(r);
    });
  },
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isObject(x) && RECORD in x && $.getProto(x) === this.prototype
      ? x : new (getConstructor(this))(function(res){
        res(x);
      });
  }
});
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
}), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":98,"./$.assert":89,"./$.cof":91,"./$.ctx":92,"./$.def":93,"./$.iter":97,"./$.iter-detect":96,"./$.species":100,"./$.task":102,"./$.uid":103,"./$.wks":105}],111:[function(require,module,exports){
var set   = require('./$').set
  , at    = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
$iter.std(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = at.call(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":98,"./$.iter":97,"./$.string-at":101,"./$.uid":103}],112:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $        = require('./$')
  , setTag   = require('./$.cof').set
  , uid      = require('./$.uid')
  , $def     = require('./$.def')
  , keyOf    = require('./$.keyof')
  , has      = $.has
  , hide     = $.hide
  , getNames = $.getNames
  , toObject = $.toObject
  , Symbol   = $.g.Symbol
  , Base     = Symbol
  , setter   = false
  , TAG      = uid.safe('tag')
  , SymbolRegistry = {}
  , AllSymbols     = {};

function wrap(tag){
  var sym = AllSymbols[tag] = $.set($.create(Symbol.prototype), TAG, tag);
  $.DESC && setter && $.setDesc(Object.prototype, tag, {
    configurable: true,
    set: function(value){
      hide(this, tag, value);
    }
  });
  return sym;
}

// 19.4.1.1 Symbol([description])
if(!$.isFunction(Symbol)){
  Symbol = function Symbol(description){
    if(this instanceof Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(description));
  };
  hide(Symbol.prototype, 'toString', function(){
    return this[TAG];
  });
}
$def($def.G + $def.W, {Symbol: Symbol});

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  pure: uid.safe,
  set: $.set,
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = require('./$.wks')(it);
    symbolStatics[it] = Symbol === Base ? sym : wrap(sym);
  }
);

setter = true;

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * (Symbol != Base), 'Object', {
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: function getOwnPropertyNames(it){
    var names = getNames(toObject(it)), result = [], key, i = 0;
    while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
    return result;
  },
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: function getOwnPropertySymbols(it){
    var names = getNames(toObject(it)), result = [], key, i = 0;
    while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
    return result;
  }
});

setTag(Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag($.g.JSON, 'JSON', true);
},{"./$":98,"./$.cof":91,"./$.def":93,"./$.keyof":99,"./$.uid":103,"./$.wks":105}],113:[function(require,module,exports){
require('./es6.array.iterator');
var $           = require('./$')
  , Iterators   = require('./$.iter').Iterators
  , ITERATOR    = require('./$.wks')('iterator')
  , ArrayValues = Iterators.Array
  , NodeList    = $.g.NodeList;
if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){
  $.hide(NodeList.prototype, ITERATOR, ArrayValues);
}
Iterators.NodeList = ArrayValues;
},{"./$":98,"./$.iter":97,"./$.wks":105,"./es6.array.iterator":107}],114:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window : this;

var hasOwn = Object.prototype.hasOwnProperty;
var hadRuntime = hasOwn.call(g, "regeneratorRuntime");
var oldRuntime = hadRuntime && g.regeneratorRuntime;
delete g.regeneratorRuntime; // Force reevalutation of runtime.js.

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  delete g.regeneratorRuntime;
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":115}],115:[function(require,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    return new Generator(innerFn, outerFn, self || null, tryLocsList || []);
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    return new _Promise(function (resolve, reject) {
      var generator = wrap(innerFn, outerFn, self, tryLocsList);
      var callNext = step.bind(generator.next);
      var callThrow = step.bind(generator["throw"]);

      function step(arg) {
        var record = tryCatch(this, null, arg);
        if (record.type === "throw") {
          reject(record.arg);
          return;
        }

        var info = record.arg;
        if (info.done) {
          resolve(info.value);
        } else {
          _Promise.resolve(info.value).then(callNext, callThrow);
        }
      }

      callNext();
    });
  };

  function Generator(innerFn, outerFn, self, tryLocsList) {
    var generator = outerFn ? Object.create(outerFn.prototype) : this;
    var context = new Context(tryLocsList);
    var state = GenStateSuspendedStart;

    function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;

            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedStart && typeof arg !== "undefined") {
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            throw new TypeError("attempt to send " + JSON.stringify(arg) + " to newborn generator");
          }

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            delete context.sent;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;

          if (method === "next") {
            context.dispatchException(record.arg);
          } else {
            arg = record.arg;
          }
        }
      }
    }

    generator.next = invoke.bind(generator, "next");
    generator["throw"] = invoke.bind(generator, "throw");
    generator["return"] = invoke.bind(generator, "return");

    return generator;
  }

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset();
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset() {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      // Pre-initialize at least 20 temporary variables to enable hidden
      // class optimizations for simple generators.
      for (var tempIndex = 0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {
        this[tempName] = null;
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg < finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          return this.complete(entry.completion, entry.afterLoc);
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : undefined);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/promise":70,"babel-runtime/core-js/symbol":71,"babel-runtime/core-js/symbol/iterator":72}],116:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../package":118,"dup":23,"inherits":117}],117:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],118:[function(require,module,exports){
module.exports={
  "name": "lacona-phrase",
  "version": "0.7.0",
  "description": "Create lacona phrases",
  "main": "lib/phrase.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "pretest": "babel test --out-dir tmp ",
    "test": "mocha tmp",
    "build": "babel src --out-dir lib",
    "validate": "npm run build && npm test",
    "prepublish": "npm run clean && npm run build",
    "clean": "rimraf lib tmp"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/lacona/lacona-phrase.git"
  },
  "keywords": [
    "lacona-phrase",
    "lacona",
    "phrase",
    "create",
    "initialize",
    "class"
  ],
  "author": {
    "name": "@brandonhorst"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/lacona/lacona-phrase/issues"
  },
  "homepage": "https://github.com/lacona/lacona-phrase",
  "devDependencies": {
    "babel": "^4.7.16",
    "chai": "^2.2.0",
    "mocha": "^2.2.1",
    "rimraf": "^2.3.2"
  },
  "dependencies": {
    "inherits": "^2.0.1"
  },
  "readme": "# lacona-phrase\n\nThis package is used to create `lacona` phrases. It works with [`lacona`](https://github.com/lacona/lacona) but is maintained separately to allow libraries to be versioned independently of the parser.\n\nA `lacona` phrase is a Javascript descriptor of some natural language construct. The syntax is modeled after [React](http://facebook.github.io/react/), but rather than specifying HTML output, it specifies a language.\n\nLike React, `lacona` phrases can be specified using [JSX](http://facebook.github.io/jsx/). This is recommended, but not required. While JSX is a much more succinct and readable way to express the phrase's structure, it does necessitate a transpilation step. `lacona` itself is built this way, using the excellent [babel](http://babeljs.io/) transpiler. In addition to transpiling JSX, it also transpiles ES6 functionality, which can result in very simple code. All examples in this document will have two examples - JSX/ES6 code to be transpiled using Babel, and standard ES5. Note that it is possible to ES6 without JS (or vice-versa), but those examples are left as an exercise to the developer (but the tests may point you in the right direction).\n\n## Using Javascript Classes\n\nA `lacona` phrase is expressed as a Javascript class. For use with ES5, a shorthand method is provided that will create this class for you, without requiring you to interact with prototypes.\n\n#### Using ES6\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nexport default class MyPhrase extends Phrase {\n  constructor() {\n    // no need to call super()\n  }\n  static get defaultProps() {\n    return {a: 'test'}\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n#### Using ES5\n\n```js\nvar createPhrase = require('lacona-phrase').createPhrase\n\nmodule.exports = createPhrase({\n  onCreate: function() {\n    // initialize phrase\n  },\n  defaultProps: {a: 'test'},\n  describe: function() {\n    return // ...\n  }\n})\n```\n\n## Describing Language\n\nIn `lacona`, language is described using `Element`s. Each `Element` can be thought of as an instance of a `Phrase`. Each `Element` can have `props` which govern its behavior.\n\nPlease note that `Phrases` should never be instantiated directly, and `Elements` should never be used outside of the context of a `describe()` call. An `Element` is ultimately just a small descriptor of its inputs - the actual `Phrase` instantiation and parsing is all done by `lacona` itself.\n\n#### Using ES6/JSX\n\nIn JSX, all lowercase tags refer to elements built-in to `lacona`. Custom classes must be uppercase. Please note the `@jsx` pragma in the initial comment. Unlike React, this comment is required. It must specify the name of the `createElement` function.\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return (\n      <choice>\n        <literal text='Google' />\n        <literal text='Yahoo' />\n        <literal text='Bing' />\n      </choice>\n    )\n  }\n}\n```\n\n#### Using ES5\n\nIn ES5, elements are specified in the form `phrase.createElement(constructor, props[, ...children])`. You can also create a factory to free you from continually needing to call `createElement`, using `createFactory`.\n\n```js\nvar phrase = require('lacona-phrase')\nvar factory = phrase.createFactory(MyPhrase)\n// these two lines are equivalent\nfactory({myProp: 'test'}, child1, child2)\nphrase.createElement(MyPhrase, {myProp: 'test'}, child1, child2)\n```\n\nThe module contains shorthand factories for the builtin elements.\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  describe: function() {\n    return phrase.choice(null,\n      phrase.literal({text: 'Google'}),\n      phrase.literal({text: 'Yahoo'}),\n      phrase.literal({text: 'Bing'})\n    )\n  }\n})\n```\n\n## Supporting multiple languages\n\nThe pesky thing about *language* is that there are lots of them. A single phrase can (and should) support as many languages as possible, all expressing the same fundamental thing. This is done using the `translations` property. Note that while `describe()` is specified as a single function, `translations` is specified as a Static Property (see below for more information).\n\n### Using ES6/JSX\n\n```js\n/** @jsx createElement */\nimport {createElement, Phrase} from 'lacona-phrase'\nclass MyPhrase extends Phrase {\n  static get translations () {\n    return [{\n      langs: ['en'],\n      describe() {\n        return <literal text='hello' />\n      }\n    }, {\n      langs: ['zh']\n      describe() {\n        return <literal text='你好' />\n      }\n    }]\n  }\n}\n```\n\n### Using ES5\n\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  translations: [{\n    langs: ['en'],\n    describe: function() {\n      return phrase.literal({text: 'hello'})\n    }\n  }, {\n    langs: ['zh']\n    describe: function() {\n      return phrase.literal({text: '你好'})\n    }\n  }]\n})\n```\n\n\n## Phrase Properties\n\nA `Phrase` is ultimately just a class - it can have any methods or properties. However, some methods and properties govern the `Phrase`'s behavior, and should not be used outside of that context.\n\n### Static Properties\n\nSome of a `Phrase`'s behavior is governed by Static Properties, which are specific to the `Phrase`, not to any particular `Element`. When using `createPhrase`, these are specified directly as objects. However, because ES6 does not directly support static properties, these cannot be expressed using ES6 class syntax alone. They can set be set as static getters, or directly as properties on the constructor.\n\n* `defaultProps`\n* `supplements`\n* `overrides`\n* `translations`\n\n#### Using ES6\n\nThe two strategies below are precisely equivalent\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  static get defaultProps() {\n    return {myProp: 'test'}\n  }\n  static get supplements() {\n    return []\n  }\n  describe() {\n    return // ...\n  }\n}\n```\n\n```js\nimport {Phrase} from 'lacona-phrase'\n\nclass MyPhrase extends Phrase {\n  describe() {\n    return // ...\n  }\n}\nMyPhrase.defaultProps = {myProp: 'test'}\nMyPhrase.supplements = []\n```\n\n#### Using ES5\n```js\nvar phrase = require('lacona-phrase')\n\nmodule.exports = phrase.createPhrase({\n  defaultProps: {myProp: 'test'},\n  supplements: [],\n  describe: function () {\n    return // ...\n  }\n})\n```\n",
  "readmeFilename": "README.md",
  "gitHead": "bb4dd9a89acdcb8fd00c82af3f66d8ae1055b4c9",
  "_id": "lacona-phrase@0.7.0",
  "_shasum": "b707b5c3abc6034137f5d4dafb3da4c22c6e221c",
  "_from": "lacona-phrase@0.7.0"
}

},{}],119:[function(require,module,exports){
module.exports = function split (input, strOrRegex) {
  var results = []

  if (strOrRegex instanceof RegExp) {
    var regex = new RegExp(strOrRegex.toString().slice(1, -1), 'g')
    var oldIndex = 0
    var match
    while ((match = regex.exec(input))) {
      results.push(input.substring(oldIndex, match.index))
      results.push(match[0])
      oldIndex = match.index + match[0].length
    }
    results.push(input.substring(oldIndex))
  } else {
    var splits = input.split(strOrRegex)
    var item
    for (var i = 0, l = splits.length; i < l - 1; i++) {
      item = splits[i]
      results.push(item)
      results.push(strOrRegex)
    }
    results.push(splits[splits.length - 1])
  }

  return results
}

},{}],120:[function(require,module,exports){
(function (global){
/*! Moment Duration Format v1.3.0
 *  https://github.com/jsmreese/moment-duration-format 
 *  Date: 2014-07-15
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2014 John Madhavan-Reese
 *  Released under the MIT license
 */

(function (root, undefined) {

	// repeatZero(qty)
	// returns "0" repeated qty times
	function repeatZero(qty) {
		var result = "";
		
		// exit early
		// if qty is 0 or a negative number
		// or doesn't coerce to an integer
		qty = parseInt(qty, 10);
		if (!qty || qty < 1) { return result; }
		
		while (qty) {
			result += "0";
			qty -= 1;
		}
		
		return result;
	}
	
	// padZero(str, len [, isRight])
	// pads a string with zeros up to a specified length
	// will not pad a string if its length is aready
	// greater than or equal to the specified length
	// default output pads with zeros on the left
	// set isRight to `true` to pad with zeros on the right
	function padZero(str, len, isRight) {
		if (str == null) { str = ""; }
		str = "" + str;
		
		return (isRight ? str : "") + repeatZero(len - str.length) + (isRight ? "" : str);
	}
	
	// isArray
	function isArray(array) {
		return Object.prototype.toString.call(array) === "[object Array]";
	}
	
	// isObject
	function isObject(obj) {
		return Object.prototype.toString.call(obj) === "[object Object]";
	}
	
	// findLast
	function findLast(array, callback) {
		var index = array.length;

		while (index -= 1) {
			if (callback(array[index])) { return array[index]; }
		}
	}

	// find
	function find(array, callback) {
		var index = 0,
			max = array.length,
			match;
			
		if (typeof callback !== "function") {
			match = callback;
			callback = function (item) {
				return item === match;
			};
		}

		while (index < max) {
			if (callback(array[index])) { return array[index]; }
			index += 1;
		}
	}
	
	// each
	function each(array, callback) {
		var index = 0,
			max = array.length;
			
		if (!array || !max) { return; }

		while (index < max) {
			if (callback(array[index], index) === false) { return; }
			index += 1;
		}
	}
	
	// map
	function map(array, callback) {
		var index = 0,
			max = array.length,
			ret = [];

		if (!array || !max) { return ret; }
				
		while (index < max) {
			ret[index] = callback(array[index], index);
			index += 1;
		}
		
		return ret;
	}
	
	// pluck
	function pluck(array, prop) {
		return map(array, function (item) {
			return item[prop];
		});
	}
	
	// compact
	function compact(array) {
		var ret = [];
		
		each(array, function (item) {
			if (item) { ret.push(item); }
		});
		
		return ret;
	}
	
	// unique
	function unique(array) {
		var ret = [];
		
		each(array, function (_a) {
			if (!find(ret, _a)) { ret.push(_a); }
		});
		
		return ret;
	}
	
	// intersection
	function intersection(a, b) {
		var ret = [];
		
		each(a, function (_a) {
			each(b, function (_b) {
				if (_a === _b) { ret.push(_a); }
			});
		});
		
		return unique(ret);
	}
	
	// rest
	function rest(array, callback) {
		var ret = [];
		
		each(array, function (item, index) {
			if (!callback(item)) {
				ret = array.slice(index);
				return false;
			}
		});
		
		return ret;
	}

	// initial
	function initial(array, callback) {
		var reversed = array.slice().reverse();
		
		return rest(reversed, callback).reverse();
	}
	
	// extend
	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) { a[key] = b[key]; }
		}
		
		return a;
	}
			
	// define internal moment reference
	var moment;

	if (typeof require === "function") {
		try { moment = (typeof window !== "undefined" ? window.moment : typeof global !== "undefined" ? global.moment : null); } 
		catch (e) {}
	} 
	
	if (!moment && root.moment) {
		moment = root.moment;
	}
	
	if (!moment) {
		throw "Moment Duration Format cannot find Moment.js";
	}
	
	// moment.duration.format([template] [, precision] [, settings])
	moment.duration.fn.format = function () {

		var tokenizer, tokens, types, typeMap, momentTypes, foundFirst, trimIndex,
			args = [].slice.call(arguments),
			settings = extend({}, this.format.defaults),
			// keep a shadow copy of this moment for calculating remainders
			remainder = moment.duration(this);

		// add a reference to this duration object to the settings for use
		// in a template function
		settings.duration = this;

		// parse arguments
		each(args, function (arg) {
			if (typeof arg === "string" || typeof arg === "function") {
				settings.template = arg;
				return;
			}

			if (typeof arg === "number") {
				settings.precision = arg;
				return;
			}

			if (isObject(arg)) {
				extend(settings, arg);
			}
		});

		// types
		types = settings.types = (isArray(settings.types) ? settings.types : settings.types.split(" "));

		// template
		if (typeof settings.template === "function") {
			settings.template = settings.template.apply(settings);
		}

		// tokenizer regexp
		tokenizer = new RegExp(map(types, function (type) {
			return settings[type].source;
		}).join("|"), "g");

		// token type map function
		typeMap = function (token) {
			return find(types, function (type) {
				return settings[type].test(token);
			});
		};

		// tokens array
		tokens = map(settings.template.match(tokenizer), function (token, index) {
			var type = typeMap(token),
				length = token.length;

			return {
				index: index,
				length: length,

				// replace escaped tokens with the non-escaped token text
				token: (type === "escape" ? token.replace(settings.escape, "$1") : token),

				// ignore type on non-moment tokens
				type: ((type === "escape" || type === "general") ? null : type)

				// calculate base value for all moment tokens
				//baseValue: ((type === "escape" || type === "general") ? null : this.as(type))
			};
		}, this);

		// unique moment token types in the template (in order of descending magnitude)
		momentTypes = intersection(types, unique(compact(pluck(tokens, "type"))));

		// exit early if there are no momentTypes
		if (!momentTypes.length) {
			return pluck(tokens, "token").join("");
		}

		// calculate values for each token type in the template
		each(momentTypes, function (momentType, index) {
			var value, wholeValue, decimalValue, isLeast, isMost;

			// calculate integer and decimal value portions
			value = remainder.as(momentType);
			wholeValue = (value > 0 ? Math.floor(value) : Math.ceil(value));
			decimalValue = value - wholeValue;

			// is this the least-significant moment token found?
			isLeast = ((index + 1) === momentTypes.length);

			// is this the most-significant moment token found?
			isMost = (!index);

			// update tokens array
			// using this algorithm to not assume anything about
			// the order or frequency of any tokens
			each(tokens, function (token) {
				if (token.type === momentType) {
					extend(token, {
						value: value,
						wholeValue: wholeValue,
						decimalValue: decimalValue,
						isLeast: isLeast,
						isMost: isMost
					});

					if (isMost) {
						// note the length of the most-significant moment token:
						// if it is greater than one and forceLength is not set, default forceLength to `true`
						if (settings.forceLength == null && token.length > 1) {
							settings.forceLength = true;
						}

						// rationale is this:
						// if the template is "h:mm:ss" and the moment value is 5 minutes, the user-friendly output is "5:00", not "05:00"
						// shouldn't pad the `minutes` token even though it has length of two
						// if the template is "hh:mm:ss", the user clearly wanted everything padded so we should output "05:00"
						// if the user wanted the full padded output, they can set `{ trim: false }` to get "00:05:00"
					}
				}
			});

			// update remainder
			remainder.subtract(wholeValue, momentType);
		});
	
		// trim tokens array
		if (settings.trim) {
			tokens = (settings.trim === "left" ? rest : initial)(tokens, function (token) {
				// return `true` if:
				// the token is not the least moment token (don't trim the least moment token)
				// the token is a moment token that does not have a value (don't trim moment tokens that have a whole value)
				return !(token.isLeast || (token.type != null && token.wholeValue));
			});
		}
		
		
		// build output

		// the first moment token can have special handling
		foundFirst = false;

		// run the map in reverse order if trimming from the right
		if (settings.trim === "right") {
			tokens.reverse();
		}

		tokens = map(tokens, function (token) {
			var val,
				decVal;

			if (!token.type) {
				// if it is not a moment token, use the token as its own value
				return token.token;
			}

			// apply negative precision formatting to the least-significant moment token
			if (token.isLeast && (settings.precision < 0)) {
				val = (Math.floor(token.wholeValue * Math.pow(10, settings.precision)) * Math.pow(10, -settings.precision)).toString();
			} else {
				val = token.wholeValue.toString();
			}
			
			// remove negative sign from the beginning
			val = val.replace(/^\-/, "");

			// apply token length formatting
			// special handling for the first moment token that is not the most significant in a trimmed template
			if (token.length > 1 && (foundFirst || token.isMost || settings.forceLength)) {
				val = padZero(val, token.length);
			}

			// add decimal value if precision > 0
			if (token.isLeast && (settings.precision > 0)) {
				decVal = token.decimalValue.toString().replace(/^\-/, "").split(/\.|e\-/);
				switch (decVal.length) {
					case 1:
						val += "." + padZero(decVal[0], settings.precision, true).slice(0, settings.precision);
						break;
						
					case 2:
						val += "." + padZero(decVal[1], settings.precision, true).slice(0, settings.precision);		
						break;
						
					case 3:
						val += "." + padZero(repeatZero((+decVal[2]) - 1) + (decVal[0] || "0") + decVal[1], settings.precision, true).slice(0, settings.precision);		
						break;
					
					default:
						throw "Moment Duration Format: unable to parse token decimal value.";
				}
			}
			
			// add a negative sign if the value is negative and token is most significant
			if (token.isMost && token.value < 0) {
				val = "-" + val;
			}

			foundFirst = true;

			return val;
		});

		// undo the reverse if trimming from the right
		if (settings.trim === "right") {
			tokens.reverse();
		}

		return tokens.join("");
	};

	moment.duration.fn.format.defaults = {
		// token definitions
		escape: /\[(.+?)\]/,
		years: /[Yy]+/,
		months: /M+/,
		weeks: /[Ww]+/,
		days: /[Dd]+/,
		hours: /[Hh]+/,
		minutes: /m+/,
		seconds: /s+/,
		milliseconds: /S+/,
		general: /.+?/,

		// token type names
		// in order of descending magnitude
		// can be a space-separated token name list or an array of token names
		types: "escape years months weeks days hours minutes seconds milliseconds general",

		// format options

		// trim
		// "left" - template tokens are trimmed from the left until the first moment token that has a value >= 1
		// "right" - template tokens are trimmed from the right until the first moment token that has a value >= 1
		// (the final moment token is not trimmed, regardless of value)
		// `false` - template tokens are not trimmed
		trim: "left",

		// precision
		// number of decimal digits to include after (to the right of) the decimal point (positive integer)
		// or the number of digits to truncate to 0 before (to the left of) the decimal point (negative integer)
		precision: 0,

		// force first moment token with a value to render at full length even when template is trimmed and first moment token has length of 1
		forceLength: null,

		// template used to format duration
		// may be a function or a string
		// template functions are executed with the `this` binding of the settings object
		// so that template strings may be dynamically generated based on the duration object
		// (accessible via `this.duration`)
		// or any of the other settings
		template: function () {
			var types = this.types,
				dur = this.duration,
				lastType = findLast(types, function (type) {
					return dur._data[type];
				});

			// default template strings for each duration dimension type
			switch (lastType) {
				case "seconds":
					return "h:mm:ss";
				case "minutes":
					return "d[d] h:mm";
				case "hours":
					return "d[d] h[h]";
				case "days":
					return "M[m] d[d]";
				case "weeks":
					return "y[y] w[w]";
				case "months":
					return "y[y] M[m]";
				case "years":
					return "y[y]";
				default:
					return "y[y] M[m] d[d] h:mm:ss";
			}
		}
	};

})(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],121:[function(require,module,exports){
(function (global){
var React, ga, script, scriptIsAdded, _name,
  __slice = [].slice;

React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

script = React.DOM.script;

if (typeof window !== "undefined" && window !== null) {
  if (window.GoogleAnalyticsObject == null) {
    window.GoogleAnalyticsObject = 'ga';
  }
}

if (typeof window !== "undefined" && window !== null) {
  if (window.ga == null) {
    window.ga = ga;
  }
}

ga = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return typeof window !== "undefined" && window !== null ? window[window.GoogleAnalyticsObject].apply(window, args) : void 0;
};

if (typeof window !== "undefined" && window !== null) {
  if (window[_name = window.GoogleAnalyticsObject] == null) {
    window[_name] = function() {
      var api, args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      api = window[window.GoogleAnalyticsObject];
      (api.q || (api.q = [])).push(args);
    };
  }
}

scriptIsAdded = false;

ga.Initializer = React.createClass({
  displayName: 'GAInitializer',
  componentDidMount: function() {
    window[window.GoogleAnalyticsObject].l = new Date().getTime();
    if (!scriptIsAdded) {
      return this.addScript();
    }
  },
  addScript: function() {
    var el, s;
    scriptIsAdded = true;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.async = true;
    el.src = '//www.google-analytics.com/analytics.js';
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(el, s);
  },
  render: function() {
    return script(null);
  }
});

module.exports = ga;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],122:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _React2 = _interopRequireDefault(_React);

var LaconaInput = (function (_React$Component) {
  function LaconaInput() {
    _classCallCheck(this, LaconaInput);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(LaconaInput, _React$Component);

  _createClass(LaconaInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        _React2['default'].findDOMNode(this).focus();
      }
    }
  }, {
    key: 'change',
    value: function change(e) {
      this.props.update(e.target.value);
    }
  }, {
    key: 'focus',
    value: function focus() {
      _React2['default'].findDOMNode(this.refs.input).focus();
    }
  }, {
    key: 'focusEnd',
    value: function focusEnd() {
      var elem = _React2['default'].findDOMNode(this.refs.input);
      var pos = this.props.userInput.length;

      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move('character', pos);
        range.select();
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(pos, pos);
        } else {
          elem.focus();
        }
      }
      elem.scrollLeft = elem.scrollWidth //just pretty big
      ;
    }
  }, {
    key: 'blur',
    value: function blur() {
      _React2['default'].findDOMNode(this.refs.input).blur();
    }
  }, {
    key: 'keyDown',
    value: function keyDown(e) {
      this.props.userInteracted();
      if (e.keyCode === 9) {
        // tab
        this.props.completeSelection();
      } else if (e.keyCode === 38) {
        // up
        this.props.moveSelection(-1);
      } else if (e.keyCode === 40) {
        // down
        this.props.moveSelection(1);
      } else if (e.keyCode === 13) {
        // return
        e.preventDefault();
        e.stopPropagation();
        this.props.execute();
      } else if (e.keyCode === 27) {
        // escape
        this.props.cancel();
      } else if (e.keyCode === 39) {
        //right
        var node = _React2['default'].findDOMNode(this.refs.input);
        if (node.selectionStart === node.selectionEnd && node.selectionStart === this.props.userInput.length) {
          this.props.completeSelection();
        } else {
          return;
        }
      } else {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        'div',
        { className: 'input' },
        _React2['default'].createElement(
          'div',
          { className: 'prefix' + (this.props.prefix ? '' : ' hidden') },
          this.props.prefix
        ),
        _React2['default'].createElement('input', {
          type: 'text',
          ref: 'input',
          tabIndex: this.props.tabIndex,
          autoCorrect: false,
          spellCheck: false,
          autoCapitalize: false,
          className: 'true-input' + (this.props.prefix ? ' prefixed' : ''),
          value: this.props.userInput,
          onChange: this.change.bind(this),
          onKeyDown: this.keyDown.bind(this),
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur,
          onClick: this.props.userInteracted,
          placeholder: this.props.placeholder })
      );
    }
  }]);

  return LaconaInput;
})(_React2['default'].Component);

exports['default'] = LaconaInput;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],123:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireDefault(_import);

var _React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _React2 = _interopRequireDefault(_React);

var _fulltext = require('lacona-util-fulltext');

var _fulltext2 = _interopRequireDefault(_fulltext);

var _LaconaOptions = require('./options');

var _LaconaOptions2 = _interopRequireDefault(_LaconaOptions);

var _LaconaInput = require('./input');

var _LaconaInput2 = _interopRequireDefault(_LaconaInput);

function bound(number, max) {
  return Math.max(Math.min(number, max - 1), 0);
}

var LaconaView = (function (_React$Component) {
  function LaconaView(props) {
    _classCallCheck(this, LaconaView);

    _get(Object.getPrototypeOf(LaconaView.prototype), 'constructor', this).call(this, props);

    this.blurMatters = true;

    var hasOutputs = props.length > 0;
    this.state = { selection: hasOutputs ? 0 : -1 };
  }

  _inherits(LaconaView, _React$Component);

  _createClass(LaconaView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasOutputs = nextProps.outputs.length > 0;
      this.setState({ selection: hasOutputs ? 0 : -1 });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.change();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.change();
    }
  }, {
    key: 'completeSelection',
    value: function completeSelection() {
      var index = arguments[0] === undefined ? this.state.selection : arguments[0];

      if (index > -1) {
        var result = this.props.outputs[index];
        var newString = _import2['default'].chain(result.words).takeWhile(function (item) {
          return !item.placeholder;
        }).map('text').join('').value();

        this.props.clearPrefix();

        this.update(newString);
      }
    }
  }, {
    key: 'moveSelection',
    value: function moveSelection(steps) {
      var selection = bound(this.state.selection + steps, this.props.outputs.length);
      this.setState({ selection: selection });
    }
  }, {
    key: 'execute',
    value: function execute() {
      var index = arguments[0] === undefined ? this.state.selection : arguments[0];

      if (index > -1) {
        var result = this.props.outputs[index];
        if (_import2['default'].some(result.words, 'placeholder')) {
          this.completeSelection(index);
          this.refs.input.focusEnd();
        } else {
          this.update('');
          this.setState({ showHints: false });
          this.props.onBlur();
          this.props.execute(index);
        }
      }
    }
  }, {
    key: 'select',
    value: function select(index) {
      var selection = bound(index, this.props.outputs.length);
      this.setState({ selection: selection });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.props.cancel();
    }
  }, {
    key: 'update',
    value: function update(newText) {
      this.props.update(newText);
    }
  }, {
    key: 'focusEnd',
    value: function focusEnd() {
      this.refs.input.focusEnd();
    }
  }, {
    key: 'onFocus',
    value: function onFocus(event) {
      this.setState({ showHints: true });
      this.props.onFocus(event);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      if (!this.blurMatters) {
        return;
      }this.setState({ showHints: false });
      this.props.onBlur(event);
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown() {
      this.blurMatters = false;
      this.props.userInteracted();
    }
  }, {
    key: 'mouseUp',
    value: function mouseUp() {
      this.blurMatters = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        'div',
        { className: 'lacona-view' },
        _React2['default'].createElement(_LaconaInput2['default'], {
          ref: 'input',
          update: this.update.bind(this),
          prefix: this.props.prefix,
          suffix: this.props.suffix,
          tabIndex: this.props.tabIndex,
          completeSelection: this.completeSelection.bind(this),
          moveSelection: this.moveSelection.bind(this),
          userInput: this.props.userInput,
          execute: this.execute.bind(this),
          cancel: this.cancel.bind(this),
          onFocus: this.onFocus.bind(this),
          onBlur: this.onBlur.bind(this),
          userInteracted: this.props.userInteracted,
          placeholder: this.props.placeholder }),
        _React2['default'].createElement(_LaconaOptions2['default'], {
          outputs: this.props.outputs,
          selection: this.state.selection,
          execute: this.execute.bind(this),
          select: this.select.bind(this),
          showHints: this.state.showHints,
          onMouseDown: this.mouseDown.bind(this),
          onMouseUp: this.mouseUp.bind(this) })
      );
    }
  }]);

  return LaconaView;
})(_React2['default'].Component);

exports['default'] = LaconaView;

LaconaView.defaultProps = {
  outputs: [],
  update: function update() {},
  cancel: function cancel() {},
  change: function change() {},
  execute: function execute() {},
  select: function select() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  userInteracted: function userInteracted() {},
  clearPrefix: function clearPrefix() {}
};
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./input":122,"./options":125,"lacona-util-fulltext":48}],124:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireDefault(_import);

var _React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _React2 = _interopRequireDefault(_React);

var Placeholder = (function (_React$Component) {
  function Placeholder() {
    _classCallCheck(this, Placeholder);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Placeholder, _React$Component);

  _createClass(Placeholder, [{
    key: 'render',
    value: function render() {
      var _this = this;

      return _React2['default'].createElement(
        'div',
        { className: 'placeholder' },
        _import2['default'].chain(this.props.item.placeholderTexts).map(function (desc, index) {
          var className = 'placeholder-component descriptor-' + (_this.props.item.argument ? '' : _import2['default'].kebabCase(desc));
          return [_React2['default'].createElement(
            'div',
            { className: 'placeholder-component category-conjunction', key: index + ',' },
            ', '
          ), _React2['default'].createElement(
            'div',
            { className: className, key: index },
            desc
          )];
        }).flatten().rest().value()
      );
    }
  }]);

  return Placeholder;
})(_React2['default'].Component);

//
// function getCorners(elem, parentBoundingRect) {
//   const rects = elem.getClientRects()
//   const bounds = elem.getBoundingClientRect()
//
//   return {
//     topLeft: rects[0].left - parentBoundingRect.left,
//     topTop: rects[0].top - parentBoundingRect.top,
//     bottomRight: _.last(rects).right - parentBoundingRect.left,
//     bottomTop: _.last(rects).top - parentBoundingRect.top,
//     boundRight: bounds.right - parentBoundingRect.left,
//     wrapped: rects.length > 1
//   }
// }

var LaconaOption = (function (_React$Component2) {
  function LaconaOption() {
    _classCallCheck(this, LaconaOption);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(LaconaOption, _React$Component2);

  _createClass(LaconaOption, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var nextProps = arguments[0] === undefined ? {} : arguments[0];

      var words = _React2['default'].findDOMNode(this.refs.words);
      var descs = _React2['default'].findDOMNode(this.refs.descriptors);
      //
      var wordsRect = words.getBoundingClientRect();
      // const descsRect = descs.getBoundingClientRect()

      var all = _import2['default'].zip(_import2['default'].toArray(words.children), _import2['default'].toArray(descs.children));
      // _.toArray(descs.getElementsByClassName('spacer-left')),
      // _.toArray(descs.getElementsByClassName('spacer-right'))

      // let lastWordTop, lastDescTop

      _import2['default'].forEach(all, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var word = _ref2[0];
        var desc = _ref2[1];

        var rects = word.getClientRects();
        var rect = rects[0];
        var lines = _import2['default'].groupBy(rects, 'top');
        var keys = Object.keys(lines);
        if (keys.length > 1) {
          var firstLineRects = lines[keys[0]];
          var secondLineRects = lines[keys[1]];
          if (_import2['default'].last(firstLineRects).right - firstLineRects[0].left < 50 && _import2['default'].last(secondLineRects).right - secondLineRects[0].left >= 50) {
            rect = secondLineRects[0];
          }
        }

        // if (rects[0].right - rects[0].left < 100) {
        //   i = _.findIndex(rects, rect => rect.top > rects[0].top)
        //   if (i === -1) i = 0
        // }

        desc.style.left = '' + (rect.left - wordsRect.left) + 'px';
        desc.style.top = '' + (rect.top - wordsRect.top + 6) + 'px';
      });
    }
  }, {
    key: 'render',

    //   if (nextProps.option === this.props.option) return
    //
    //   const items = _.zip(
    //     _.toArray(React.findDOMNode(this.refs.descriptors).children),
    //     _.toArray(React.findDOMNode(this.refs.words).children)
    //     // _.toArray(React.findDOMNode(this.refs.invisDescriptors).children),
    //     // _.toArray(React.findDOMNode(this.refs.invisWords).children)
    //   )
    //
    //   let descriptorPositions = [0, 0]
    //   let previousTop = 0
    //   let previousEnd = 0
    //
    //   _.forEach(items, ([descriptor, word]) => {
    //     if (word.offsetTop > previousTop) previousEnd = 0
    //
    //     previousTop = word.offsetTop
    //     const max = Math.max(word.offsetLeft, previousEnd)
    //     const vert = word.offsetTop - 20
    //     descriptor.style.textIndent = `${max + 5}px`
    //     previousEnd = descriptor.offsetWidth
    //     descriptor.style.top = `${vert}px`
    //
    //     // if (wordTop > descriptorPositions[1]) {
    //     //   descriptorPositions[0] = 0
    //     // }
    //     // const xPos = Math.max(descriptorPositions[0], word.offsetLeft)
    //     // descriptorPositions = [
    //     //   xPos + (descriptor.offsetWidth - (parseInt(descriptor.style.textIndent) || 0)),
    //     //   wordTop
    //     // ]
    //     // descriptor.style.textIndent = `${xPos}px`
    //     // descriptor.style.top = `${word.offsetTop - 20}px`
    //     // if (annoPos == null) annoPos = iDescriptor.offsetLeft
    //     // const marg = Math.max(iWord.offsetLeft - annoPos + iWord.offsetWidth - iDescriptor.offsetWidth, 0)
    //     // descriptor.style.marginRight = `${marg}px`
    //     // annoPos += iDescriptor.offsetWidth + marg + 5
    //     //
    //     // annotation.style.width = 'auto'
    //     // const max = Math.max(content.offsetLeft - annotation.offsetLeft + content.offsetWidth, annotation.offsetWidth + 1)
    //     // annotation.style.width = `${max}px`
    //   })
    // }
    //
    value: function render() {
      // const words = _.chain(['match', 'suggestion', 'completion'])
      //   .map(type => this.props.option[type])
      //   .flatten()
      //   .map((item, index) => {
      //     const className = `word descriptor-${_.kebabCase(item.topLevelDescriptor)}`
      //     return (
      //       <div className={className} key={index}>
      //         {item.placeholder ?
      //           <Placeholder item={item} key={index} /> :
      //           <div className={`word-component ${item.input ? ' highlighted' : ''} category-${item.category}`} key={index}>{item.string}</div>
      //         }
      //       </div>
      //     )
      //   })
      //   // .map(type => _.map(this.props.option[type], word => ({word, type})))
      //   // .flatten()
      //   // .reduce((acc, item) => {
      //   //   const last = _.last(_.last(acc))
      //   //   if (last && last.word.topLevelDescriptor === item.word.topLevelDescriptor) {
      //   //     _.last(acc).push(item)
      //   //   } else {
      //   //     acc.push([item]);
      //   //   }
      //   //   return acc
      //   // }, [])
      //   .value()
      var itemGroups = _import2['default'].chain(this.props.option.words).reduce(function (acc, item) {
        var last = _import2['default'].last(_import2['default'].last(acc));
        if (last && last.argument === item.argument) {
          _import2['default'].last(acc).push(item);
        } else {
          acc.push([item]);
        }
        return acc;
      }, []).value();

      var descriptors = _import2['default'].chain(itemGroups).map(function (itemGroup, index) {
        if (itemGroup.length === 1 && itemGroup[0].placeholder) {
          return _React2['default'].createElement('div', { className: 'descriptor', key: index });
        } else {
          var first = _import2['default'].first(itemGroup);
          var _className = 'descriptor descriptor-' + _import2['default'].kebabCase(first.argument) + ' category-' + first.category;
          return _React2['default'].createElement(
            'div',
            { className: _className, key: index },
            first.argument
          );
        }
      })
      // .map(elem => [<div className='spacer-left' />, elem, <div className='spacer-right' />])
      .flatten().value();

      var words = _import2['default'].map(itemGroups, function (itemGroup, index) {
        var first = _import2['default'].first(itemGroup);
        var className = 'word descriptor-' + _import2['default'].kebabCase(first.argument);

        return _React2['default'].createElement(
          'div',
          { className: className, key: index },
          _import2['default'].map(itemGroup, function (item, index) {
            if (item.placeholder) {
              return _React2['default'].createElement(Placeholder, { item: item, key: index });
            } else {
              var _className2 = 'word-component' + (item.input ? ' highlighted' : '') + ' category-' + item.category + '' + (item.fallthrough ? ' fallthrough' : '');
              return _React2['default'].createElement(
                'div',
                { className: _className2, key: index },
                item.text
              );
            }
          })
        );
      });

      var className = 'option' + (this.props.selected ? ' selected' : '');
      return _React2['default'].createElement(
        'div',
        {
          className: className,
          onMouseOver: this.props.select,
          onClick: this.props.execute,
          onMouseDown: this.props.onMouseDown,
          onMouseUp: this.props.onMouseUp },
        _React2['default'].createElement(
          'div',
          { className: 'hint' },
          this.props.hint
        ),
        _React2['default'].createElement(
          'div',
          { className: 'descriptors', ref: 'descriptors' },
          descriptors
        ),
        _React2['default'].createElement(
          'div',
          { className: 'words', ref: 'words' },
          words
        )
      );
    }
  }]);

  return LaconaOption;
})(_React2['default'].Component);

exports['default'] = LaconaOption;
module.exports = exports['default'];
//   const descCorners = getCorners(desc, descsRect)
//   const wordWrappedBetween = wordCorners.topTop > lastWordTop
//   const descWrappedBetween = descCorners.topTop > lastDescTop
//   lastWordTop = wordCorners.topTop
//   lastDescTop = descCorners.topTop
//
//   let leftSpacing = 0, rightSpacing = 0
//
//   // if (!descWrappedBetween) {
//     leftSpacing = Math.max(wordCorners.topLeft - descCorners.topLeft, 0)
//   // }
//
//   rightSpacing = Math.max(wordCorners.bottomRight - descCorners.bottomRight - leftSpacing, 0)
//
//   leftSpacer.style.width = `${leftSpacing}px`
//   rightSpacer.style.width = `${rightSpacing}px`
// })
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],125:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _React2 = _interopRequireDefault(_React);

var _Option = require('./option');

var _Option2 = _interopRequireDefault(_Option);

var _fulltext = require('lacona-util-fulltext');

var _fulltext2 = _interopRequireDefault(_fulltext);

var Options = (function (_React$Component) {
  function Options() {
    _classCallCheck(this, Options);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Options, _React$Component);

  _createClass(Options, [{
    key: 'render',

    // componentDidUpdate() {
    //   const scrolledDiv = React.findDOMNode(this.refs.options)
    //   const scrolledAmount = scrolledDiv.scrollTop
    //   const scrollHeight = 400
    //
    //   const selectedDiv = React.findDOMNode(this.refs.selection)
    //   const divHeight = 40
    //   const divPos = this.props.selection * 40
    //
    //
    //   if (divPos < scrolledAmount) {
    //     scrolledDiv.scrollTop = divPos
    //   } else if (divPos > scrollHeight + scrolledAmount - divHeight) {
    //     scrolledDiv.scrollTop = divPos - (scrollHeight - divHeight)
    //   }
    // }
    //
    value: function render() {
      var _this = this;

      var divs = this.props.outputs.map(function (option, index) {
        var select = function select() {
          return _this.props.select(index);
        };
        var execute = function execute() {
          return _this.props.execute(index);
        };

        var hint = _this.props.showHints ? index === _this.props.selection ? '↩' : index < 10 ? '⌥' + index : '' : '';

        return _React2['default'].createElement(_Option2['default'], {
          key: index,
          selected: index === _this.props.selection,
          option: option,
          select: select,
          execute: execute,
          onMouseDown: _this.props.onMouseDown,
          onMouseUp: _this.props.onMouseUp,
          hint: hint });
      });

      return _React2['default'].createElement(
        'div',
        { className: 'options', ref: 'options' },
        divs
      );
    }
  }]);

  return Options;
})(_React2['default'].Component);

exports['default'] = Options;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./option":124,"lacona-util-fulltext":48}],126:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _pageJsx = require('./page.jsx');

var _pageJsx2 = _interopRequireDefault(_pageJsx);

var _detect = require('./detect');

var _detect2 = _interopRequireDefault(_detect);

_reactAddons2['default'].render(_reactAddons2['default'].createElement(_pageJsx2['default'], { isMobile: _detect2['default'] }), document.getElementById('page'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./detect":1,"./page.jsx":4}]},{},[126]);
