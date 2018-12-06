Feature: Add new Aluno
  @hold
  Scenario: Add a new aluno
    Given I go to the following page "http://localhost:4200"
    When I click on "Menu Item" button on "Nav Menu" that has the text "Adicionar Aluno"
    Then I am able to add a new aluno

  @run @setupScenario
  Scenario: Add a new turma
    Given I go to the following page "http://localhost:4200"
    When I click on "Menu Item" button on "Nav Menu" that has the text "Adicionar Turma"
    And I fill in "Name Input" on "Add Turma" with the value "Calculo"
    And I fill in "Professor Input" on "Add Turma" with the value "Everaldo"
    And I select the value "manha" on "turno" dropdown on "add turma"
    And I click on "Add button" on "Add Turma"
    Then I can see "Card title" that has the text "Calculo" displayed on "Turmas"

  @run
  Scenario: Add a new aluno
    Given I click on "Menu Item" button on "Nav Menu" that has the text "Adicionar Aluno"
    When I fill in "Name Input" on "Add Aluno" with the value "Matheus"
    And I fill in "Data de nascimento Input" on "Add Aluno" with the value "22/02/1990"
    And I fill in "cpf Input" on "Add Aluno" with the value "02585411256"
    And I click on "Genero Masculino Option" on "Add Aluno"
    And I can see "Genero Masculino Option" selected on "Add Aluno"
    And I can see "Genero Feminino Option" unselected on "Add Aluno"
    And I click on "Turmas dropdown" on "Add Aluno"
    And I click on "Turmas dropdown option" on "Add Aluno" that has the text "Calculo"
    And I press the key "Escape"
    And I click on "Submit button" on "Add Aluno"
    Then I can see "Card title" that has the text "Matheus" displayed on "Alunos"
