# Frontend for Audiobookshelf Signup

## Description

This is a frontend application built with **Angular 18** designed to interact with the Audiobookshelf backend API. It enables users to register an account on the Audiobookshelf instance.

### Key Features

1. **User Registration**:  
   A simple and responsive form where users can input their `email`, `name`, and `password` to sign up.  
   The form sends the user data to the backend API for processing.

2. **Validation**:  
   - Real-time form validation to ensure correct input.
   - Displays error messages for invalid fields.

3. **API Integration**:  
   Communicates with the backend hosted on Vercel to handle user registration.

4. **Responsive Design**:  
   Fully responsive design optimized for mobile and desktop browsers.

---

## Setup and Installation

### Prerequisites

- **Node.js**: Version 16 or higher.
- **Angular CLI**: Install globally using `npm install -g @angular/cli`.

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mpenchenat93/signup-frontend-audiobookshelf.git
   cd frontend-angular-audiobookshelf
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open in your browser:
   Visit `http://localhost:4200`.

---

## Deployment

This project is optimized for deployment on **Vercel** or any static file hosting service like **Netlify** or **Firebase Hosting**.  
To build the project for production:
```bash
ng build --prod
```

Upload the contents of the `dist/` directory to your hosting platform.

---

## Environment Variables

change getApiUrl method from `src/app/api/api.service.ts`.

---

## License

This project is licensed under a Modified MIT License. The following conditions apply:

Mandatory Anonymization:
Any reuse, modification, or redistribution must remove all explicit or implicit references to Maria Valtorta, her writings, and any associated entities (e.g., the Maria Valtorta association or foundation).

Removal of Related Information:
All contact information, mentions, or links related to the Maria Valtorta association or foundation must be removed prior to redistribution.

The remainder of the project is licensed under the standard MIT terms, allowing free use, modification, and redistribution as long as these conditions are met and the copyright notice is preserved.

For the full license text, see the LICENSE file.

---

## Contact

For any questions or suggestions, please contact:

**Matthieu Penchenat**  
Email: [matthieu.penchenat@protonmail.com](mailto:matthieu.penchenat@protonmail.com)
LinkedIn: [Matthieu Penchenat](https://www.linkedin.com/in/penchenat-matthieu/)
