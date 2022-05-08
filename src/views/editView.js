import { html } from "../../node_modules/lit-html/lit-html.js";
import { getPet, updatePet, validatePet } from "../services/pet.js";

const editTemplate = (pet, submitHandler) => html` <section id="editPage">
  <form class="editForm" @submit=${submitHandler} method="POST">
    <img src="./images/editpage-dog.jpg" />
    <div>
      <h2>Edit PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" value=${pet.name} />
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" value=${pet.breed} />
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input name="age" id="age" type="text" value=${pet.age} />
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input name="weight" id="weight" type="text" value=${pet.weight} />
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input name="image" id="image" type="text" value=${pet.image} />
      </div>
      <button class="btn" type="submit">Edit Pet</button>
    </div>
  </form>
</section>`;

export const editView = (ctx) => {
  let petId = ctx.params.petId;
  const submitHandler = (e) => {
    e.preventDefault();

    let { name, breed, age, weight, image } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    let pet = {
      name,
      breed,
      age,
      weight,
      image,
    };

    if (validatePet(pet)) {
      window.alert("All fields should be filled");
      return;
    }

    updatePet(petId, pet).then(() => ctx.page.redirect(`/details/${petId}`));
  };

  getPet(petId).then((pet) => {
    ctx.render(editTemplate(pet, submitHandler));
  });
};
