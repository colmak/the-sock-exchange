let page = 1;

// Function to fetch data from the API
async function getData(page) {
    try {
        const response = await fetch(`https://ecs.the-sock-exchange.com/api/socks/${page}/10`);
        const socks = await response.json();

        if (Array.isArray(socks) && socks.length > 0) {
            console.log(socks);
            updateHTML(socks);  
        } else {
            alert('No socks data found');
        }
    } catch (error) {
        console.error('Error fetching the sock data:', error);
    }
}

// Function to update the HTML with sock data
function updateHTML(socks) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'table table-striped';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const keys = Object.keys(socks[0].sockDetails);
    keys.forEach(key => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.innerText = key.charAt(0).toUpperCase() + key.slice(1); 
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    socks.forEach(sock => {
        const row = document.createElement('tr');
        
        keys.forEach(key => {
            const td = document.createElement('td');
            td.innerText = sock.sockDetails[key];
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    dataDiv.appendChild(table);
}

// Event listener for the next button
document.getElementById('next').addEventListener('click', function() {
    page += 1;   
    try {
        getData(page);
    } catch (e) {
        alert("Error no more socks: " + e.message);
    }
});

// Fetch
getData(page);
