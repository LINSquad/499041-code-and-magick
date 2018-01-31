'use strict';

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizard_names_copy = WIZARD_NAMES.slice();
var wizard_second_names_copy = WIZARD_SECOND_NAMES.slice();
var wizard_coat_copy = WIZARD_COAT_COLORS.slice();
var wizard_eyes_copy = WIZARD_EYES_COLORS.slice();



var randomElement = function (mass) {
  var randomNumber = Math.round((mass.length - 1) * Math.random());
  var element = mass[randomNumber];
  mass.splice(randomNumber, 1);
  return element;
};

var wizards = [
  {
    name: randomElement(wizard_names_copy) + randomElement(wizard_second_names_copy),
    coatColor: randomElement(wizard_coat_copy),
    eyesColor: randomElement(wizard_eyes_copy)
  },
  {
    name: randomElement(wizard_names_copy) + randomElement(wizard_second_names_copy),
    coatColor: randomElement(wizard_coat_copy),
    eyesColor: randomElement(wizard_eyes_copy)
  },
  {
    name: randomElement(wizard_names_copy) + randomElement(wizard_second_names_copy),
    coatColor: randomElement(wizard_coat_copy),
    eyesColor: randomElement(wizard_eyes_copy)
  },
  {
    name: randomElement(wizard_names_copy) + randomElement(wizard_second_names_copy),
    coatColor: randomElement(wizard_coat_copy),
    eyesColor: randomElement(wizard_eyes_copy)
  }
];

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');