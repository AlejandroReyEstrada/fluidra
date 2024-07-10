Feature: Search for information about 'automation' on Google

  Scenario: Check the year of the first automated process
    Given A unlogged user search "automation history" in Google
    When The user select "Wikipedia" to read more
    Then The user checks the year when the first automated process was done
