// base dependency library, it should be only shared by `admin.js` and `application.js`.
import 'jquery'
import 'bootstrap/dist/js/bootstrap'



import RailsUjs from '@rails/ujs'
import Turbolinks from 'turbolinks'
import * as ActiveStorage from '@rails/activestorage'
import 'channels'
import Swipe from 'swipejs'
global.Swipe = Swipe
import interact from 'interactjs'
global.interact = interact
import hammer from 'hammerjs'
global.hammer = hammer

const images = require.context('images', true)
const imagePath = (name) => images(name, true)

RailsUjs.start()
Turbolinks.start()
ActiveStorage.start()

$(document).on('turbolinks:load', function(){
  $('[data-toggle="tooltip"]').tooltip()
})
