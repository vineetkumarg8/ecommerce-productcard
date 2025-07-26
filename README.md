## Run Locally

Clone the project

```bash
  git clone https://dredsoft-admin@bitbucket.org/dredsoft/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## ProductCard Component

### Layout Approach
The ProductCard component uses a **Bootstrap 5 grid system** with flexbox-based card layout for consistent structure and spacing. Each card utilizes `d-flex flex-column` to ensure proper content distribution with the price section pushed to the bottom using `mt-auto`, creating uniform card heights across different screen sizes.

### Responsiveness Considerations
The component implements a **mobile-first responsive design** using Bootstrap's responsive grid classes (`col-lg-3 col-md-4 col-sm-6`) to display 4 cards on large screens, 3 on medium, 2 on small, and 1 on extra-small devices. Custom CSS media queries handle specific adjustments like image heights (250px → 200px → 180px) and text sizing to maintain readability and visual hierarchy across all breakpoints.
