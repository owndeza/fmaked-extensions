const STORAGE_KEY = 'fmaked-ext-changebgmain-image';

function apply(url) {
  const menu = document.querySelector('.app--menu');
  if (!(menu instanceof HTMLElement)) return;

  if (!url) {
    menu.style.backgroundImage = '';
    menu.style.backgroundSize = '';
    menu.style.backgroundPosition = '';
    menu.style.backgroundAttachment = '';
    return;
  }

  menu.style.backgroundImage = `linear-gradient(rgba(30,30,30,.58), rgba(30,30,30,.58)), url(${url})`;
  menu.style.backgroundSize = 'cover';
  menu.style.backgroundPosition = 'center';
  menu.style.backgroundAttachment = 'fixed';
}

export function init() {
  const url = localStorage.getItem(STORAGE_KEY) ?? '';
  apply(url.trim());
}

export default init;
