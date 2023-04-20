import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";
import "./Search.css";
import Button from "react-bootstrap/Button";


function Search() {
  return (
    <>
      <div className="sign-bg">
        <div className="search-box">
          <h2 className="form-title">Search</h2>

          <Form.Label>City</Form.Label>
          <Form.Select aria-label="Default select example bg-info">
            <option>Select the City</option>
            <option value="1">Monufia</option>
            <option value="2">Cairo</option>
            <option value="3">Alexandria</option>
            <option value="4">Aswan</option>
            <option value="5">Faiyum</option>
            <option value="6">Ismailia</option>
            <option value="7">Matrouh</option>
            <option value="8">Qena</option>
            <option value="9">Suez</option>
            <option value="10">Sohag</option>
          </Form.Select>

          <Form.Label>Search for</Form.Label>
          <Form.Select aria-label="Default select example">
            {/* <option>Open this select menu</option> */}
            <option value="1">Shared Residence</option>
            <option value="2">Co-Working space</option>
          </Form.Select>

          <Form.Label>Accommodation type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Any</option>
            <option value="1">Room</option>
            <option value="2">BHK</option>
            <option value="3">Bedspace</option>
            <option value="4">Studio flat</option>
            <option value="5">Partition</option>
          </Form.Select>
          <Button variant="outline-primary" type="search" href='apartments'>
            <i className="fas fa-search"></i> Search
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Search;
