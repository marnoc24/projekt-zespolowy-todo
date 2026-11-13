const API_URL = 'http://localhost:3000/api/tasks';

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

async function loadTasks() {
    try {
        const res = await fetch(API_URL);
        const tasks = await res.json();
        list.innerHTML = '';
        tasks.forEach(t => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${t.text}</span>
                <button class="btn-del" onclick="deleteTask(${t.id})">Usuń</button>
            `;
            list.appendChild(li);
        });
    } catch (err) {
        console.log("Czekam na uruchomienie backendu...");
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    input.value = '';
    loadTasks();
});

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}

loadTasks();