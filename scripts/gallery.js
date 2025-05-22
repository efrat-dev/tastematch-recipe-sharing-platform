document.addEventListener("DOMContentLoaded", () => {
    // Base path for all recipe images
    const imageBasePath = "../images/recipe-gallery/";
  
    // Base path for all recipe HTML pages
    const htmlBasePath = "../html/";
  
    const recipes = [
      {
        title: "עוגיות בראוניז שוקולד צ'יפס",
        description: "טובות לקינוח, לאירוח וגם כשסתם מתחשק משהו מתוק...",
        image: "recipe1.webp",
        link: "recipe1.html"
      },
      {
        title: "קציצות חזה עוף ברוטב צהוב",

        description: "קציצות שילדים אוהבים... <br /> וגם מבוגרים!",
        image: "recipe2.png",
        link: "recipe2.html"
      },
      {
        title: "לביבות גבינה",
        description: "לביבות מושקעות וסופר טעימות שתמיד מתקבלות בברכה.",
        image: "recipe3.jpg",
        link: "recipe3.html"
      },
      {
        title: "דג סול עם ירקות",
        description: "שילוב טעים וצבעוני שלא תרצו להפסיק לאכול...",
        image: "recipe4.jpg",
        link: "recipe4.html"
      },
      {
        title: "פילו ממולא ברוטב פטריות",
        description: "מרקם פריך, טעם עשיר... <br /> שילוב מנצח ששווה לנסות!",
        image: "recipe5.jpg",
        link: "recipe5.html"
      },
      {
        title: "מרק ברוקולי",
        description: "משהו שיחמם לכם את הידיים... ואת הלב",
        image: "recipe6.jpg",
        link: "recipe6.html"
      },
      {
        title: "סלט עדשים",
        description: "סלט שימלא אתכם באנרגיה...",
        image: "recipe7.jpg",
        link: "recipe7.html"
      },
      {
        title: "פחזניות במילוי קצפת",
        description: "כי תמיד טעים לנשנש משהו מתוק...",
        image: "recipe8.jpg",
        link: "recipe8.html"
      },
      {
        title: "עוגת שזיפים",
        description: "עוגת פירות שהיא אגדה! <br /> כל מילה מיותרת...",
        image: "recipe9.png",
        link: "recipe9.html"
      }
    ];
  
    const container = document.getElementById("card-container");
  
    // Loop through each recipe and dynamically generate a card
    recipes.forEach(recipe => {
      container.innerHTML += `
        <div class="card">
          <div class="card-body">
            <img src="${imageBasePath + recipe.image}" alt="${recipe.title}" class="card__image">
            <div class="box2">
              <h2 class="card-title">${recipe.title}</h2>
              <p class="card-description">${recipe.description}</p>
              <div class="link">
                <a href="${htmlBasePath + recipe.link}"><p class="recepie-link">צפו במתכון</p></a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  });
  