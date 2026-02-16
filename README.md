# COLORS Web Application

## Overview

COLORS is a simple LAMP stack web application that allows users to:

- Log in with a username and password
- Change their username
- Add and store color preferences
- Search previously saved colors

This project demonstrates full-stack development using HTML, CSS, and JavaScript on the frontend connected to a PHP/MySQL backend through API endpoints.

This README assumes the reader has not attended the lab sessions.

---

## Technologies Used

- Linux
- Apache
- MySQL
- PHP
- HTML
- CSS
- JavaScript
- MD5 hashing (for password handling)

---

## Project Structure

```
colors-lamp/
│
├── public/
│   ├── index.html
│   ├── color.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── code.js
│       └── md5.js
│
├── api/
│   ├── Login.php
│   ├── AddColor.php
│   └── SearchColors.php
│
└── README.md
```

---

## Setup Instructions

1. Install a LAMP environment (Linux, Apache, MySQL, PHP).
2. Create a MySQL database.
3. Create tables for users and colors.
4. Update database credentials inside the PHP API files.
5. Place the project inside your Apache web directory (e.g., `/var/www/html/`).
6. Restart Apache.
7. Open the application in your browser.

---

## How to Run

1. Navigate to the application in your browser (e.g., `http://localhost/public/index.html`).
2. Log in using credentials stored in the database.
3. After logging in, you can:
    - Change your username
    - Add new colors
    - Search saved colors

---

## Assumptions and Limitations

- Passwords are hashed using MD5 and are not secure for production systems.
- No advanced security hardening is implemented.
- The application is intended for educational purposes.
- The project assumes it is running in a local LAMP environment.
- Passwords, API keys, and server-specific configuration files should not be committed to the repository.
