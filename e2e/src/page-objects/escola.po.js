const { By } = require('selenium-webdriver');
module.exports = {
  'NAVMENU' : {
    'MENUITEM': linkLabel => By.xpath('//div[@class="navbar-nav"]//a[.="' + linkLabel + '"]'),
    'GLOBALSEARCH' : By.id('search-box'),
    'GLOBALSEARCHTOOLTIPCONTENT' : By.className('popover-body'),
    'GLOBALSEARCHTOOLTIPHEADER' : By.className('popover-header'),
    'SEARCHRESULT' : resultText => By.xpath('//*[contains(@class,"search-result")]//a[contains(.,"' + resultText + '")]')
  },
  'ADDTURMA' : {
    'NAMEINPUT' : By.id('nome'),
    'PROFESSORINPUT' : By.id('professor'),
    'TURNO': By.id('turno'),
    'ADDBUTTON' : By.className('btn btn-success'),
  },
  'TURMAS' : {
    'LANDINGPAGE' : By.id('turmas-container'),
    'FILTER' : By.id('filter-box'),
    'CARDTITLE' : titleLabel => By.xpath('//a[@class="mat-card-title"][.="' + titleLabel + '"]')
  },
  'TURMADETAIL': {
    'TURMANAME': By.id('turma-name'),
    'DELETEBUTTON': By.id('delete-turma-button'),
    'DELETEMODALTITLE' : By.className('modal-title'),
    'DELETEMODALNOBUTTON' : By.xpath('//button[.="No"]'),
    'DELETEMODALYESBUTTON' : By.xpath('//button[.="Yes"]')
  },
  'TURMACARD': {
    'VIEWBUTTON': cardTitle => By.xpath(
      '//mat-card//a[.="' + cardTitle +'"]//..//..//..//button[@class="view-button mat-icon-button"]'),
    'EDITBUTTON': cardTitle => By.xpath(
      '//mat-card//a[.="' + cardTitle +'"]//..//..//..//button[@class="edit-button mat-icon-button"]'),
    'PROFESSORLABEL': cardTitle => By.xpath(
      '//mat-card//a[.="' + cardTitle + '"]//..//..//*[@class="mat-card-subtitle"]')
  }
};
