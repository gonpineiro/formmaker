import { Spinner } from "./index";

const Loading = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col flex-row text-center">
          <Spinner />
        </div>
      </div>
    </div>
  );
};

export default Loading;
