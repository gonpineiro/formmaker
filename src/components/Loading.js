import { Spinner } from "./index";

const Loading = () => {
  return (
    <div className="container pt-5">
      <div className="row" style={{ paddingTop: "calc(100vh * 0.5 - 100px)" }}>
        <div className="col text-center">
          <Spinner />
        </div>
      </div>
    </div>
  );
};

export default Loading;
