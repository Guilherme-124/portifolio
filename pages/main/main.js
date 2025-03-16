// im going to put the right codes and descriptions with time
// but for now i'm gonna leave those here

const Programs = {
    code1: `window.onload = function () {
    setTimeout(function () {
        document.getElementById('transition').classList.remove('closed');
        // I know that i should avoid using .style instead of the classlist
        // i used a .style here becouse it will be done only once and it will stay like this after
        document.querySelector('.text-bar').style.color = 'var(--text-color)';
    }, 300);

    document.querySelectorAll('.project img').forEach(img => {
        let timer;
        let parent = img.closest('div[id]');
        if (!parent) return;

        img.addEventListener('click', function () {
            parent.classList.add('hovered');
        });

        img.addEventListener('mouseenter', function () {

            timer = setTimeout(function () {
                parent.classList.add('hovered');
            }, 800);
        });

        parent.addEventListener('mouseleave', function () {
            clearTimeout(timer);
            setTimeout(function () {
                parent.classList.remove('hovered');
            }, 150);
        });
    });
};
`,
    code3: ``,
    code4: ``
};


const Projectcs = {
    Project1: `
Description of the project
what the project does
how i did it
how to use
what i learnt
`,
    Project2: `
Description of the project
what the project does
how i did it
how to use
what i learnt
`,
    Project3: `
Description of the project
what the project does
how i did it
how to use
what i learnt
`,
    Project4: `
Description of the project
what the project does
how i did it
how to use
what i learnt
`
};


const Bool = ['true','false'];
const world = ['window','document'];
const numbers = ['Infinity', 'NaN'];
const Adresses = ['null','undefined'];
const KeyWord = ['if','else','return','function','class','let','var'];
const Operators = ['+','-','*','/','&&','||','=','==','===','!','?','<','>','?'];


function appendNewElement(position, element) {
    let newElement = document.createElement(element);
    position.insertAdjacentElement('beforeend', newElement);
    return newElement;
}

function NewCLass(word, Rows) {
    if (KeyWord.includes(word)){
        return Rows.replace(new RegExp(`\\b${word}\\b`, 'g' ), `<span class="KeyWord">${word}</span>`);
    } else if (Bool.includes(word)){
        return Rows.replace(new RegExp(`\\b${word}\\b`, 'g' ), `<span class="Boolean">${word}</span>`);
    } else if (Adresses.includes(word)){
        return Rows.replace(new RegExp(`\\b${word}\\b`, 'g' ), `<span class="Adresses">${word}</span>`);
    } else if (Operators.includes(word)){
        return Rows.replace(new RegExp(`\\b${word}\\b`, 'g' ), `<span class="Operators">${word}</span>`);
    } else if (world.includes(word)){
        return Rows.replace(new RegExp(`\\b${word}\\b`, 'g' ), `<span class="world">${word}</span>`);
    } else if (!isNaN(word) && !isNaN(parseFloat(word))){
        return Rows.replace(new RegExp(`\\b${word}\\b`, 'g' ), `<span class="number">${word}</span>`);
    };
    return Rows;
}

function checkStrs(line) {
    let stringTracker;
    Row = line.split(/([\'\"\`])/);
    Row.forEach((word) => {
        
    });

}

function Printer(position, text, type) {
    // get code;
    let splitedText = text.trim().split('\n');
    splitedText.forEach((line) => {
        let Row = document.createElement('p');
        Row.textContent = line;
        if (type == 'code') {
            // get each word of each line
            let words = line.trim().split(/([\\\/;:'\"{}\[\]\(\).,\s])/g);
            // console.log('After: ', words);
            words.forEach((word) => {
                if (word == '(') {
                    if(!trackFunction) return;
                    Row.innerHTML = Row.innerHTML.replace(new RegExp(`\\b${trackFunction}\\b`, 'g'), `<span class="func">${trackFunction}</span>`);
                }
                // for each word in words check type
                Row.innerHTML = NewCLass(word, Row.innerHTML);
                trackFunction = word;

            });
        }
        position.appendChild(Row);
    });
}

window.onload = function () {
    setTimeout(function () {
        document.getElementById('transition').classList.remove('closed');
        // I know that i should avoid using .style instead of the classlist
        // i used a .style here becouse it will be done only once and it will stay like this after
        document.querySelector('.text-bar').style.color = 'var(--text-color)';
    }, 300);

    document.querySelectorAll('.project img').forEach(img => {
        let timer;
        let parent = img.closest('div[id]');
        if (!parent) return;

        img.addEventListener('click', function () {
            parent.classList.add('hovered');
        });

        img.addEventListener('mouseenter', function () {

            timer = setTimeout(function () {
                parent.classList.add('hovered');
            }, 800);
        });

        parent.addEventListener('mouseleave', function () {
            clearTimeout(timer);
            setTimeout(function () {
                parent.classList.remove('hovered');
            }, 150);
        });
    });
};

window.addEventListener('scroll', function () {
    let textBar = document.querySelector('.text-bar');
    let bar = document.querySelector('.diagonal');
    if (window.scrollY > 470) {
        textBar.classList.add('scroll');
        bar.classList.add('scroll');
        bar.style.border = '1px solid silver';
    } else {
        textBar.classList.remove('scroll');
        bar.classList.remove('scroll');
        bar.style.border = 'transparent';
    }
    if (window.scrollY > 350) {
        let img = document.querySelector('.intro-img');
        let intro = document.querySelector('.introduction');
        intro.style.color = 'var(--text-color)';
        intro.style.transform = 'translateY(0%)';
        img.style.transform = 'translateX(0%)';
        img.style.opacity = '1';
    }
});

function openMore(btn) {
    let project = btn.closest('div[id]');
    project = project.id;
    let code = btn.id;
    // console.log(window[projects.id].id);
    let section = document.getElementById('projects');
    //creating a filter and a new window
    let filter = appendNewElement(section, 'div')
    filter.classList.add('filter');
    let newWindow = appendNewElement(section, 'div');
    newWindow.classList.add('more');

    //creating a div for the left side of the window (description of the program)
    newDiv = appendNewElement(newWindow, 'div');
    newDiv.classList.add('left');

    //getting the index of the project img
    let projectImg = document.querySelector('.hovered');
    projectImg = projectImg.querySelector('img');

    // creating a copy of the img for the new window
    let img = appendNewElement(newDiv, 'img');
    img.src = projectImg.src;
    img.classList.add('window-img');

    // creating a description div for the code description
    description = appendNewElement(newDiv, 'div');
    description.classList.add('project-text');

    Printer(description, Projectcs[project]);

    //creating the left side container (code)
    let codeContainer = appendNewElement(newWindow, 'div');
    codeContainer.classList.add('code-container');

    Printer(codeContainer, Programs[code], 'code');

    filter.addEventListener('click', function() {
        if (filter) filter.remove();
        if (newWindow) newWindow.remove();
    });
};
