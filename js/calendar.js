document.addEventListener('DOMContentLoaded', function() {
    const monthYearDisplay = document.getElementById('month-year');
    const calendarDates = document.getElementById('calendar-dates');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const prevYearButton = document.getElementById('prev-year');
    const nextYearButton = document.getElementById('next-year');

    let currentDate = new Date();

    function renderCalendar(date) {
        calendarDates.innerHTML = '';

        const year = date.getFullYear();
        const month = date.getMonth();
        monthYearDisplay.textContent = `${date.toLocaleString('ru', { month: 'long' })} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const firstDayIndex = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
        const lastDate = lastDayOfMonth.getDate();

        const prevMonthLastDate = new Date(year, month, 0).getDate();

        // Отображение предыдущих дней месяца
        for (let i = firstDayIndex; i > 0; i--) {
            const day = document.createElement('div');
            day.classList.add('inactive');
            day.textContent = prevMonthLastDate - i + 1;
            calendarDates.appendChild(day);
        }

        // Отображение дней текущего месяца
        for (let i = 1; i <= lastDate; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            day.classList.add('active');
            day.addEventListener('click', function() {
                alert(`Вы выбрали дату: ${i}-${month + 1}-${year}`);
            });
            calendarDates.appendChild(day);
        }

        // Дополнение дней следующего месяца для заполнения строк
        const totalDays = firstDayIndex + lastDate;
        const nextDays = 7 - (totalDays % 7);
        if (nextDays < 7) {
            for (let i = 1; i <= nextDays; i++) {
                const day = document.createElement('div');
                day.classList.add('inactive');
                day.textContent = i;
                calendarDates.appendChild(day);
            }
        }
    }

    prevMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    prevYearButton.addEventListener('click', function() {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        renderCalendar(currentDate);
    });

    nextYearButton.addEventListener('click', function() {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
