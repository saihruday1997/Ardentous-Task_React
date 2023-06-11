import Reflux from "reflux";
import ProductListStore, { Actions } from "./ProductListStore";
import { Box, Button } from "@mui/material";

class ProductList extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [ProductListStore];
  }

  componentDidMount() {
    Actions.initStore();
  }

  deleteItem = (id) => {
    Actions.deleteItem(id);
  };

  render() {
    const { products } = this.state;

    console.log(products);
    return (
      <>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
          {products.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.description}</td>
                <td>{val.price}</td>
                <td>
                  <img
                    style={{ height: "28px", width: "28px" }}
                    src={val.thumbnail}
                  />
                </td>
                <td>
                  <Button
                    style={{ textTransform: "none" }}
                    onClick={() => this.deleteItem(val.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}

export default ProductList;
