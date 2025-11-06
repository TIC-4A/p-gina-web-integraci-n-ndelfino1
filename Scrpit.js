document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('toggleView');
const view1 = document.getElementById('view-1');
const view2 = document.getElementById('view-2');

// Inicialmente, muestra la vista 1 y oculta la vista 2
view1.classList.remove('hidden');
view2.classList.add('hidden');

toggleButton.addEventListener('click', () => {
if (view1.classList.contains('hidden')) {
// Si la vista 1 está oculta, muestra la vista 1 y oculta la vista 2
view1.classList.remove('hidden');
view2.classList.add('hidden');
} else {
// Si la vista 1 está visible, oculta la vista 1 y muestra la vista 2
view1.classList.add('hidden');
view2.classList.remove('hidden');
}
});
});
