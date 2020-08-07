import React from "react";
import { connect } from "react-redux";
import handleProductUpdate from "./actions/index.js"
import updateCurrProduct from "./actions/index.js"

const App = ({currProduct}) => {
  return (
      <div>
        <h1>
          Hello
        </h1>
        <button onClick={(e) => updateProduct(1)}>getproduct</button>
        <h2>{currProduct === null ? 'NA' : currProduct.id}</h2>
      </div>
    );

}

// const mapStateToProps = (state) => {
//   const {currentProduct} = state.currProduct

//   return {currProduct}
// }

const mapStateToProps = (state) => ({
   currProduct: state.currProduct
})

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (product_id) => dispatch(handleProductUpdate(product_id))
});



export default connect(mapStateToProps, mapDispatchToProps)(App);