/* calendar-engine.js */
const calendarGrid = document.getElementById('calendarGrid');
const monthName = document.getElementById('monthName');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');

let currentDate = new Date();

// Demo Data: Simulated booked/limited dates
const bookingData = {
    "2026-05-15": "booked",
    "2026-05-20": "limited",
    "2026-05-21": "booked",
    "2026-06-10": "limited"
};

function renderCalendar() {
    calendarGrid.innerHTML = '';
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Set Header
    const monthYearString = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
    monthName.innerText = monthYearString;

    // Add Day Labels
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
        const dayLabel = document.createElement('div');
        dayLabel.className = 'day-name';
        dayLabel.innerText = day;
        calendarGrid.appendChild(dayLabel);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill Empty Slots
    for (let i = 0; i < firstDay; i++) {
        calendarGrid.appendChild(document.createElement('div'));
    }

    // Create Date Cells
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'date-cell';
        cell.innerText = day;

        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Apply Statuses
        if (bookingData[dateStr]) {
            cell.classList.add(bookingData[dateStr]);
        }

        // Highlight Today
        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cell.classList.add('today');
        }

        cell.onclick = () => {
            if (!cell.classList.contains('booked')) {
                window.location.href = `booking.html?date=${dateStr}`;
            }
        };

        calendarGrid.appendChild(cell);
    }
}

prevBtn.onclick = () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); };
nextBtn.onclick = () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); };

renderCalendar();
