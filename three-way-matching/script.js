const data = [
    { "S.NO": 1, "ORDER ID": "A736GAKDH2883HDSB92778HFHAH987", "VENDOR": "COKA-COLA", "STATUS": "Link" },
    { "S.NO": 2, "ORDER ID": "A736GAKDHHUDB872GGGGGSUHAH987", "VENDOR": "TOFICO", "STATUS": "Link" },
    { "S.NO": 3, "ORDER ID": "A736GAKDH2883HDSB92778HFHAH987", "VENDOR": "COKA-COLA", "STATUS": "Link" }
];

// Define image URLs
const statusImages = {
    "Link": "https://cdn-icons-png.flaticon.com/128/7959/7959887.png",
};

function insertDataIntoTable(data) {
    const tableBody = document.querySelector('#myTable tbody');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.keys(item).forEach(key => {
            const cell = document.createElement('td');
            
            if (key === 'STATUS') {
                // Create a container for text and images
                const statusContainer = document.createElement('div');
                statusContainer.style.display = 'flex';
                statusContainer.style.alignItems = 'center';

                // Create image element for link
                if (item[key] === 'Link') {
                    const linkImg = document.createElement('img');
                    linkImg.src = statusImages["Link"];
                    linkImg.alt = "Click to open Google";
                    linkImg.addEventListener('click', () => {
                        document.getElementById('blur-screen').style.display='block';
                        document.getElementById('add-items').style.display='block';
                        changeImages();
                    });
                    statusContainer.appendChild(linkImg);
                }

                // Create image element for tick
                if (item[key] === 'Tick') {
                    const tickImg = document.createElement('img');
                    tickImg.src = statusImages["Tick"];
                    tickImg.alt = "Tick";
                    statusContainer.appendChild(tickImg);
                }

                // Add text to the container if needed
                // statusContainer.appendChild(document.createTextNode(item[key])); // Optional

                cell.appendChild(statusContainer);
            } else {
                cell.textContent = item[key];
            }

            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

insertDataIntoTable(data);




function changeImages() {
    const newImages = [
        './images/colored-cube.png',
        './images/colored-cube.png',
        './images/colored-cube.png',
        './images/colored-cube.png'
    ];
    
    let currentIndex = 0;
    let intervalId;

    const images = popup.querySelectorAll('.popup-image');
    let imageIndex = 0;

    // Clear previous interval if any
    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        if (imageIndex < images.length) {
            images[imageIndex].src = newImages[imageIndex % newImages.length];
            imageIndex++;
        } else {
            clearInterval(intervalId);
        }
    }, 500); // Change image every 0.5 seconds
}