const fs = require('fs');
const path = require('path');

// Configuration
const PDF_DIR = path.join(__dirname, '../public/pdfs');
const OUTPUT_FILE = path.join(__dirname, '../public/editions.json');

// Helper to format date for display (e.g., "October 22")
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
};

// Helper to format full date for sorting (YYYY-MM-DD)
const formatISODate = (date) => {
  return date.toISOString().split('T')[0];
};

console.log(`Scanning for PDFs in: ${PDF_DIR}`);

if (!fs.existsSync(PDF_DIR)) {
  console.error(`Error: Directory ${PDF_DIR} does not exist.`);
  process.exit(1);
}

const files = fs.readdirSync(PDF_DIR);
const editions = [];

files.forEach(file => {
  // Expected format: Month-Day-Year.pdf (e.g., October-22-2023.pdf)
  // Regex looks for: (Word)-(1 or 2 digits)-(4 digits).pdf
  const match = file.match(/^([a-zA-Z]+)-(\d{1,2})-(\d{4})\.pdf$/);

  if (match) {
    const [_, month, day, year] = match;
    const startDateStr = `${month} ${day}, ${year}`;
    const startDate = new Date(startDateStr);

    // Calculate end date (assume weekly, so +6 days)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    // Generate readable title
    // Example: Weekly Edition: October 22 - 28, 2023
    let dateRange = `${formatDate(startDate)} - ${formatDate(endDate)}`;
    
    // Handle year rollover in title if needed (rare for weekly but good to have)
    if (startDate.getFullYear() !== endDate.getFullYear()) {
       dateRange = `${formatDate(startDate)}, ${startDate.getFullYear()} - ${formatDate(endDate)}, ${endDate.getFullYear()}`;
    } else {
       dateRange = `${dateRange}, ${startDate.getFullYear()}`;
    }

    const editionId = `e-${startDate.getTime()}`; // Unique ID based on timestamp

    editions.push({
      id: editionId,
      editionNumber: "Vol-" + day + month.substring(0,3), // Generate a pseudo edition number or parse from filename if added
      title: `Weekly Edition: ${dateRange}`,
      date: formatISODate(startDate), // "2023-10-22"
      pdfUrl: `./pdfs/${file}`,
      isLatest: false, // Will calculate this next
      headlines: [] // Headlines must be manual or generic since we can't read PDF content easily here
    });
  }
});

// Sort editions by date descending (newest first)
editions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Mark the first one as latest
if (editions.length > 0) {
  editions[0].isLatest = true;
  
  // Add some generic headlines if none exist, or keep empty
  // In a real automated scenario, you might want a separate headlines.json to merge in, 
  // but for now we leave headlines empty for the auto-generated ones.
}

const outputData = { editions };

// Write to file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2));

console.log(`Successfully generated editions.json with ${editions.length} editions.`);
