# Google Search Front-End Project

This project is aimed at designing a front-end for Google Search, Google Image Search, and Google Advanced Search. The goal is to replicate the functionality and aesthetics of Google's search interfaces while understanding the basics of HTML forms and GET parameters.

## Background

In this project, we'll create HTML forms using `<form>` tags and `<input>` tags to build input fields for the forms. By sending data to Google's web server using existing routes, we'll understand how search queries are processed. 

## Getting Started

You can download the distribution code from [here](https://cdn.cs50.net/web/2020/spring/projects/0/search.zip) and unzip it. Alternatively, follow the steps outlined in the "Background" section above to create the `index.html` file manually.

## Specification

Your website must meet the following requirements:

- **Pages:** Your website should have at least three pages: one for regular Google Search (index.html), one for Google Image Search, and one for Google Advanced Search.
- **Navigation:** Each page should have links in the upper-right corner to navigate between Google Search, Image Search, and Advanced Search.
- **Google Search:** Users should be able to type in a query, click "Google Search," and be redirected to Google's search results page for that query.
- **Google Image Search:** Users should be able to type in a query, click a search button, and be taken to Google Image search results for that query.
- **Google Advanced Search:** Users should be able to provide input for four fields, resembling Google's own advanced search options. Clicking the "Advanced Search" button should take users to the search results page for their given query.
- **Aesthetics:** Your CSS should resemble Google's own aesthetics.
- **"I'm Feeling Lucky" Button:** Add an "I'm Feeling Lucky" button to the main Google Search page. Clicking this button should take users directly to the first Google search result for the query.

## How to Achieve This

- **Experiment:** Make Google searches and observe the resulting URL to determine parameter names.
- **Inspect:** Use browser developer tools to view details about requests your browser makes to Google.
- **View Source:** Right-click on Google's page and choose "View Page Source" to view the underlying HTML.
- **Hidden Input Fields:** To include input fields that users cannot see or modify, use "hidden" input fields.

## Note

When experimenting with the "I'm Feeling Lucky" button, you may encounter a redirect notice. This is expected due to a security feature implemented by Google.

---

Feel free to reach out if you have any questions or need further assistance!
