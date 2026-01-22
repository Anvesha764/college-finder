const url = "http://universities.hipolabs.com/search?name=";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("#list");

async function searchColleges() {
  const country = input.value.trim();

  if (!country) {
    alert("Please enter a country name");
    return;
  }

  list.innerHTML = "<li>Loading...</li>";

  try {
    const res = await fetch(url + country);
    const data = await res.json();
    show(data);
  } catch (error) {
    console.error(error);
    list.innerHTML = "<li>Error fetching data</li>";
  }
}

// Button click
btn.addEventListener("click", searchColleges);

// Enter key press
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchColleges();
  }
});

function show(colArr) {
  list.innerHTML = "";

  if (colArr.length === 0) {
    list.innerHTML = "<li>No colleges found</li>";
    return;
  }

  colArr.forEach(col => {
    const li = document.createElement("li");
    li.textContent = col.name;
    list.appendChild(li);
  });
}
