const burgerBtn = document.querySelector(".burgerBtn");
const burgerImg = document.querySelector(".imgBurger");
const list = document.querySelector(".list");
const auth = document.querySelector(".auth");
let burger =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII=";
let close =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgBJREFUSEu11UuojlEUBuDnjFASUZJyG7hEKEPXiXIZYaCkDChGUsrINWODkyKGZGIgA6WUXDOSZCAkl6IkRSly963af/a/7e//zzl11uzb31rrXet91157wCjbwCjn1w9gDLZgHZZgFv7gFR7iKi7hR1uhvQDW41RK2qvR59iD6zWnNoCjTaVHhkHfbxzAiTKmBnAMh4eRPHfdh8H8oATYiCsjTB5h0clK3OvkyAHG4xmmVQA+NpVNKs5rZ+HytBF+Mb7HRw4QQp2uJA+6LuA2pqf/b7EKO1ro3ITLJUBQExTl9rVxXJo6m4Nb6Wckf4m5eIQY59zOYncJ8CarMHd+hzWp9dmJ59dYgBtN11MrXT/AshLgC8a1CPwBKxJIuCxsQG9iSov/p45muQafEULXrASYh7s9ACLXhLKDJ4jA0t43VKxG/I9VERarIii6g8mVmMepy64piknZVjh/wyLEOojkkTAs6Aod5qedVIp8Lk1YF8B2nK9U0zamy7EThyoxW3GxpCgEDhpmVAJqlyqEnFjxjcsaFy26/29dr8W1FqGHchyrIka6Q2X1PTiI40PJVvHZ24h+Mj9vW9fBa2zVfg9SJ9cv7C83aY2iHDzWxpmW2537xYTtytZIV2P9Khzb7JrN2JCEm5mezBe4n/SKpfazjdJ+ACOU4l/YqAP8BfGTXRkJ43i2AAAAAElFTkSuQmCC";

burgerBtn.addEventListener("click", () => {
  if (burgerImg.src === burger) {
    burgerImg.src = close;
    list.classList.add("show-list");
    auth.classList.add("auth-show");
    console.log("Add");
  } else {
    burgerImg.src = burger;
    list.classList.remove("show-list");
    auth.classList.remove("auth-show");
    console.log("Ex");
  }
});
