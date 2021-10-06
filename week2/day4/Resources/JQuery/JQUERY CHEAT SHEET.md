## JQUERY CHEAT SHEET - intro

[Official docs](https://api.jquery.com/)

## Window Onload

```javascript
$(() => {
	// put jQuery in here
});
```

## Search / Retrieval

- select all elements of type: `$('div')`, `$('p')`, etc.

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- get a specific jQuery element from a list: `jQueryCollection.eq( indexNum )`

## Creation

- create element: `$('<div>')`, `$('<p>')`, etc.

- create element with more information: `$('<p> this is a p with text inside it </p>')`;

## Appending and removing

- append elements: `jQueryElement.append( jQueryElement )`

- prepend elements: `jQueryElement.prepend( jQueryElement )`

- remove elements: `jQueryElement.remove()`

- empty an element of content:
`jQueryElement.empty()`

- append an element with the order reversed: `jQueryElement.appendTo( jQueryElement )`

- clone an element: `jQueryElement.clone()`

## Traversal

- get the parent of an element: `jQueryElement.parent()`

- get child elements: `jQueryElement.children()`

## Setting and checking

- set any attribute on an element (example -- src): `someImg.attr('src', 'someURL')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element: `jQueryElement.addClass('className')`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`
- check if element has a class: `jQueryElement.hasClass('someClass')`

- set a css property on an element: `jQueryElement.css('property', 'value')`

- remove a class from an element: `jQueryElement.removeClass('someClass');`

## Events

* set an event listener:
`jQueryElement.on('event_type', EVENT_HANDLER);`

* example: `jQueryElement.on('click', () => {});`

* set a click event specifically:
`jQueryElement.click(EVENT_HANDLER);`
