const TeamMember = ({ img }) => {
  return (
    <div className="service-card-body p-5 pb-10">
      <img
        src={img}
        className=" rounded h-3/4 w-full"
        style={{ width: "100%" }}
      />
      <p className="text-3xl font-bold pt-3">{"Car Engine Plug"}</p>
      <p className="text-xl text-slate-400 pb-3">{"Engine Expert"}</p>

      <div className="social-media flex">
        <img
          className="social-media-logo"
          src="https://i.ibb.co/n0tC58n/linkedIn.png"
          alt=""
        />
        <img
          className="social-media-logo"
          src="https://i.ibb.co/mN21bcC/instagram-Logo-Recent.jpg"
          alt=""
        />
        <img
          className="social-media-logo"
          src="https://i.ibb.co/R2v92Hn/twiiter.png"
          alt=""
        />
        <img
          className="social-media-logo"
          src="https://i.ibb.co/k0kG6GW/facobook-Logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TeamMember;
