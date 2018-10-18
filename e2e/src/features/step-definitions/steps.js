const { Then, Helpers } = require('selenium-cucumber-easy');
const objects = require('../../page-objects/escola.po');

Then('I am able to add a new turma', async function () {
  await Helpers.writeText(objects['ADDTURMA']['NAMEINPUT'], 'Calculo');
  await Helpers.writeText(objects['ADDTURMA']['PROFESSORINPUT'], 'EVERALDO');
  await Helpers.clickOnElement(objects['ADDTURMA']['ADDBUTTON']);
  await Helpers.checkElementDisplayed(objects['TURMAS']['CARDTITLE']('Calculo'), true);
});

Then('I can see {string} on turma {string} card', async function (elementOnCard, turmaName) {
  elementOnCard = elementOnCard.toUpperCase().replace(/ /g, '');
  await Helpers.checkElementDisplayed(objects['TURMACARD'][elementOnCard](turmaName), true);
});

Then('I can see {string} on turma {string} card with the text {string}', async function (elementOnCard, turmaName, professorName) {
  elementOnCard = elementOnCard.toUpperCase().replace(/ /g, '');
  await Helpers.checkElementText(objects['TURMACARD'][elementOnCard](turmaName), true, professorName);
});
