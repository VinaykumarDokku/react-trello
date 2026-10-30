import React from "react";

const priorityColors = {
  High: "#dc2626",
  Medium: "#d97706",
  Low: "#16a34a",
};

export default function PriorityBadge({ priority = "Low" }) {
  const color = priorityColors[priority] || priorityColors.Low;

  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {priority}
    </span>
  );
}
