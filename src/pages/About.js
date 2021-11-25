import {Button , OverlayTrigger, Tooltip } from "react-bootstrap";


function About(){

  return (
    <div className="mt-4 text-center">
      <h2>Thank You for Using Speciphone</h2>
      <p>for contact :</p>
      <p>Instagram : Speciphone.id</p>
      <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">Go back to Home!</Tooltip>}
  >
    {({ ref, ...triggerHandler }) => (
      <Button
        variant="dark" href="/"
        {...triggerHandler}
        className="d-inline-flex align-items-center"
      >
        <span className="ms-1">Home</span>
      </Button>
    )}
  </OverlayTrigger>,

    </div>
    
  );
}

export default About;
