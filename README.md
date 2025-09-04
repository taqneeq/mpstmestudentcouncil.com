# Student Council Website

This project is a website made for the college student council. It leverages Next.js and Tailwind CSS to deliver a modern, responsive design.

## Project Structure

- **app/**  
  Contains the main application components, pages, and layouts.  
  - **layout.tsx**: Main layout for the website.  
  - **(calendar)/**: Calendar section with its own pages. See app/(calendar)/page.tsx.
  - **(committees)/**: Committees section with nested pages and categories. See app/(committees)/layout.tsx.
  - **(default)/**: Default pages.
  - **(fests)/**: Fest pages and details.
  - **css/**: Contains various CSS files such as morecards.css, changes.css, etc.
  - **additional-styles/**: More CSS files for range slider, theme, toggle switch, and utility patterns.

- **components/**  
  Reusable UI components like banners, feature sections, modal videos, etc.

- **lib/**  
  Contains data and utility functions. For example, committee data is stored in lib/committeesData.ts.

- **public/**  
  Public assets such as images and global styles (e.g., overall.css).

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/taqneeq/mpstmestudentcouncil.com
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

## Production

To build and deploy the project, run:

```sh
npm run build
npm run start
```

# Last Major Change Contributor:

## Kartik Jain

- [jkartik.in](https://jkartik.in)

- [GitHub](https://github.com/KartikJain14)

- [LinkedIn](https://www.linkedin.com/in/KartikJain1410)

## Parth Gupta

- [parthg.me](https://parthg.me)

- [GitHub](https://github.com/parthg2112)

- [LinkedIn](https://www.linkedin.com/in/parthg21)

## Yash Deshpande

- [yashd.in](https://yashd.in)

- [GitHub](https://github.com/yashd-dev)

- [LinkedIn](https://www.linkedin.com/in/yashd-dev)