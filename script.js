// querySelectore
// Example 1
// const tag1 = document.querySelector("h1");
// console.log(tag1);

// // Example 2 class
// const class1 = document.querySelector(".class1");
// console.log(class1);

// // Example 3 id
// const id1 = document.querySelector("#id1");
// console.log(id1);

// querySelectorAll
// const tag1 = document.querySelectorAll("h1");
// console.log(tag1);

// const class1 = document.querySelectorAll(".class1");
// console.log(class1);

// const tag2 = document.getElementsByTagName("h1");
// console.log(tag2);

// childNotes
// const id1 = document.getElementById("id1");
// console.log(id1);
// console.log(id1.childNodes);

// children
// const id1 = document.getElementById("list-id");
// console.log(id1);
// console.log(id1.children);

// CreateElement
// const newList = document.createElement("li");
// newList.innerHTML = "List 5";
// console.log(newList.innerText);

// const newP = document
//     .createElement("p");
// newP.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur, natus doloribus vel sit rem commodi ea itaque omnis cumque dolor, neque ad amet alias quas, facere molestias minus aut?"
// console.log(newP.innerText);

// appendChild
// const newList = document.createElement("li");
// newList.innerHTML = "List 5";
// const listId = document.getElementById("list-id");
// listId.appendChild(newList);

// Example 2
// const newList2 = document.createElement("li");
// newList2.innerHTML = "List 6";
// const listId2 = document.getElementById("list-id");
// listId.appendChild(newList2);

// Example 3
// const id1 = document.getElementById("div-text");
// const newheading = document.createElement("h2");
// newheading.innerHTML = "This  is heading two";
// id1.appendChild(newheading);

// removeChild
// const id1 = document.getElementById("list-id");
// const list = id1.children[0];
// id1.removeChild(list);


// replaceChild
// const id1 = document.getElementById("list-id");
// const list3 = id1.children[2];
// const newlist = document.createElement('li');
// newlist.innerHTML = "New list";
// id1.replaceChild(newlist, list3);

// title
// console.log(document.title);
// document.title = "New JavaScript Title"

// body
// console.log(document.body);
// document.body.innerHTML = "<h1>This is only JavaScript Heading!</h1>"

// const id1 = document.getElementById("id1");
// id1.innerHTML = "<p>This is a paragraph</p>";