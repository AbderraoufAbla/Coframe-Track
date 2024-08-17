
# Website Optimization Tool

## Overview

This project consists of a website optimization tool with the following components:

1. **Python Tool:** A script for analyzing and suggesting improvements for webpage text content.
2. **React/Node.js Web App:** A web application that allows users to submit content and get optimizations dynamically using a generative AI model.
3. **API:** An API for third-party websites to submit content for optimization, with a logging system to track requests and results.
4. **Scaling Support:** Includes image optimization and support for large volumes of content requests.

## Setup

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-test-1234567890abcdef1234567890abcdef
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

### Python Tool

1. Navigate to the `python` directory:
   ```bash
   cd python
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the analyzer script:
   ```bash
   python analyzer.py
   ```

## Usage

- **Frontend:** Open `http://localhost:3000` in your web browser to access the React application. You can submit content for optimization and upload images for resizing.

- **Python Tool:** Run the Python script to analyze webpage content by entering the URL when prompted. The script will output suggestions for improvement.

## Features

- **Text Analysis:** Analyze webpage content for readability, keyword density, and SEO improvements.
- **Dynamic Content Optimization:** Use a generative AI model to dynamically optimize content through the web app.
- **Image Optimization:** Resize images for improved performance through the API.
- **Logging:** Track API requests and responses using a logging system.

## Contributing

Feel free to submit issues or pull requests to improve the tool. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.








