import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getPet } from "../services/pet.js";

const editAndDeleteBtn = (
  pet
) => html`<!-- Only for registered user and creator of the pets-->
  <a href="/details/edit/${pet._id}" class="edit">Edit</a>
  <a href="/details/delete/${pet._id}" class="remove">Delete</a>`;

const isLogged = (
  pet,
  user
) => html`<!-- if there is no registered user, do not display div-->
  <div class="actionBtn">
    ${pet._ownerId === user._id ? editAndDeleteBtn(pet) : nothing}
    <!--(Bonus Part) Only for no creator and user-->
    <a href="/donate" class="donate">Donate</a>
  </div>`;

const detailsTemplate = (pet, user) => html`<section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${pet.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age}</h4>
        <h4>Weight: ${pet.weight}</h4>
        <h4 class="donation">Donation: 0$</h4>
      </div>

      ${user ? isLogged(pet, user) : nothing}
    </div>
  </div>
</section>`;

export const detailsView = (ctx) => {
  getPet(ctx.params.petId).then((pet) => {
    ctx.render(detailsTemplate(pet, ctx.user));
  });
};
