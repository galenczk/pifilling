# PiFilling - Galen Ciszek's Pie Chart Rendering Microservice for CS361

This microservice allows a user to render a pie chart based on a dataset they 
send as a POST request.  The service will return the URL of a rendered piechart
that can then be included in a webpage, or downloaded as a .PNG file.

## Requesting Data
To request a chart from the service, please send a POST request with the body 
containing an object in the following format:

{
  labels: ["[labelOne]", "[labelTwo]", ...],
  datasets: [{ data: [labelOneValue], [labelTwoValue]] }],
}

The labels need to be strings.
The values within the data object need to be integers.
