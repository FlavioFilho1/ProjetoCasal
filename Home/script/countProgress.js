// countProgress.js
function updateTime() {
    const startDate = new Date("2023-11-06T00:00:00"); // data inicial
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Ajustes caso algum valor seja negativo
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // quantidade de dias no mês anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Função para singular/plural
    function plural(value, singular, plural) {
        return value === 1 ? singular : plural;
    }

    // Atualiza os valores no HTML
    document.querySelector(".boxAno .value").textContent = years;
    document.querySelector(".boxAno .label").textContent = plural(years, "Ano", "Anos");

    document.querySelector(".boxMes .value").textContent = months;
    document.querySelector(".boxMes .label").textContent = plural(months, "Mês", "Meses");

    document.querySelector(".boxDia .value").textContent = days;
    document.querySelector(".boxDia .label").textContent = plural(days, "Dia", "Dias");

    document.querySelector(".boxHora .value").textContent = hours;
    document.querySelector(".boxHora .label").textContent = plural(hours, "Hora", "Horas");

    document.querySelector(".boxMin .value").textContent = minutes;
    document.querySelector(".boxMin .label").textContent = plural(minutes, "Minuto", "Minutos");

    document.querySelector(".boxSec .value").textContent = seconds;
    document.querySelector(".boxSec .label").textContent = plural(seconds, "Segundo", "Segundos");
}

// Atualiza a cada segundo
setInterval(updateTime, 1000);

// Chamada inicial
updateTime();
