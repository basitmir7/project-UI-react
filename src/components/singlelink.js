const SingleLink = ({ link }) => {
  return (
    <div className="single-link" onClick={() => console.log("hello")}>
      {link}
    </div>
  );
};

export default SingleLink;
