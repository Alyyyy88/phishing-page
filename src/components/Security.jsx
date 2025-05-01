import lock from '../assets/lock.png'

const Security = () => {
  return (
    <>
      <div className="mt-15 bg-[#485E6C]  py-6 px-4 cursor-pointer   rounded-full">
        <img src={lock} alt="lock" />
      </div>
      <span className="text-[#0f4b8f]">Security</span>
    </>
  );
};

export default Security;
