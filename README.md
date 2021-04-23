# menu-js
Vanilla Javascript tutorial project #6 presented by John Smilga




callback function To populate menu with items from the menu[] in app.js when page is loaded.
Items placed in section-center element which is the indivdaul menu items' parent element.

Section-center targeted and populated with data from menu[] via the 
map() which returns the data embeded in template strings.
the map() returns the entire 'article' div from the index with via template literals.
Vanilla Javascript tutorial project #7 presented by John Smilga

### filter
-add event listener to each button using forEach() on buttons with the
-.filter-btn class;
-event listener callback function will look for event object of the target element on 'click';
-dataset = property on the currentTarget event object.
-button elements in html have data-* read-only property which can be accessed in js using dataset property.
-id of currentTarget via dataset property is assigned to a variable (category).
new array created with filter() to return filtered menu items from the original 'menu' array;
-filter() returns items which the data-id(category variable) matches the menuItem.category;

-if() to display menu items from origin menu array when category ='all' by calling the displayMenuItems() with original 'menu' array as arguement. displayMenuItems(menu);
else return displayMenuItems from the filtered menuCategory array
-displayMenuItems(menuCategory);


### dynamically add new id buttons
//get unique categories
//iterate over categories return button
// make sure to select buttons when they are available

-remove buttons from index as they will be added dynamically

-inside  window event listener we set up a varibale holding the unique categories from the menu array.
-we return an array of the unique categories using the reduce() of the menu array.
-in the reduce mehtod the logic is as follows: if() values(the array returned) does not have the (!value.includes) item.category from the new array then add the category (.push()) to new array('all');
-if the value does have the item.category in the all array the just return the 'values';

### adding categories as buttons
-iterate over array and dynamically plug in values into html using ``

-