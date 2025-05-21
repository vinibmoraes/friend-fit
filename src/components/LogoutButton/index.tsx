import React from "react";
import { DrawerItem } from "@react-navigation/drawer";

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <DrawerItem label="Sair" onPress={onLogout} labelStyle={{ color: "red" }} />
  );
};

export default LogoutButton;
