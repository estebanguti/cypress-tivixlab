Feature: Rent Car

    Scenario: User sould be able to search a car
    Given I go to search page
    When I search the rent car with the next values:
     | country | city   | model | pickupDate | dropOffDate |
     | Poland  | Cracow | Skoda | 2022-05-16 | 2022-05-17  |
    Then I should see the results displayed

    Scenario: User should be able to see car details
    Given I go to search page
    When I search the rent car with the next values:
     | country | city   | model | pickupDate | dropOffDate |
     | Poland  | Cracow | Skoda | 2022-05-16 | 2022-05-17  |
    And I select the car 2
    Then The user should see car details
    | title         | company      | location       | price | license | pickupDate | dropOffDate |
    | Skoda Octavia | Davis-Garcia | Poland, Cracow | 65    | 1C403   | 2022-05-16 | 2022-05-17  |

    Scenario: User should be able to rent a car
    Given I go to search page
    When I search the rent car with the next values:
     | country | city   | model | pickupDate | dropOffDate |
     | Poland  | Cracow | Skoda | 2022-05-16 | 2022-05-17  |
    And I select the car 2
    And I click on rent
    And I fill and submit the rent form:
     | name | lastName | card    | email             |
     | John | Doe      | 0123456 | john.doe@test.com |
    Then The API status code should be 200