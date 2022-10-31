# PiFilling - Galen Ciszek's Pie Chart Rendering Microservice for CS361

This microservice allows a user to render a pie chart based on a dataset they 
send as a POST request.  The service will return the URL of a rendered piechart
that can then be included in a webpage, or downloaded as a .PNG file.

## Requesting Data

To request a chart from the service, please send a POST request with the body 
containing an object in the following format:

{
  labels: ["[firstLabel]", "[secondLabel]", ...],
  datasets: [{ data: [firstLabelValue], [secondLabelValue], ...] }],
}

The labels need to be strings.
The values within the data object need to be integers.

### Example

![Example POST call to the API](https://github.com/galenczk/pifilling/tree/main/README_images/example_POST_call.png?raw=true)

## Receiving Data

The URL of the rendered pie chart will be contained in the object reference
"response.data.url".  

The console.log statement in the example used above results in the following:

![Returned URL](/README_images/returned_URL.png?raw=true)

By browsing to this URL, the following image is displayed:

![Example pie chart](./README_images/returned_chart.png?raw=true)

This URL can also be used as the src value for an img tag in a DOM.

## Thank you 
Please enjoy using this service and direct any questions or comments to ciszekg@oregonstate.edu.