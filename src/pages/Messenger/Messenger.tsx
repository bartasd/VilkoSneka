import MessengerContainer from "./MessengerContainer";

const Messenger = () => {
  return (
    <MessengerContainer>
      <div className="chat-cont">
        <div className="chat">
          {/* // append p messages here
            // users messages shows to the right;
            // other messages shows to the left; */}
          <p className="isUser">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            distinctio.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cumque placeat iste dolor commodi nulla!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            eveniet fugit quibusdam animi sequi!
          </p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <textarea />
      </div>
      <div className="users-cont">
        <div className="users">
          {/* // append online users here;
            // append offline users here;
            // think of how position them; */}
        </div>
        <button type="button">Atsijungti</button>
      </div>
    </MessengerContainer>
  );
};

export default Messenger;
