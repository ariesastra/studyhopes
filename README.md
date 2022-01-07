Welcome candidate and thank you for taking the time to complete the ErudiFi take-home challenge for our senior frontend engineer position.

The goal of this challenge is to build out a "School Online Submission" interactive website.

You will have 2 days to complete the assignment. Please clone this repository. Once you have completed your test, upload it on your personal GitHub and reply the email with a link to a github repository and instructions on how to install and run the application.

## Rules

1. Demonstrate use of React hooks.
2. Demonstrate knowledge of component modularization.
3. Utilize CSS/SCSS to create the layout and components of the page.
4. Create components as you feel is best suited for your solution.
5. Make comment and clean code.
6. Use TypeScript is a plus.
7. Add tests suite is a plus.
8. You can use Bootsrap or any CSS-Framework, but building components with your own CSS/SCSS is a plus.

## Requirements

### 1. Homepage

Homepage should be consist of "School Online Submission" text. And also Login and Register button.


### 2. Login Page

Display the login form consist of `email` and `password`, both field is required.

When form is submitted, send the data to the API. 
Save the access token for next API call and mark user as logged in.

**API Endpoints for this page:**

`POST http://localhost:3000/api/login`

### 3. Registration Page

Display the registration form consist of:

`first_name` (required)

`last_name`,

`email` (required),

`phone` (required),

`country_id` (select box, required)


When form is submitted, send the data to the API.
Save the access token for next API call and mark user as logged in.

**API Endpoints for this page:**

```GET http://localhost:3000/api/countries```

```POST http://localhost:3000/api/register```


### 4. Course Application Page

The idea of this page is to allow user to submit application for selected school/university and studies.

**Requirements:**

This page can only be accessed by logged in user. If NON logged in user trying to access this page, redirect to login page.

Display application form consist of:

`first_name` (required, predefined from profile data)

`last_name` (optional, predefined from profile data)

`email` (required, predefined from profile data)

`phone` (required, predefined from profile data)

`address` (required, predefined from profile data)

`school_id` (required, select box)

`study_id` (required, select box)

You have to call API to get profile data, schools data, and studies data.

Display summary cost of the selected study in the box before submit button (cost/price value can be get in the studies API).

When form is submitted, send the data to the API.

**API Endpoints for this page:**

```GET http://localhost:3000/api/profile```

```GET http://localhost:3000/api/schools```

```GET http://localhost:3000/api/studies```

```POST http://localhost:3000/api/apply```

### 5. Logout

Logout button/link can be placed somewhere in the Course Application Page. When this button/link is clicked, call the logout API 
and delete the access token, and redirect to login page.


## Note

Data returned from the API just a static data, don't worry about that, we only test your ability to build the entire project and not the data that you submitted.


## Getting Started with Project Template

This is a [Next.js](https://nextjs.org/) project.

First, install dependencies:

```bash
yarn install
```


Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
