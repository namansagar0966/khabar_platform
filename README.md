# Khabar Platform Website

A static website for the Khabar Platform weekly newspaper.

## 🚀 How to Add a New Edition (The Easy Way)

1.  **Name your PDF file** using this exact format: `Month-Day-Year.pdf`.
    *   Example: `October-22-2023.pdf`
    *   Example: `November-05-2023.pdf`
2.  **Upload the file** to the `public/pdfs/` folder on GitHub.
3.  **Wait 1-2 minutes**. The website will automatically rebuild, detect the date from the filename, and update the Homepage and Archives.

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  To test the PDF generation locally:
    ```bash
    node scripts/generate-editions.js
    ```

## File Structure

*   `public/pdfs/` - **Upload your newspapers here.**
*   `scripts/generate-editions.js` - The magic script that reads your PDF filenames and updates the website.
*   `src/` - Website source code.

