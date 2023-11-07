function WishListForm() {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <form>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Name"
          />
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default WishListForm;
