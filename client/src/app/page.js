"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";

const App = () => {
  const [productList, setProductList] = useState([]);
  const fetchProduct = async () => {
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();
    setProductList(data.productList);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="mx-auto">
        <Image
          className="mx-auto"
          src="/logo4.png"
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
      <ul className="text-align">
        <li>
          <Link href="../login">Login</Link>
        </li>
        <li>
          <Link href="../register">Register</Link>
        </li>
      </ul>
      {productList.length > 0 &&
        productList.map((item, id) => {
          return (
            <div>
              <card
                hoverable
                style={{ width: 240, display: Flex, gap: 5 }}
                cover={<img alt="example" src="" />}
              >
                <Meta title={item.title} description={item.description} />
              </card>
            </div>
          );
        })}
    </>
  );
};

export default App;
