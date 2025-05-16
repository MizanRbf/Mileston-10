import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, category, quantity, photo, _id } = coffee;

  // // Handle View
  // const handleView = (id) => {
  //   fetch(`http://localhost:3000/coffees/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  // Handle Delete
  const handleDelete = (id) => {
    // alert('') swal alert dekhate hobe
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          // alert('') module dekhe alert daw
          const remainingCoffees = coffees.filter(
            (coffee) => coffee._id !== id
          );
          setCoffees(remainingCoffees);
          console.log("after delete ", data);
        }
      });
  };

  return (
    <div className="bg-base-300 flex items-center justify-between p-6 rounded-sm">
      <div>
        <img className="w-30 h-40" src={photo} alt="" />
      </div>
      <div>
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="font-bold">Price:</span> {quantity}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {/* Details Button */}
        <Link to={`/coffees/${_id}`}>
          <button className="bg-primary p-2 rounded-sm text-white">
            <FaEye />
          </button>
        </Link>

        {/* Edit Button */}
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-black p-2 rounded-sm text-white">
            <MdEdit />
          </button>
        </Link>
        {/* Delete Button */}
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-base-200 p-2 rounded-sm text-white"
          >
            <MdDelete />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
