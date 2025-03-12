
const code = `
#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    struct node *next;
    int number;
}
node;

int main(void)
{
    node *aux = list;
    while(aux != NULL)
    {
        node *ptr = aux;
        aux = aux->next;
        free(ptr)
    }
}
`;

const Project1 = `
Description of the project
what the project does
how i did it
how to use
what i learnt
`;

function appendNewElement(position, element) {
    let newElement = document.createElement(element);
    position.insertAdjacentElement('beforeend', newElement);
    return newElement;
}

function textPrinter(position, text) {
    let splitedText = text.trim().split('\n');
    splitedText.forEach((line) => {
        let Rows = document.createElement('p');
        Rows.textContent = line;
        position.appendChild(Rows);
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
    console.log(project.id);
    console.log(window[projects.id].id);
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

    textPrinter(description, window[project.id].id);

    //creating the left side container (code)
    let codeContainer = appendNewElement(newWindow, 'div');
    codeContainer.classList.add('code-container');

    textPrinter(codeContainer, code);

    filter.addEventListener('click', function() {
        if (filter) filter.remove();
        if (newWindow) newWindow.remove();
    });
};
