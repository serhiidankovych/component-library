# React Component Library — Front-End Engineer Assessment

This repository contains a small React component library developed as part of a front-end engineer test assessment. The project is built with **Next.js** and **TypeScript**, and all components are documented and showcased in **Storybook** for easy exploration and testing.


## Components

### Input Component

* **Behavior:**

  * If `type="password"`, displays an eye icon to toggle password visibility.
  * If `clearable={true}`, shows a small "X" button to clear the input value.
* **Storybook Examples:**

  * Text input
  * Password input with visibility toggle
  * Number input
  * Variants with and without the clearable option

<p align="center">
  <img width="400" height="120" src="https://github.com/user-attachments/assets/9443f160-9011-4fac-8622-1cad0fe88789" alt="Input examples" />
  <img width="400" height="120" src="https://github.com/user-attachments/assets/20e52054-300a-4832-873f-ae882399abe8" alt="Input examples" />
</p>


### Toast Component

* **Behavior:**

  * Appears at the bottom-right corner of the screen.
  * Auto-dismisses after a configurable duration.
  * Includes smooth transitions (fade and slide effects).
  * Optional manual close button.

* **Storybook Examples:**

  * Variants for different toast types (success, error, warning, info).
  * Different durations for auto-dismissal.
  * Option to show or hide the close button.

<p align="center">
  <img width="400" height="120" src="https://github.com/user-attachments/assets/c074427c-e6ae-4940-afd6-21c1d8ff2679" alt="Toast examples" />
  <img width="400" height="120" src="https://github.com/user-attachments/assets/da8425c5-d1c0-43b1-a944-ab566d038f5b" alt="Toast examples" />
</p>


### Sidebar Menu Component

* **Behavior:**

  * Slides in from the right side of the screen.
  * Supports nested submenus with accordion or expandable behavior.
  * Closes automatically when clicking outside (on the overlay background).

* **Storybook Examples:**

  * Render with 1-level and 2-level nested menu items.
  * Demonstrates open and closed states.

<p align="center">
  <img width="450" height="530" src="https://github.com/user-attachments/assets/26e461fe-a106-4bbb-b797-0fc356862538" alt="Sidebar Menu example" />
  <img width="450" height="530" src="https://github.com/user-attachments/assets/36ecba93-ed3c-40b3-8339-ed653d7e1315" alt="Sidebar Menu example" />
</p>

## Storybook

Explore all components interactively in Storybook, complete with usage examples, variants, and states.

<p align="center">
  <img width="1854" height="945" src="https://github.com/user-attachments/assets/c8fa9650-bf98-46fa-bb7f-fcf1b3180548" alt="Storybook UI" />
</p>

## DEV commands

| Script              | Command                   | Description                                                    |
| ------------------- | ------------------------- | -------------------------------------------------------------- |
| **dev**             | `npm run dev`             | Start Next.js development server (Turbopack)                   |
| **lint**            | `npm run lint`            | Run linter to check code quality                               |
| **storybook**       | `npm run storybook`       | Launch Storybook UI at [localhost:6006](http://localhost:6006) |
| **build-storybook** | `npm run build-storybook` | Build static Storybook for production deployment               |

