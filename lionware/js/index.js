
if(window.location.pathname === '/lionware/silverbird') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/lionware/aquagem') {
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/lionware/forklift') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/lionware/wallstreet') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.remove('hidden') );
};