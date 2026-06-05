# AI Project Documentation Generator

AI Project Documentation Generator is a full-stack web application that helps users generate professional software project documents using Artificial Intelligence.

The application allows users to generate different types of documentation such as Project Proposals, Software Requirement Specifications (SRS), Business Requirement Documents (BRD), User Acceptance Testing (UAT) documents, and Presentation Content by simply providing project details.

This project was built to reduce the time spent creating documentation manually and to demonstrate the practical use of AI in software development and project management.

## Features

* Generate Project Proposals
* Generate Software Requirement Specifications (SRS)
* Generate Business Requirement Documents (BRD)
* Generate User Acceptance Testing (UAT) Documents
* Generate PPT Presentation Content
* AI-powered document generation using OpenRouter AI
* Download generated documentation as PDF
* Copy documentation to clipboard
* Modern and responsive user interface
* Markdown-based document formatting

## Technologies Used

### Frontend

* React.js
* Vite
* Axios
* React Markdown
* jsPDF
* CSS3

### Backend

* FastAPI
* Python
* OpenRouter API
* DeepSeek Chat V3

## Project Structure

```text
frontend/
│
├── src/
├── public/
├── package.json

backend/
│
├── main.py
├── gemini_service.py
├── requirements.txt
```

## How It Works

1. Select the type of document you want to generate.
2. Enter the project domain.
3. Enter relevant keywords.
4. Provide a project description.
5. Click on "Generate Project Documentation".
6. The AI generates a structured document based on the provided details.
7. Users can copy or download the generated document as a PDF.

## Purpose of the Project

The purpose of this project is to simplify the documentation process in software projects. Documentation is often repetitive and time-consuming, especially for students and developers working on multiple projects. By using AI, the application can generate well-structured documentation within seconds.

## Future Enhancements

* User authentication
* Document history and storage
* DOCX export support
* Multiple AI model integration
* Cloud deployment
* Team collaboration features

## Author

**Devika Sutar**

MCA Student

## Feedback

Suggestions and feedback are always welcome. Feel free to contribute or raise issues for improvements.
