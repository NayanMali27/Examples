import { Menu } from "antd";
import { useEffect } from "react";


const SidebarCompo = (props: any) => {
  const { categoryData , setSelected, selected } = props;
  useEffect(()=>{
    setSelected({...selected,selectedCategory:categoryData[0]?._id})
  }, [])
  return (
    <div style={{ width: 256 }}>
      <Menu
        mode="inline"
        onClick={(e)=>{
          setSelected({...selected,selectedCategory:e.key})
        }}
        defaultSelectedKeys={[categoryData[0]?._id]}
        style={{ borderRight: 0 }}
        items={categoryData.map((category: any) => {
          return {
            key: category._id,
            label: category.name,
          };
        })}
      />
    </div>
  );
};

export default SidebarCompo;
