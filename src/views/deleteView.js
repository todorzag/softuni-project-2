import { deletePet, getPet } from "../services/pet.js";

export const deleteView = (ctx) => {
  let petId = ctx.params.petId;
  getPet(petId).then((pet) => {
    if (pet._ownerId === ctx.user._id) {
      if (window.confirm("Are you sure?")) {
        deletePet(petId);
        ctx.page.redirect("/dashboard");
      }
    } else {
      ctx.page.redirect(`/details/${petId}`);
      window.alert("This is not your pet");
    }
  });
};
