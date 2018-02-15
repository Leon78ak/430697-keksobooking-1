'use strict';

(function () {
  window.PIN_ARROW_HEIGHT = 16;

  var map = document.querySelector('.map');
  var template = document.querySelector('template');
  var similarPinTemplate = template.content.querySelector('.map__pin');
  var similarPinsList = map.querySelector('.map__pins');

  var pinOffset = {
    y: similarPinTemplate.offsetHeight + window.PIN_ARROW_HEIGHT
  };
  /**
   * получает элемент метка из шаблона
   * @param  {Object} pin объект данных
   * @return {Element}
   */
  var getPinFromTemplate = function (pin) {
    var pinElement = similarPinTemplate.cloneNode(true);
    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.style = 'left: ' + (pin.location.x) + 'px; top:' + (pin.location.y + pinOffset.y) + 'px;';
    return pinElement;
  };

  /**
   * отрисовывает метку
   * @param {array.<Object>} pins
   * @return {[type]}      [description]
   */
  var renderPin = function (pins) {
    var fragmentPin = document.createDocumentFragment();
    pins.forEach(function (pin) {
      fragmentPin.appendChild(getPinFromTemplate(pin));
    });
    return fragmentPin;
  };

  similarPinsList.appendChild(renderPin(window.data));

})();
