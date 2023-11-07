/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function CreateButton({ onClick }) {
  return (
    <button
      className="w-24 h-12 bg-zinc-900 hover:bg-black text-white rounded-lg font-semibold"
      onClick={() => {
        onClick();
      }}
    >
      Create
    </button>
  );
}

export default CreateButton;
