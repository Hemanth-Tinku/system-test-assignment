# Dashboard Application

## Overview

This is a modern, interactive dashboard application built using React.js. It features various components, including a sidebar and navbar, line charts for performance data, and a heat map table for displaying tabular data with color-coded cells based on values. The application is designed to provide a simple and clean user interface with real-time data visualization.

**[Live Demo](https://system-test-assignm-git-6c64a9-hemanth-kumars-projects-54558d95.vercel.app/login)**

## Admin Credentials

To access the application as an admin, use the following credentials:

- **Username**: `admin`
- **Password**: `password`

These credentials provide access to all features in the dashboard, including viewing performance metrics and data in the heat map table. Please ensure these credentials are kept secure.


### Features:
- **Sidebar and Navbar**: A flexible sidebar for easy navigation and a top navbar for quick access to logout functionality.
- **Performance Line Chart**: A chart displaying performance metrics over time with a dynamic dropdown to choose different metrics.
- **Heat Map Table**: A table displaying data in a color-coded heat map format, where the intensity of color is based on the values in each cell.
- **Responsive Design**: The application is fully responsive, ensuring a smooth user experience across all device sizes.

### Technologies Used:
- **React.js** for building the user interface.
- **Recharts** for rendering interactive charts.
- **CSS** (inline styles) and **custom components** for styling.
- **React Router** for handling navigation within the application.

## Components

### 1. **SidebarAndNavbar.jsx**
This component serves as the layout structure for the application, providing a sidebar and a top navbar. The sidebar contains navigation links, while the navbar includes a title and a logout button.

**Key Features**:
- Sidebar with navigation links
- Top navbar with logout functionality
- Layout designed for a responsive, clean UI

### 2. **PerformanceLineChart.jsx**
This component renders a performance line chart using `Recharts`. It displays various performance metrics over time and allows users to choose which metric to display using a dropdown.

**Key Features**:
- Dynamic line chart displaying performance metrics
- Dropdown to select different metrics for the chart
- Responsive container for chart resizing

### 3. **HeatMapTable.jsx**
The `HeatMapTable` component displays tabular data with color-coded cells based on the value of each cell. The color intensity is calculated dynamically based on the value in the cell.

**Key Features**:
- Table with dynamically color-coded cells
- Heatmap based on the values of the data
- Responsive and clean design

### 4. **Dashboard.jsx**
This is the main page of the application. It imports and combines the `SidebarAndNavbar`, `PerformanceLineChart`, and `HeatMapTable` components to create the dashboard interface.

**Key Features**:
- Contains the layout and functionality for the dashboard
- Displays charts and tables
- Handles state management for data visualization

## Folder Structure

The project has a clean and modular folder structure for easy navigation and maintenance. Below is the breakdown of the folder structure:

```plaintext
src/
├── components/                  # Contains reusable UI components
│   ├── SidebarAndNavbar.jsx      # Sidebar and navbar layout component
│   ├── PerformanceLineChart.jsx  # Line chart component for displaying performance metrics
│   └── HeatMapTable.jsx         # Table component with color-coded cells
├── pages/                        # Contains page-level components
│   └── Dashboard.jsx             # Main dashboard page, combines all components
└── styles/                       # Contains styling files for various components
    ├── sidebarAndNavbar.js       # Styles for SidebarAndNavbar component
    ├── performanceLineChart.js   # Styles for PerformanceLineChart component
    └── heatMapTable.js           # Styles for HeatMapTable component
