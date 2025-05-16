import React from "react";

const UpdateCard = ({ coffee }) => {
  const { _id, photo, Details, category, taste, name, quantity, supplier } =
    coffee;
  const handleUpdateCard = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffees = Object.fromEntries(formData.entries());

    console.log(updatedCoffees);

    // Update Coffees
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("after updated", data);
        }
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-10 mb-20">
      {/* Content */}
      <div className="text-center p-16">
        <h1 className="text-4xl font-bold">Update Existing Coffee Details</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdateCard} className="bg-base-300 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              defaultValue={name}
              name="name"
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              defaultValue={quantity}
              name="quantity"
              className="input w-full"
              placeholder="Enter Coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              defaultValue={supplier}
              name="supplier"
              className="input w-full"
              placeholder="Enter Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              defaultValue={taste}
              name="taste"
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              defaultValue={category}
              name="category"
              className="input w-full"
              placeholder="Enter Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              defaultValue={Details}
              name="Details"
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        </div>
        {/* Photo */}
        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            defaultValue={photo}
            name="photo"
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <fieldset className="fieldset  rounded-box w-full p-4 ">
          <input
            type="submit"
            className="input w-full border border-[#331A15] font text-secondary bg-primary text-xl cursor-pointer"
            value="Update Coffee Details"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateCard;
