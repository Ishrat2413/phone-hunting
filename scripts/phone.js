const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  //   console.log(phones);
  //1. Get the element by id, cz ekhne boshabo
  const phoneContainer = document.getElementById("phones-container");
  // Clear phone container card before adding new card
  phoneContainer.textContent = "";
  // Display show all button if there are more than 10 phones
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 10) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  // Display only 5 phones
  phones = phones.slice(0, 10);
  phones.forEach((phone) => {
    // console.log(phone);
    // 2. Create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`; //Setting the style
    //3. Set inner HTML
    phoneCard.innerHTML = ` 
    <figure><img src="${phone.image}" /></figure>        
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    `;
    //4. Append Child
    phoneContainer.appendChild(phoneCard);
  });
};

// Handle Search Button
const handleSearch = () => {
  //   console.log("Search Please");
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);

  loadPhone(searchText); //function ke call kore or mddhe search text ta diye dlm
};
// loadPhone();
