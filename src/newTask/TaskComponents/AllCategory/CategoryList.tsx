import React from "react";
import { Card, Col, Row } from "antd";
import "./style.css";


const CategoryList = (props: any) => {
  const { categoriesList, modelRef, setSelected, selected } = props;
  return (
    <>
      {categoriesList &&
        categoriesList.map((Category: any) => {
          return (
            <React.Fragment key={Category._id}>
              <Row gutter={18}>
                {Category.subcategories.map((subcategorie: any) => {
                  return (
                    <React.Fragment key={subcategorie.id}>
                      <>
                        <Col span={6}>
                          <div style={{ marginBottom: "100px" }}>
                            <Card
                                style={{cursor:'pointer'}}
                              className={`${
                                Category._id === selected.selectedCategory
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() => {
                                if (modelRef.current) {
                                  setSelected({
                                    ...selected,
                                    products: subcategorie.products,
                                    selectedSubCategoryName:subcategorie.name
                                  });
                                  modelRef.current.openModal();
                                }
                              }}
                              title={subcategorie.name}
                              bordered={true}
                            >
                              <span
                
                              >
                                Product - {subcategorie?.products[0]?.name}
                              </span>
                            </Card>
                          </div>
                        </Col>
                      </>
                    </React.Fragment>
                  );
                })}
              </Row>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default CategoryList;

