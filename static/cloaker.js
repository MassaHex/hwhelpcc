const form = document.querySelector('form');
const input = document.querySelector('input');

function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? match[1] : null;
}

document.getElementById('titl').value = getCookie('title')

form.addEventListener('submit', async event => {
    let title = input.value.trim()
    document.cookie = `title=${input.value.trim()}`;
});