// console.log("hi")

// let firstName =  customers.map((person)=> person.name.first)
// console.log(firstName)

// let lastName = customers.map((person)=> person.name.last)
// console.log(lastName)

// let fullName = firstName.map((fn, i)=> 
//     fn + " " + lastName[i] )
// console.log(fullName)

// let profileImg = customers.map((person)=> person.picture.large)

// global elements in DOM 

const insertionPoint = document.querySelector('#output')
// const nameCard = document.createElement('div')

// ***** test: get the first person ******
// const person = customers[0]
    // console.log(person)



//****** P1 NAME ******
//create a new div for name 


// // put namecardDiv in a new class;
// // it should look like: <div class = "name-card">
// nameCard.classList.add("name-card")

// // put namecard under id output
// insertionPoint.appendChild(nameCard)

// const customerName = person.name.first + " " + person.name.last
// console.log(customerName)

// nameCard.innerHTML = `<h2>${customerName}</h2>`

// loop parts 

//****** P2 Img ******

// const personImg = document.createElement ('img')
// personImg.src = person.picture.large
// console.log('person img',personImg)
// nameCard.appendChild(personImg)

//****** P3 Email Address ******
// const emailAdress = document.createElement('p')
// emailAdress.innerText = person.email
// console.log(emailAdress)
// nameCard.appendChild(emailAdress)


//****** P4 Address ******

// console.log(person.location.street.number)
// const adress = document.createElement('p')
// adress.setAttribute('id', 'Address')
// adress.innerText = person.location.street.number + " " + person.location.street.name + " " +
//                     person.location.city + " " + nameToAbbr(person.location.state) + " " + 
//                     person.location.postcode
// console.log(adress)
// nameCard.appendChild(adress)



for (let person of customers) {

const nameCard = document.createElement('div')
nameCard.classList.add("name-card")
insertionPoint.appendChild(nameCard)

//name
const customerName = person.name.first + " " + person.name.last
nameCard.innerHTML = `<h2>${customerName}</h2>`
//img
const personImg = document.createElement ('img')
personImg.src = person.picture.large
console.log('person img',personImg)
nameCard.appendChild(personImg)
//email
const emailAdress = document.createElement('p')
emailAdress.setAttribute('id', 'email-address')
emailAdress.innerText = person.email
console.log(emailAdress)
nameCard.appendChild(emailAdress)

//adress 
console.log(person.location.street.number)
const adress = document.createElement('p')
adress.setAttribute('id', 'Address')
adress.innerText = person.location.street.number + " " + person.location.street.name + " " +
                    person.location.city + " " + nameToAbbr(person.location.state) + " " + 
                    person.location.postcode
console.log(adress)
nameCard.appendChild(adress)

//DOB 
const dob = document.createElement('p')
dob.setAttribute('id', 'date-of-birth')
dob.innerText = "DOB:" + moment(person.dob.date).format("MMM, D, YYYY")
console.log(dob)
nameCard.appendChild(dob)

//reg Date
const regDate = document.createElement('p')
regDate.setAttribute('id', 'customer-since')
regDate.innerText = "Customer since:" + moment(person.registered.date).format("MMM, D, YYYY")
console.log(regDate)
nameCard.appendChild(regDate)

}










