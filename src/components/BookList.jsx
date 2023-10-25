// components/BookList.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setBooks, addToCart } from "../features/bookSlice";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react";
bootstrap;

function BookList() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        "https://exampledata.draftbit.com/books?_limit=10"
      );
      dispatch(setBooks(response.data));
    };
    fetchBooks();
  }, [dispatch]);
  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: value,
    });
  };

  const handleAddToCart = (book) => {
    const quantity = quantities[book.id] || 1;
    dispatch(addToCart({ ...book, quantity: Number(quantity) }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book.id}>
            <div className="card mb-4">
              <img
                src={book.image_url}
                className="card-img-top"
                alt={`${book.title}cover`}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Author: {book.authors}</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Quantity</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    value={quantities[book.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(book.id, e.target.value)
                    }
                    min="1"
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(book)}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
