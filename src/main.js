const uri = "https://localhost:44382/cities";
const divElement = "div";
const h5Element = "h5";
const pElement = "p";
const requestFinished = 4;

window.onload = () => {
    loadCities();
}

const loadCities = () => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = async () => {
        if (xmlhttp.readyState == requestFinished && xmlhttp.status == 200) {
            let cities = await JSON.parse(xmlhttp.responseText);
            console.log(cities);
            renderElements(cities);
        }
    };
    xmlhttp.open("GET", uri, true);
    xmlhttp.send();
}

const renderElements = (cities) => {
    cities.map(city => {
        let title = builder(h5Element, 'class', 'card-title');
        title.innerText = city.name;
        let content = builder(pElement, 'class', 'text-muted');
        content.innerText = city.description;

        let cardBody = builder(divElement, 'class', 'card-body');
        cardBody.appendChild(title);
        cardBody.appendChild(content);

        let card = builder(divElement, 'class', 'card');
        card.appendChild(cardBody);

        let baseContainer = document.getElementById('base-container');
        baseContainer.appendChild(card);
    });
}

const submitForm = e => {
    e.preventDefault();

    data = {
        id:1,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        pointsOfInterest: []
    };

    postData(data)
    .catch(err => console.error(err))
    .then(data => {
        console.log(data);
        clearContainer();
        loadCities();
    })
}

const postData = async (data) => {
    const response = await fetch(uri, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const clearContainer = () => {
    let parent = document.getElementById('base-container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const builder = (elementNode, propertyName, value) => {
    let creation = document.createElement(elementNode);
    creation.setAttribute(propertyName, value);
    return creation;
}