import React from "react";

const Message = ({ isFormValid }) => {
  const userMessage = isFormValid ? "Form is Complete!" : "Form is Incomplete!";
  return (
    <div>
      <h3 className="text-center message">{userMessage}</h3>
    </div>
  );
};

export default Message;
