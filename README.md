# Read Journey App

## Description

The Read Journey app is created for users who want to keep track of reading data. Here you can find books recommended by users, as well as add your own and keep statistics on your reading progress.

The app boasts an adaptive design, ensuring a seamless experience across various devices:
- _Mobile_: Responsive design starting from 320px, with adaptive adjustments from 375px.
- _Tablet_: Support starting from 768px.
- _Desktop_: Optimized for screens wider than 1440px.

[Repository on GitHub](https://github.com/kyr13nko/read-journey-app) | [Live page on Vercel](https://read-journey-app.vercel.app/register) | [Design on Figma](https://www.figma.com/design/z3m0rdBcEfLTJUBDkAKhWQ/ReadJourney)

## Technologies

`HTML5/CSS3` `JavaScript` `React` `Vite` `React Toolkit` `React Router` `Axios` `Formik & Yup` `Responsive design` `Styled components`

## Structure

**_Register / Login Page:_** In order to start using the application, you need to register or log in. After that, it redirects you to the application's home page.

<img src="/public/register_page.png" alt="Register page screenshot" width="800">

**_Home / Recommended Page:_** This page displays a list of recommended books that are offered to the user. Here, you can select a particular book and click on it to open a modal window with detailed info and the ability to add the book to your library. You can also search for a specific book by title or author.

<img src="/public/home_page.png" alt="Home/Recommended page screenshot" width="400"> <img src="/public/recommended_book.png" alt="Recommended page screenshot" width="400">

**_My Library Page:_** This page displays a list of books added to the user's library. Here you can add a book of your own, as well as filter existing books by their reading status: books in progress, not started reading, or already read. Clicking on each book opens a modal window with detailed information about the book, as well as the ability to go to the book's reading page.

<img src="/public/my_library_page.png" alt="My Library page screenshot" width="800">

**_Reading Page:_** This page shows the book and the progress of the book on the Dairy and Statistics tabs. You can mark the start and end pages here. If you mark the last page read, a modal window opens with a message that the book is finished.

<img src="/public/reading_page.png" alt="Reading page screenshot" width="400"> <img src="/public/reading_page_read_book.png" alt="Reading page Modal screenshot" width="400">

**_Reading Page Dairy / Statistics:_** On the "Dairy" tab, we see the percentage of the book read, the number of pages read per day and per hour, and the number of pages read per hour is calculated. All this is filtered by day. On the "Statistics" tab, we see the total number of unique pages read, as well as the percentage progress of the reading.

<img src="/public/reading_page_dairy.png" alt="Dairy Reading page screenshot" width="400"> <img src="/public/reading_page_statistics.png" alt="Statistics Reading page screenshot" width="400">

## Contributor

Hryhorii Kyriienko: [GitHub](https://github.com/kyr13nko) | [LinkedIn](https://www.linkedin.com/in/hryhorii-kyriienko/) | [Telegram](https://t.me/kyr13nko)
