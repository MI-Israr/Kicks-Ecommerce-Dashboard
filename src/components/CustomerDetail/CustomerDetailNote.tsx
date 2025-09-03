const CustomerDetailNote = () => {
  return (
    <div className="col-span-2 h-[100%] w-[100%] flex flex-col gap-2">
      <h1 className="font-[600] text-[1.2rem]">Note</h1>
      <textarea
        className="w-[100%] !p-4 border border-[#E7E7E3] rounded-lg flex-grow"
        name="note"
        placeholder="Type some notes"
      ></textarea>
    </div>
  );
};

export default CustomerDetailNote;
