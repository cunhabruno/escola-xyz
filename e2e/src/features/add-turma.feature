Feature: Add new Turma

  @hold
  Scenario: Add a new turma
    Given I go to the following page "http://localhost:4200"
    When I click on "Menu Item" button on "Nav Menu" that has the text "Adicionar Turma"
    Then I am able to add a new turma

  @run
  Scenario: Add a new turma
    Given I go to the following page "http://localhost:4200"
    When I click on "Menu Item" button on "Nav Menu" that has the text "Adicionar Turma"
    And I fill in "Name Input" on "Add Turma" with the value "Calculo"
    And I fill in "Professor Input" on "Add Turma" with the value "Everaldo"
    And I select the value "manha" on "turno" dropdown on "add turma"
    And I click on "Add button" on "Add Turma"
    Then I can see "Card title" that has the text "Calculo" displayed on "Turmas"
