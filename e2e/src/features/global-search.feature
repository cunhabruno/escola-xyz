Feature: Global search


  @run
  Scenario: Search for a Turma
    Given I go to the following page "http://localhost:4200"
    When I mouse hover on "Global search" on "Nav Menu"
    Then I can see "Global Search Tooltip Content" on "Nav Menu" containing the text "Adicione o nome de uma turma ou aluno"
    Then I can see "Global Search Tooltip header" on "Nav Menu" containing the text "global search"

  @run
  Scenario: Search for a Turma
    Given I click on "Menu Item" button on "Nav Menu" with the text "Adicionar Turma"
    And I fill in "Name Input" on "Add Turma" with the value "Calculo"
    And I fill in "Professor Input" on "Add Turma" with the value "Everaldo"
    And I click on "Add button" on "Add Turma"
    And I can see "Card title" that has the text "Calculo" displayed on "Turmas"
    When I fill in "Global search" on "Nav menu" with the value "Calculo"
    And I click on "search result" link on "Nav Menu" with the text "Turma: Calculo"
    Then I can see "Turma Name" on "Turma Detail" with the text "CALCULO Details"
