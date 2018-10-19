Feature: Turmas list

  @run
  Scenario: Open turmas page to load turmas cards
    Given I go to the following page "http://localhost:4200"
    And I click on "Menu Item" button on "Nav Menu" with the text "Adicionar Turma"
    And I fill in "Name Input" on "Add Turma" with the value "Paradigmas"
    And I fill in "Professor Input" on "Add Turma" with the value "Adelina"
    And I select the value "noite" on "turno" dropdown on "add turma"
    And I click on "Add button" on "Add Turma"
    When I can see "Card title" that has the text "Paradigmas" displayed on "Turmas"
    Then I can see "View Button" on turma "Paradigmas" card
    And I can see "Edit Button" on turma "Paradigmas" card
    And I can see "professor label" on turma "Paradigmas" card with the text "Adelina"

  @run
  Scenario: Filter Turma
    Given I click on "Menu Item" button on "Nav Menu" with the text "Turmas"
    When I fill in "Filter" on "Turmas" with the value "Paradigmas"
    Then I can see "Card title" that has the text "Paradigmas" displayed on "Turmas"
    And I fill in "Filter" on "Turmas" with the value "empty"
    And I can NOT see "Card title" that has the text "Paradigmas" present on "Turmas"
