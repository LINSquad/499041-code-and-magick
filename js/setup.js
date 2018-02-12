'use strict';

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var WIZARD_FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var wizardNamesCopy = WIZARD_NAMES.slice();
var wizardSecondNamesCopy = WIZARD_SECOND_NAMES.slice();
var wizardCoatCopy = WIZARD_COAT_COLORS.slice();
var wizardEyesCopy = WIZARD_EYES_COLORS.slice();

var totalWizards = [wizardNamesCopy, wizardSecondNamesCopy, wizardCoatCopy, wizardEyesCopy];

var randomElement = function (mass) {
  var randomNumber = Math.round((mass.length - 1) * Math.random());
  var element = mass[randomNumber];
  mass.splice(randomNumber, 1);

  return element;
};

var wizards = totalWizards.map(function () {
  return {
    name: randomElement(wizardNamesCopy) + ' ' + randomElement(wizardSecondNamesCopy),
    coatColor: randomElement(wizardCoatCopy),
    eyesColor: randomElement(wizardEyesCopy)
  };
});

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupCoat = setup.querySelector('.setup-wizard').querySelector('.wizard-coat');
var setupEyes = setup.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupUserName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode !== ESC_KEYCODE) return;
  if (evt.target === setupUserName) {
    return false;
  }
  closePopup();
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
  	//tabindex="0";
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupCoat.addEventListener('click', function () {
  setupCoat.style.fill = WIZARD_COAT_COLORS[Math.round((WIZARD_COAT_COLORS.length - 1) * Math.random())];
});

setupEyes.addEventListener('click', function () {
  setupEyes.style.fill = WIZARD_EYES_COLORS[Math.round((WIZARD_EYES_COLORS.length - 1) * Math.random())];
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = WIZARD_FIREBALL_COLORS[Math.round((WIZARD_FIREBALL_COLORS.length - 1) * Math.random())];
});
