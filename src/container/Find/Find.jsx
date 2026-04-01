import { about } from "../../constants";

const Find = () => {
  return (
    <div className="find" id="contact">
      <video
        className="find-video"
        src={about}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default Find;
