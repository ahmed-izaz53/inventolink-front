import {
  CaretRightFilled,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useState } from "react";
import NormalSelect from "../NormalSelect";
import menuData from "@/utils/testData";
const MainLayout = ({ message }: { message: string }) => {
  const [expandOn, setExpandOn] = useState(true);
  const [menuList, setMenuList] = useState([...(menuData || [])]);
  console.log(message);
  return (
    <div className="relative  bg-slate-200  w-full flex justify-between">
      <div
        className={`bg-white h-screen ${
          expandOn ? "w-3/12 pl-2" : "w-0"
        } transition-all duration-1000`}
      >
        <div
          className="flex  justify-between  place-items-start overflow-hidden pr-2  "
          style={{ height: "10%" }}
        >
          {expandOn ? (
            <div className="flex place-items-center w-5/6">
              <div className="w-1/3 h-4/5">
                <img
                  className=" w-full object-cover"
                  src="https://assets.materialup.com/uploads/3ec8a09d-a55c-400d-8dad-827836b116de/preview.jpg"
                  alt="demo"
                />
              </div>
              <Typography.Title level={4} className="w-2/3">
                Company Title
              </Typography.Title>
            </div>
          ) : (
            <></>
          )}

          <div
            className={`${
              expandOn ? "w-1/6" : "w-0"
            } pl-6 transition-all duration-1000 ease-in-out`}
          >
            {expandOn ? (
              <Button
                className=" border-gray-300 relative mt-2 "
                shape="circle"
                icon={
                  <LeftOutlined className=" text-gray-300 absolute bottom-2 right-2" />
                }
                onClick={() => setExpandOn(false)}
              />
            ) : (
              <Button
                className="absolute top-2 left-2 z-50 max-md:hidden duration-1000"
                shape="circle"
                icon={<RightOutlined />}
                onClick={() => setExpandOn(true)}
              />
            )}
          </div>
        </div>
        <div className="overflow-y-auto" style={{ height: "90%" }}>
          {expandOn ? (
            <ul className="overflow-x-hidden">
              {menuList?.map((firstLevelItem, firstLevelIndex) => (
                <>
                  <li
                    key={firstLevelIndex}
                    className="py-1 cursor-pointer"
                    onClick={() => {
                      const modifiedMenuList = menuList.map((menu, subIndex) =>
                        firstLevelIndex === subIndex
                          ? {
                              ...menu,
                              showSubmenu: !menu?.showSubmenu,
                              isActive: !menu?.isActive,
                            }
                          : { ...menu, showSubmenu: false, isActive: false }
                      );
                      setMenuList(modifiedMenuList);
                    }}
                  >
                    <span
                      className={`${
                        firstLevelItem?.isActive
                          ? "text-black"
                          : " text-gray-600"
                      } font-bold`}
                    >
                      {firstLevelItem?.title}
                    </span>
                    {firstLevelItem?.submenu?.length > 0 ? (
                      <>
                        {firstLevelItem?.showSubmenu ? (
                          <>
                            <DownOutlined className="float-right" />
                          </>
                        ) : (
                          <>
                            <RightOutlined className="float-right" />
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </li>
                  {firstLevelItem?.showSubmenu &&
                  firstLevelItem?.submenu?.length > 0 ? (
                    <ul className=" w-11/12 float-right">
                      {firstLevelItem?.submenu?.map(
                        (secondLevelItem, secondLevelIndex) => (
                          <li
                            className="py-1 cursor-pointer flex place-items-center"
                            key={secondLevelIndex}
                          >
                            <CaretRightFilled />
                            <span>{secondLevelItem?.title}</span>
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className={`${
          expandOn ? "w-3/4" : "w-full"
        } h-screen overflow-y-scroll relative transition-all duration-1000 ease-in-out`}
      >
        <div className="w-full p-1 flex justify-end absolute top-0">
          <div>
            <NormalSelect
              width={200}
              showSearch={true}
              allowClear={true}
              placeholder="Select Business Unit"
              options={[{ label: "InventoLink", value: 1 }]}
              onChange={(valueOption) => {
                console.log(valueOption);
              }}
            />
          </div>
        </div>
        <div className="mt-10 mx-2">
          <ul className="overflow-x-hidden">
            {menuList?.map((firstLevelItem, firstLevelIndex) => (
              <>
                <li
                  key={firstLevelIndex}
                  className="py-1 cursor-pointer"
                  onClick={() => {
                    const modifiedMenuList = menuList.map((menu, subIndex) =>
                      firstLevelIndex === subIndex
                        ? {
                            ...menu,
                            showSubmenu: !menu?.showSubmenu,
                            isActive: !menu?.isActive,
                          }
                        : { ...menu, showSubmenu: false, isActive: false }
                    );
                    setMenuList(modifiedMenuList);
                  }}
                >
                  <span
                    className={`${
                      firstLevelItem?.isActive ? "text-black" : " text-gray-600"
                    } font-bold`}
                  >
                    {firstLevelItem?.title}
                  </span>
                  {firstLevelItem?.submenu?.length > 0 ? (
                    <>
                      {firstLevelItem?.showSubmenu ? (
                        <>
                          <DownOutlined className="float-right" />
                        </>
                      ) : (
                        <>
                          <RightOutlined className="float-right" />
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </li>
                {firstLevelItem?.showSubmenu &&
                firstLevelItem?.submenu?.length > 0 ? (
                  <ul className=" w-11/12 float-right">
                    {firstLevelItem?.submenu?.map(
                      (secondLevelItem, secondLevelIndex) => (
                        <li
                          className="py-1 cursor-pointer flex place-items-center"
                          key={secondLevelIndex}
                        >
                          <CaretRightFilled />
                          <span>{secondLevelItem?.title}</span>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <></>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
