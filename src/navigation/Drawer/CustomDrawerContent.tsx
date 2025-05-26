import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import LogoutButton from "../../components/LogoutButton";

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  onLogout: () => void;
}

const CustomDrawerContent = (props: CustomDrawerContentProps) => {
  const { onLogout, ...drawerProps } = props;

  return (
    <DrawerContentScrollView {...drawerProps}>
      <DrawerItemList {...drawerProps} />
      <LogoutButton onLogout={onLogout} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
