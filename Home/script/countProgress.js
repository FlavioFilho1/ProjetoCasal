function updateTime() {
    const startDate = new Date("2023-11-06T00:00:00");
    const now = new Date();

    if (now < startDate) return;

    // Diferença total em milissegundos
    const diffMs = now - startDate;

    // Dias, horas, minutos e segundos acumulados
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const days = totalDays;
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    // Meses totais (acumulados)
    let totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    if (now.getDate() < startDate.getDate()) totalMonths--; // mês corrente não completo

    // Anos completos baseados nos meses acumulados
    const years = Math.floor(totalMonths / 12);

    // Função de pluralização
    function plural(value, singular, plural) {
        return value === 1 ? singular : plural;
    }

    // Atualiza o HTML
    document.querySelector(".boxAno .value").textContent = years;
    document.querySelector(".boxAno .label").textContent = plural(years, "Ano", "Anos");

    document.querySelector(".boxMes .value").textContent = totalMonths;
    document.querySelector(".boxMes .label").textContent = plural(totalMonths, "Mês", "Meses");

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
updateTime();
