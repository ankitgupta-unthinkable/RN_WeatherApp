const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayName = (date) => {
    const dayIndex = new Date(date).getDay();
    const todayDay = new Date().getDay();
    if (dayIndex === todayDay) {
        return 'Today';
    }
    return days[dayIndex];
};

export { getDayName };