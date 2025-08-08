"use client";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
  badge?: string | number;
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  width?: "sm" | "md" | "lg";
  side?: "left" | "right";
  showBackdrop?: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = "Menu",
  width = "md",
  side = "right",
  showBackdrop = true,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen && showBackdrop) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, showBackdrop]);

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const getWidthClass = () => {
    switch (width) {
      case "sm":
        return "w-64";
      case "lg":
        return "w-96";
      default:
        return "w-80";
    }
  };

  const getSideClasses = () => {
    const baseClasses = `fixed top-0 h-full flex flex-col bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${getWidthClass()}`;

    if (side === "left") {
      return `${baseClasses} left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`;
    } else {
      return `${baseClasses} right-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`;
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const paddingLeft = `${(level + 1) * 16}px`;

    return (
      <div key={item.id} className="w-full">
        <button
          aria-label={item.label}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else {
              item.onClick?.();
            }
          }}
          className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors duration-200 text-sm"
          style={{ paddingLeft }}
        >
          <div className="flex items-center space-x-3">
            {item.icon}
            <span>{item.label}</span>
            {item.badge && (
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
          {hasChildren && (
            <div className="transition-transform duration-200">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </button>

        {hasChildren && isExpanded && (
          <div className="bg-gray-50">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {isOpen && showBackdrop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" />
      )}

      <div ref={sidebarRef} className={getSideClasses()}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {items.map((item) => renderMenuItem(item))}
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;
