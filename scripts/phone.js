const loadPhone = async (searchText) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=${searchText}"
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
  // Ekta ekta kore phones show korbe

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
