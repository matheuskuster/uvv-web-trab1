const elements = {
  donwloadCV: {
    selector: document.querySelector('.resume'),
    cb: () => window.open('./assets/CV.pdf'),
  },
  algoExpertCode: {
    selector: document.querySelector('.algoexpert__Code'),
    cb: () => window.open('https://github.com/matheuskuster/app-algoexpert'),
  },
  algoExpertDemo: {
    selector: document.querySelector('.algoexpert__Demo'),
    cb: () => window.open('https://www.youtube.com/watch?v=p7fC7rHYuZ4'),
  },
  sigiappCode: {
    selector: document.querySelector('.sigiapp__Code'),
    cb: () => window.open('https://github.com/matheuskuster/sigiapp'),
  },
  sigiappDemo: {
    selector: document.querySelector('.sigiapp__Demo'),
    cb: () => window.open('https://www.youtube.com/watch?v=K9ZBNFooyPE'),
  },
  nav: {
    selector:  document.querySelectorAll('nav ul li'),
    cb: onNavButtonClick
  },
  form: {
    selector: document.querySelector('form'),
    cb: onFormSubmit,
    event:  'submit'
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const [name, email, message] = [
    formData.get('name'),
    formData.get('email'),
    formData.get('message'),
  ];


  const text = `Olá, meu nome é ${name} e meu email é ${email}. Meu interesse é: ${message}`;
  window.open('https://wa.me/5527995780093?text=' + text);
}

function onNavButtonClick(e) {
  buttons.nav.selector.forEach((button) => {
    button.classList.remove('selected');
  });

  e.path[1].classList.add('selected');
}

function addEventListeners() {
  Object.keys(elements).forEach(key => {
    const event = elements[key].event || 'click';

    if (typeof elements[key].selector.item !== 'undefined') {
      elements[key].selector.forEach(button => {
        button.addEventListener(event, elements[key].cb);
      });
    } else {
      elements[key].selector.addEventListener(event, elements[key].cb);
    }
  });
}

addEventListeners();

