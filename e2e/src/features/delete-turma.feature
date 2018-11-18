Feature: Delete Turma

  @run
  Scenario: Delete turma
    Given I go to the following page "http://localhost:4200"
    And I click on "Menu Item" button on "Nav Menu" that has the text "Adicionar Turma"
    And I fill in "Name Input" on "Add Turma" with the value "Calculo"
    And I fill in "Professor Input" on "Add Turma" with the value "Everaldo"
    And I click on "Add button" on "Add Turma"
    And I can see "Card title" that has the text "Calculo" displayed on "Turmas"
    And I click on "Card title" that has the text "Calculo" on "Turmas"
    When I click on "Delete Button" on "Turma Detail"
    And I click on "Delete Modal Yes Button" on "Turma Detail"
    And I can see "Landing page" on "Turmas" displayed
    And I can NOT see "Card title" that has the text "Calculo" displayed on "Turmas"
