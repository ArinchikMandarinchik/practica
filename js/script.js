document.addEventListener('DOMContentLoaded', () => {
    const peopleButton = document.getElementById('people-button');
    const peopleList = document.getElementById('people-list');
    const profileButton = document.getElementById('profile-button');
    const profilePopup = document.getElementById('profile-popup');
    const calendarContainer = document.getElementById('calendar-container');

    // Инициализация календаря
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: [] // Здесь можно добавить события
    });

    peopleButton.onclick = function() {
        // Переключаем видимость списка людей и календаря
        peopleList.style.display = peopleList.style.display === 'none' ? 'block' : 'none';
        calendarContainer.style.display = calendarContainer.style.display === 'none' ? 'block' : 'none';
    };

    profileButton.onclick = function() {
        // Показываем или скрываем всплывающее окно профиля
        profilePopup.style.display = profilePopup.style.display === 'none' ? 'block' : 'none';
    };

    // Закрыть всплывающее окно при нажатии кнопки "Выход"
    document.getElementById('logout-button').onclick = function() {
        profilePopup.style.display = 'none';
    };
});
