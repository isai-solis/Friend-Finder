# Friend-Finder
Friend Finder is a matchmaker application that displays a person similar to the user based on the user's survey results. 

![Survey Image](app/data/public/images/home_page.PNG)

The user is prompted to give some information and take a brief survey.

![Survey Image](app/data/public/images/survey_questions.PNG)

There is a list of 6 individuals with predefined personal preferences. Their information is accessible through the Friends List link at the bottom of the page.

![Survey Image](app/data/public/images/friends_list_data_json.PNG)

The app takes the difference between each of the user's survey responses and the predefined individual preferences of the 6 individuals looking for the lowest total sum of those differences.  

The result is a person more similar to the user and a potetial friend.

If the user fails to complete the survey before submitting, then an instructional modal will appear.

![Survey Image](app/data/public/images/incomplete_survey_error_modal.PNG)