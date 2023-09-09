const Footer = () => {
  return (
    <div className="mt-5 inline-flex h-[72px] w-full items-start justify-between  bg-white px-7 pb-[19px] pt-[27px]">
      <div className="inline-flex items-start justify-start">
        <div className="text-xs font-normal leading-[18px] text-black text-opacity-40">
          © 2023 KWAT SECURE
        </div>
      </div>
      <div className="inline-flex items-start justify-end gap-1">
        <div className="inline-flex flex-col items-start justify-center gap-1 rounded-lg px-2 py-1">
          <div className="text-xs font-normal leading-[18px] text-black text-opacity-40">About</div>
        </div>
        <div className="inline-flex flex-col items-start justify-center gap-1 rounded-lg px-2 py-1">
          <div className="text-xs font-normal leading-[18px] text-black text-opacity-40">
            Support
          </div>
        </div>
        <div className="inline-flex flex-col items-start justify-center gap-1 rounded-lg px-2 py-1">
          <div className="text-xs font-normal leading-[18px] text-black text-opacity-40">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
