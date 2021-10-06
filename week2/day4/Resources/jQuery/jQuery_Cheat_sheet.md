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

- append elements: `$(selector).append( $(selector) )`

- prepend elements: `$(selector).prepend( $(selector) )`

- remove elements: `$(selector).remove()`

- empty an element of content:
`$(selector).empty()`

- append an element with the order reversed: `$(selector).appendTo( $(selector) )`

- clone an element: `$(selector).clone()`

## Traversal

- get the parent of an element: `$(selector).parent()`

- get child elements: `$(selector).children()`

## Setting and checking

- set any attribute on an element (example -- src): `someImg.attr('src', 'someURL')`

- set id on element: `$(selector).attr('id', 'idName')`

- set class on element: `$(selector).addClass('className')`

- set text inside element: `$(selector).text("some text")`

- set html inside element: `$(selector).html("<some html>")`
- check if element has a class: `$(selector).hasClass('someClass')`

- set a css property on an element: `$(selector).css('property', 'value')`

- remove a class from an element: `$(selector).removeClass('someClass');`

## Events

* set an event listener:
`$(selector).on('event_type', EVENT_HANDLER);`

* example: `$(selector).on('click', () => {});`

* set a click event specifically:
`$(selector).click(EVENT_HANDLER);`
