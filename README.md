# password-generator

Needs:
- click button to generate secure password
- after clicking button, you are presented with a series of prompts for password criteria
- after being prompted to select criteria, you are given options for which criteria to include in the password
- answer to each criteria prompt is validated and at least one character type should be selected
* store character types in separate arrays
* use random number selector to call on a specific value within array
- when all prompts are answered, password is generated that matches selected criteria
- password is either displayed in an alert or written to the page

Criteria:
- length of password (between 8 - 128 characters)
- character types: lowercase, uppercase, numeric, and/or special characters


Workflow:
1. "generate password" button is clicked
2. Alert (confirm option) is displayed where it says "please select which criteria to include"
3. Length is a user input
4. Character types are check boxes
5. Button to click "done" when finished selecting criteria
6. verify at least one option is clicked
7. password is generated

Thoughts:
- make one massive array with each character type identified?
- utilize for loop to build password (i < length specified by user)
- concatenate arrays together based on option specified (if uppercase is checked, concatenate char.toUpperCase)