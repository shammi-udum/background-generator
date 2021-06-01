var css = document.querySelector("h3");
// first thing we wanna do is access the h3 element, 
// we can do this by creating variable. Also since theres
// one h3 we can just query select h3.
// Go back to html file because we also need to select the colors.
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// After adding a class name to the input tags of color 1 and 2 we can now
// create variables to access them in JavaScript, since were using a query 
//  selector we use class selector .color1 and .color2 just like what we did in CSS 
// console.log(css);
// console.log(color1);
// console.log(color2);
// we use console log to check if everything weve done so far is correct and working
// now we want an event that listens to the users actions on the color picker
// so only know a few events so far click, mouseenter, keypress but in this situation
// we need an event listner that works with input specifically here,there's an actual event called input.
// so anytime the input value changes, which it does everytime we change the color, we can detect it.
// Andrei removes the cosole for css and color 1 and 2 I just commented it out
var body = document.getElementById("gradient");

// body.style.background = "red"; this was test thats why its commented out.
// so anytime the color1 changes we wanna grab the background style., so by creating a variable called body we can.
// we also wanna add and Id in our html file in the body tag.
// Again we test it out in the console to see if its selecting it. and as usual it works. So now we can change the style 
// of the body by doing style.background and thats a CSS property and well just say red for now after refreshing it changed
// the screen so this is the way you can change the style of the bodys color.

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
// The reason we called the function setGradient is because we are setting the gradient to fix our code to not DRY
// we then move our css property changer from our event listner to our new function setGradient
// Finally we need to have our css written on the bottom of the page you can do that by saying css.textContent = body.style.background plus our semicolons in quotations.
// css.textContent adds a text content this is one of many ways to manipulate the DOM
color1.addEventListener("input", setGradient);
// so to summarize the reason the event listener dosent have brackets to call the function next to setGradient to call 
// the function is beacuse the first event passes through when the html document is loaded it reads the script file and 
// it goes through the lines and we add the event listner we also set the setGradient but we this to be called everytime
// the input is selected.

	// console.log(color1.value);, now that we know how to change the property to red were gonna move the the css property into the event listener.
	// In the event listener were gonna change the style of the body by style.background = to the (linear-gradient)-(which is in our css style sheet body background)
	// and then we'll refrence to the right of the webpage for the color picker 1 and plus  a comma-(this is just syntax i have to learn there also needs to be a space in the quotation marks) 
	// plus the 2nd color picker 2 plus close the brackets and the CSS also the last semicolon at the JavaScript doesn't see it so it just keeps reads everything line by line.
	// after checking everythingout andrei removes the second semicolon to the end he says we dont need it so now there only one semicolon.
	// After creating a new function called setGradient we can rename the function in our event listner for color1 next to input to setGradient
color2.addEventListener("input", setGradient);
	
// console.log(color2.value); this is also commented off since we know how to change the property.
// we wanna have color1 to have an event listner that will have input and it'll have a function in the brackets.
// and for now we'll just console log it with color1.value  in the brackets we also want the same thing for color2.
// Now on the webpage when you check the console and move the color picker it records the hex color code and updates as you move it.
// the second color picker is also working aswell in the console. Now we wanna change the background color, so if you were to right 
// click on the page and inspect in chrome you'll notice the background is in the body tag so ideally we wanna change that.
// So now we wanna remove the console log which im gonna comment out, after verifying in the console log we copied and pasted the same function from the first event listener.
// But all this did was remove the stored info of the color picker from the console, we now have a DRY(Dont repeat yourself) problem to solve the issue of DRY create a function.
// Were gonna do the same for the first color picker and rename our event listner  function into setGradient next to input.
// Make sure to remove the extra brackets () at the end of the event listner function because it'll break the rules. The reason it breaks the rule is because
// of the event of input gets triggered automatically and runs a function so we dont need to call the function with brackets since the input event is triggered automatically. The same for the 
// second event aswell.
