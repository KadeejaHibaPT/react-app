//Accessing the DOM elements and their properties
headingElements = document.querySelector("h1");
 if (headingElements !== null) {
     console.log ("nodeType;" , headingElements.nodeType);
        console.log ("nodeName;" , headingElements.nodeName);
        console.log ("nodeValue;" , headingElements.nodeValue);
 }
 
 const paragraphElements = document.querySelector("p");
 const textNode = paragraphElements.firstChild;
 if (textNode !== null) {
     console.log ("nodeType;" , textNode.nodeType);
     console.log ("nodeName;" , textNode.nodeName);
     console.log ("nodeValue;" , textNode.nodeValue);
 }
// Accessing the DOM elements and their properties

//get the <ul> element
 const listElement = document.getElementById("shopping-list");
    if (listElement !== null) {
        console.log ("nodeType;" , listElement.nodeType);
        console.log ("nodeName;" , listElement.nodeName);
        console.log ("nodeValue;" , listElement.nodeValue);
    }
     

    // get the parent element with id "GOOD"
    const parentElement = document.getElementById("parent");
    console.log("Parent Element:", parentElement);

    // get the parent node of the <div> element
    const divElement = document.querySelector("div");
    if (divElement !== null) {
        const parentNode = divElement.parentNode;
        console.log("Parent Node:", parentNode);
    }   
   