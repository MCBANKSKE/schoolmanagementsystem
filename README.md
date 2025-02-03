# School Management System  

A comprehensive web-based school management system built with React and TailwindCSS.  

## Features  

- **Multi-user Role System**  
  - **Admin**: Manage users, courses, and system settings  
  - **Teacher**: Manage classes, assignments, and grades  
  - **Student**: View courses, grades, and make fee payments  

- **User Management**  
  - Add/Edit/Delete users (Admin only)  
  - Role-based access control  
  - Profile management  

- **Academic Management**  
  - Course management  
  - Assignment tracking  
  - Grade management  
  - Attendance tracking  

- **Fee Management**  
  - Online fee payment  
  - Payment history  
  - Digital receipts  
  - Late fee calculation  

## Screenshots  

### Landing Page  
![Landing Page](\images\landing.PNG)  

### Login Page  
![Login Page](\images\loginpage.PNG)  

### Student Portal  
![Student Portal](\images\studentportal.PNG)  

### Teacher Portal  
![Teacher Portal](\images\teacherportal.PNG)  

## Dependencies  

- React 18  
- TailwindCSS  
- Font Awesome 6.5.1  
- Babel Standalone  

## Getting Started  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/MCBANKSKE/schoolmanagementsystem.git
   cd school-management-system
   ```  

2. **Open the project**  
   - Simply open the `index.html` file in your web browser  
   - No build process required  

3. **Default Login Credentials**  

   **Admin**:  
   - Username: `admin`  
   - Password: `admin123`  

   **Teacher**:  
   - Username: `teacher`  
   - Password: `teacher123`  

   **Student**:  
   - Username: `student`  
   - Password: `student123`  

## Project Structure  

```
├── index.html
├── styles/
│   ├── main.css
│   ├── landing.css
│   ├── auth.css
│   ├── portal.css
│   └── payments.css
├── utils/
│   ├── auth.js
│   └── payments.js
├── components/
│   ├── LandingPage/
│   ├── Auth/
│   ├── Portal/
│   ├── AdminPortal/
│   ├── TeacherPortal/
│   ├── StudentPortal/
│   └── Payments/
└── pages/
    ├── Landing.js
    ├── Login.js
    ├── AdminPortal.js
    ├── TeacherPortal.js
    ├── StudentPortal.js
    └── Payments.js
```

## Features Documentation  

### Admin Portal  
- **User Management**: Add, edit, and delete users  
- **Course Management**: Create and manage courses  
- **System Settings**: Configure system parameters  
- **View Reports**: Access system-wide statistics  

### Teacher Portal  
- **Class Management**: View and manage assigned classes  
- **Assignment Management**: Create and grade assignments  
- **Attendance Tracking**: Mark and monitor student attendance  
- **Grade Management**: Input and manage student grades  

### Student Portal  
- **Course View**: Access enrolled courses and materials  
- **Grade View**: Check grades and academic progress  
- **Attendance History**: View attendance records  
- **Fee Payment**: Make online payments and view history  

## Security Features  

- Role-based access control  
- Session management  
- Secure payment processing  
- Input validation  
- Error handling  

## Contributing  

1. Fork the repository  
2. Create your feature branch: `git checkout -b feature/my-feature`  
3. Commit your changes: `git commit -am 'Add my feature'`  
4. Push to the branch: `git push origin feature/my-feature`  
5. Submit a pull request  

## License  

This project is licensed under the MIT License - see the LICENSE file for details.  

## Need Help?  

If you need any help, contact us via:  
📧 Email: info@rmsystems.site  
📱 WhatsApp: +254798808796  

