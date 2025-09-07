Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
1.getElementById: selects one element by unique id (fastest).
2.getElementsByClassName:selects all elements with a class, returns a live HTMLCollection.
3.querySelector:selects the first element matching a CSS selector, returns static.
4.querySelectorAll:selects all elements matching a CSS selector, returns a static NodeList.

Q2.How do you create and insert a new element into the DOM?

Ans:
1.Create the element:document.createElement("tagName")
2.Add content:innerText, innerHTML, setAttribute, classList, etc.
3.Insert DOM:appendChild, prepend, append.

Q3.What is Event Bubbling and how does it work?
Ans:
ইভেন্ট বাবলিং (Event Bubbling)

ইভেন্ট বাবলিং হলো এমন একটি প্রক্রিয়া যেখানে কোনো DOM element-এ ইভেন্ট (যেমন click) ট্রিগার হলে, সেটি প্রথমে সর্বনিম্ন (child) এলিমেন্টে কাজ করে এবং তারপর ধাপে ধাপে এর parent, grandparent হয়ে document পর্যন্ত উপরের দিকে ছড়িয়ে যায়।

Q4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
DOM-এ event bubbling এর কারণে event parent পর্যন্ত পৌঁছে যায়।

Parent element-এ event listener বসালে, আমরা event.target ব্যবহার করে চিহ্নিত করতে পারি কোন child element-এ আসলে event ঘটেছে।

Q5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault()
১. কোনো element-এর default behavior থামাতে ব্যবহার হয়।.
২. উদাহরণ: form submit হওয়া, link এ ক্লিক করলে অন্য পেজে চলে যাওয়া, checkbox auto-check হওয়া।
৩.শুধু default action বন্ধ করে, event propagation (বাবলিং/ক্যাপচারিং) থামায় না।

stopPropagation()
১.কোনো event কে parent element-এর দিকে propagate (bubble/capture) হওয়া থেকে থামায়।
২.Default behavior বন্ধ করে না।
৩.শুধু event অন্য parent listeners এ পৌঁছানো বন্ধ করে।
