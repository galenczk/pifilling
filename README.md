# PiFilling - Galen Ciszek's Pie Chart Rendering Microservice for CS361

Pifilling is a piechart rendering microservice that I created for Software Engineering I at Oregon State University.  Pifilling is meant to support my class partner Coleton's class project.   

Pifilling allows a user to render a pie chart based on a dataset they send as a POST request.  The service will return the URL of a rendered piechart
that can then be included in a webpage, or downloaded as a .PNG file.

## Requesting Data

To request a chart from the service, please send a POST request with the body containing an object in the following format:

```
{
  labels: ["firstLabel", "secondLabel"],
  datasets: [{ data: [firstLabelValue, secondLabelValue] }],
}
```

The indexing of the labels and data values will be matched (i.e. the first label in the `labels` list will label the first value in the `data` list).

Labels need to be strings.
Values need to be integers.

### Example

```
onClick={async () => {
          Axios.post(
            "https://pifilling.vercel.app/api",

            {
              labels: ["Groceries", "Entertainment"],
              datasets: [{ data: [10, 100] }],
            }


          ).then((res) => {
            console.log(res.data.url);
          });
        }}
```

## Receiving Data

The URL of the rendered pie chart will be contained in the object reference
"response.data.url".  

The console.log statement in the example used above results in the following:

![Returned URL](/README_images/returned_URL.png)

By browsing to this URL, the following image is displayed:

![Example pie chart](/README_images/returned_chart.png)

This URL can also be used as the src value for an img tag in a DOM.

## How it works

This microservice relies on a series of dependencies:

- A node library called Chart.js provides the underlying chart rendering 
functionality.

- An API called Quickchart serves as a wrapper around Chart.js

- Quickchart also has a node library, Quickchart-js, which generates a URL for 
a Quickchart API call from a Chart.js parameter object.  This is what I use to 
generate the microservice's response.    

My microservice receives the client's POST request with their chart parameters 
and incorporates these into a Chart.js configuration object.  This object is 
passed to Quickchart-js to generate a URL.  This URL is passed back to the 
client as a response.

![UML outline of the microservice functionality](/README_images/UML.png)

### This seems very complicated, why not simplify?

My first idea was to build my own API wrapper around Chart.js, but returning 
a URL to an image (what my partner needed) proved difficult with this approach.

The implementation described above ends up being very simple, just a little 
complicated to explain.
 
## Thank you 
Please enjoy using this service and direct any questions or comments to ciszekg@oregonstate.edu.
